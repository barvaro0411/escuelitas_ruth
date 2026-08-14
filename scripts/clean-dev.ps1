# Mata todos los procesos Node.js del proyecto (dev server y workers postcss.js
# que Turbopack deja huérfanos en Windows). No toca procesos node de otros programas.
$targets = Get-CimInstance Win32_Process -Filter "Name='node.exe'" | Where-Object {
  $_.CommandLine -match 'escuelitas-ruth|next/dist/bin/next|next/dist/server/lib/start-server|postcss'
}

$count = @($targets).Count
if ($count -eq 0) {
  Write-Host "OK: no hay procesos Next.js activos."
  exit 0
}

$targets | ForEach-Object {
  Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
}

Start-Sleep -Seconds 1
$left = @(Get-CimInstance Win32_Process -Filter "Name='node.exe'" -ErrorAction SilentlyContinue | Where-Object {
  $_.CommandLine -match 'escuelitas-ruth|next/dist/bin/next|next/dist/server/lib/start-server|postcss'
}).Count

if ($left -eq 0) {
  Write-Host "OK: se eliminaron $count procesos Next.js (servidores y workers postcss)."
} else {
  Write-Host "ADVERTENCIA: quedaron $left procesos; reintenta o cierra terminales abiertas."
}
