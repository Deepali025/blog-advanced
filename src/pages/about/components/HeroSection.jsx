import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-4 md:space-y-6">
                        <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full">
                            <Icon name="Sparkles" size={18} className="text-accent" />
                            <span className="text-sm md:text-base font-semibold text-accent">Digital Storyteller</span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                            Hi, I'm Sarah Mitchell
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            A passionate writer, creative thinker, and lifelong learner dedicated to crafting stories that inspire, educate, and connect people across the digital landscape.
                        </p>

                        <div className="flex flex-wrap gap-3 md:gap-4 pt-4">
                            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                                <Icon name="BookOpen" size={20} className="text-primary" />
                                <span className="text-sm md:text-base font-medium">250+ Articles</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                                <Icon name="Users" size={20} className="text-primary" />
                                <span className="text-sm md:text-base font-medium">50K+ Readers</span>
                            </div>
                            <div className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                                <Icon name="Award" size={20} className="text-primary" />
                                <span className="text-sm md:text-base font-medium">15 Awards</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="relative w-full aspect-square max-w-md mx-auto lg:max-w-full">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl transform rotate-6"></div>
                            <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="https://img.rocket.new/generatedImages/rocket_gen_img_1ca693890-1763293865080.png"
                                    alt="Professional portrait of Sarah Mitchell, a confident woman with shoulder-length brown hair wearing a cream blazer, smiling warmly against a soft gray studio background"
                                    className="w-full h-full object-cover" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default HeroSection;