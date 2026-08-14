# SIGE Ruth - Roadmap

## Objetivo

Ordenar el desarrollo de SIGE Ruth por etapas, priorizando documentacion, arquitectura, seguridad, datos sensibles y asistencia offline antes de funcionalidades avanzadas.

## Semana 0 - Documentacion Inicial

Objetivo: preparar la base funcional y tecnica antes de programar.

Entregables:

- Requerimientos iniciales.
- Roadmap.
- Mapa de modulos.
- Riesgos iniciales.
- Preguntas para levantar requerimientos con la escuela.

Criterio de cierre:

- La escuela debe poder revisar el alcance del MVP.
- Deben estar marcadas las decisiones pendientes de validacion.
- No se debe haber creado codigo de aplicacion.

## Semana 1 - Arquitectura y Modelo Base

Objetivo: definir arquitectura inicial y modelo de datos base.

Entregables esperados:

- Arquitectura de carpetas.
- Modelo inicial de base de datos.
- Definicion de roles y permisos preliminares.
- Estrategia de RLS.
- Estrategia de auditoria.
- Estrategia offline para asistencia.

Pendiente de validar con la escuela:

- Roles reales.
- Flujo de matricula.
- Campos obligatorios.
- Reglas de asistencia.

## Semana 2 - Base de Datos y Seguridad

Objetivo: crear migraciones y politicas iniciales.

Entregables esperados:

- Tablas base: escuela, perfiles, roles, ano escolar, cursos, alumnos, apoderados, matriculas, asistencia y audit_log.
- Politicas RLS iniciales.
- Indices y constraints basicos.
- Datos de prueba ficticios, nunca datos reales de ninos.

Riesgo principal:

- Implementar frontend antes de asegurar permisos reales en base de datos.

## Semana 3 - Proyecto Web y Autenticacion

Objetivo: iniciar la app Next.js y login.

Entregables esperados:

- Estructura `apps/web`.
- Configuracion Supabase client/server.
- Login con Supabase Auth.
- Proteccion de rutas.
- Perfil de usuario.
- Layout base responsive.

## Semana 4 - Escuela, Cursos y Usuarios

Objetivo: permitir configuracion administrativa basica.

Entregables esperados:

- Configuracion de escuela.
- Ano escolar activo.
- Cursos, niveles y jornadas.
- Usuarios y roles basicos.
- Auditoria de cambios administrativos.

## Semana 5 - Alumnos, Apoderados y Matricula

Objetivo: construir el flujo base de matricula.

Entregables esperados:

- CRUD de alumnos.
- CRUD de apoderados.
- Vinculacion alumno-apoderado.
- Registro de matricula.
- Estados de matricula.
- Exportacion basica si aplica.

Pendiente de validar con la escuela:

- Documentos exigidos.
- Campos obligatorios.
- Estados y reglas de matricula.

## Semana 6 - Asistencia Online

Objetivo: registrar asistencia diaria conectada.

Entregables esperados:

- Lista de curso.
- Registro de asistencia diaria.
- Edicion controlada.
- Auditoria de cambios.
- Indicadores basicos de asistencia.

## Semana 7 - Asistencia Offline

Objetivo: permitir asistencia sin conexion.

Entregables esperados:

- IndexedDB con Dexie.js.
- Cola de cambios locales.
- Sincronizacion manual o automatica.
- Estados de sincronizacion.
- Manejo inicial de conflictos.

Pendiente de validar con la escuela:

- Que datos deben estar disponibles offline.
- Quien puede corregir asistencia.
- Cuanto tiempo puede operar sin conexion.

## Semana 8 - Dashboard y Reportes MVP

Objetivo: cerrar funcionalidades administrativas basicas.

Entregables esperados:

- Dashboard basico.
- Exportacion Excel basica.
- Auditoria visible para administracion.
- Revisión responsive PC, Android e iOS.

## Semana 9 - PWA y Estabilizacion MVP

Objetivo: preparar una version instalable y probada.

Entregables esperados:

- Manifest.
- Service worker.
- App shell.
- Pruebas de instalacion.
- Pruebas de asistencia offline.
- Correccion de errores MVP.

## Version 2

Objetivo: agregar funciones clinicas, pedagogicas y comunicacionales sobre una base segura.

Incluye:

- Evaluaciones.
- Diagnosticos.
- Sesiones de terapia.
- Objetivos de intervencion.
- Informes PDF avanzados.
- Comunicaciones a apoderados.
- Notificaciones push.
- Firma de documentos.
- Panel multi-escuela.
- Analitica avanzada.

## Decisiones Pendientes

- Calendario real de desarrollo.
- Alcance exacto del MVP.
- Roles y permisos finales.
- Datos obligatorios de matricula.
- Reportes obligatorios.
- Formatos de informes existentes.
- Nivel de acceso de apoderados.
- Alcance offline mas alla de asistencia.

