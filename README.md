# Static Personal Portfolio Website

A lightweight static portfolio website built with HTML, CSS, JavaScript, and Tailwind CSS.

## Project Overview

This project is a simple personal portfolio site that showcases skills, projects, hobbies, and contact links. It is a static website only, and does not use React, Firebase, or any backend service.

## What this project includes

- Static HTML pages under `html/`
- Global site styling in `css/`
- JavaScript behavior in `js/main.js`
- Tailwind CSS for utility-first styling
- A local development workflow using `npm` and Live Server

## Project structure

- `index.html` — main landing page
- `html/` — additional site pages and shared layout parts
- `css/` — stylesheet files
- `js/` — JavaScript files
- `images/` — project images and icons
- `tailwind.config.js` — Tailwind CSS content configuration
- `postcss.config.js` — PostCSS configuration for Tailwind

## Setup

### 1. Fork the repository

1. Open the repository on GitHub.
2. Click the `Fork` button in the top-right.
3. Use your forked repository URL for local setup.

### 2. Clone your fork locally

```bash
git clone https://github.com/<your-username>/static-personal-website.git
cd static-personal-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start Tailwind CSS in watch mode

```bash
npm run watch
```

This command builds Tailwind from `css/input.css` into `css/output.css` and keeps watching for changes.

### 5. Preview the site locally

Use a live reload extension such as the VS Code `Live Server` extension.

- Open the project folder in VS Code.
- Right-click `index.html` and choose `Open with Live Server`.
- Edit HTML/CSS/JS files and Live Server will refresh the browser automatically.

If you prefer the command line, you can also use `npx live-server .` after installing `live-server`.

## Tailwind notes

- `tailwind.config.js` is already configured to scan `./html/**/*.html` and `./index.html`.
- Add Tailwind classes in your HTML and let the watcher rebuild `css/output.css`.
- For a one-time build, use:

```bash
npm run build
```

## Important

This project is intentionally static. It does not use React, Firebase, or any backend service. The focus is on a clean static portfolio experience using HTML, CSS, JavaScript, and Tailwind CSS.
