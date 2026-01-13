import React, { useEffect } from 'react';

import HeroSection from './components/HeroSection';
import AuthorIntro from './components/AuthorIntro';
import RecentPosts from './components/RecentPosts';
import CategoryShowcase from './components/CategoryShowcase';
import NewsletterSection from './components/NewsletterSection';
import TestimonialsCarousel from './components/TestimonialsCarousel';

const Homepage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>


            <main className="pt-16">
                <HeroSection />
                <AuthorIntro />
                <RecentPosts />
                <CategoryShowcase />
                <TestimonialsCarousel />
                <NewsletterSection />
            </main>
        </>
    );
};

export default Homepage;