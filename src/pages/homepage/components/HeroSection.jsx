import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const featuredPosts = [
        {
            id: 1,
            title: "The Art of Mindful Living in a Digital Age",
            excerpt: "Discovering balance and presence in our hyperconnected world through intentional practices and conscious choices that transform daily routines into meaningful experiences.",
            image: "https://images.unsplash.com/photo-1596737118984-750b79a762f7",
            imageAlt: "Peaceful woman meditating in lotus position on wooden deck surrounded by lush green plants in morning sunlight",
            category: "Lifestyle",
            readTime: "8 min read",
            date: "January 10, 2026"
        },
        {
            id: 2,
            title: "Building Authentic Connections Through Storytelling",
            excerpt: "How personal narratives create bridges between hearts and minds, fostering genuine relationships that transcend digital boundaries and create lasting impact.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1feda45ac-1767136399160.png",
            imageAlt: "Diverse group of young professionals collaborating around laptop in modern bright office space with natural lighting",
            category: "Personal Growth",
            readTime: "6 min read",
            date: "January 8, 2026"
        },
        {
            id: 3,
            title: "Creative Rituals That Transform Your Morning",
            excerpt: "Exploring morning practices that ignite creativity, boost productivity, and set the tone for purposeful days filled with intention and inspiration.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1510e191a-1766746389632.png",
            imageAlt: "Person writing in journal with coffee cup and flowers on wooden table bathed in warm morning sunlight",
            category: "Productivity",
            readTime: "7 min read",
            date: "January 5, 2026"
        }];


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % featuredPosts?.length);
        }, 6000);

        return () => clearInterval(timer);
    }, [featuredPosts?.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const currentPost = featuredPosts?.[currentSlide];

    return (
        <section className="relative bg-gradient-to-br from-muted via-background to-muted overflow-hidden">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 md:px-4 md:py-1.5 bg-accent/10 rounded-full">
                            <Icon name="Sparkles" size={16} className="text-accent" />
                            <span className="text-xs md:text-sm font-semibold text-accent">Featured Story</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                            {currentPost?.title}
                        </h1>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {currentPost?.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center space-x-2">
                                <Icon name="Calendar" size={16} />
                                <span>{currentPost?.date}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon name="Clock" size={16} />
                                <span>{currentPost?.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Icon name="Tag" size={16} />
                                <span>{currentPost?.category}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                            <Button
                                variant="default"
                                size="lg"
                                iconName="BookOpen"
                                iconPosition="left"
                                asChild>

                                <Link to="/blog-details">Read Full Story</Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                iconName="Grid"
                                iconPosition="left"
                                asChild>

                                <Link to="/category-explorer">Explore Categories</Link>
                            </Button>
                        </div>

                        <div className="flex items-center space-x-2 pt-4 md:pt-6">
                            {featuredPosts?.map((_, index) =>
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ?
                                            'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
                                    }
                                    aria-label={`Go to slide ${index + 1}`} />

                            )}
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={currentPost?.image}
                                alt={currentPost?.imageAlt}
                                className="w-full h-full object-cover" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                                <div className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs md:text-sm font-semibold rounded-full mb-2">
                                    {currentPost?.category}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default HeroSection;