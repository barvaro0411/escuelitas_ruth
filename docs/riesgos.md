# SIGE Ruth - Riesgos Iniciales

## Objetivo

Identificar riesgos de la Semana 0 para orientar decisiones antes de programar. El proyecto maneja datos de ninos y datos sensibles, por lo que seguridad, permisos, auditoria y offline deben tratarse como temas centrales.

## Riesgos Criticos

### 1. Exposicion de Datos Sensibles

Descripcion:

- Alumnos, apoderados, diagnosticos, evaluaciones e informes contienen informacion sensible.

Impacto:

- Alto. Puede afectar privacidad, confianza y operacion de la escuela.

Mitigacion:

- Usar Supabase Auth.
- Separar `auth.users` de `perfiles_usuario`.
- Habilitar RLS en tablas sensibles.
- Validar acceso por rol, escuela y pertenencia.
- No exponer llaves de servicio en frontend.
- No usar datos reales durante desarrollo.

Pendiente de validar:

- Politicas internas de privacidad de la escuela.
- Quienes pueden ver diagnosticos e informes.

### 2. Permisos Solo en Frontend

Descripcion:

- Ocultar botones o rutas en la UI no protege los datos.

Impacto:

- Alto. Usuarios podrian acceder a informacion no autorizada.

Mitigacion:

- Aplicar permisos en PostgreSQL con RLS.
- Probar politicas por rol.
- Mantener servicios frontend alineados con reglas de base de datos.

Pendiente de validar:

- Matriz de permisos por rol.

### 3. Asistencia Offline Mal Sincronizada

Descripcion:

- La asistencia debe funcionar sin internet, pero puede generar conflictos al sincronizar.

Impacto:

- Alto. Puede afectar registros diarios y reportes.

Mitigacion:

- Usar IndexedDB con Dexie.js.
- Guardar estado de sincronizacion.
- Registrar timestamp local y usuario.
- Disenar estrategia de conflictos.
- Auditar cambios posteriores.

Pendiente de validar:

- Quien puede corregir asistencia.
- Que pasa si dos usuarios registran asistencia del mismo curso.
- Cuanto tiempo puede trabajar la escuela sin conexion.

### 4. Alcance MVP Demasiado Grande

Descripcion:

- Incluir evaluaciones, diagnosticos, sesiones e informes avanzados en la primera version puede retrasar la base operativa.

Impacto:

- Medio/alto. Puede impedir entregar una version util.

Mitigacion:

- MVP enfocado en login, roles, escuela, cursos, alumnos, apoderados, matricula, asistencia, offline, dashboard, Excel y auditoria.
- Dejar clinico/pedagogico avanzado para Version 2.

Pendiente de validar:

- Necesidades minimas imprescindibles para iniciar operacion real.

### 5. Inventar Formatos Oficiales

Descripcion:

- Crear reportes o informes sin validar formatos puede producir documentos inutiles.

Impacto:

- Medio/alto.

Mitigacion:

- No inventar formatos oficiales especificos.
- Levantar formatos actuales con la escuela.
- Crear primero exportaciones simples.

Pendiente de validar:

- Informes actuales.
- Exportaciones obligatorias.
- Campos requeridos.

### 6. Uso de Datos Reales en Desarrollo

Descripcion:

- Usar datos reales de ninos durante pruebas o desarrollo expone informacion sensible.

Impacto:

- Alto.

Mitigacion:

- Usar datos ficticios.
- Evitar nombres, RUT, diagnosticos o documentos reales.
- Revisar seeds, capturas y archivos de prueba.

Pendiente de validar:

- Procedimiento de datos de prueba aceptado por la escuela.

### 7. Falta de Auditoria

Descripcion:

- Sin auditoria no se puede saber quien cambio datos criticos.

Impacto:

- Alto en matricula, asistencia, roles y datos sensibles.

Mitigacion:

- Implementar `audit_log` temprano.
- Registrar usuario, accion, entidad, fecha y metadatos.
- Auditar cambios de asistencia y matricula desde el MVP.

Pendiente de validar:

- Acciones exactas a auditar.
- Retencion de auditoria.

### 8. Compatibilidad PWA en Dispositivos Reales

Descripcion:

- PC, Android e iOS tienen diferencias en instalacion, cache y comportamiento offline.

Impacto:

- Medio.

Mitigacion:

- Probar en dispositivos reales o representativos.
- Validar navegadores usados por la escuela.
- Disenar app shell simple y robusto.

Pendiente de validar:

- Dispositivos disponibles.
- Navegadores usados.
- Calidad de conectividad en la escuela.

### 9. Modelo de Datos Incompleto

Descripcion:

- Si no se levantan bien matricula, cursos, niveles y apoderados, la base puede requerir cambios grandes.

Impacto:

- Medio/alto.

Mitigacion:

- Levantar requerimientos antes de crear migraciones definitivas.
- Usar constraints e indices desde el inicio.
- Diseñar entidades con separacion clara.

Pendiente de validar:

- Campos obligatorios.
- Relaciones alumno-apoderado.
- Estados de matricula.
- Niveles y jornadas.

### 10. Acceso de Apoderados Mal Definido

Descripcion:

- Dar acceso a apoderados implica nuevas reglas de seguridad, permisos y comunicaciones.

Impacto:

- Medio/alto.

Mitigacion:

- No incluir acceso de apoderados en MVP salvo validacion explicita.
- Preparar arquitectura para extender roles.

Pendiente de validar:

- Si apoderados tendran acceso desde la primera version.
- Que informacion podran ver.
- Como se gestionara consentimiento y comunicacion.

## Riesgos Tecnicos

- Dependencia de Supabase y Vercel.
- Manejo incorrecto de variables de entorno.
- Falta de typecheck automatizado.
- Falta de pruebas para RLS.
- Reportes PDF/Excel costosos si se definen tarde.
- Crecimiento de modulos sin arquitectura limpia.

## Riesgos de Producto

- Usuarios con baja tolerancia a interfaces complejas.
- Procesos actuales no documentados.
- Cambios frecuentes en requerimientos.
- Falta de tiempo de la escuela para validar.
- Expectativa de cubrir todos los modulos desde el MVP.

## Prioridades de Mitigacion

1. Validar MVP con la escuela.
2. Definir roles y permisos.
3. Definir datos obligatorios de matricula.
4. Definir reglas de asistencia y offline.
5. Crear estrategia RLS antes del frontend.
6. Crear `audit_log` temprano.
7. Probar PWA en dispositivos reales.

