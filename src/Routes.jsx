import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import BlogDetails from './pages/blog-details';
import CreateBlog from './pages/create-blog';
import CategoryExplorer from './pages/category-explorer';
import SearchDiscovery from './pages/search-discovery';
import About from './pages/about';
import Homepage from './pages/homepage';

const Routes = () => {
    return (
        <BrowserRouter>
            <ErrorBoundary>
                <ScrollToTop />
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main className="flex-grow">
                        <RouterRoutes>
                            {/* Define your route here */}
                            <Route path="/" element={<Homepage />} />
                            <Route path="/blog-details/:id" element={<BlogDetails />} />
                            <Route path="/create-blog" element={<CreateBlog />} />
                            <Route path="/category-explorer" element={<CategoryExplorer />} />
                            <Route path="/search-discovery" element={<SearchDiscovery />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/homepage" element={<Homepage />} />
                            <Route path="*" element={<NotFound />} />
                        </RouterRoutes>
                    </main>
                    <Footer />
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    );
};

export default Routes;