import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';

const Footer = () => {
    const currentYear = new Date()?.getFullYear();

    const footerSections = [
        {
            title: 'Explore',
            links: [
                { label: 'Home', path: '/homepage' },
                { label: 'Categories', path: '/category-explorer' },
                { label: 'Discover', path: '/search-discovery' },
                { label: 'About Us', path: '/about' }
            ]
        },
        {
            title: 'Create',
            links: [
                { label: 'Write a Blog', path: '/create-blog' },
                { label: 'Author Guidelines', path: '/about' },
                { label: 'Content Policy', path: '/about' },
                { label: 'Best Practices', path: '/about' }
            ]
        },
        {
            title: 'Community',
            links: [
                { label: 'Featured Authors', path: '/homepage' },
                { label: 'Reader Stories', path: '/homepage' },
                { label: 'Newsletter', path: '/homepage' },
                { label: 'Events', path: '/homepage' }
            ]
        },
        {
            title: 'Support',
            links: [
                { label: 'Help Center', path: '/about' },
                { label: 'Contact Us', path: '/about' },
                { label: 'Privacy Policy', path: '/about' },
                { label: 'Terms of Service', path: '/about' }
            ]
        }
    ];

    const socialLinks = [
        { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com' },
        { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com' },
        { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com' },
        { name: 'Linkedin', icon: 'Linkedin', url: 'https://linkedin.com' },
        { name: 'Youtube', icon: 'Youtube', url: 'https://youtube.com' },
        { name: 'Github', icon: 'Github', url: 'https://github.com/Deepali025' }
    ];

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-grid">
                    <div>
                        <Link to="/homepage" className="flex items-center space-x-2 mb-4">
                            <Icon name="BookOpen" size={32} className="text-primary" />
                            <span className="text-xl font-bold text-foreground font-accent">
                                PersonalBlogHub
                            </span>
                        </Link>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                            A digital sanctuary for authentic storytelling and meaningful connections.
                            Join our community of thoughtful writers and engaged readers.
                        </p>
                        <div className="flex items-center space-x-2">
                            <Icon name="Mail" size={18} className="text-muted-foreground" />
                            <a
                                href="mailto:hello@personalbloghub.com"
                                className="footer-link text-sm"
                            >
                                hello@personalbloghub.com
                            </a>
                        </div>
                    </div>

                    {footerSections?.map((section) => (
                        <div key={section?.title}>
                            <h3 className="footer-section-title">{section?.title}</h3>
                            <ul className="space-y-2">
                                {section?.links?.map((link) => (
                                    <li key={link?.label}>
                                        <Link to={link?.path} className="footer-link">
                                            {link?.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} PersonalBlogHub. All rights reserved. Crafted with care for storytellers.
                    </p>

                    <div className="footer-social-links">
                        {socialLinks?.map((social) => (
                            <a
                                key={social?.name}
                                href={social?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label={social?.name}
                            >
                                <Icon name={social?.icon} size={20} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;