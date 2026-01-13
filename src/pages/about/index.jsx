import React, { useEffect } from 'react';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ExpertiseSection from './components/ExpertiseSection';
import ValuesSection from './components/ValuesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AchievementsSection from './components/AchievementsSection';
import CollaborationsSection from './components/CollaborationsSection';
import ContactSection from './components/ContactSection';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-16">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="pt-8">
                    <Breadcrumbs />
                </div>
            </div>

            <HeroSection />
            <StorySection />
            <ExpertiseSection />
            <ValuesSection />
            <TestimonialsSection />
            <AchievementsSection />
            <CollaborationsSection />
            <ContactSection />
        </main>
    );
};

export default About;