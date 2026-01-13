import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';

const NewsletterSection = () => {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [error, setError] = useState('');

    const benefits = [
        {
            icon: "Mail",
            title: "Weekly Insights",
            description: "Curated stories delivered every Sunday morning"
        },
        {
            icon: "Sparkles",
            title: "Exclusive Content",
            description: "Behind-the-scenes thoughts and early access"
        },
        {
            icon: "Users",
            title: "Community Access",
            description: "Join conversations with fellow readers"
        }
    ];

    const handleSubmit = (e) => {
        e?.preventDefault();
        setError('');

        if (!email) {
            setError('Please enter your email address');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex?.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsSubscribed(true);
        setEmail('');
    };

    if (isSubscribed) {
        return (
            <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-success/10 rounded-full mb-4 md:mb-6">
                        <Icon name="CheckCircle" size={32} className="text-success" />
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
                        Welcome to the Community!
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                        Thank you for subscribing! Check your inbox for a welcome message and your first curated story collection.
                    </p>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => setIsSubscribed(false)}
                    >
                        Subscribe Another Email
                    </Button>
                </div>
            </section>
        );
    }

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="newsletter-form">
                    <div className="text-center mb-8 md:mb-12">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 md:px-4 md:py-1.5 bg-accent/10 rounded-full mb-4">
                            <Icon name="Mail" size={16} className="text-accent" />
                            <span className="text-xs md:text-sm font-semibold text-accent">Join the Community</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                            Never Miss a Story
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Subscribe to receive thoughtfully curated stories, exclusive insights, and early access to new content directly in your inbox.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                        {benefits?.map((benefit) => (
                            <div key={benefit?.title} className="text-center p-4 md:p-6 bg-background rounded-lg">
                                <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full mb-3 md:mb-4">
                                    <Icon name={benefit?.icon} size={24} className="text-primary" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                                    {benefit?.title}
                                </h3>
                                <p className="text-sm md:text-base text-muted-foreground">
                                    {benefit?.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <div className="flex-1">
                                <Input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e?.target?.value)}
                                    error={error}
                                    className="w-full"
                                />
                            </div>
                            <Button
                                type="submit"
                                variant="default"
                                size="lg"
                                iconName="Send"
                                iconPosition="right"
                                className="sm:w-auto"
                            >
                                Subscribe Now
                            </Button>
                        </div>
                        <p className="text-xs md:text-sm text-muted-foreground text-center mt-4">
                            Join 12,500+ readers who start their week with inspiration. Unsubscribe anytime.
                        </p>
                    </form>

                    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12 pt-8 border-t border-border">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Shield" size={16} className="text-success" />
                            <span>Privacy Protected</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="CheckCircle" size={16} className="text-success" />
                            <span>No Spam Ever</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Mail" size={16} className="text-success" />
                            <span>Weekly Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;