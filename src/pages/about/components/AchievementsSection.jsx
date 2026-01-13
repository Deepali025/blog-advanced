import React from 'react';
import Icon from '../../../components/AppIcon';

const AchievementsSection = () => {
    const achievements = [
        {
            icon: "Award",
            title: "Digital Storyteller Award 2021",
            organization: "Content Marketing Institute",
            description: "Recognized for excellence in authentic content creation and audience engagement"
        },
        {
            icon: "Trophy",
            title: "Best Personal Blog 2022",
            organization: "Blogger\'s Choice Awards",
            description: "Voted by readers as the most impactful personal development blog"
        },
        {
            icon: "Star",
            title: "Featured Speaker",
            organization: "International Writing Conference",
            description: "Keynote presentations at three major conferences on authentic storytelling"
        },
        {
            icon: "BookOpen",
            title: "Published Author",
            organization: "Leading Digital Publications",
            description: "Over 250 articles published in top-tier magazines and online platforms"
        },
        {
            icon: "Users",
            title: "Community Builder Award",
            organization: "Digital Community Alliance",
            description: "Honored for fostering meaningful connections and inclusive dialogue"
        },
        {
            icon: "TrendingUp",
            title: "Top 50 Content Creators",
            organization: "Digital Media Review",
            description: "Listed among the most influential content creators in personal development"
        }
    ];

    const statistics = [
        { number: "250+", label: "Published Articles", icon: "FileText" },
        { number: "50K+", label: "Monthly Readers", icon: "Users" },
        { number: "15", label: "Industry Awards", icon: "Award" },
        { number: "100+", label: "Speaking Events", icon: "Mic" },
        { number: "5K+", label: "Newsletter Subscribers", icon: "Mail" },
        { number: "98%", label: "Reader Satisfaction", icon: "ThumbsUp" }
    ];

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Recognition &amp; Achievements
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Milestones and honors that reflect a commitment to excellence, authenticity, and meaningful impact in the digital storytelling space.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-12 md:mb-16">
                    {statistics?.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-xl p-4 md:p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                        >
                            <Icon name={stat?.icon} size={28} className="text-primary mx-auto mb-3" />
                            <div className="text-2xl md:text-3xl font-bold text-foreground mb-1 whitespace-nowrap">
                                {stat?.number}
                            </div>
                            <div className="text-xs md:text-sm text-muted-foreground">
                                {stat?.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {achievements?.map((achievement, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                                <Icon name={achievement?.icon} size={28} className="text-accent" />
                            </div>

                            <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                                {achievement?.title}
                            </h3>

                            <p className="text-sm md:text-base text-primary font-medium mb-3">
                                {achievement?.organization}
                            </p>

                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                {achievement?.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;