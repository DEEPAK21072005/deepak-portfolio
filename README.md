# Deepak Polisetti Portfolio

A production-ready personal portfolio for **Deepak Polisetti** (AI & Data Analytics), built with React and Vite, and deployed on Render.

## Live Website

- https://deepak-polisetti.onrender.com/

## Tech Stack

- React 19
- Vite
- Framer Motion
- Three.js
- Chart.js
- Express (local API simulation for contact flow)

## Key Features

- Modern, responsive single-page portfolio
- Recruiter-focused sections (experience, projects, skills, certifications)
- Interactive animations and visual effects
- Contact workflow with multi-channel fallback strategy
- Render static-site deployment configuration in [render.yaml](C:/Users/polis/OneDrive/Desktop/Personal/deepak-portfolio/render.yaml)

## Project Structure

- [website/](C:/Users/polis/OneDrive/Desktop/Personal/deepak-portfolio/website): Frontend app and local API simulation
- [assets/](C:/Users/polis/OneDrive/Desktop/Personal/deepak-portfolio/assets): Certificates and profile assets
- [docs/](C:/Users/polis/OneDrive/Desktop/Personal/deepak-portfolio/docs): Product and architecture documentation

## Local Development

From repository root:

```bash
npm --prefix website install
npm --prefix website run dev
```

Build for production:

```bash
npm --prefix website run build
```

## Deployment (Render)

This repository is configured for Render static deployment via [render.yaml](C:/Users/polis/OneDrive/Desktop/Personal/deepak-portfolio/render.yaml):

- Build command: `npm --prefix website install && npm --prefix website run build`
- Publish path: `website/dist`
- SPA rewrite to `index.html`

## Maintainer

**Deepak Polisetti**  
GitHub: https://github.com/DEEPAK21072005
