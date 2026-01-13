import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CategoryCard = ({ category }) => {
    return (
        <Link
            to={`/category-explorer?category=${category?.slug}`}
            className="content-card group block"
        >
            <div className="content-card-image">
                <Image
                    src={category?.image}
                    alt={category?.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <div className="content-card-body">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <Icon name={category?.icon} size={20} className="text-primary" />
                        <h3 className="text-lg md:text-xl font-bold text-foreground font-headline">
                            {category?.name}
                        </h3>
                    </div>
                    <span className="category-badge bg-muted text-muted-foreground">
                        {category?.postCount} {category?.postCount === 1 ? 'post' : 'posts'}
                    </span>
                </div>

                <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-2">
                    {category?.description}
                </p>

                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Icon name="TrendingUp" size={16} className="text-success" />
                        <span className="text-xs md:text-sm text-muted-foreground">
                            {category?.recentActivity}
                        </span>
                    </div>

                    <div className="flex items-center space-x-1 text-primary group-hover:translate-x-1 transition-transform">
                        <span className="text-sm font-semibold">Explore</span>
                        <Icon name="ArrowRight" size={16} />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;