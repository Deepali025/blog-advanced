import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

import { useBlog } from '../../../context/BlogContext';

const RecentPosts = () => {
    const { blogs: recentPosts } = useBlog();


    return (
        <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-3">
                            Recent Stories
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Fresh perspectives and thoughtful insights from my latest explorations
                        </p>
                    </div>
                    <Button
                        variant="outline"
                        size="lg"
                        iconName="ArrowRight"
                        iconPosition="right"
                        asChild>

                        <Link to="/search-discovery">View All Posts</Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {recentPosts?.map((post) =>
                        <article
                            key={post?.id}
                            className="content-card group">

                            <Link to={`/blog-details/${post.id}`} className="block">
                                <div className="content-card-image">
                                    <Image
                                        src={post?.image}
                                        alt={post?.imageAlt}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                                        <span className="category-badge bg-primary text-primary-foreground">
                                            {post?.category}
                                        </span>
                                        <div className="flex items-center space-x-2">
                                            <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                                                <Icon name="Eye" size={14} className="text-muted-foreground" />
                                                <span className="text-foreground font-medium">{post?.views}</span>
                                            </div>
                                            <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                                                <Icon name="Heart" size={14} className="text-error" />
                                                <span className="text-foreground font-medium">{post?.likes}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-card-body">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                        {post?.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                                        {post?.excerpt}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground pt-4 border-t border-border">
                                        <div className="flex items-center space-x-1">
                                            <Icon name="Calendar" size={14} />
                                            <span>{post?.date}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <Icon name="Clock" size={14} />
                                            <span>{post?.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    )}
                </div>

                <div className="text-center mt-8 md:mt-12">
                    <Button
                        variant="default"
                        size="lg"
                        iconName="Grid"
                        iconPosition="left"
                        asChild>

                        <Link to="/category-explorer">Explore All Categories</Link>
                    </Button>
                </div>
            </div>
        </section>);

};

export default RecentPosts;