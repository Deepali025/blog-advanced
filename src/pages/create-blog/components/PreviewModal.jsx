import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PreviewModal = ({ isOpen, onClose, blogData }) => {
    if (!isOpen) return null;

    const formatDate = (date) => {
        return new Date(date)?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const renderContent = (content) => {
        return content?.split('\n')?.map((paragraph, index) => {
            if (paragraph?.trim()) {
                return (
                    <p key={index} className="mb-4 leading-relaxed">
                        {paragraph}
                    </p>
                );
            }
            return null;
        });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-lg shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card border-b border-border">
                    <div className="flex items-center gap-2">
                        <Icon name="Eye" size={20} className="text-primary" />
                        <h2 className="text-lg font-semibold text-foreground">Preview</h2>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-muted transition-colors"
                        aria-label="Close preview"
                    >
                        <Icon name="X" size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                    <article className="max-w-3xl mx-auto p-6 md:p-8 lg:p-12">
                        {/* Featured Image */}
                        {blogData?.featuredImage && (
                            <div className="mb-8 rounded-lg overflow-hidden">
                                <div className="aspect-video w-full overflow-hidden">
                                    <Image
                                        src={blogData?.featuredImage}
                                        alt={blogData?.imageAlt || "Blog post featured image preview"}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Category Badge */}
                        {blogData?.category && (
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-semibold">
                                    {blogData?.category}
                                </span>
                            </div>
                        )}

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                            {blogData?.title || 'Untitled Post'}
                        </h1>

                        {/* Excerpt */}
                        {blogData?.excerpt && (
                            <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                                {blogData?.excerpt}
                            </p>
                        )}

                        {/* Meta Information */}
                        <div className="flex flex-wrap items-center gap-4 pb-6 mb-6 border-b border-border">
                            <div className="flex items-center gap-2">
                                <Icon name="Calendar" size={16} className="text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                    {formatDate(blogData?.publishDate || new Date())}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Icon name="Clock" size={16} className="text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                    {Math.ceil((blogData?.content?.length || 0) / 1000)} min read
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none text-foreground">
                            {blogData?.content ? (
                                renderContent(blogData?.content)
                            ) : (
                                <p className="text-muted-foreground italic">No content yet. Start writing to see your preview.</p>
                            )}
                        </div>

                        {/* Tags */}
                        {blogData?.tags && blogData?.tags?.length > 0 && (
                            <div className="mt-8 pt-6 border-t border-border">
                                <div className="flex flex-wrap gap-2">
                                    {blogData?.tags?.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </article>
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 flex items-center justify-end gap-3 p-4 bg-card border-t border-border">
                    <Button
                        variant="outline"
                        iconName="X"
                        iconPosition="left"
                        onClick={onClose}
                    >
                        Close Preview
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PreviewModal;