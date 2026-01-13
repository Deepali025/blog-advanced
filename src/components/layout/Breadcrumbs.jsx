import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location?.pathname?.split('/')?.filter((x) => x);

    const breadcrumbNameMap = {
        homepage: 'Home',
        'blog-details': 'Blog Details',
        'create-blog': 'Create Blog',
        about: 'About',
        'category-explorer': 'Categories',
        'search-discovery': 'Discover'
    };

    if (pathnames?.length === 0 || location?.pathname === '/homepage') {
        return null;
    }

    return (
        <nav aria-label="Breadcrumb" className="py-4">
            <ol className="flex items-center space-x-2 text-sm">
                <li>
                    <Link
                        to="/homepage"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                        <Icon name="Home" size={16} className="mr-1" />
                        Home
                    </Link>
                </li>

                {pathnames?.map((value, index) => {
                    const to = `/${pathnames?.slice(0, index + 1)?.join('/')}`;
                    const isLast = index === pathnames?.length - 1;
                    const breadcrumbName = breadcrumbNameMap?.[value] || value;

                    return (
                        <li key={to} className="flex items-center">
                            <Icon name="ChevronRight" size={16} className="text-muted-foreground mx-2" />
                            {isLast ? (
                                <span className="text-foreground font-medium">{breadcrumbName}</span>
                            ) : (
                                <Link
                                    to={to}
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    {breadcrumbName}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;