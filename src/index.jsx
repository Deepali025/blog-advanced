import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/tailwind.css';
import './styles/index.css';
import { BlogProvider } from './context/BlogContext';
import { ThemeProvider } from './context/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ThemeProvider>
            <BlogProvider>
                <App />
            </BlogProvider>
        </ThemeProvider>
    </React.StrictMode>
);
