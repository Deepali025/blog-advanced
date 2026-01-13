import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import SearchSuggestions from './components/SearchSuggestions';
import TrendingTopics from './components/TrendingTopics';
import SearchResultCard from './components/SearchResultCard';
import SavedSearches from './components/SavedSearches';
import EmptyState from './components/EmptyState';
import SearchAnalytics from './components/SearchAnalytics';
import RelatedSearches from './components/RelatedSearches';

const SearchDiscovery = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [isVoiceSearching, setIsVoiceSearching] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [filters, setFilters] = useState({
        contentType: 'all',
        dateRange: 'all',
        sortBy: 'relevance',
        showFeatured: false
    });

    const mockBlogResults = [
        {
            id: 1,
            title: "The Art of Mindful Living in a Digital Age",
            excerpt: "Exploring practical strategies for maintaining mental clarity and emotional balance while navigating our hyperconnected world. Discover techniques that help you stay present and intentional.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1290a6e8a-1768089216792.png",
            imageAlt: "Person meditating peacefully in minimalist room with soft natural lighting and plants",
            category: "Lifestyle",
            author: "Sarah Mitchell",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1328db6c3-1763296012066.png",
            authorAvatarAlt: "Professional headshot of woman with brown hair in casual blue sweater smiling warmly",
            publishedDate: "2026-01-08",
            readTime: 8,
            views: 12450,
            featured: true,
            tags: ["mindfulness", "wellness", "digital-detox"]
        },
        {
            id: 2,
            title: "Building Sustainable Habits That Actually Stick",
            excerpt: "Science-backed approaches to habit formation that go beyond willpower. Learn how to design your environment and routines for lasting behavioral change.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1510e191a-1766746389632.png",
            imageAlt: "Open journal with handwritten goals and coffee cup on wooden desk with morning sunlight",
            category: "Personal Growth",
            author: "Michael Chen",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f451908d-1763295534283.png",
            authorAvatarAlt: "Professional headshot of Asian man with glasses in navy blazer with confident smile",
            publishedDate: "2026-01-06",
            readTime: 12,
            views: 8920,
            featured: false,
            tags: ["habits", "productivity", "self-improvement"]
        },
        {
            id: 3,
            title: "The Future of Remote Work: Trends and Predictions",
            excerpt: "An in-depth analysis of how remote work is reshaping organizational culture, productivity metrics, and work-life integration in the post-pandemic era.",
            image: "https://images.unsplash.com/photo-1666618207644-4de0226a3f85",
            imageAlt: "Modern home office setup with laptop, dual monitors, and ergonomic chair near large window",
            category: "Career",
            author: "Emily Rodriguez",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_162a57531-1763296100992.png",
            authorAvatarAlt: "Professional headshot of Hispanic woman with long dark hair in white blouse smiling",
            publishedDate: "2026-01-05",
            readTime: 10,
            views: 15670,
            featured: true,
            tags: ["remote-work", "career", "future-of-work"]
        },
        {
            id: 4,
            title: "Mastering the Art of Deep Work in Shallow Times",
            excerpt: "Practical frameworks for cultivating focused attention and producing high-quality work in an age of constant distraction and information overload.",
            image: "https://images.unsplash.com/photo-1611574572158-a1a3857545de",
            imageAlt: "Person working intensely at desk with books and laptop in quiet library setting",
            category: "Productivity",
            author: "David Park",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b1a8152e-1763295915546.png",
            authorAvatarAlt: "Professional headshot of young man with short black hair in gray sweater with friendly expression",
            publishedDate: "2026-01-04",
            readTime: 15,
            views: 11230,
            featured: false,
            tags: ["deep-work", "focus", "productivity"]
        },
        {
            id: 5,
            title: "Nutrition Myths Debunked: What Science Really Says",
            excerpt: "Separating fact from fiction in the world of nutrition. Evidence-based insights into common dietary beliefs and what research actually supports.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_10dbf8d4b-1766540408813.png",
            imageAlt: "Colorful array of fresh vegetables, fruits, and whole grains arranged on marble countertop",
            category: "Health",
            author: "Dr. Lisa Thompson",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1dd1f8e81-1763296204622.png",
            authorAvatarAlt: "Professional headshot of woman with blonde hair in white medical coat with stethoscope",
            publishedDate: "2026-01-03",
            readTime: 9,
            views: 9840,
            featured: true,
            tags: ["nutrition", "health", "science"]
        },
        {
            id: 6,
            title: "Creative Problem Solving: Thinking Outside the Box",
            excerpt: "Innovative techniques and mental models for approaching complex challenges with fresh perspectives and generating breakthrough solutions.",
            image: "https://images.unsplash.com/photo-1735639013995-086e648eaa38",
            imageAlt: "Colorful sticky notes and diagrams on whiteboard showing creative brainstorming session",
            category: "Innovation",
            author: "James Wilson",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e29f8ad9-1763291929812.png",
            authorAvatarAlt: "Professional headshot of man with beard in casual denim shirt with creative expression",
            publishedDate: "2026-01-02",
            readTime: 11,
            views: 7650,
            featured: false,
            tags: ["creativity", "problem-solving", "innovation"]
        },
        {
            id: 7,
            title: "Financial Independence: A Practical Roadmap",
            excerpt: "Step-by-step guide to building wealth and achieving financial freedom through smart investing, budgeting strategies, and long-term planning.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_19597ac80-1764678468099.png",
            imageAlt: "Calculator, financial charts, and coins on desk representing personal finance planning",
            category: "Finance",
            author: "Rachel Green",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_17187f2d5-1763301571161.png",
            authorAvatarAlt: "Professional headshot of woman with red hair in business suit with confident smile",
            publishedDate: "2026-01-01",
            readTime: 14,
            views: 13420,
            featured: true,
            tags: ["finance", "investing", "wealth-building"]
        },
        {
            id: 8,
            title: "The Psychology of Motivation: What Really Drives Us",
            excerpt: "Understanding intrinsic and extrinsic motivation factors and how to harness them for personal and professional achievement.",
            image: "https://images.unsplash.com/photo-1542591886-116a68c62325",
            imageAlt: "Person climbing mountain at sunrise symbolizing motivation and achievement",
            category: "Psychology",
            author: "Dr. Marcus Johnson",
            authorAvatar: "https://img.rocket.new/generatedImages/rocket_gen_img_193b6a613-1763293929139.png",
            authorAvatarAlt: "Professional headshot of African American man with glasses in dark suit with warm smile",
            publishedDate: "2025-12-30",
            readTime: 10,
            views: 10560,
            featured: false,
            tags: ["motivation", "psychology", "achievement"]
        }];


    const mockTrendingTopics = [
        { id: 1, name: "Mindfulness", count: "2.4k" },
        { id: 2, name: "Remote Work", count: "1.8k" },
        { id: 3, name: "Productivity", count: "1.5k" },
        { id: 4, name: "Personal Growth", count: "1.2k" },
        { id: 5, name: "Health & Wellness", count: "980" },
        { id: 6, name: "Financial Freedom", count: "850" }];


    const mockSavedSearches = [
        { id: 1, query: "productivity tips", resultCount: 45, savedDate: "2 days ago" },
        { id: 2, query: "mindfulness practices", resultCount: 32, savedDate: "1 week ago" },
        { id: 3, query: "career development", resultCount: 28, savedDate: "2 weeks ago" }];


    const mockSearchAnalytics = [
        { id: 1, query: "remote work tips", searchCount: 3420, percentage: 100 },
        { id: 2, query: "healthy habits", searchCount: 2890, percentage: 84 },
        { id: 3, query: "productivity hacks", searchCount: 2340, percentage: 68 },
        { id: 4, query: "financial planning", searchCount: 1950, percentage: 57 },
        { id: 5, query: "mindfulness meditation", searchCount: 1680, percentage: 49 }];


    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    useEffect(() => {
        if (debouncedQuery) {
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    }, [debouncedQuery]);

    const searchSuggestions = useMemo(() => {
        if (!debouncedQuery) return [];

        const recentSearches = [
            { id: 1, text: "mindfulness techniques", type: "recent", count: 24 },
            { id: 2, text: "productivity strategies", type: "recent", count: 18 }];


        const trendingSuggestions = [
            { id: 3, text: "remote work best practices", type: "trending", count: 42 },
            { id: 4, text: "healthy lifestyle habits", type: "trending", count: 35 }];


        const allSuggestions = [...recentSearches, ...trendingSuggestions];
        return allSuggestions?.filter((s) =>
            s?.text?.toLowerCase()?.includes(debouncedQuery?.toLowerCase())
        );
    }, [debouncedQuery]);

    const relatedSearches = useMemo(() => {
        if (!debouncedQuery) return [];

        return [
            { id: 1, query: "mindfulness for beginners" },
            { id: 2, query: "meditation techniques" },
            { id: 3, query: "stress management tips" },
            { id: 4, query: "work-life balance strategies" }];

    }, [debouncedQuery]);

    const filteredResults = useMemo(() => {
        let results = [...mockBlogResults];

        if (debouncedQuery) {
            results = results?.filter((blog) =>
                blog?.title?.toLowerCase()?.includes(debouncedQuery?.toLowerCase()) ||
                blog?.excerpt?.toLowerCase()?.includes(debouncedQuery?.toLowerCase()) ||
                blog?.tags?.some((tag) => tag?.toLowerCase()?.includes(debouncedQuery?.toLowerCase()))
            );
        }

        if (filters?.contentType !== 'all') {
            results = results?.filter((blog) =>
                blog?.category?.toLowerCase() === filters?.contentType?.toLowerCase()
            );
        }

        if (filters?.showFeatured) {
            results = results?.filter((blog) => blog?.featured);
        }

        if (filters?.dateRange !== 'all') {
            const now = new Date();
            results = results?.filter((blog) => {
                const blogDate = new Date(blog.publishedDate);
                const diffTime = Math.abs(now - blogDate);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                switch (filters?.dateRange) {
                    case 'today': return diffDays === 0;
                    case 'week': return diffDays <= 7;
                    case 'month': return diffDays <= 30;
                    case 'year': return diffDays <= 365;
                    default: return true;
                }
            });
        }

        switch (filters?.sortBy) {
            case 'recent':
                results?.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
                break;
            case 'popular':
                results?.sort((a, b) => b?.views - a?.views);
                break;
            case 'oldest':
                results?.sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate));
                break;
            default:
                break;
        }

        return results;
    }, [debouncedQuery, filters]);

    const handleSearchChange = (value) => {
        setSearchQuery(value);
    };

    const handleVoiceSearch = () => {
        setIsVoiceSearching(!isVoiceSearching);
        if (!isVoiceSearching) {
            setTimeout(() => {
                setIsVoiceSearching(false);
                setSearchQuery("mindfulness practices");
            }, 2000);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setShowSuggestions(false);
    };

    const handleTopicClick = (topic) => {
        setSearchQuery(topic);
        setShowSuggestions(false);
    };

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
    };

    const handleClearFilters = () => {
        setFilters({
            contentType: 'all',
            dateRange: 'all',
            sortBy: 'relevance',
            showFeatured: false
        });
    };

    const handleSavedSearchClick = (query) => {
        setSearchQuery(query);
    };

    const handleDeleteSavedSearch = (id) => {
        console.log('Delete saved search:', id);
    };

    const handleClearSearch = () => {
        setSearchQuery('');
        setDebouncedQuery('');
    };

    const handleBrowseCategories = () => {
        navigate('/category-explorer');
    };

    const handleExportResults = () => {
        const exportData = filteredResults?.map((result) => ({
            title: result?.title,
            author: result?.author,
            category: result?.category,
            publishedDate: result?.publishedDate,
            views: result?.views,
            readTime: result?.readTime
        }));

        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `search-results-${new Date()?.toISOString()?.split('T')?.[0]}.json`;
        link?.click();
        URL.revokeObjectURL(url);
    };

    return (
        <>
            <Helmet>
                <title>Search & Discovery - PersonalBlogHub</title>
                <meta name="description" content="Discover insightful articles and stories. Advanced search with smart filters, trending topics, and personalized recommendations." />
            </Helmet>
            <main className="bg-background pt-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <Breadcrumbs />

                    <div className="mb-8 lg:mb-12">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                            Search & Discovery
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-3xl">
                            Find exactly what you're looking for with our advanced search and intelligent content recommendations
                        </p>
                    </div>

                    <div className="mb-8 relative">
                        <SearchBar
                            searchQuery={searchQuery}
                            onSearchChange={handleSearchChange}
                            onVoiceSearch={handleVoiceSearch}
                            isVoiceSearching={isVoiceSearching} />


                        {showSuggestions &&
                            <SearchSuggestions
                                suggestions={searchSuggestions}
                                onSuggestionClick={handleSuggestionClick}
                                searchQuery={debouncedQuery} />

                        }
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                        <aside className="lg:col-span-1">
                            <div className="space-y-6 lg:sticky lg:top-24">
                                <FilterPanel
                                    filters={filters}
                                    onFilterChange={handleFilterChange}
                                    onClearFilters={handleClearFilters}
                                    isOpen={isFilterOpen}
                                    onToggle={() => setIsFilterOpen(!isFilterOpen)} />

                                <div className="hidden lg:block">
                                    <SearchAnalytics analytics={mockSearchAnalytics} />
                                </div>
                            </div>
                        </aside>

                        <div className="lg:col-span-3">
                            {debouncedQuery &&
                                <div className="mb-6">
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                Found <span className="font-semibold text-foreground">{filteredResults?.length}</span> results for "{debouncedQuery}"
                                            </p>
                                        </div>

                                        <div className="flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                iconName="Download"
                                                iconPosition="left"
                                                onClick={handleExportResults}
                                                disabled={filteredResults?.length === 0}>
                                                Export
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                iconName="Bookmark"
                                                iconPosition="left">
                                                Save Search
                                            </Button>
                                        </div>
                                    </div>

                                    <RelatedSearches
                                        searches={relatedSearches}
                                        onSearchClick={handleSuggestionClick} />
                                </div>
                            }

                            {!debouncedQuery &&
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                                    <div className="lg:col-span-2">
                                        <TrendingTopics
                                            topics={mockTrendingTopics}
                                            onTopicClick={handleTopicClick} />
                                    </div>
                                    <div>
                                        <SavedSearches
                                            searches={mockSavedSearches}
                                            onSearchClick={handleSavedSearchClick}
                                            onDeleteSearch={handleDeleteSavedSearch} />
                                    </div>
                                </div>
                            }

                            {filteredResults?.length > 0 ?
                                <div className="space-y-6">
                                    {filteredResults?.map((result) =>
                                        <SearchResultCard
                                            key={result?.id}
                                            result={result}
                                            searchQuery={debouncedQuery} />
                                    )}
                                </div> :
                                debouncedQuery ?
                                    <EmptyState
                                        searchQuery={debouncedQuery}
                                        onClearSearch={handleClearSearch}
                                        onBrowseCategories={handleBrowseCategories} /> :
                                    <div className="text-center py-12 lg:py-16">
                                        <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-primary/10 rounded-full mb-6">
                                            <Icon name="Search" size={40} className="text-primary" />
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                                            Start Your Discovery Journey
                                        </h3>
                                        <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto">
                                            Use the search bar above to find articles, or explore trending topics and saved searches to discover great content
                                        </p>
                                    </div>
                            }

                            <div className="lg:hidden mt-8">
                                <SearchAnalytics analytics={mockSearchAnalytics} />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default SearchDiscovery;