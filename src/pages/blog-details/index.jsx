import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBlog } from '../../context/BlogContext';
import { Helmet } from 'react-helmet';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import ArticleHeader from './components/ArticleHeader';
import ArticleImage from './components/ArticleImage';
import ArticleContent from './components/ArticleContent';
import AuthorCard from './components/AuthorCard';
import SocialShare from './components/SocialShare';
import TableOfContents from './components/TableOfContents';
import RelatedPosts from './components/RelatedPosts';
import CommentSection from './components/CommentSection';
import ReadingProgress from './components/ReadingProgress';
import NewsletterCTA from './components/NewsletterCTA';

const BlogDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { getBlogById } = useBlog();

    // Fetch blog from context
    const blog = getBlogById(id);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!blog) {
            // Optional: navigate to 404 if not found
            // navigate('/not-found');
        }
    }, [id, blog, navigate]);

    if (!blog) {
        return (
            <div className="flex items-center justify-center py-20">
                <p className="text-xl text-muted-foreground">Blog post not found.</p>
            </div>
        );
    }

    const article = {
        id: blog.id,
        title: blog.title,
        excerpt: blog.excerpt,
        category: blog.category,
        tags: blog.tags || [blog.category], // Fallback if no tags
        publishDate: blog.date, // Use date string directly or parse if needed
        readTime: blog.readTime,
        views: blog.views,
        featuredImage: blog.image,
        featuredImageAlt: blog.imageAlt,
        featuredImageCaption: blog.imageAlt
    };

    const author = {
        name: "Sarah Mitchell",
        title: "Wellness Coach & Mindfulness Advocate",
        avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14da91c34-1763294780479.png",
        avatarAlt: "Professional headshot of Sarah Mitchell, wellness coach with warm smile, shoulder-length brown hair, wearing elegant navy blazer against soft gray background",
        bio: "Sarah is a certified wellness coach with over 10 years of experience helping individuals find balance and peace in their lives. She combines ancient mindfulness practices with modern psychology to create practical, accessible approaches to mental wellbeing.",
        articlesCount: 47,
        followers: 12500
    };

    // Handle both mock structured content (array) and simple string content
    const contentSections = Array.isArray(blog.content) ? blog.content : [
        {
            id: "content",
            title: "", // No title for simple content
            paragraphs: blog.content ? blog.content.split('\n\n') : ["No content available."]
        }
    ];


    const relatedPosts = [
        {
            id: 2,
            title: "Building Resilience: Strategies for Emotional Strength",
            excerpt: "Learn how to develop emotional resilience and bounce back from life's challenges with greater ease and confidence.",
            category: "Personal Growth",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_188c84079-1766746352303.png",
            imageAlt: "Determined athlete climbing steep mountain trail at sunrise demonstrating physical and mental resilience with dramatic landscape in background",
            publishDate: "2026-01-03T14:30:00",
            readTime: 10,
            views: 6234
        },
        {
            id: 3,
            title: "The Power of Morning Rituals: Starting Your Day Right",
            excerpt: "Discover how intentional morning routines can transform your productivity, mood, and overall life satisfaction.",
            category: "Productivity",
            image: "https://images.unsplash.com/photo-1591088761584-d3f8540fc587",
            imageAlt: "Peaceful morning scene with person journaling at wooden desk near window with coffee cup and plants bathed in golden sunrise light",
            publishDate: "2025-12-28T09:00:00",
            readTime: 8,
            views: 9123
        },
        {
            id: 4,
            title: "Digital Detox: Reclaiming Your Attention in the Age of Distraction",
            excerpt: "Practical strategies for reducing screen time and creating healthier relationships with technology.",
            category: "Wellness",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c260f1ac-1767481035079.png",
            imageAlt: "Person sitting peacefully in nature reading physical book with smartphone placed face down on grass nearby symbolizing digital detox",
            publishDate: "2025-12-20T16:45:00",
            readTime: 11,
            views: 7856
        }];


    const initialComments = [
        {
            id: 1,
            author: "Michael Chen",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_18177d561-1763301900808.png",
            avatarAlt: "Professional headshot of Asian man with short black hair wearing navy blue business suit with confident friendly expression",
            content: "This article really resonated with me. I've been struggling with anxiety for years, and your practical approach to mindfulness makes it feel achievable. Starting with just 2 minutes a day seems so much more manageable than the hour-long sessions I thought I needed. Thank you for this perspective!",
            timestamp: "2026-01-06T08:30:00",
            likes: 24,
            replies: [
                {
                    id: 101,
                    author: "Sarah Mitchell",
                    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14da91c34-1763294780479.png",
                    avatarAlt: "Professional headshot of Sarah Mitchell, wellness coach with warm smile, shoulder-length brown hair, wearing elegant navy blazer against soft gray background",
                    content: "I'm so glad this helped, Michael! Remember, consistency is more important than duration. Those 2 minutes will naturally expand as the practice becomes part of your routine. Keep me updated on your progress!",
                    timestamp: "2026-01-06T10:15:00",
                    likes: 12
                }]

        },
        {
            id: 2,
            author: "Emma Rodriguez",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11719be22-1763294717708.png",
            avatarAlt: "Warm portrait of Hispanic woman with long dark wavy hair wearing casual cream sweater with genuine smile and kind eyes",
            content: "I've been practicing mindfulness for about 6 months now, and the changes have been remarkable. My relationships have improved because I'm actually present during conversations instead of mentally planning my next task. The section about mindful eating particularly struck a chord – I realized I couldn't remember the last time I actually tasted my food!",
            timestamp: "2026-01-07T14:20:00",
            likes: 18,
            replies: []
        },
        {
            id: 3,
            author: "David Thompson",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1491ea402-1763301386159.png",
            avatarAlt: "Professional portrait of middle-aged Caucasian man with salt and pepper hair wearing gray blazer with warm approachable smile",
            content: "As someone who was skeptical about mindfulness, I appreciate the scientific approach you took in this article. The brain imaging studies you mentioned convinced me to give it a try. I'm on day 15 of my practice, and while I'm not experiencing any dramatic changes yet, I do notice I'm slightly less reactive to stressful situations at work.",
            timestamp: "2026-01-08T11:45:00",
            likes: 31,
            replies: [
                {
                    id: 102,
                    author: "Sarah Mitchell",
                    avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_14da91c34-1763294780479.png",
                    avatarAlt: "Professional headshot of Sarah Mitchell, wellness coach with warm smile, shoulder-length brown hair, wearing elegant navy blazer against soft gray background",
                    content: "David, that's exactly the kind of subtle shift that indicates the practice is working! Those small changes in reactivity are the foundation. The dramatic transformations people talk about are really just the accumulation of these tiny daily improvements. Keep going!",
                    timestamp: "2026-01-08T13:30:00",
                    likes: 15
                }]

        },
        {
            id: 4,
            author: "Lisa Anderson",
            avatar: "https://images.unsplash.com/photo-1684306474841-e4f1aaf391d2",
            avatarAlt: "Bright portrait of young blonde woman with blue eyes wearing light pink blouse with cheerful energetic expression",
            content: "I love how you addressed the 'too busy to meditate' excuse. That's been my go-to reason for years. Your suggestion to use routine activities as mindfulness anchors is brilliant. I started with my morning coffee – just sitting and actually experiencing it instead of scrolling through emails. It's become my favorite part of the day!",
            timestamp: "2026-01-09T09:00:00",
            likes: 27,
            replies: []
        }];


    const tableOfContentsSections = contentSections?.map((section) => ({
        id: section?.id,
        title: section?.title
    }));

    return (
        <>
            <Helmet>
                <title>{article?.title} | PersonalBlogHub</title>
                <meta name="description" content={article?.excerpt} />
                <meta property="og:title" content={article?.title} />
                <meta property="og:description" content={article?.excerpt} />
                <meta property="og:image" content={article?.featuredImage} />
                <meta property="og:type" content="article" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={article?.title} />
                <meta name="twitter:description" content={article?.excerpt} />
                <meta name="twitter:image" content={article?.featuredImage} />
            </Helmet>
            <ReadingProgress />
            <main className="bg-background pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <Breadcrumbs />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                        <aside className="hidden lg:block lg:col-span-2">
                            <SocialShare article={article} />
                        </aside>

                        <article className="lg:col-span-7">
                            <ArticleHeader article={article} />
                            <ArticleImage
                                src={article?.featuredImage}
                                alt={article?.featuredImageAlt}
                                caption={article?.featuredImageCaption} />

                            <ArticleContent content={contentSections} />

                            <div className="lg:hidden mt-8">
                                <SocialShare article={article} />
                            </div>

                            <div className="border-t border-border pt-8 lg:pt-12 mt-8 lg:mt-12">
                                <AuthorCard author={author} />
                            </div>

                            <NewsletterCTA />
                            <RelatedPosts posts={relatedPosts} />
                            <CommentSection initialComments={initialComments} />
                        </article>

                        <aside className="lg:col-span-3">
                            <TableOfContents sections={tableOfContentsSections} />
                        </aside>
                    </div>
                </div>
            </main>
        </>);

};

export default BlogDetails;