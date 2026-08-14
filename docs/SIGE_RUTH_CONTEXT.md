# SIGE Ruth - Contexto del Proyecto PWA

## 1. Objetivo General

Crear una aplicacion PWA profesional para una Escuela de Lenguaje en Chile, capaz de funcionar en PC, Android e iOS. El sistema debe permitir gestionar informacion escolar, matricula, alumnos, apoderados, asistencia, evaluaciones, diagnosticos fonoaudiologicos, sesiones de terapia, informes, comunicaciones y notificaciones.

La aplicacion debe estar pensada para uso real en una escuela, con buena seguridad, estructura de base de datos solida, funcionamiento offline para asistencia y diseno responsive.

## 2. Stack Tecnologico Propuesto

- Frontend: Next.js con App Router
- Lenguaje: TypeScript
- Diseno: Tailwind CSS y shadcn/ui
- Base de datos: PostgreSQL en Supabase
- Autenticacion: Supabase Auth
- Seguridad: Row Level Security
- Archivos: Supabase Storage
- PWA: manifest, service worker y app shell
- Offline: IndexedDB con Dexie.js
- Formularios: React Hook Form y Zod
- Reportes: PDF y Excel
- Deploy: Vercel y Supabase

## 3. Modulos Principales

1. Administracion
2. Usuarios y roles
3. Escuela
4. Ano escolar
5. Cursos, niveles y jornadas
6. Alumnos
7. Apoderados
8. Matricula
9. Asistencia
10. Evaluaciones
11. Diagnosticos
12. Planes de intervencion
13. Sesiones de terapia
14. Informes PDF y Excel
15. Comunicaciones
16. Citaciones
17. Notificaciones
18. Auditoria
19. Configuracion PWA
20. Sincronizacion offline

## 4. MVP Inicial

La primera version debe incluir:

- Login
- Roles basicos
- Configuracion de escuela
- Ano escolar
- Cursos
- Alumnos
- Apoderados
- Matricula
- Asistencia online
- Asistencia offline
- Dashboard basico
- Exportacion Excel
- PWA instalable
- Auditoria basica

## 5. Version 2

Despues del MVP se desarrollaran:

- Evaluaciones
- Diagnosticos
- Sesiones de terapia
- Objetivos de intervencion
- Informes PDF avanzados
- Comunicaciones a apoderados
- Notificaciones push
- Firma de documentos
- Panel multi-escuela
- Analitica avanzada

## 6. Reglas Criticas del Proyecto

- No guardar contrasenas manualmente.
- Usar Supabase Auth.
- Separar usuarios de perfiles.
- Usar Row Level Security.
- No depender solo del frontend para permisos.
- No usar datos reales de ninos durante desarrollo.
- Proteger diagnosticos, evaluaciones e informes.
- Registrar auditoria en acciones criticas.
- La asistencia debe funcionar offline.
- La aplicacion debe probarse en Android, iOS y PC.
- El sistema debe ser responsive y simple de usar.

## 7. Prioridad de Desarrollo

El orden correcto sera:

1. Documentacion
2. Arquitectura
3. Base de datos
4. Seguridad y roles
5. Proyecto Next.js
6. Escuela y cursos
7. Alumnos y apoderados
8. Matricula
9. Asistencia
10. Offline
11. Dashboard
12. Reportes
13. Evaluaciones
14. Diagnosticos
15. Terapias
16. Informes
17. Comunicaciones
18. PWA final
19. Pruebas
20. Deploy

## 8. Preguntas Pendientes

- Cuantos alumnos tendra la escuela?
- Cuantos cursos existen por jornada?
- Que niveles atiende la escuela?
- Que informes usan actualmente?
- Que datos se registran en matricula?
- Que documentos exige la escuela?
- Que profesionales usaran el sistema?
- Los apoderados tendran acceso desde la primera version?
- Que datos deben funcionar offline?
- Que exportaciones son obligatorias?

