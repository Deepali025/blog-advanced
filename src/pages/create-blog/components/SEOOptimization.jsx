import React from 'react';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const SEOOptimization = ({
    metaTitle,
    onMetaTitleChange,
    metaDescription,
    onMetaDescriptionChange,
    keywords,
    onKeywordsChange,
    slug,
    onSlugChange
}) => {
    const metaTitleLength = metaTitle?.length;
    const metaDescriptionLength = metaDescription?.length;
    const keywordsArray = keywords?.split(',')?.filter(k => k?.trim());

    const getCharacterCountColor = (current, min, max) => {
        if (current < min) return 'text-warning';
        if (current > max) return 'text-destructive';
        return 'text-success';
    };

    return (
        <div className="space-y-6 bg-card border border-border rounded-lg p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
                <Icon name="Search" size={20} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">SEO Optimization</h3>
            </div>
            {/* Meta Title */}
            <div className="space-y-2">
                <Input
                    label="Meta Title"
                    type="text"
                    placeholder="Compelling title for search engines (50-60 characters)"
                    value={metaTitle}
                    onChange={(e) => onMetaTitleChange(e?.target?.value)}
                    description="This appears in search engine results"
                    maxLength={70}
                />
                <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                        Optimal: 50-60 characters
                    </span>
                    <span className={getCharacterCountColor(metaTitleLength, 50, 60)}>
                        {metaTitleLength}/70 characters
                    </span>
                </div>
            </div>
            {/* Meta Description */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                    Meta Description
                </label>
                <textarea
                    placeholder="Brief description that appears in search results (150-160 characters)"
                    value={metaDescription}
                    onChange={(e) => onMetaDescriptionChange(e?.target?.value)}
                    maxLength={200}
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
                <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                        Optimal: 150-160 characters
                    </span>
                    <span className={getCharacterCountColor(metaDescriptionLength, 150, 160)}>
                        {metaDescriptionLength}/200 characters
                    </span>
                </div>
            </div>
            {/* URL Slug */}
            <div className="space-y-2">
                <Input
                    label="URL Slug"
                    type="text"
                    placeholder="blog-post-url-slug"
                    value={slug}
                    onChange={(e) => onSlugChange(e?.target?.value?.toLowerCase()?.replace(/[^a-z0-9-]/g, '-'))}
                    description="Clean, readable URL for your post"
                />
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-3 py-2 rounded">
                    <Icon name="Link" size={14} />
                    <span className="break-all">
                        personalbloghub.com/blog/{slug || 'your-post-slug'}
                    </span>
                </div>
            </div>
            {/* Keywords */}
            <div className="space-y-2">
                <Input
                    label="Focus Keywords"
                    type="text"
                    placeholder="keyword1, keyword2, keyword3"
                    value={keywords}
                    onChange={(e) => onKeywordsChange(e?.target?.value)}
                    description="Comma-separated keywords (3-5 recommended)"
                />
                <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">
                        Keywords added: {keywordsArray?.length}
                    </span>
                    {keywordsArray?.length > 5 && (
                        <span className="text-warning">
                            Consider reducing to 3-5 keywords
                        </span>
                    )}
                </div>
            </div>
            {/* SEO Score Indicator */}
            <div className="bg-muted rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">SEO Score</span>
                    <span className="text-sm font-semibold text-primary">
                        {Math.min(100, Math.round(
                            (metaTitleLength >= 50 && metaTitleLength <= 60 ? 25 : 0) +
                            (metaDescriptionLength >= 150 && metaDescriptionLength <= 160 ? 25 : 0) +
                            (slug ? 25 : 0) +
                            (keywordsArray?.length >= 3 && keywordsArray?.length <= 5 ? 25 : 0)
                        ))}%
                    </span>
                </div>
                <div className="w-full bg-background rounded-full h-2 overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{
                            width: `${Math.min(100, Math.round(
                                (metaTitleLength >= 50 && metaTitleLength <= 60 ? 25 : 0) +
                                (metaDescriptionLength >= 150 && metaDescriptionLength <= 160 ? 25 : 0) +
                                (slug ? 25 : 0) +
                                (keywordsArray?.length >= 3 && keywordsArray?.length <= 5 ? 25 : 0)
                            ))}%`
                        }}
                    />
                </div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                    <li className="flex items-center gap-2">
                        <Icon
                            name={metaTitleLength >= 50 && metaTitleLength <= 60 ? 'CheckCircle2' : 'Circle'}
                            size={14}
                            className={metaTitleLength >= 50 && metaTitleLength <= 60 ? 'text-success' : ''}
                        />
                        Meta title length optimal
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon
                            name={metaDescriptionLength >= 150 && metaDescriptionLength <= 160 ? 'CheckCircle2' : 'Circle'}
                            size={14}
                            className={metaDescriptionLength >= 150 && metaDescriptionLength <= 160 ? 'text-success' : ''}
                        />
                        Meta description length optimal
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon
                            name={slug ? 'CheckCircle2' : 'Circle'}
                            size={14}
                            className={slug ? 'text-success' : ''}
                        />
                        URL slug defined
                    </li>
                    <li className="flex items-center gap-2">
                        <Icon
                            name={keywordsArray?.length >= 3 && keywordsArray?.length <= 5 ? 'CheckCircle2' : 'Circle'}
                            size={14}
                            className={keywordsArray?.length >= 3 && keywordsArray?.length <= 5 ? 'text-success' : ''}
                        />
                        Focus keywords (3-5)
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SEOOptimization;