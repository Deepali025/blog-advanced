import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import CategoryCard from './components/CategoryCard';
import TagCloud from './components/TagCloud';
import FeaturedPostCard from './components/FeaturedPostCard';
import SubcategoryList from './components/SubcategoryList';
import SearchWithinCategory from './components/SearchWithinCategory';
import CategoryStats from './components/CategoryStats';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const CategoryExplorer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(searchParams?.get('category') || null);
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    const categories = [
        {
            id: 1,
            name: "Technology & Innovation",
            slug: "technology",
            icon: "Cpu",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_116f411ee-1767766210353.png",
            imageAlt: "Modern laptop with glowing blue circuit board patterns displaying advanced technology and innovation concepts on dark workspace",
            description: "Exploring cutting-edge tech trends, AI developments, and digital transformation insights that shape our future.",
            postCount: 47,
            recentActivity: "Updated 2 hours ago"
        },
        {
            id: 2,
            name: "Personal Growth",
            slug: "personal-growth",
            icon: "TrendingUp",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_12045ca9b-1766762818968.png",
            imageAlt: "Person climbing mountain stairs at sunrise symbolizing personal development journey and growth mindset with golden light",
            description: "Practical strategies for self-improvement, mindfulness practices, and building meaningful habits for life transformation.",
            postCount: 62,
            recentActivity: "Updated 5 hours ago"
        },
        {
            id: 3,
            name: "Creative Writing",
            slug: "creative-writing",
            icon: "PenTool",
            image: "https://images.unsplash.com/photo-1710003364549-de37d4ed3413",
            imageAlt: "Vintage typewriter with blank paper and coffee cup on wooden desk creating inspiring creative writing atmosphere",
            description: "Storytelling techniques, writing prompts, and creative expression tips to unlock your narrative potential.",
            postCount: 38,
            recentActivity: "Updated 1 day ago"
        },
        {
            id: 4,
            name: "Travel & Culture",
            slug: "travel",
            icon: "Globe",
            image: "https://images.unsplash.com/photo-1695076153485-ee3e7ac98a5f",
            imageAlt: "Colorful hot air balloons floating over ancient temples in Cappadocia Turkey at golden hour with dramatic landscape",
            description: "Authentic travel experiences, cultural insights, and destination guides for the curious explorer.",
            postCount: 53,
            recentActivity: "Updated 3 hours ago"
        },
        {
            id: 5,
            name: "Health & Wellness",
            slug: "health",
            icon: "Heart",
            image: "https://images.unsplash.com/photo-1635347513870-4c32e4a86300",
            imageAlt: "Woman practicing yoga meditation pose on beach at sunset with peaceful ocean waves promoting wellness and mindfulness",
            description: "Evidence-based wellness advice, mental health awareness, and holistic approaches to living your best life.",
            postCount: 41,
            recentActivity: "Updated 6 hours ago"
        },
        {
            id: 6,
            name: "Business & Entrepreneurship",
            slug: "business",
            icon: "Briefcase",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a54ffc04-1767783952709.png",
            imageAlt: "Modern business meeting with diverse team collaborating around laptop showing startup growth charts and strategy documents",
            description: "Startup insights, leadership lessons, and practical business strategies for aspiring entrepreneurs.",
            postCount: 35,
            recentActivity: "Updated 4 hours ago"
        }];


    const tags = [
        { id: 1, name: "AI & Machine Learning", count: 23 },
        { id: 2, name: "Productivity", count: 31 },
        { id: 3, name: "Mindfulness", count: 18 },
        { id: 4, name: "Digital Nomad", count: 15 },
        { id: 5, name: "Sustainable Living", count: 12 },
        { id: 6, name: "Remote Work", count: 27 },
        { id: 7, name: "Mental Health", count: 22 },
        { id: 8, name: "Startup Culture", count: 19 },
        { id: 9, name: "Creative Process", count: 14 },
        { id: 10, name: "Adventure Travel", count: 16 }];


    const subcategories = [
        { id: 1, name: "Artificial Intelligence", postCount: 15 },
        { id: 2, name: "Web Development", postCount: 12 },
        { id: 3, name: "Cybersecurity", postCount: 8 },
        { id: 4, name: "Cloud Computing", postCount: 10 },
        { id: 5, name: "Mobile Apps", postCount: 7 }];


    const featuredPosts = [
        {
            id: 1,
            title: "The Future of AI: How Machine Learning is Reshaping Our Digital Landscape",
            excerpt: "Exploring the transformative impact of artificial intelligence on industries, from healthcare to creative arts, and what it means for humanity's future.",
            category: "Technology",
            date: "2026-01-10",
            readTime: "8 min read",
            views: "2.3K",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_15b9cfc75-1764651774193.png",
            imageAlt: "Futuristic AI neural network visualization with glowing blue nodes and connections representing machine learning algorithms"
        },
        {
            id: 2,
            title: "Building Resilience: A Personal Journey Through Life's Unexpected Challenges",
            excerpt: "Lessons learned from navigating career setbacks, personal loss, and finding strength in vulnerability through mindful practices.",
            category: "Personal Growth",
            date: "2026-01-09",
            readTime: "6 min read",
            views: "1.8K",
            image: "https://images.unsplash.com/photo-1611995819242-a6e56fe9b29c",
            imageAlt: "Person standing on mountain peak with arms raised celebrating achievement against dramatic sunrise sky symbolizing resilience"
        },
        {
            id: 3,
            title: "Crafting Compelling Characters: The Art of Bringing Fiction to Life",
            excerpt: "Deep dive into character development techniques that create memorable, authentic personalities readers can't forget.",
            category: "Creative Writing",
            date: "2026-01-08",
            readTime: "10 min read",
            views: "1.5K",
            image: "https://images.unsplash.com/photo-1728625932812-cb62084943de",
            imageAlt: "Open notebook with handwritten character sketches and coffee cup on wooden table showing creative writing process"
        },
        {
            id: 4,
            title: "Hidden Gems of Southeast Asia: Off-the-Beaten-Path Adventures",
            excerpt: "Discovering authentic cultural experiences and breathtaking landscapes beyond the typical tourist destinations.",
            category: "Travel",
            date: "2026-01-07",
            readTime: "12 min read",
            views: "3.1K",
            image: "https://images.unsplash.com/photo-1627205897207-f763375e2c4d",
            imageAlt: "Traditional wooden boat on crystal clear turquoise water near limestone cliffs in hidden Southeast Asian lagoon"
        }];


    const stats = {
        totalPosts: 276,
        totalCategories: 6,
        totalTags: 48,
        thisMonth: 23
    };

    useEffect(() => {
        if (selectedCategory) {
            setSearchParams({ category: selectedCategory });
        } else {
            setSearchParams({});
        }
    }, [selectedCategory, setSearchParams]);

    const handleTagToggle = (tagName) => {
        if (tagName === null) {
            setSelectedTags([]);
        } else {
            setSelectedTags((prev) =>
                prev?.includes(tagName) ?
                    prev?.filter((t) => t !== tagName) :
                    [...prev, tagName]
            );
        }
    };

    const handleCategorySelect = (slug) => {
        setSelectedCategory(slug);
        setSelectedSubcategory(null);
        setSearchQuery('');
    };

    const handleSubcategorySelect = (subcategoryId) => {
        setSelectedSubcategory(subcategoryId);
    };

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    const getCurrentCategoryName = () => {
        if (!selectedCategory) return null;
        const category = categories?.find((c) => c?.slug === selectedCategory);
        return category ? category?.name : null;
    };

    const filteredCategories = selectedCategory ?
        categories?.filter((c) => c?.slug === selectedCategory) :
        categories;

    return (
        <main className="pt-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
                <Breadcrumbs />

                <div className="mb-8 md:mb-12">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
                        <div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 font-headline">
                                {selectedCategory ? getCurrentCategoryName() : 'Explore Categories'}
                            </h1>
                            <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                                {selectedCategory ?
                                    'Dive deep into curated content and discover insights that matter to you' : 'Navigate through our knowledge archive and discover content organized by themes and topics'}
                            </p>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Button
                                variant={viewMode === 'grid' ? 'default' : 'outline'}
                                size="sm"
                                iconName="Grid"
                                onClick={() => setViewMode('grid')}
                                className="flex-shrink-0">

                                Grid
                            </Button>
                            <Button
                                variant={viewMode === 'list' ? 'default' : 'outline'}
                                size="sm"
                                iconName="List"
                                onClick={() => setViewMode('list')}
                                className="flex-shrink-0">

                                List
                            </Button>
                        </div>
                    </div>

                    <CategoryStats stats={stats} />
                </div>

                {selectedCategory &&
                    <div className="mb-6">
                        <Button
                            variant="outline"
                            size="sm"
                            iconName="ArrowLeft"
                            iconPosition="left"
                            onClick={() => handleCategorySelect(null)}>

                            Back to All Categories
                        </Button>
                    </div>
                }

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
                    <div className="lg:col-span-1 space-y-6">
                        <SearchWithinCategory
                            searchQuery={searchQuery}
                            onSearchChange={handleSearchChange}
                            categoryName={getCurrentCategoryName()} />


                        {selectedCategory &&
                            <SubcategoryList
                                subcategories={subcategories}
                                selectedSubcategory={selectedSubcategory}
                                onSubcategorySelect={handleSubcategorySelect} />

                        }

                        <TagCloud
                            tags={tags}
                            selectedTags={selectedTags}
                            onTagToggle={handleTagToggle} />


                        <div className="bg-card rounded-lg p-4 md:p-6 shadow-sm">
                            <div className="flex items-center space-x-2 mb-4">
                                <Icon name="Rss" size={20} className="text-primary" />
                                <h3 className="text-lg font-bold text-foreground font-headline">
                                    Subscribe
                                </h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Get category updates delivered to your feed reader
                            </p>
                            <Button
                                variant="outline"
                                size="sm"
                                fullWidth
                                iconName="Rss"
                                iconPosition="left">

                                RSS Feed
                            </Button>
                        </div>
                    </div>

                    <div className="lg:col-span-3 space-y-8">
                        {!selectedCategory &&
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl md:text-3xl font-bold text-foreground font-headline">
                                        All Categories
                                    </h2>
                                    <span className="text-sm text-muted-foreground">
                                        {categories?.length} categories
                                    </span>
                                </div>

                                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`
                                }>
                                    {filteredCategories?.map((category) =>
                                        <CategoryCard
                                            key={category?.id}
                                            category={category} />

                                    )}
                                </div>
                            </div>
                        }

                        {selectedCategory &&
                            <>
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h2 className="text-2xl md:text-3xl font-bold text-foreground font-headline">
                                            Featured Posts
                                        </h2>
                                        <span className="text-sm text-muted-foreground">
                                            {featuredPosts?.length} posts
                                        </span>
                                    </div>

                                    <div className="space-y-4">
                                        {featuredPosts?.map((post) =>
                                            <FeaturedPostCard key={post?.id} post={post} />
                                        )}
                                    </div>
                                </div>

                                <div className="bg-muted rounded-lg p-6 md:p-8 text-center">
                                    <Icon name="BookOpen" size={48} className="text-primary mx-auto mb-4" />
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 font-headline">
                                        Discover More Content
                                    </h3>
                                    <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                        Explore our complete collection of articles, insights, and stories across all categories
                                    </p>
                                    <Button
                                        variant="default"
                                        iconName="Search"
                                        iconPosition="left"
                                        asChild>

                                        <a href="/search-discovery">Browse All Posts</a>
                                    </Button>
                                </div>
                            </>
                        }
                    </div>
                </div>
            </div>
        </main>);

};

export default CategoryExplorer;