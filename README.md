# Academia de Comisionamiento & English Master

Curso interactivo y autocontenido de **comisionamiento industrial** e **inglés técnico de campo**, orientado a preparar un puesto de *Commissioning Engineer* en proyectos EPC internacionales (refino, petroquímica, gas y fertilizantes).

Funciona como aplicación web instalable: se abre desde la pantalla de inicio del teléfono y **opera sin conexión a internet**.

---

## Contenido

| Elemento | Cantidad |
|---|---:|
| Módulos técnicos | 19 |
| Secciones de teoría | 123 |
| Escenarios de falla de campo | 136 |
| Preguntas de entrevista técnica (EN) | 101 |
| Términos de slang por módulo | 197 |
| Vocabulario global con repaso espaciado | 111 |
| Casos de campo ramificados | 6 |
| Diagramas SVG interactivos | 8 |
| Fragmentos indexados en el buscador | 748 |

### Ruta de módulos

- **0A** Fundamentos de Ingeniería Aplicados *(refresco: presión, Bernoulli, calor, materiales, vibración)*
- **00** Fundamentos del Comisionamiento
- **01** Bombas Centrífugas y Sellado API
- **02** Alineación Eje-Eje y Soft Foot
- **03** Compresores y Control Anti-Surge
- **04** Potencia, Pre-Comisionamiento y LOTO
- **05** Lectura Avanzada de P&IDs
- **06** Válvulas de Control y Seguridad (PSV)
- **07** Instrumentación de Campo y Lazos
- **08** Sistemas Eléctricos de Potencia
- **09** DCS/PLC, HAZOP y Sistemas de Seguridad
- **10** Preséntate en Inglés (Entrevista Personal)
- **11** Pruebas de Presión: Hidrostática y Neumática
- **12** Limpieza de Sistemas y Oil Flushing
- **13** Preservación de Equipos
- **14** Bridas, Apernado y Joint Integrity
- **15** Intercambiadores, Aerorefrigerantes y Hornos
- **16** Completions Management y Reporting
- **17** Entrevista para EPC Internacional

---

## Funcionalidades

- **Continuidad total** — recuerda módulo, pestaña y posición exacta de scroll. Al volver, retomas donde quedaste.
- **Marcado automático de lectura** — las secciones se marcan como leídas al tenerlas en pantalla.
- **Progreso ponderado** — 50% teoría leída + 30% mejor nota de quiz + 20% práctica oral.
- **Plan de estudio** — reparte todo el curso en jornadas según tus minutos diarios y tu fecha objetivo.
- **Repaso espaciado (Leitner, 5 cajas)** — la app decide qué vocabulario te toca repasar cada día.
- **Repasar mis errores** — cada pregunta fallada vuelve hasta que la aciertes.
- **Casos de campo ramificados** — decisiones bajo presión con consecuencias técnicas explicadas.
- **Calculadoras** — NPSHa, presión de prueba hidrostática, ISO 10816, leyes de afinidad, potencia de eje y conversor de unidades.
- **Diagramas interactivos** — curva bomba/sistema y NPSH, desalineación y soft foot, mapa de surge, escalera de presiones de PSV, lazo 4-20 mA, unifilar, capas de protección e hitos.
- **Simulador oral** — reconocimiento de voz para practicar respuestas en inglés y compararlas con la respuesta modelo.
- **Escucha diaria** — audio bilingüe generado del curso completo, con racha.
- **Buscador global** — `Ctrl+K`.

---

## Uso

Abre la URL de GitHub Pages del repositorio. Nada más.

### Instalarla como app

- **Android / Chrome:** aparece un aviso de instalación a los pocos segundos. También desde el menú ⋮ → *Instalar aplicación*.
- **iPhone / Safari:** botón Compartir → *Añadir a pantalla de inicio*.
- **Escritorio / Chrome o Edge:** icono de instalación en la barra de direcciones.

Una vez instalada funciona **sin internet**.

### Compatibilidad

Todo funciona en cualquier navegador moderno. Dos funciones dependen de APIs del navegador:

- **Escucha Diaria** (`speechSynthesis`) — funciona en Chrome, Edge y Safari.
- **Simulador Oral** (`webkitSpeechRecognition`) — funciona en Chrome y Edge. No está disponible en Firefox ni en Safari de iOS.

---

## Tu progreso

Se guarda en `localStorage`, es decir **en el dispositivo y navegador donde estudias**. No viaja a ningún servidor: nada de lo que haces sale de tu equipo.

Como consecuencia, el PC y el teléfono llevan progresos separados. Para unificarlos:

1. En Inicio → **Exportar progreso** (descarga un `.json`).
2. Guárdalo en OneDrive o envíatelo.
3. En el otro dispositivo, Inicio → **Importar respaldo**.

Conviene exportar cada cierto tiempo como respaldo.

---

## Actualizar el contenido

1. Reemplaza `index.html` en el repositorio.
2. Sube el número de `CACHE_VERSION` en `sw.js` (por ejemplo `aca-v1` → `aca-v2`).

El paso 2 es lo que hace que los dispositivos que ya tienen la app instalada detecten la versión nueva y ofrezcan actualizar. Sin ese cambio seguirán mostrando la versión guardada.

---

## Estructura

```
index.html               Toda la Academia (autocontenida, sin dependencias externas)
manifest.webmanifest     Metadatos de la app instalable
sw.js                    Service worker: funcionamiento sin internet
icon-192.png             Icono de app
icon-512.png             Icono de app (alta resolución y maskable)
apple-touch-icon.png     Icono para iOS
.nojekyll                Evita que GitHub Pages procese el sitio con Jekyll
```

Sin dependencias, sin CDN, sin compilación. Un archivo HTML y su capa de app.
