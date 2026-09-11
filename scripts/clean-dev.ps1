# Detiene los procesos Node.js de ESTE proyecto: el servidor de desarrollo y los
# workers de PostCSS que Turbopack deja huérfanos en Windows.
#
# El filtro anterior no encontraba nada. Buscaba 'escuelitas-ruth' con guion,
# mientras la carpeta real es 'escuelitas_ruth-main', y rutas con barra normal
# ('next/dist/server/lib/start-server') cuando en Windows la línea de comandos
# las trae invertidas. El script informaba "no hay procesos activos" con el
# servidor respondiendo. Además 'postcss' a secas alcanzaba a workers de otros
# proyectos, justo lo contrario de lo que prometía el comentario.
#
# Ahora se exigen dos condiciones: que la línea de comandos apunte dentro de
# esta carpeta -resuelta desde la ubicación del propio script, así sigue
# funcionando si el proyecto se renombra o se mueve- y que corresponda a Next o
# a un worker de PostCSS. Las comparaciones normalizan mayúsculas y barras.

$ErrorActionPreference = 'Stop'

$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path.TrimEnd('\')
$rootNeedle = $projectRoot.ToLowerInvariant().Replace('/', '\')
$toolPattern = 'node_modules\\next\\|node_modules\\\.bin\\next|postcss|jest-worker'

function Get-ProjectNodeProcess {
  Get-CimInstance Win32_Process -Filter "Name='node.exe'" -ErrorAction SilentlyContinue | Where-Object {
    $commandLine = $_.CommandLine
    if ([string]::IsNullOrWhiteSpace($commandLine)) {
      $false
    } else {
      $normalized = $commandLine.ToLowerInvariant().Replace('/', '\')
      $normalized.Contains($rootNeedle) -and $normalized -match $toolPattern
    }
  }
}

function Format-Process {
  param($Process)
  $commandLine = [string]$Process.CommandLine
  if ($commandLine.Length -gt 110) {
    $commandLine = $commandLine.Substring(0, 110) + '...'
  }
  "  PID $($Process.ProcessId): $commandLine"
}

$targets = @(Get-ProjectNodeProcess)

if ($targets.Count -eq 0) {
  Write-Host "OK: no hay procesos Node.js de este proyecto activos."
  exit 0
}

Write-Host "Deteniendo $($targets.Count) proceso(s) en $projectRoot"
foreach ($process in $targets) {
  Write-Host (Format-Process -Process $process)
  Stop-Process -Id $process.ProcessId -Force -ErrorAction SilentlyContinue
}

Start-Sleep -Seconds 1
$left = @(Get-ProjectNodeProcess)

if ($left.Count -eq 0) {
  Write-Host "OK: se detuvieron $($targets.Count) proceso(s) (servidor de desarrollo y workers)."
  exit 0
}

# Código de salida distinto de cero: si la limpieza no funcionó, `npm run
# clean:dev` debe notarse. Antes terminaba en 0 incluso al fallar.
Write-Warning "Quedaron $($left.Count) proceso(s); reintenta o cierra las terminales abiertas."
foreach ($process in $left) {
  Write-Warning (Format-Process -Process $process)
}
exit 1
