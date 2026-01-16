# CA Monk Blog Application

A modern, responsive blog application built with React, featuring a clean UI with a split-panel layout for browsing and reading blog posts.

<img width="1676" height="864" alt="image" src="https://github.com/user-attachments/assets/c7202f6c-4e51-4af5-89ed-86275c337f53" />


## 📋 Project Overview

This blog application allows users to:
- **Browse all blogs** in a clean card-based list view
- **Read full blog content** in a detailed view panel
- **Create new blog posts** with categories, cover images, and rich content
- **Filter by categories** with visual category badges

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool & Dev Server |
| **TanStack Query** | Server State Management & Data Fetching |
| **Tailwind CSS** | Utility-First Styling |
| **shadcn/ui** | UI Component Library |
| **React Router DOM** | Client-Side Routing |
| **JSON Server** | Mock REST API Backend |

## 🏗️ Architecture

```
src/
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── BlogCard.tsx           # Individual blog card component
│   ├── BlogCardSkeleton.tsx   # Loading skeleton for blog cards
│   ├── BlogDetail.tsx         # Full blog detail view
│   ├── BlogDetailSkeleton.tsx # Loading skeleton for detail view
│   ├── BlogList.tsx           # Blog list container
│   ├── CategoryBadge.tsx      # Category tag component
│   ├── CreateBlogDialog.tsx   # Modal form for creating blogs
│   └── Header.tsx             # Application header
├── hooks/
│   └── useBlogs.ts            # TanStack Query hooks for blog operations
├── lib/
│   ├── api.ts                 # API client with mock data fallback
│   └── utils.ts               # Utility functions
├── pages/
│   ├── Index.tsx              # Main application page
│   └── NotFound.tsx           # 404 page
├── types/
│   └── blog.ts                # TypeScript interfaces
├── App.tsx                    # Root component with providers
├── main.tsx                   # Application entry point
└── index.css                  # Global styles & Tailwind config
```

### Key Design Patterns

- **Custom Hooks**: `useBlogs`, `useBlog`, `useCreateBlog` for data fetching
- **Component Composition**: Reusable UI components with shadcn/ui
- **Mock Data Fallback**: Works in preview mode without backend
- **Loading States**: Skeleton components for better UX

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend API)**
   ```bash
   npm run server
   ```
   > The API will run on `http://localhost:3001`

4. **Start the Development Server** (in a new terminal)
   ```bash
   npm run dev
   ```
   > The app will run on `http://localhost:5173`

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/blogs` | Get all blogs |
| `GET` | `/blogs/:id` | Get a specific blog by ID |
| `POST` | `/blogs` | Create a new blog |

### Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
```

## 📸 Application Screenshots

### Main View
- **Left Panel**: Blog list with cards showing category badges, titles, and descriptions
- **Right Panel**: Selected blog's full content with cover image

### Features
- Responsive design for all screen sizes
- Loading skeletons for better UX
- Error handling with retry options
- Category-based color coding
- Create new blog with form validation

## 🧪 Running Tests

```bash
npm run test
```

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🔧 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run server` | Start JSON Server on port 3001 |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run test` | Run tests |
| `npm run lint` | Run ESLint |

---

**Built with React, TanStack Query, Tailwind CSS, and shadcn/ui**

