import React from 'react';
import Icon from '../../../components/AppIcon';

const ArticleHeader = ({ article }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <header className="mb-8 lg:mb-12">
            <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-6">
                <span className="category-badge bg-accent text-accent-foreground">
                    {article?.category}
                </span>
                {article?.tags?.map((tag, index) => (
                    <span
                        key={index}
                        className="category-badge bg-muted text-muted-foreground"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 leading-tight">
                {article?.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
                {article?.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-muted-foreground">
                <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={18} />
                    <span>{formatDate(article?.publishDate)}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={18} />
                    <span>{article?.readTime} min read</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Icon name="Eye" size={18} />
                    <span>{article?.views?.toLocaleString()} views</span>
                </div>
            </div>
        </header>
    );
};

export default ArticleHeader;