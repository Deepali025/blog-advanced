# 📝 Blog Advanced

A modern, responsive blog website built with React, Vite, and Tailwind CSS. Features a beautiful dark mode, category-based navigation, and optimized performance.

## 🚀 Live Demo

- **Production**: [https://blog-advanced.vercel.app/](https://blog-advanced.vercel.app/)
- **GitHub**: [https://github.com/Deepali025/blog-advanced](https://github.com/Deepali025/blog-advanced)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Fast Performance** - Built with Vite for lightning-fast builds
- 🎯 **Category Navigation** - Easy browsing by blog categories
- 🔍 **SEO Optimized** - Meta tags and semantic HTML
- 🎭 **Skeleton Loaders** - Smooth loading experience

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite (with Rolldown)
- **Styling**: Tailwind CSS 4
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **UI Components**: Radix UI
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Deepali025/blog-advanced.git
   cd blog-advanced
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

## 🏗️ Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Deployment

#### Vercel (Recommended)
This project is configured for automatic deployment on Vercel:
- Push to `main` branch triggers automatic deployment
- Environment variables can be set in Vercel dashboard
- Custom domains can be configured in project settings

#### Manual Deploy
```bash
npm run build        # Build the project
# Upload the 'dist' folder to your hosting service
```

## 📁 Project Structure

```
blog-website/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   │   ├── layout/    # Header, Footer, etc.
│   │   └── ui/        # UI components
│   ├── context/       # React Context (Theme, etc.)
│   ├── pages/         # Page components
│   ├── styles/        # Global styles
│   ├── main.jsx       # App entry point
│   └── index.jsx      # Root component
├── vercel.json        # Vercel configuration
├── vite.config.js     # Vite configuration
└── tailwind.config.js # Tailwind configuration
```

## ⚙️ Configuration

### Environment Variables
Copy `.env.example` to `.env.local` and configure:
```env
VITE_APP_NAME=Blog Advanced
VITE_APP_URL=https://blog-advanced.vercel.app
```

### Vercel Settings
The `vercel.json` file includes:
- SPA routing configuration
- Asset caching headers
- Security headers
- Build optimization

### Vite Optimization
The build is optimized with:
- Code splitting for vendor libraries
- Terser minification
- Console removal in production
- Chunk size management

## 🎨 Customization

### Theme
Edit `src/context/ThemeContext.jsx` to customize theme settings.

### Styling
- Global styles: `src/styles/`
- Tailwind config: `tailwind.config.js`
- Component styles: Use Tailwind utility classes

### Content
- Blog posts and categories are defined in page components
- Add new pages in `src/pages/`
- Update routing in `src/index.jsx`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Deepali**
- GitHub: [@Deepali025](https://github.com/Deepali025)
- Project: [blog-advanced](https://github.com/Deepali025/blog-advanced)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)

---

Made with ❤️ by Deepali
