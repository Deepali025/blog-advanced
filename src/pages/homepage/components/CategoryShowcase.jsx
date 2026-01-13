import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CategoryShowcase = () => {
    const categories = [
        {
            name: "Personal Growth",
            icon: "TrendingUp",
            description: "Self-discovery, mindfulness, and intentional living",
            postCount: 34,
            color: "from-blue-500/10 to-blue-600/10",
            iconColor: "text-blue-600"
        },
        {
            name: "Creativity",
            icon: "Palette",
            description: "Artistic expression, creative rituals, and inspiration",
            postCount: 28,
            color: "from-purple-500/10 to-purple-600/10",
            iconColor: "text-purple-600"
        },
        {
            name: "Productivity",
            icon: "Zap",
            description: "Effective habits, time management, and focus",
            postCount: 25,
            color: "from-amber-500/10 to-amber-600/10",
            iconColor: "text-amber-600"
        },
        {
            name: "Lifestyle",
            icon: "Coffee",
            description: "Daily rituals, slow living, and life balance",
            postCount: 22,
            color: "from-green-500/10 to-green-600/10",
            iconColor: "text-green-600"
        },
        {
            name: "Relationships",
            icon: "Heart",
            description: "Connection, communication, and authentic bonds",
            postCount: 18,
            color: "from-rose-500/10 to-rose-600/10",
            iconColor: "text-rose-600"
        }
    ];

    return (
        <section className="py-16 md:py-24 lg:py-32 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center space-x-2 px-3 py-1 md:px-4 md:py-1.5 bg-accent/10 rounded-full mb-4">
                        <Icon name="Grid" size={16} className="text-accent" />
                        <span className="text-xs md:text-sm font-semibold text-accent">Explore Topics</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                        Discover by Category
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                        Dive deep into topics that resonate with your journey. Each category offers unique perspectives and actionable insights.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 mt-12">
                    {categories?.map((category) => (
                        <Link
                            key={category?.name}
                            to="/category-explorer"
                            className="group relative p-6 md:p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 overflow-hidden"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${category?.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="relative">
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${category?.color} group-hover:scale-110 transition-transform duration-300`}>
                                        <Icon name={category?.icon} size={24} className={category?.iconColor} />
                                    </div>
                                    <div className="flex items-center space-x-1 px-3 py-1 bg-muted rounded-full text-xs font-semibold">
                                        <span className="text-foreground">{category?.postCount}</span>
                                        <span className="text-muted-foreground">posts</span>
                                    </div>
                                </div>

                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {category?.name}
                                </h3>

                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                    {category?.description}
                                </p>

                                <div className="flex items-center space-x-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-sm font-semibold">Explore category</span>
                                    <Icon name="ArrowRight" size={16} />
                                </div>
                            </div>
                        </Link>
                    ))}

                    <Link
                        to="/category-explorer"
                        className="group relative p-6 md:p-8 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl border-2 border-dashed border-primary/30 hover:border-primary transition-all duration-300 flex flex-col items-center justify-center text-center"
                    >
                        <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                            <Icon name="Plus" size={24} className="text-primary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                            More Categories
                        </h3>
                        <p className="text-sm md:text-base text-muted-foreground">
                            Discover all topics and themes
                        </p>
                    </Link>
                </div>

                <div className="text-center">
                    <Button
                        variant="default"
                        size="lg"
                        iconName="Grid"
                        iconPosition="left"
                        asChild
                    >
                        <Link to="/category-explorer">View All Categories</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CategoryShowcase;