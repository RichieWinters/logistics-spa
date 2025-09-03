# Logistics SPA

A modern, responsive Single Page Application  built with React, Vite, and Shadcn.


## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 18+ 
- npm 9+

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <url>
cd logistics-spa
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint


## 🗂️ Project Structure

```
logistics-spa/
├── src/
│   ├── components/     # Reusable UI components
│   │   └── ui/        # shadcn/ui components
│   ├── lib/           # Utility functions
│   ├── assets/        # Static assets
│   └── ...
├── public/            # Public assets
├── tailwind.config.js # Tailwind configuration
├── components.json    # shadcn/ui configuration
├── vite.config.js     # Vite configuration
└── jsconfig.json      # JavaScript path aliases
```

## 🔧 Configuration Files

- **`vite.config.js`**: Vite configuration with path aliases
- **`tailwind.config.js`**: Tailwind CSS configuration with shadcn/ui theme
- **`components.json`**: shadcn/ui component configuration
- **`jsconfig.json`**: JavaScript path mapping for `@/` alias

## 🚀 Deployment

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

The built files will be in the `dist/` directory.
