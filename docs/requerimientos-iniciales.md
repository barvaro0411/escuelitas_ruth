# SIGE Ruth - Requerimientos Iniciales

## Objetivo

Definir los requerimientos base para iniciar SIGE Ruth sin programar todavia. Este documento sirve como punto de partida para levantar informacion con la directora, educadoras y fonoaudiologa.

SIGE Ruth sera una PWA para una Escuela de Lenguaje en Chile. Debe funcionar en PC, Android e iOS, con foco en seguridad, facilidad de uso, trazabilidad y asistencia offline.

## Alcance General

El sistema debe permitir gestionar:

- Escuela y configuracion institucional.
- Usuarios, perfiles y roles.
- Ano escolar.
- Cursos, niveles y jornadas.
- Alumnos.
- Apoderados.
- Matricula.
- Asistencia online y offline.
- Evaluaciones.
- Diagnosticos fonoaudiologicos.
- Sesiones de terapia.
- Objetivos de intervencion.
- Informes PDF y Excel.
- Comunicaciones.
- Notificaciones.
- Auditoria de acciones criticas.

## MVP Inicial

La primera version debe enfocarse en operar la base administrativa y asistencia.

Incluye:

1. Login con Supabase Auth.
2. Roles basicos.
3. Configuracion de escuela.
4. Ano escolar.
5. Cursos, niveles y jornadas.
6. Registro de alumnos.
7. Registro de apoderados.
8. Matricula de alumnos.
9. Asistencia online.
10. Asistencia offline con sincronizacion.
11. Dashboard basico.
12. Exportacion Excel basica.
13. PWA instalable.
14. Auditoria basica.

## Version 2

Quedan fuera del MVP inicial:

- Evaluaciones pedagogicas o de lenguaje.
- Diagnosticos fonoaudiologicos completos.
- Sesiones de terapia.
- Objetivos de intervencion.
- Informes PDF avanzados.
- Comunicaciones a apoderados.
- Notificaciones push.
- Firma de documentos.
- Panel multi-escuela.
- Analitica avanzada.

## Requerimientos Funcionales Iniciales

### Autenticacion y Usuarios

- El sistema debe autenticar usuarios con Supabase Auth.
- El sistema debe separar usuarios de autenticacion (`auth.users`) de perfiles internos (`perfiles_usuario`).
- El sistema debe manejar roles basicos para limitar acceso.
- Pendiente de validar con la escuela: roles exactos requeridos y permisos por rol.

### Escuela y Ano Escolar

- El sistema debe registrar datos basicos de la escuela.
- El sistema debe permitir configurar el ano escolar activo.
- Pendiente de validar con la escuela: datos institucionales obligatorios.

### Cursos, Niveles y Jornadas

- El sistema debe permitir crear cursos asociados a nivel, jornada y ano escolar.
- Pendiente de validar con la escuela: niveles atendidos, cantidad de cursos por jornada y nombres reales usados internamente.

### Alumnos

- El sistema debe permitir registrar alumnos con datos de identificacion y datos escolares basicos.
- No se deben usar datos reales de ninos durante desarrollo.
- Pendiente de validar con la escuela: campos obligatorios de ficha del alumno.

### Apoderados

- El sistema debe permitir registrar apoderados vinculados a alumnos.
- Pendiente de validar con la escuela: cantidad de apoderados por alumno, datos obligatorios y contactos de emergencia.

### Matricula

- El sistema debe registrar matricula de un alumno en un ano escolar y curso.
- Pendiente de validar con la escuela: estados de matricula, documentos requeridos y flujo real de matricula.

### Asistencia

- El sistema debe permitir registrar asistencia diaria por curso.
- La asistencia debe funcionar sin conexion y sincronizar cuando vuelva internet.
- Pendiente de validar con la escuela: categorias de asistencia, responsables de registro y reglas de correccion.

### Dashboard

- El sistema debe mostrar indicadores basicos para administracion escolar.
- Pendiente de validar con la escuela: indicadores prioritarios.

### Reportes

- El MVP debe permitir exportacion Excel basica.
- No se deben inventar formatos oficiales especificos.
- Pendiente de validar con la escuela: reportes obligatorios y formatos actuales.

### Auditoria

- El sistema debe registrar acciones criticas en `audit_log`.
- Acciones criticas iniciales: login relevante si aplica, cambios de matricula, cambios de alumno, cambios de asistencia y cambios de roles.
- Pendiente de validar con la escuela: acciones adicionales que requieren trazabilidad.

## Requerimientos No Funcionales

- La app debe ser responsive.
- La app debe poder instalarse como PWA.
- La app debe funcionar en PC, Android e iOS.
- El acceso a datos debe estar protegido con RLS.
- Los permisos no deben depender solo del frontend.
- Los datos sensibles deben tener controles de acceso estrictos.
- La sincronizacion offline debe ser tolerante a fallos.
- Todo codigo futuro debe estar tipado con TypeScript.

## Datos Sensibles

Se consideran sensibles:

- Datos personales de alumnos.
- Datos de apoderados.
- Matricula.
- Asistencia.
- Evaluaciones.
- Diagnosticos fonoaudiologicos.
- Informes.
- Sesiones de terapia.
- Comunicaciones internas que incluyan informacion personal.

## Preguntas Para Levantamiento

### Directora

- Cuantos alumnos tendra la escuela durante el primer ano de uso?
- Cuantos cursos existen por jornada?
- Que niveles atiende la escuela?
- Que roles de usuario se necesitan?
- Que datos institucionales deben aparecer en reportes?
- Que procesos actuales generan mas carga administrativa?
- Que reportes o exportaciones son obligatorios?
- Que documentos exige la escuela en matricula?
- Que acciones deben quedar auditadas?
- Los apoderados tendran acceso en el MVP o en una version posterior?

### Educadoras

- Como registran asistencia actualmente?
- Que categorias de asistencia usan?
- Que datos necesitan ver al pasar asistencia?
- Que correcciones de asistencia son habituales?
- Que informacion del alumno necesitan consultar en clase?
- Que exportaciones usan durante el ano?
- Que debe funcionar sin internet en la sala?

### Fonoaudiologa

- Que informacion necesita registrar por alumno?
- Que datos de diagnostico son obligatorios?
- Que objetivos de intervencion se registran actualmente?
- Como se documentan las sesiones?
- Que informes se emiten y con que frecuencia?
- Que datos deben considerarse especialmente sensibles?
- Que informacion puede ver una educadora y que debe quedar restringida?

## Pendientes de Validacion

- Roles exactos.
- Permisos por rol.
- Campos obligatorios de alumno, apoderado y matricula.
- Estados de matricula.
- Categorias de asistencia.
- Reportes obligatorios.
- Formatos actuales de informes.
- Datos que deben estar disponibles offline.
- Politica de acceso para apoderados.
- Reglas internas de auditoria.

