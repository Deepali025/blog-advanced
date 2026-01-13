import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AuthorIntro = () => {
    const authorStats = [
        { label: "Stories Published", value: "127", icon: "BookOpen" },
        { label: "Active Readers", value: "12.5K", icon: "Users" },
        { label: "Years Writing", value: "5+", icon: "Calendar" }];


    const socialLinks = [
        { name: "Twitter", icon: "Twitter", url: "https://twitter.com", followers: "8.2K" },
        { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com", followers: "15K" },
        { name: "Instagram", icon: "Instagram", url: "https://instagram.com", followers: "6.8K" }];


    return (
        <section className="py-12 md:py-16 lg:py-20 bg-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"></div>
                            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                                <Image
                                    src="https://img.rocket.new/generatedImages/rocket_gen_img_162996754-1763293994014.png"
                                    alt="Professional portrait of confident woman with long brown hair wearing elegant black blazer against neutral background"
                                    className="w-full h-full object-cover" />

                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg">
                                <div className="flex items-center space-x-2">
                                    <Icon name="Award" size={20} />
                                    <span className="font-bold text-sm md:text-base">Featured Author</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                                Meet Sarah Mitchell
                            </h2>
                            <p className="text-lg md:text-xl text-primary font-semibold mb-2">
                                Storyteller, Life Explorer & Creative Soul
                            </p>
                        </div>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            Welcome to my digital sanctuary where thoughts transform into stories and ideas become conversations. I'm passionate about exploring the intersection of mindful living, creative expression, and authentic connection in our modern world.
                        </p>

                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            Through personal narratives and thoughtful insights, I invite you to join me on a journey of growth, discovery, and meaningful dialogue. Every story here is crafted with intention to inspire, connect, and spark curiosity.
                        </p>

                        <div className="grid grid-cols-3 gap-3 md:gap-4 py-4 md:py-6">
                            {authorStats?.map((stat) =>
                                <div key={stat?.label} className="text-center p-3 md:p-4 bg-muted rounded-lg">
                                    <Icon name={stat?.icon} size={24} className="text-primary mx-auto mb-2" />
                                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-1">
                                        {stat?.value}
                                    </div>
                                    <div className="text-xs md:text-sm text-muted-foreground">
                                        {stat?.label}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-3 md:gap-4">
                            <Button
                                variant="default"
                                size="lg"
                                iconName="User"
                                iconPosition="left"
                                asChild>

                                <Link to="/about">Read My Story</Link>
                            </Button>

                            <div className="flex items-center space-x-3">
                                {socialLinks?.map((social) =>
                                    <a
                                        key={social?.name}
                                        href={social?.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                                        aria-label={social?.name}>

                                        <Icon name={social?.icon} size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>);

};

export default AuthorIntro;