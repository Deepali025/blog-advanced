import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const RelatedPosts = ({ posts }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date?.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <section className="mt-12 lg:mt-16">
            <div className="flex items-center space-x-2 mb-6 lg:mb-8">
                <Icon name="BookOpen" size={24} className="text-primary" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    Related Articles
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts?.map((post) => (
                    <Link
                        key={post?.id}
                        to="/blog-details"
                        className="content-card group"
                    >
                        <div className="content-card-image">
                            <Image
                                src={post?.image}
                                alt={post?.imageAlt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="content-card-body">
                            <div className="flex items-center space-x-2 mb-3">
                                <span className="category-badge bg-accent text-accent-foreground text-xs">
                                    {post?.category}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                    {post?.readTime} min read
                                </span>
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                {post?.title}
                            </h3>

                            <p className="text-sm md:text-base text-muted-foreground line-clamp-2 mb-4">
                                {post?.excerpt}
                            </p>

                            <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
                                <span>{formatDate(post?.publishDate)}</span>
                                <div className="flex items-center space-x-1">
                                    <Icon name="Eye" size={14} />
                                    <span>{post?.views?.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedPosts;