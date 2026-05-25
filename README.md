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
- `tailwind.config.js` — Tailwind CSS content configuration (Not used actively as Tailwind 4.3 takes the CSS file as the primary source of all information)

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

## How to host the personal blog website

Choose one of the two options below depending on whether you want to use GitHub's default domain or your own custom domain name.

---

### Option 1: Host directly through GitHub Pages (No Custom Domain)

If you do not own a custom domain, you can host your static website completely free of charge on GitHub's native `github.io` domain.

1. **Open Repository Settings:** Navigate to your GitHub repository (`https://github.com/<your-username>/<your-repo-name>`) and click on the **Settings** tab.
2. **Configure Pages:** On the left sidebar, locate the **Code and automation** section and click on **Pages**.
3. **Select Source & Branch:**
    - Under **Build and deployment**, select `Deploy from a branch` as the source.
    - Under **Branch**, select `main` (or whichever production-ready branch contains your compiled static files) and set the folder path to `/ (root)`. Click **Save**.
4. **Access Your Website:** Your site will be safely built and published at `https://<your-username>.github.io/<your-repo-name>/` within a few minutes.

---

### Option 2: Host on a Personally Owned Domain (via GoDaddy/Other Registrars)

If you purchased a custom domain name but didn't buy an extra SSL certificate, you can link it directly to GitHub Pages. GitHub will automatically handle secure HTTPS/SSL protection for you at no additional cost.

#### Step 1: Configure DNS Records with Your Domain Provider

Log into your domain provider's dashboard (such as GoDaddy), locate the **DNS Management** or **Zone Editor** for your domain (`<your-domain.com>`), and configure the records exactly as shown below.

> ⚠️ **Important:** Locate and delete any existing **A Records** mapped to the `@` hostname before adding the new GitHub ones.

| Type      | Name  | Value (Target)              | TTL              | Purpose                   |
| :-------- | :---- | :-------------------------- | :--------------- | :------------------------ |
| **A**     | `@`   | `185.199.108.153`           | 1 Hour / Default | GitHub Server IP 1        |
| **A**     | `@`   | `185.199.109.153`           | 1 Hour / Default | GitHub Server IP 2        |
| **A**     | `@`   | `185.199.110.153`           | 1 Hour / Default | GitHub Server IP 3        |
| **A**     | `@`   | `185.199.111.153`           | 1 Hour / Default | GitHub Server IP 4        |
| **CNAME** | `www` | `<your-username>.github.io` | 1 Hour / Default | Maps your `www` subdomain |

#### Step 2: Configure Your GitHub Repository

1. In your GitHub repository, go to **Settings** > **Pages**.
2. Scroll down to the **Custom domain** section, enter your apex domain (`<your-domain.com>`), and click **Save**. (This automatically commits a `CNAME` file to the root of your repository).
3. Allow 5 to 30 minutes (up to 24 hours in some cases, refer to your domain provider's documentation) for global DNS propagation. Refresh the settings page and check the box to **Enforce HTTPS** to secure traffic to your domain.

---

### 📌 Note on Alternate Hosting Scenarios

- **Hosting on a Subdomain:** If you prefer to host your blog on a dedicated subdomain (like `blog.<your-domain.com>`), you can skip the four **A Records** completely and only create a single **CNAME** record pointing your specific subdomain name directly to `<your-username>.github.io`.
- **Alternate DNS Providers:** If your domain is registered through platforms like Namecheap, Cloudflare, or Route 53, the underlying record logic is identical; refer to your specific provider's documentation on "Advanced DNS Zone Files" to apply the mappings.
- **Deploying Fullstack Apps or Server Code:** GitHub Pages only hosts **static files** (HTML, CSS, JS, or built React bundles). If you extend your blog to use a backend server (Node.js/Express) or a live database, refer instead to specialized cloud deployment guides for platforms like **Vercel**, **Render**, **Railway**, or **Heroku**.

## References

- For Icons: [https://heroicons.com/outline](heroicons)
