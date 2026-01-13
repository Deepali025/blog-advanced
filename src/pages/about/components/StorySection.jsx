import React from 'react';
import Icon from '../../../components/AppIcon';

const StorySection = () => {
    const storyMilestones = [
        {
            year: "2015",
            title: "The Beginning",
            description: "Started my writing journey as a freelance content creator, discovering my passion for storytelling and authentic communication.",
            icon: "Rocket"
        },
        {
            year: "2017",
            title: "First Publication",
            description: "Published my first major article in a leading digital magazine, reaching over 100,000 readers and establishing my voice in the industry.",
            icon: "BookOpen"
        },
        {
            year: "2019",
            title: "PersonalBlogHub Launch",
            description: "Created PersonalBlogHub as a sanctuary for authentic storytelling, building a community of engaged readers and fellow writers.",
            icon: "Sparkles"
        },
        {
            year: "2021",
            title: "Industry Recognition",
            description: "Received the Digital Storyteller Award and spoke at three international writing conferences, sharing insights on authentic content creation.",
            icon: "Award"
        },
        {
            year: "2024",
            title: "Community Growth",
            description: "Reached 50,000+ monthly readers and launched mentorship programs for aspiring writers, fostering the next generation of storytellers.",
            icon: "Users"
        },
        {
            year: "2026",
            title: "Continued Evolution",
            description: "Expanding into multimedia storytelling and interactive content, while maintaining the core values of authenticity and meaningful connection.",
            icon: "TrendingUp"
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        My Journey
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From a curious writer to a digital storytelling advocate, every step has been driven by a passion for authentic connection and meaningful content creation.
                    </p>
                </div>

                <div className="relative">
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-secondary"></div>

                    <div className="space-y-8 md:space-y-12">
                        {storyMilestones?.map((milestone, index) => (
                            <div
                                key={milestone?.year}
                                className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-4 md:gap-6 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center">
                                                <Icon name={milestone?.icon} size={24} className="text-primary" />
                                            </div>
                                            <span className="text-xl md:text-2xl font-bold text-accent">{milestone?.year}</span>
                                        </div>
                                        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                                            {milestone?.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                            {milestone?.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden lg:flex w-2/12 justify-center">
                                    <div className="w-6 h-6 bg-accent rounded-full border-4 border-background shadow-lg z-10"></div>
                                </div>

                                <div className="hidden lg:block w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;