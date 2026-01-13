import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import Icon from '../../components/AppIcon';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import EditorToolbar from './components/EditorToolbar';
import ImageUploadZone from './components/ImageUploadZone';
import CategoryTagSelector from './components/CategoryTagSelector';
import SEOOptimization from './components/SEOOptimization';
import PublishSettings from './components/PublishSettings';
import PreviewModal from './components/PreviewModal';

import { useBlog } from '../../context/BlogContext';

const CreateBlog = () => {
    const navigate = useNavigate();
    const { addBlog } = useBlog();
    const [isSaving, setIsSaving] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [activeFormats, setActiveFormats] = useState([]);
    const [isDistractionFree, setIsDistractionFree] = useState(false);

    const [blogData, setBlogData] = useState({
        title: '',
        excerpt: '',
        content: '',
        featuredImage: '',
        imageAlt: '',
        category: '',
        tags: [],
        metaTitle: '',
        metaDescription: '',
        keywords: '',
        slug: '',
        status: 'draft',
        scheduledDate: '',
        visibility: 'public',
        allowComments: true,
        publishDate: new Date()?.toISOString()
    });

    useEffect(() => {
        const autoSaveInterval = setInterval(() => {
            if (blogData?.title || blogData?.content) {
                console.log('Auto-saving draft...');
            }
        }, 30000);

        return () => clearInterval(autoSaveInterval);
    }, [blogData]);

    useEffect(() => {
        if (blogData?.title && !blogData?.slug) {
            const generatedSlug = blogData?.title?.toLowerCase()?.replace(/[^a-z0-9\s-]/g, '')?.replace(/\s+/g, '-')?.replace(/-+/g, '-')?.trim();
            setBlogData(prev => ({ ...prev, slug: generatedSlug }));
        }

        if (blogData?.title && !blogData?.metaTitle) {
            setBlogData(prev => ({ ...prev, metaTitle: blogData?.title }));
        }
    }, [blogData?.title]);

    const handleInputChange = (field, value) => {
        setBlogData(prev => ({ ...prev, [field]: value }));
    };

    const handleFormat = (formatId) => {
        setActiveFormats(prev =>
            prev?.includes(formatId)
                ? prev?.filter(f => f !== formatId)
                : [...prev, formatId]
        );
    };

    const handleInsertLink = () => {
        const url = prompt('Enter URL:');
        if (url) {
            const linkText = prompt('Enter link text:');
            if (linkText) {
                const linkMarkdown = `[${linkText}](${url})`;
                setBlogData(prev => ({
                    ...prev,
                    content: prev?.content + linkMarkdown
                }));
            }
        }
    };

    const handleInsertImage = () => {
        const imageUrl = prompt('Enter image URL:');
        if (imageUrl) {
            const altText = prompt('Enter image description:');
            const imageMarkdown = `\n![${altText || 'Image'}](${imageUrl})\n`;
            setBlogData(prev => ({
                ...prev,
                content: prev?.content + imageMarkdown
            }));
        }
    };

    const handleSaveDraft = async () => {
        setIsSaving(true);

        setTimeout(() => {
            console.log('Draft saved:', { ...blogData, status: 'draft' });
            setIsSaving(false);
            setShowSuccessMessage(true);
            setTimeout(() => setShowSuccessMessage(false), 3000);
        }, 1000);
    };

    const handlePublish = async () => {
        if (!blogData?.title?.trim()) {
            alert('Please enter a title for your blog post');
            return;
        }

        if (!blogData?.content?.trim()) {
            alert('Please add content to your blog post');
            return;
        }

        if (!blogData?.category) {
            alert('Please select a category');
            return;
        }

        setIsSaving(true);

        // Simulate API call and add to context
        setTimeout(() => {
            const newBlog = {
                title: blogData.title,
                excerpt: blogData.excerpt,
                content: blogData.content,
                image: blogData.featuredImage, // Map to existing structure
                imageAlt: blogData.imageAlt || blogData.title,
                category: blogData.category,
                tags: blogData.tags,
                publishDate: new Date().toISOString()
            };

            const savedBlog = addBlog(newBlog);

            console.log('Blog published:', savedBlog);
            setIsSaving(false);
            setShowSuccessMessage(true);

            setTimeout(() => {
                navigate(`/blog-details/${savedBlog.id}`);
            }, 1000);
        }, 1500);
    };

    const toggleDistractionFree = () => {
        setIsDistractionFree(!isDistractionFree);
    };

    return (
        <main className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                <Breadcrumbs />

                {/* Page Header */}
                <div className="mb-6 md:mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                                Create New Blog Post
                            </h1>
                            <p className="text-sm md:text-base text-muted-foreground">
                                Share your story with the world
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                iconName={isDistractionFree ? 'Maximize2' : 'Minimize2'}
                                onClick={toggleDistractionFree}
                            >
                                {isDistractionFree ? 'Exit' : 'Focus Mode'}
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                iconName="Eye"
                                iconPosition="left"
                                onClick={() => setIsPreviewOpen(true)}
                            >
                                Preview
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Success Message */}
                {showSuccessMessage && (
                    <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg flex items-center gap-3 animation-fade-in">
                        <Icon name="CheckCircle2" size={20} className="text-success" />
                        <span className="text-success font-medium">
                            {blogData?.status === 'draft' ? 'Draft saved successfully!' : 'Blog post published successfully!'}
                        </span>
                    </div>
                )}

                {/* Main Content */}
                <div className={`grid gap-6 md:gap-8 ${isDistractionFree ? 'lg:grid-cols-1' : 'lg:grid-cols-3'}`}>
                    {/* Editor Section */}
                    <div className={isDistractionFree ? 'lg:col-span-1 max-w-4xl mx-auto w-full' : 'lg:col-span-2'}>
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <Input
                                    type="text"
                                    placeholder="Enter your blog title..."
                                    value={blogData?.title}
                                    onChange={(e) => handleInputChange('title', e?.target?.value)}
                                    className="text-2xl md:text-3xl font-bold border-0 border-b-2 border-border rounded-none px-0 focus:border-primary"
                                    required
                                />
                            </div>

                            {/* Excerpt */}
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Excerpt
                                    <span className="text-muted-foreground font-normal ml-2">
                                        (Brief summary for previews)
                                    </span>
                                </label>
                                <textarea
                                    placeholder="Write a compelling excerpt that will appear in blog listings..."
                                    value={blogData?.excerpt}
                                    onChange={(e) => handleInputChange('excerpt', e?.target?.value)}
                                    rows={3}
                                    maxLength={200}
                                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                />
                                <div className="flex justify-end mt-1">
                                    <span className="text-xs text-muted-foreground">
                                        {blogData?.excerpt?.length}/200
                                    </span>
                                </div>
                            </div>

                            {/* Featured Image */}
                            {!isDistractionFree && (
                                <ImageUploadZone
                                    onImageSelect={(url) => handleInputChange('featuredImage', url)}
                                    currentImage={blogData?.featuredImage}
                                />
                            )}

                            {/* Editor Toolbar */}
                            <EditorToolbar
                                onFormat={handleFormat}
                                activeFormats={activeFormats}
                                onInsertLink={handleInsertLink}
                                onInsertImage={handleInsertImage}
                                onTogglePreview={() => setIsPreviewOpen(true)}
                                isPreviewMode={false}
                            />

                            {/* Content Editor */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-foreground">
                                    Content
                                </label>
                                <textarea
                                    placeholder="Start writing your story...\n\nTip: Use the toolbar above for formatting, or write in Markdown."
                                    value={blogData?.content}
                                    onChange={(e) => handleInputChange('content', e?.target?.value)}
                                    rows={isDistractionFree ? 25 : 20}
                                    className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none font-body text-base md:text-lg leading-relaxed"
                                />
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span>
                                        {blogData?.content?.split(/\s+/)?.filter(w => w)?.length} words
                                    </span>
                                    <span>
                                        {Math.ceil((blogData?.content?.length || 0) / 1000)} min read
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Settings */}
                    {!isDistractionFree && (
                        <div className="lg:col-span-1 space-y-6">
                            {/* Category & Tags */}
                            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                                <CategoryTagSelector
                                    selectedCategory={blogData?.category}
                                    onCategoryChange={(value) => handleInputChange('category', value)}
                                    selectedTags={blogData?.tags}
                                    onTagsChange={(tags) => handleInputChange('tags', tags)}
                                />
                            </div>

                            {/* SEO Optimization */}
                            <div className="bg-card border border-border rounded-lg p-4 md:p-6">
                                <SEOOptimization
                                    metaTitle={blogData?.metaTitle}
                                    onMetaTitleChange={(value) => handleInputChange('metaTitle', value)}
                                    metaDescription={blogData?.metaDescription}
                                    onMetaDescriptionChange={(value) => handleInputChange('metaDescription', value)}
                                    keywords={blogData?.keywords}
                                    onKeywordsChange={(value) => handleInputChange('keywords', value)}
                                    slug={blogData?.slug}
                                    onSlugChange={(value) => handleInputChange('slug', value)}
                                />
                            </div>

                            {/* Publish Settings */}
                            <PublishSettings
                                status={blogData?.status}
                                onStatusChange={(value) => handleInputChange('status', value)}
                                scheduledDate={blogData?.scheduledDate}
                                onScheduledDateChange={(value) => handleInputChange('scheduledDate', value)}
                                visibility={blogData?.visibility}
                                onVisibilityChange={(value) => handleInputChange('visibility', value)}
                                allowComments={blogData?.allowComments}
                                onAllowCommentsChange={(value) => handleInputChange('allowComments', value)}
                                onSaveDraft={handleSaveDraft}
                                onPublish={handlePublish}
                                isSaving={isSaving}
                            />
                        </div>
                    )}
                </div>

                {/* Distraction-Free Mode Actions */}
                {isDistractionFree && (
                    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 shadow-lg z-40">
                        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Icon name="FileText" size={16} />
                                <span>{blogData?.content?.split(/\s+/)?.filter(w => w)?.length} words</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    iconName="Save"
                                    onClick={handleSaveDraft}
                                    disabled={isSaving}
                                >
                                    Save
                                </Button>
                                <Button
                                    variant="default"
                                    size="sm"
                                    iconName="Send"
                                    onClick={handlePublish}
                                    disabled={isSaving}
                                    loading={isSaving}
                                >
                                    Publish
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {/* Preview Modal */}
            <PreviewModal
                isOpen={isPreviewOpen}
                onClose={() => setIsPreviewOpen(false)}
                blogData={blogData}
            />
        </main>
    );
};

export default CreateBlog;