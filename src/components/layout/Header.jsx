import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { path: '/homepage', label: 'Home', icon: 'Home' },
        { path: '/category-explorer', label: 'Categories', icon: 'Grid' },
        { path: '/search-discovery', label: 'Discover', icon: 'Search' },
        { path: '/about', label: 'About', icon: 'Info' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const isActivePath = (path) => {
        return location?.pathname === path;
    };

    return (
        <>
            <header className={`header-container ${isScrolled ? 'shadow-elevated' : ''}`}>
                <div className="header-content">
                    <div className="header-inner">
                        <Link to="/homepage" className="header-logo" onClick={closeMobileMenu}>
                            <Icon name="BookOpen" size={28} className="text-primary" />
                            <span>PersonalBlogHub</span>
                        </Link>

                        <nav className="header-nav">
                            {navigationItems?.map((item) => (
                                <Link
                                    key={item?.path}
                                    to={item?.path}
                                    className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
                                >
                                    {item?.label}
                                </Link>
                            ))}
                        </nav>

                        <div className="header-actions">
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={toggleTheme}
                                iconName={theme === 'dark' ? 'Sun' : 'Moon'}
                                aria-label="Toggle theme"
                            />

                            <Button
                                variant="outline"
                                size="sm"
                                iconName="PenSquare"
                                iconPosition="left"
                                asChild
                                className="hidden lg:inline-flex"
                            >
                                <Link to="/create-blog">Write</Link>
                            </Button>

                            <button
                                onClick={toggleMobileMenu}
                                className="header-mobile-toggle"
                                aria-label="Toggle mobile menu"
                            >
                                <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : 'closed'}`}>
                <div className="mobile-menu-content">
                    <nav className="mobile-menu-nav">
                        {navigationItems?.map((item) => (
                            <Link
                                key={item?.path}
                                to={item?.path}
                                onClick={closeMobileMenu}
                                className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                            >
                                <div className="flex items-center space-x-3">
                                    <Icon name={item?.icon} size={20} />
                                    <span>{item?.label}</span>
                                </div>
                            </Link>
                        ))}

                        <Link
                            to="/create-blog"
                            onClick={closeMobileMenu}
                            className="mobile-menu-link"
                        >
                            <div className="flex items-center space-x-3">
                                <Icon name="PenSquare" size={20} />
                                <span>Write a Blog</span>
                            </div>
                        </Link>
                    </nav>

                    <div className="mt-8 pt-8 border-t border-border">
                        <div className="space-y-4">
                            <Button
                                variant="default"
                                fullWidth
                                iconName="Mail"
                                iconPosition="left"
                            >
                                Subscribe to Newsletter
                            </Button>

                            <div className="flex items-center justify-center space-x-4 pt-4">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icon name="Twitter" size={20} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icon name="Facebook" size={20} />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icon name="Instagram" size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icon name="Linkedin" size={20} />
                                </a>
                                <a
                                    href="https://github.com/Deepali025/blog-advanced.git"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <Icon name="Github" size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;