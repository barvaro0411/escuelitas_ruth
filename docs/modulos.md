# SIGE Ruth - Modulos del Sistema

## Objetivo

Definir los modulos funcionales de SIGE Ruth, separando lo necesario para el MVP de lo que queda para Version 2. Este documento no define formatos oficiales especificos; todo formato debe validarse con la escuela.

## Modulos MVP

### 1. Autenticacion

Proposito:

- Permitir ingreso seguro al sistema.

Incluye:

- Login con Supabase Auth.
- Logout.
- Sesion de usuario.
- Proteccion de rutas.

No incluye:

- Gestion manual de contrasenas en tablas propias.

Pendiente de validar:

- Metodo de alta de usuarios.
- Recuperacion de acceso.

### 2. Usuarios y Roles

Proposito:

- Controlar acceso segun responsabilidad dentro de la escuela.

Incluye:

- Perfil de usuario separado de `auth.users`.
- Roles basicos.
- Permisos aplicados con RLS.

Pendiente de validar:

- Roles reales.
- Permisos por rol.
- Usuarios externos o apoderados en MVP.

### 3. Escuela

Proposito:

- Configurar datos institucionales base.

Incluye:

- Datos generales de la escuela.
- Configuracion inicial.

Pendiente de validar:

- Datos obligatorios.
- Datos que deben aparecer en reportes.

### 4. Ano Escolar

Proposito:

- Organizar cursos, matriculas y asistencia por periodo escolar.

Incluye:

- Ano escolar activo.
- Estado del ano escolar.

Pendiente de validar:

- Fechas relevantes.
- Manejo de cierre de ano.

### 5. Cursos, Niveles y Jornadas

Proposito:

- Organizar alumnos por curso, nivel y jornada.

Incluye:

- Creacion de cursos.
- Asociacion a ano escolar.
- Nivel y jornada.

Pendiente de validar:

- Niveles atendidos.
- Jornadas reales.
- Cupos por curso.

### 6. Alumnos

Proposito:

- Registrar informacion base de los estudiantes.

Incluye:

- Ficha basica.
- Estado del alumno.
- Asociacion con matricula.

Pendiente de validar:

- Campos obligatorios.
- Documentos asociados.
- Reglas de privacidad.

### 7. Apoderados

Proposito:

- Registrar adultos responsables y contactos.

Incluye:

- Datos de contacto.
- Vinculacion con alumnos.

Pendiente de validar:

- Cantidad de apoderados por alumno.
- Contactos de emergencia.
- Permisos de retiro o comunicacion.

### 8. Matricula

Proposito:

- Registrar la incorporacion de un alumno a un ano escolar y curso.

Incluye:

- Matricula por ano escolar.
- Curso asignado.
- Estado de matricula.

Pendiente de validar:

- Flujo real de matricula.
- Estados.
- Documentos exigidos.
- Exportaciones necesarias.

### 9. Asistencia Online

Proposito:

- Registrar asistencia diaria cuando existe conexion.

Incluye:

- Lista por curso.
- Registro diario.
- Edicion controlada.
- Auditoria de cambios.

Pendiente de validar:

- Categorias de asistencia.
- Horarios y responsables.
- Reglas de correccion.

### 10. Asistencia Offline

Proposito:

- Permitir registrar asistencia sin internet.

Incluye:

- Almacenamiento local en IndexedDB.
- Estado de sincronizacion.
- Sincronizacion posterior.
- Manejo inicial de conflictos.

Pendiente de validar:

- Datos minimos offline.
- Tiempo maximo esperado sin conexion.
- Flujo de correccion si dos usuarios editan lo mismo.

### 11. Dashboard Basico

Proposito:

- Mostrar informacion resumida para gestion.

Incluye:

- Indicadores de matricula.
- Indicadores de asistencia.
- Accesos rapidos.

Pendiente de validar:

- Indicadores prioritarios para direccion.

### 12. Reportes Excel Basicos

Proposito:

- Exportar informacion administrativa inicial.

Incluye:

- Exportacion Excel simple.

No incluye:

- Formatos oficiales no validados.

Pendiente de validar:

- Exportaciones obligatorias.
- Estructura de columnas.

### 13. Auditoria

Proposito:

- Registrar acciones criticas para trazabilidad.

Incluye:

- Registro en `audit_log`.
- Usuario, accion, entidad, fecha y metadatos relevantes.

Pendiente de validar:

- Acciones criticas adicionales.
- Quien puede ver auditoria.

### 14. PWA

Proposito:

- Permitir instalacion y uso multiplataforma.

Incluye:

- Manifest.
- Service worker.
- App shell.
- Pruebas en PC, Android e iOS.

Pendiente de validar:

- Dispositivos reales de la escuela.
- Navegadores usados.

## Modulos Version 2

### Evaluaciones

- Registro de evaluaciones pedagogicas o de lenguaje.
- Pendiente de validar: tipos, escalas, responsables y formatos.

### Diagnosticos Fonoaudiologicos

- Registro de diagnosticos y antecedentes clinicos relevantes.
- Pendiente de validar: campos, permisos y nivel de confidencialidad.

### Objetivos de Intervencion

- Definicion y seguimiento de objetivos por alumno.
- Pendiente de validar: estructura de objetivos y frecuencia de revision.

### Sesiones de Terapia

- Registro de sesiones, observaciones y avances.
- Pendiente de validar: flujo real de trabajo de la fonoaudiologa.

### Informes PDF Avanzados

- Generacion de informes estructurados.
- Pendiente de validar: formatos actuales usados por la escuela.

### Comunicaciones

- Comunicaciones internas y hacia apoderados.
- Pendiente de validar: canales, autorizaciones y trazabilidad.

### Notificaciones Push

- Alertas desde la PWA.
- Pendiente de validar: casos de uso, consentimiento y dispositivos.

### Firma de Documentos

- Firma o aceptacion de documentos.
- Pendiente de validar: validez requerida y flujo administrativo.

### Panel Multi-Escuela

- Administracion de mas de una escuela.
- Pendiente de validar: necesidad real y separacion de datos.

### Analitica Avanzada

- Indicadores historicos y reportes analiticos.
- Pendiente de validar: metricas relevantes.

