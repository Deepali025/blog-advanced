import React, { createContext, useState, useEffect, useContext } from 'react';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
    // Initial mock data moved from RecentPosts
    const initialPosts = [
        {
            id: 1,
            title: "Finding Your Voice in a Noisy Digital World",
            excerpt: "Authentic self-expression starts with understanding your unique perspective and having the courage to share it with the world.",
            image: "https://images.unsplash.com/photo-1730343464327-38dd49811ada",
            imageAlt: "Young woman with headphones working on laptop in cozy home office with plants and natural lighting",
            category: "Personal Growth",
            readTime: "5 min read",
            date: "January 9, 2026",
            views: "2.3K",
            likes: 156,
            content: "In a world saturated with content, finding your unique voice can feel daunting..." // Shim for existing logic
        },
        {
            id: 2,
            title: "The Power of Intentional Morning Routines",
            excerpt: "How the first hour of your day shapes everything that follows, and why small rituals create profound transformations.",
            image: "https://images.unsplash.com/photo-1626989557142-5af835c039de",
            imageAlt: "Peaceful morning scene with coffee cup, journal, and flowers on wooden table with soft sunlight streaming through window",
            category: "Productivity",
            readTime: "7 min read",
            date: "January 7, 2026",
            views: "3.1K",
            likes: 203,
            content: "Morning routines are more than just a checklist of tasks..."
        },
        {
            id: 3,
            title: "Cultivating Creativity Through Daily Practice",
            excerpt: "Creativity isn't a gift reserved for the chosen few—it's a muscle that grows stronger with consistent, intentional exercise.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cde5ca79-1764779343908.png",
            imageAlt: "Artist's hands painting colorful abstract artwork on canvas in bright studio space with art supplies scattered around",
            category: "Creativity",
            readTime: "6 min read",
            date: "January 6, 2026",
            views: "1.8K",
            likes: 142,
            content: "Many people believe they aren't creative, but creativity is a habit..."
        },
        {
            id: 4,
            title: "Building Meaningful Connections in Remote Times",
            excerpt: "Distance doesn't diminish depth—discover how to foster authentic relationships in our increasingly digital landscape.",
            image: "https://images.unsplash.com/photo-1664575599730-0814817939de",
            imageAlt: "Two friends having video call on laptop, smiling and waving at each other in warm home environment",
            category: "Relationships",
            readTime: "8 min read",
            date: "January 4, 2026",
            views: "2.7K",
            likes: 189,
            content: "Remote work and digital communication have changed how we connect..."
        },
        {
            id: 5,
            title: "The Art of Slow Living in Fast Times",
            excerpt: "Embracing a slower pace doesn't mean doing less—it means being more present with what truly matters in your life.",
            image: "https://images.unsplash.com/photo-1575260323076-b814720c727f",
            imageAlt: "Serene woman reading book in hammock surrounded by nature with dappled sunlight filtering through trees",
            category: "Lifestyle",
            readTime: "9 min read",
            date: "January 2, 2026",
            views: "4.2K",
            likes: 267,
            content: "Slow living is a mindset that prioritizes quality over quantity..."
        },
        {
            id: 6,
            title: "Transforming Failure into Fuel for Growth",
            excerpt: "Every setback carries seeds of wisdom—learn to harvest lessons from life's challenges and emerge stronger than before.",
            image: "https://images.unsplash.com/photo-1586230916407-a1ac5cefe96e",
            imageAlt: "Determined athlete climbing rocky mountain path during sunrise with dramatic sky in background",
            category: "Personal Growth",
            readTime: "7 min read",
            date: "December 30, 2025",
            views: "3.5K",
            likes: 221,
            content: "Failure is often seen as a dead end, but it is actually a detour..."
        }
    ];

    const [blogs, setBlogs] = useState(() => {
        const savedBlogs = localStorage.getItem('blogs');
        return savedBlogs ? JSON.parse(savedBlogs) : initialPosts;
    });

    useEffect(() => {
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }, [blogs]);

    const addBlog = (newBlog) => {
        const blogWithId = {
            ...newBlog,
            id: Date.now(), // Simple ID generation
            date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
            views: 0,
            likes: 0,
            readTime: `${Math.ceil((newBlog.content?.length || 0) / 1000)} min read`
        };
        setBlogs(prevBlogs => [blogWithId, ...prevBlogs]);
        return blogWithId;
    };

    const getBlogById = (id) => {
        return blogs.find(blog => blog.id.toString() === id.toString());
    };

    return (
        <BlogContext.Provider value={{ blogs, addBlog, getBlogById }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;
