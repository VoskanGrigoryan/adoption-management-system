# Adoption Management System

Monorepo for a pet adoption platform composed of multiple web applications and a shared backend.  
This repository currently contains only the initial scaffolding required for development.

## Project Structure

adoption-management-system/
├─ apps/
│ ├─ backend/ # NestJS backend (main development focus)
│ ├─ frontend-vite/ # Vite + React frontend (main frontend)
│ └─ frontend-next/ # Next.js frontend (secondary / future use)
├─ packages/ # Shared packages (empty for now)
├─ pnpm-workspace.yaml
├─ package.json
└─ README.md


## Tech Stack

- Node.js (LTS)
- pnpm (workspace / monorepo management)
- NestJS (backend)
- React + Vite (primary frontend)
- Next.js (secondary frontend)

## Prerequisites

- Node.js LTS installed
- pnpm enabled (recommended via Corepack)

Enable pnpm:

corepack enable
corepack prepare pnpm@latest --activate


## Workspace Setup

From the repository root:

pnpm install


This installs dependencies for all workspace projects and creates a shared lockfile.

## Running Applications

Backend (NestJS):

cd apps/backend
pnpm run start:dev


Vite frontend:

cd apps/frontend-vite
pnpm run dev

Next.js frontend:

cd apps/frontend-next
pnpm run dev


Each application is run independently from its own directory.

## Environment Variables

Each app may require its own environment variables.

- Do **not** commit `.env` files.
- Use `.env.example` files to document required variables.

## Development Notes

- The backend and Vite frontend are the primary focus.
- The Next.js app is included for future expansion.
- Shared code should live under `packages/` when needed.
- Root-level scripts and CI are intentionally minimal at this stage.

## Collaboration

- One pnpm workspace
- One lockfile at root
- Consistent Node version recommended via `.nvmrc` (optional)

This repository is intended to be easy to clone, install, and run without additional setup steps.
