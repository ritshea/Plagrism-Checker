# Plagiarism Checker - Production Monorepo

A modern, full-stack plagiarism detection application built with React, Node.js, and Tailwind CSS.

## 🚀 Features

- **Real-time Plagiarism Detection** - Instant text similarity analysis
- **Modern UI/UX** - Responsive design with Tailwind CSS
- **Fast Performance** - Built with Vite for optimal speed
- **Production Ready** - Docker support, CI/CD, monitoring
- **Monorepo Architecture** - Shared packages and optimized builds

## 📦 Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Axios
- **Backend**: Node.js, Express, string-similarity
- **Build Tool**: Turborepo
- **Package Manager**: pnpm
- **Deployment**: Vercel (frontend), Railway (backend)

## 🛠️ Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 📥 Installation

Clone repository
git clone https://github.com/ritsea/plagiarism-checker.git
cd plagiarism-checker

Install dependencies
pnpm install

Setup environment variables
cp apps/web/.env.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env.local

text

## 🚀 Development

Start all apps in development mode
pnpm dev

Frontend: http://localhost:5173
Backend: http://localhost:5000
text

## 🏗️ Build

Build all apps for production
pnpm build

Start production servers
pnpm start

text

## 🧪 Testing

Run all tests
pnpm test

Lint all packages
pnpm lint

Format code
pnpm format

text

## 🐳 Docker

Build Docker images
docker-compose build

Run containers
docker-compose up

Stop containers
docker-compose down

text

## 📦 Deployment

### Frontend (Vercel)
1. Connect repository to Vercel
2. Set Root Directory: `apps/web`
3. Set Build Command: `pnpm build --filter=web`
4. Set Output Directory: `dist`

### Backend (Railway)
1. Connect repository to Railway
2. Set Root Directory: `apps/api`
3. Set Start Command: `node dist/server.js`

## 🔒 Environment Variables

### Frontend (`apps/web/.env.local`)
VITE_API_URL=http://localhost:5000/api

text

### Backend (`apps/api/.env.local`)
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173

text

## 📝 License

MIT License - see LICENSE file for details

## 👥 Contributing

Contributions welcome! Please read CONTRIBUTING.md first.

## 📧 Support

For support, email support@virajai.com or open an issue.# Plagrism Checker
