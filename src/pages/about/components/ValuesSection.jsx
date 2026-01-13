import React from 'react';
import Icon from '../../../components/AppIcon';

const ValuesSection = () => {
    const coreValues = [
        {
            icon: "Heart",
            title: "Authenticity",
            description: "Every word I write comes from a place of genuine experience and honest reflection. I believe in sharing real stories, not manufactured personas, creating content that resonates because it's true."
        },
        {
            icon: "Compass",
            title: "Integrity",
            description: "Maintaining ethical standards in all content creation, from proper attribution to transparent partnerships. My readers trust me because I never compromise on honesty and accuracy."
        },
        {
            icon: "Sparkles",
            title: "Creativity",
            description: "Pushing boundaries while respecting traditions, finding fresh perspectives on familiar topics, and constantly experimenting with new formats and storytelling techniques."
        },
        {
            icon: "Users",
            title: "Community",
            description: "Building meaningful connections beyond metrics, fostering dialogue over monologue, and creating spaces where every voice is valued and heard."
        },
        {
            icon: "BookOpen",
            title: "Continuous Learning",
            description: "Embracing curiosity as a lifelong practice, staying open to new ideas, and growing alongside my readers through shared exploration and discovery."
        },
        {
            icon: "Target",
            title: "Impact",
            description: "Creating content that matters, stories that inspire action, and narratives that contribute positively to the broader conversation in meaningful ways."
        }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Core Values &amp; Mission
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        These principles guide every piece of content I create and every interaction I have with my community. They're not just words—they're commitments.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {coreValues?.map((value, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <Icon name={value?.icon} size={28} className="text-primary" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                                {value?.title}
                            </h3>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {value?.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-xl text-center">
                    <Icon name="Target" size={48} className="text-accent mx-auto mb-6" />
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        My Mission
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                        To create a digital sanctuary where authentic storytelling thrives, where readers find inspiration and connection, and where the power of personal narrative transforms both writer and audience. Through PersonalBlogHub, I'm building more than a platform—I'm cultivating a community of thoughtful individuals who believe in the transformative power of genuine human connection through words.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ValuesSection;