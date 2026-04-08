# kartikeymishr.github.io

Personal resume and portfolio website built with React 18 and Sanity CMS, live at [www.kartikeymishr.com](https://www.kartikeymishr.com).

## Architecture

```
Browser
  │
  ├── Navbar ──────────────────────── Download CV link
  ├── Header (#home) ─────────────── Typewriter tagline + tech icons
  ├── About (#about) ──────────────── Bio section
  ├── Experience (#experience) ────── Skills + work timeline (fetched from Sanity)
  ├── Contact (#contact) ──────────── Email/phone cards + contact form → Sanity
  │
  └── Shared wrappers
        ├── AppWrap ── social links rail + navigation dots + copyright
        └── MotionWrap ── Framer Motion scroll-in animations
```

Content for the Experience section and contact form submissions are managed through [Sanity CMS](https://www.sanity.io/).

## Tech Stack

- **React 18** (Create React App)
- **SCSS** (custom BEM-like classes, no CSS framework)
- **Framer Motion** for animations
- **Sanity** headless CMS
- **react-icons**, **react-simple-typewriter**

## Prerequisites

- **Node 18+** and **npm** (for local development)
- **Docker** and **Docker Compose** (optional, recommended)

## Environment Setup

Create a `.env` file in the project root:

```
REACT_APP_SANITY_PROJECT_ID=<your-sanity-project-id>
REACT_APP_SANITY_TOKEN=<your-sanity-token>
```

Get these values from [sanity.io/manage](https://sanity.io/manage) under your project's API settings.

## Quick Start

### Option A: npm

```bash
make install   # npm install
make dev       # starts dev server on http://localhost:3000
```

### Option B: Docker Compose

```bash
make docker-dev    # dev server on http://localhost:3000 (hot-reload enabled)
make docker-prod   # production build served on http://localhost:8080
make docker-down   # tear down containers
```

## Project Structure

```
├── public/              Static HTML shell
├── src/
│   ├── assets/          Images, logos, CV PDF
│   ├── components/      Navbar, NavigationDots, SocialMedia
│   ├── constants/       Image imports, navigation link definitions
│   ├── container/       Page sections (Header, About, Skills, Footer, …)
│   ├── wrapper/         AppWrap & MotionWrap HOCs
│   ├── client.js        Sanity client configuration
│   ├── App.js           Root component (composes all sections)
│   ├── App.scss         Shared layout styles
│   └── index.js         Entry point
├── Dockerfile           Multi-stage build (Node → Nginx)
├── docker-compose.yml   Dev & prod profiles
├── Makefile             Developer commands
└── .env                 Environment variables (not committed)
```

## Make Targets

| Target             | Description                                   |
|--------------------|-----------------------------------------------|
| `make install`     | Install npm dependencies                      |
| `make dev`         | Start local dev server (`npm start`)          |
| `make build`       | Create production build (`npm run build`)     |
| `make docker-dev`  | Dev server via Docker Compose (port 3000)     |
| `make docker-prod` | Production build via Docker Compose (port 8080)|
| `make docker-down` | Stop and remove Docker containers             |
| `make clean`       | Remove `node_modules/` and `build/`           |
| `make help`        | Show all available targets                    |
