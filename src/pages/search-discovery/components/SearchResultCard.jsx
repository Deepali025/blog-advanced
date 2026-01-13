import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SearchResultCard = ({ result, searchQuery }) => {
    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text?.split(new RegExp(`(${query})`, 'gi'));
        return parts?.map((part, index) =>
            part?.toLowerCase() === query?.toLowerCase() ? (
                <mark key={index} className="bg-accent/30 text-foreground font-medium">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) return 'Today';
        if (diffDays === 1) return 'Yesterday';
        if (diffDays < 7) return `${diffDays} days ago`;
        if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
        if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
        return `${Math.floor(diffDays / 365)} years ago`;
    };

    return (
        <article className="content-card group">
            <Link to={`/blog-details?id=${result?.id}`} className="block">
                <div className="flex flex-col sm:flex-row gap-4 p-4 lg:p-6">
                    <div className="sm:w-48 lg:w-56 flex-shrink-0">
                        <div className="content-card-image rounded-lg">
                            <Image
                                src={result?.image}
                                alt={result?.imageAlt}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-3">
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <span className="category-badge bg-primary/10 text-primary">
                                        {result?.category}
                                    </span>
                                    {result?.featured && (
                                        <span className="inline-flex items-center space-x-1 text-xs text-accent">
                                            <Icon name="Star" size={12} className="fill-current" />
                                            <span>Featured</span>
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {highlightText(result?.title, searchQuery)}
                                </h3>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm lg:text-base mb-4 line-clamp-2">
                            {highlightText(result?.excerpt, searchQuery)}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <Image
                                    src={result?.authorAvatar}
                                    alt={result?.authorAvatarAlt}
                                    className="w-6 h-6 rounded-full"
                                />
                                <span className="font-medium">{result?.author}</span>
                            </div>

                            <div className="flex items-center space-x-1">
                                <Icon name="Calendar" size={14} />
                                <span>{formatDate(result?.publishedDate)}</span>
                            </div>

                            <div className="flex items-center space-x-1">
                                <Icon name="Clock" size={14} />
                                <span>{result?.readTime} min read</span>
                            </div>

                            <div className="flex items-center space-x-1">
                                <Icon name="Eye" size={14} />
                                <span>{result?.views?.toLocaleString()} views</span>
                            </div>
                        </div>

                        {result?.tags && result?.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                                {result?.tags?.slice(0, 3)?.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </Link>
        </article>
    );
};

export default SearchResultCard;