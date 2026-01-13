import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TableOfContents = ({ sections }) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;

            for (let i = sections?.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections?.[i]?.id);
                if (element && element?.offsetTop <= scrollPosition) {
                    setActiveSection(sections?.[i]?.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sections]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element?.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="bg-card rounded-lg p-4 md:p-6 shadow-sm border border-border sticky top-24">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="List" size={20} className="text-primary" />
                <h3 className="text-base md:text-lg font-bold text-foreground">
                    Table of Contents
                </h3>
            </div>
            <ul className="space-y-2 md:space-y-3">
                {sections?.map((section, index) => (
                    <li key={section?.id}>
                        <button
                            onClick={() => scrollToSection(section?.id)}
                            className={`text-left text-sm md:text-base w-full px-3 py-2 rounded-lg transition-all duration-300 ${activeSection === section?.id
                                    ? 'bg-primary text-primary-foreground font-semibold'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                }`}
                        >
                            <span className="mr-2">{index + 1}.</span>
                            {section?.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default TableOfContents;