# PALAYENTI — Sitio web oficial

Sitio web oficial de PALAYENTI, desarrollado con React y Vite. El proyecto reúne bajo una misma identidad dos universos: **PALAYENTI Música** y **PALAYENTI Creador**.

## Tecnologías utilizadas

- **React:** desarrollo de interfaces mediante componentes reutilizables.
- **Vite:** entorno de desarrollo y herramienta de compilación.
- **React Router DOM:** navegación entre las páginas del sitio sin recargar toda la aplicación.
- **Lucide React:** biblioteca de iconos.
- **CSS3:** estilos personalizados, diseño adaptable y recursos visuales.
- **Oxlint:** análisis estático del código.

## Requisitos previos

Antes de instalar el proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (se recomienda una versión LTS compatible con las dependencias).
- npm, incluido con Node.js.
- Git, para clonar el repositorio.

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/vaya-valla-publicidad/palayenti.com.git
```

### 2. Entrar en la carpeta del proyecto

```bash
cd palayenti-web
```

### 3. Instalar las dependencias

```bash
npm install
```

Este comando instala las dependencias declaradas en `package.json` y utiliza `package-lock.json` para resolver sus versiones.

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

Vite mostrará la dirección local donde podrás visualizar el sitio desde el navegador.

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la versión de producción en la carpeta `dist`. |
| `npm run preview` | Permite previsualizar la versión compilada. |
| `npm run lint` | Analiza el código con las reglas configuradas, si el script está definido en `package.json`. |

## Estructura del proyecto

```text
palayenti-web/
├── public/                 # Recursos públicos del sitio
├── src/
│   ├── assets/             # Recursos y tipografías
│   ├── components/
│   │   ├── navbar/         # Navegación principal
│   │   └── footer/         # Pie de página
│   ├── config/             # Configuración compartida
│   ├── pages/              # Páginas principales
│   ├── sections/           # Secciones reutilizables
│   │   ├── cta/
│   │   ├── home/
│   │   ├── historia/
│   │   ├── musica/
│   │   └── creador/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── package.json
├── package-lock.json
└── README.md
```

*La estructura puede variar a medida que se incorporen nuevas páginas y funcionalidades.*

## Páginas del sitio

- **Inicio:** presentación de PALAYENTI y sus dos universos.
- **Mi historia:** identidad, trayectoria y experiencias.
- **Música:** lanzamientos, videoclips, banda y contrataciones.
- **Blog y videos:** contenidos, experiencias y colaboraciones.
- **Galería:** espacio para fotografías y material audiovisual.
- **Contacto:** canal para consultas, propuestas y colaboraciones.

## Consideraciones para el equipo

- Utilizar componentes reutilizables para evitar duplicar código.
- Mantener los estilos de cada sección en sus respectivos archivos CSS.
- Centralizar la configuración compartida cuando corresponda.
- No subir `node_modules` al repositorio.
- Mantener actualizado `package-lock.json` al instalar o modificar dependencias.
- Antes de publicar cambios, comprobar que el proyecto compile correctamente con `npm run build`.

## Autoría

**PALAYENTI** — Música, historias y experiencias. Una voz, muchas formas de expresarse.
