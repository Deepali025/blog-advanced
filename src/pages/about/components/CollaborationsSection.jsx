import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CollaborationsSection = () => {
    const collaborations = [
        {
            type: "Guest Writing",
            title: "Contributing Writer",
            partner: "Modern Storytelling Magazine",
            image: "https://images.unsplash.com/photo-1481529402569-14288964caa4",
            imageAlt: "Overhead view of a modern workspace with an open laptop displaying article content, coffee cup, notebook with handwritten notes, and pen on a clean white desk with natural lighting",
            description: "Monthly column on authentic content creation and digital storytelling techniques",
            period: "2020 - Present"
        },
        {
            type: "Podcast",
            title: "The Creative Voice Podcast",
            partner: "Digital Creators Network",
            image: "https://images.unsplash.com/photo-1636127740628-13bf7ce4f7ff",
            imageAlt: "Professional podcast recording setup with studio microphone on boom arm, pop filter, and laptop showing audio editing software in a well-lit home studio with acoustic panels",
            description: "Regular guest discussing writing craft, audience building, and creative entrepreneurship",
            period: "2021 - Present"
        },
        {
            type: "Workshop",
            title: "Authentic Storytelling Workshop",
            partner: "Writers Guild International",
            image: "https://images.unsplash.com/photo-1700241956206-79b70da5f4b8",
            imageAlt: "Bright modern conference room with diverse group of attendees sitting at tables with laptops and notebooks, engaged presenter at front with presentation screen showing workshop content",
            description: "Quarterly workshops teaching writers how to find and develop their unique voice",
            period: "2019 - Present"
        },
        {
            type: "Mentorship",
            title: "Creator Mentorship Program",
            partner: "PersonalBlogHub Community",
            image: "https://images.unsplash.com/photo-1633114072460-c7dd0b7c6161",
            imageAlt: "Two women collaborating at a wooden table with laptops and coffee cups, one pointing at screen while the other takes notes, in a bright cafe setting with natural window light",
            description: "One-on-one mentorship helping aspiring writers launch and grow their platforms",
            period: "2022 - Present"
        },
        {
            type: "Brand Partnership",
            title: "Content Strategy Consultant",
            partner: "Leading Tech Companies",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1efc8391b-1767700962291.png",
            imageAlt: "Professional business meeting with diverse team around modern conference table, laptops open, charts and documents visible, in contemporary office with glass walls and city view",
            description: "Strategic consulting on brand voice development and content marketing",
            period: "2018 - Present"
        },
        {
            type: "Speaking",
            title: "Conference Keynote Speaker",
            partner: "International Writing Conferences",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_10676ac89-1766793242075.png",
            imageAlt: "Large conference hall filled with attentive audience members facing illuminated stage with speaker at podium, professional lighting and large presentation screens visible in modern venue",
            description: "Keynote presentations on the future of digital storytelling and authentic content",
            period: "2020 - Present"
        }];


    return (
        <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Collaborations &amp; Partnerships
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Working with leading organizations, publications, and communities to amplify authentic storytelling and support fellow creators in their journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {collaborations?.map((collab, index) =>
                        <div
                            key={index}
                            className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">

                            <div className="relative h-48 md:h-56 overflow-hidden">
                                <Image
                                    src={collab?.image}
                                    alt={collab?.imageAlt}
                                    className="w-full h-full object-cover" />

                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center px-3 py-1.5 bg-accent text-white text-xs md:text-sm font-semibold rounded-full">
                                        {collab?.type}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 md:p-8">
                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                                    {collab?.title}
                                </h3>

                                <div className="flex items-center gap-2 mb-3">
                                    <Icon name="Building" size={16} className="text-primary" />
                                    <p className="text-sm md:text-base text-primary font-medium">
                                        {collab?.partner}
                                    </p>
                                </div>

                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                                    {collab?.description}
                                </p>

                                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                                    <Icon name="Calendar" size={16} />
                                    <span>{collab?.period}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>);

};

export default CollaborationsSection;