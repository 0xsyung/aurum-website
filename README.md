# Aurum Labs Website

The official landing page and marketing website for Aurum Labs - a decentralized prediction markets platform.

![Aurum Labs](https://img.shields.io/badge/Aurum-Labs-FFB81C?style=for-the-badge)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat-square&logo=vite)

## Overview

This repository contains the landing page for Aurum Labs, featuring:

- **Hero Section** - Introduction to the prediction markets platform
- **Features Showcase** - Key platform capabilities (Decentralized, Transparent, Fast, Global)
- **Vision Section** - Platform mission and goals
- **Waitlist Signup** - Email subscription for early access
- **Launch App Button** - Direct link to the trading dApp

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.x | UI Framework |
| TypeScript | 5.6 | Type Safety |
| Vite | 7.x | Build Tool |
| Tailwind CSS | 4.x | Styling |
| shadcn/ui | Latest | UI Components |
| Framer Motion | 12.x | Animations |
| Wouter | 3.x | Routing |

## Design System

The website follows a **Modern Fintech Minimalism** design philosophy:

| Element | Value |
|---------|-------|
| Primary Color | Deep Navy `#0F1729` |
| Accent Color | Amber Gold `#FFB81C` |
| Background | Off-white `#FAFBFC` |
| Headline Font | Poppins |
| Body Font | Inter |

## Project Structure

```
aurum-website/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   ├── pages/          # Page components
│   │   │   └── Home.tsx    # Main landing page
│   │   ├── App.tsx         # Root component
│   │   ├── index.css       # Global styles
│   │   └── main.tsx        # Entry point
│   ├── public/             # Static assets
│   └── index.html          # HTML template
├── server/                 # Server placeholder
├── shared/                 # Shared types/constants
├── docs/                   # Documentation
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/0xsyung/aurum-website.git
cd aurum-website

# Install dependencies
pnpm install
```

### Development

```bash
# Start development server
pnpm run dev
```

The website will be available at `http://localhost:5173` (or next available port).

### Build

```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
# dApp URL - Where the Launch App button navigates
# For local development:
VITE_DAPP_URL=http://localhost:5173

# For production:
# VITE_DAPP_URL=https://app.aurumlabs.io

# Optional: override Vite base path (useful for GitHub Pages)
# VITE_BASE_PATH=/aurum-website/
```

## Deployment

### Cloudflare Pages (Recommended)

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Vite
3. Add environment variables in Cloudflare dashboard
4. Deploy

### Render

1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Configure:
   - **Build command**: `pnpm install && pnpm run build`
   - **Publish directory**: `dist`
4. Deploy

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Related Repositories

| Repository | Description |
|------------|-------------|
| [aurum-app](https://github.com/0xsyung/aurum-app) | Trading dApp interface |
| [aurum-contracts](https://github.com/0xsyung/aurum-contracts) | Smart contracts |
| [aurum-backend](https://github.com/0xsyung/aurum-backend) | Backend API server |
| [aurum-docs](https://github.com/0xsyung/aurum-docs) | Documentation |

## Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |

## Contributing

1. Fork the repository
2. Create a feature branch from `develop`
3. Make your changes
4. Submit a pull request to `develop`

### Branch Strategy

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches

## License

Copyright © 2026 Aurum Labs. All rights reserved.

---

**Built with ❤️ by the Aurum Labs team**
