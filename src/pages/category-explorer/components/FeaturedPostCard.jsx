import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FeaturedPostCard = ({ post }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date?.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <Link
            to={`/blog-details?id=${post?.id}`}
            className="group block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
        >
            <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-48 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                    <Image
                        src={post?.image}
                        alt={post?.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                <div className="p-4 md:p-5 flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                        <span className="category-badge bg-primary/10 text-primary text-xs">
                            {post?.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                            {formatDate(post?.date)}
                        </span>
                    </div>

                    <h4 className="text-base md:text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {post?.title}
                    </h4>

                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {post?.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                                <Icon name="Clock" size={14} />
                                <span>{post?.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <Icon name="Eye" size={14} />
                                <span>{post?.views}</span>
                            </div>
                        </div>

                        <div className="flex items-center space-x-1 text-primary group-hover:translate-x-1 transition-transform">
                            <span className="text-sm font-semibold">Read</span>
                            <Icon name="ArrowRight" size={14} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FeaturedPostCard;