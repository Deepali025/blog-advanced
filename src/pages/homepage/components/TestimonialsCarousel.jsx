import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: "Michael Chen",
            role: "Creative Director",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f1f8d827-1763294920861.png",
            avatarAlt: "Professional headshot of Asian man with short black hair wearing navy blue shirt smiling warmly",
            content: "Sarah\'s writing has this incredible ability to make you pause and reflect. Her stories about mindful living completely transformed how I approach my daily routine. Every post feels like a conversation with a wise friend.",
            rating: 5,
            date: "December 2025"
        },
        {
            id: 2,
            name: "Emily Rodriguez",
            role: "Entrepreneur",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1bd59ef94-1763300945642.png",
            avatarAlt: "Professional portrait of Hispanic woman with long dark hair in elegant white blouse with confident smile",
            content: "I've been following PersonalBlogHub for over two years, and it's become my go-to source for authentic inspiration. The depth of insight combined with practical wisdom is rare. Sarah's voice is both relatable and profound.",
            rating: 5,
            date: "January 2026"
        },
        {
            id: 3,
            name: "David Thompson",
            role: "Software Engineer",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_16081d03e-1763296347731.png",
            avatarAlt: "Casual portrait of Caucasian man with beard wearing gray t-shirt with friendly expression outdoors",
            content: "As someone who struggles with work-life balance, Sarah's posts on intentional living have been game-changing. Her storytelling makes complex ideas accessible and actionable. This blog is a genuine treasure.",
            rating: 5,
            date: "November 2025"
        },
        {
            id: 4,
            name: "Priya Sharma",
            role: "Life Coach",
            avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13336fa15-1763296279999.png",
            avatarAlt: "Professional headshot of Indian woman with long black hair wearing teal blazer with warm smile",
            content: "The authenticity in Sarah's writing is refreshing. She shares vulnerabilities alongside victories, making her content deeply human and relatable. I often share her posts with my coaching clients.",
            rating: 5,
            date: "December 2025"
        }];


    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials?.length);
        }, 7000);

        return () => clearInterval(timer);
    }, [testimonials?.length]);

    const goToTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials?.[currentIndex];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-muted">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 md:px-4 md:py-1.5 bg-accent/10 rounded-full mb-4">
                        <Icon name="MessageCircle" size={16} className="text-accent" />
                        <span className="text-xs md:text-sm font-semibold text-accent">Reader Stories</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                        What Readers Are Saying
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of readers who have found inspiration, insight, and authentic connection through these stories.
                    </p>
                </div>

                <div className="relative">
                    <div className="testimonial-card max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                            <div className="flex-shrink-0">
                                <div className="author-avatar w-20 h-20 md:w-24 md:h-24 overflow-hidden">
                                    <Image
                                        src={currentTestimonial?.avatar}
                                        alt={currentTestimonial?.avatarAlt}
                                        className="w-full h-full object-cover" />

                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start space-x-1 mb-3 md:mb-4">
                                    {[...Array(currentTestimonial?.rating)]?.map((_, i) =>
                                        <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                                    )}
                                </div>

                                <blockquote className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-4 md:mb-6">
                                    "{currentTestimonial?.content}"
                                </blockquote>

                                <div className="space-y-1">
                                    <div className="font-bold text-lg md:text-xl text-foreground">
                                        {currentTestimonial?.name}
                                    </div>
                                    <div className="text-sm md:text-base text-muted-foreground">
                                        {currentTestimonial?.role}
                                    </div>
                                    <div className="flex items-center justify-center md:justify-start space-x-2 text-xs md:text-sm text-muted-foreground">
                                        <Icon name="Calendar" size={14} />
                                        <span>{currentTestimonial?.date}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-2 mt-8 md:mt-12">
                        {testimonials?.map((_, index) =>
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ?
                                        'w-8 bg-primary' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'}`
                                }
                                aria-label={`Go to testimonial ${index + 1}`} />

                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
                    <div className="text-center p-4 md:p-6 bg-background rounded-lg">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                            12.5K+
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                            Active Readers
                        </div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-background rounded-lg">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                            127
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                            Stories Published
                        </div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-background rounded-lg">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                            98%
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                            Reader Satisfaction
                        </div>
                    </div>
                    <div className="text-center p-4 md:p-6 bg-background rounded-lg">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                            5+
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">
                            Years Writing
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default TestimonialsCarousel;