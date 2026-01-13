import React from 'react';
import Icon from '../../../components/AppIcon';

const ExpertiseSection = () => {
    const expertiseAreas = [
        {
            icon: "PenTool",
            title: "Content Strategy",
            description: "Crafting compelling narratives that resonate with audiences and drive meaningful engagement through authentic storytelling.",
            skills: ["Storytelling", "Brand Voice", "Content Planning", "Audience Analysis"]
        },
        {
            icon: "Lightbulb",
            title: "Creative Writing",
            description: "Transforming complex ideas into accessible, engaging content that educates, inspires, and entertains diverse readers.",
            skills: ["Long-form Articles", "Personal Essays", "Creative Non-fiction", "Editorial Writing"]
        },
        {
            icon: "TrendingUp",
            title: "Digital Marketing",
            description: "Leveraging SEO, social media, and content marketing strategies to amplify reach and build authentic online communities.",
            skills: ["SEO Optimization", "Social Media", "Email Marketing", "Analytics"]
        },
        {
            icon: "Users",
            title: "Community Building",
            description: "Fostering meaningful connections between readers and creating spaces for authentic dialogue and shared learning experiences.",
            skills: ["Engagement Strategy", "Moderation", "Event Planning", "Mentorship"]
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Expertise &amp; Skills
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        A diverse skill set honed through years of practice, continuous learning, and real-world application in the digital storytelling landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {expertiseAreas?.map((area, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                                    <Icon name={area?.icon} size={28} className="text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                        {area?.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                                {area?.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {area?.skills?.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="inline-flex items-center px-3 py-1.5 bg-accent/10 text-accent text-xs md:text-sm font-medium rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;