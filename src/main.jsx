import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BlogProvider } from './context/BlogContext';
import { ThemeProvider } from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BlogProvider>
        <App />
      </BlogProvider>
    </ThemeProvider>
  </StrictMode>,
)
