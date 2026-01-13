import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Michael Chen",
            role: "Content Strategist",
            company: "Digital Narratives Inc.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_18177d561-1763301900808.png",
            imageAlt: "Professional headshot of Michael Chen, an Asian man with short black hair wearing a navy blue suit and white shirt, smiling confidently against a light gray background",
            quote: "Sarah's approach to storytelling is refreshingly authentic. Her ability to connect with readers on a personal level while delivering valuable insights is unmatched. Working with her has elevated our entire content strategy.",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Aspiring Writer",
            company: "PersonalBlogHub Community",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1041ac59f-1763296279675.png",
            imageAlt: "Warm portrait of Emily Rodriguez, a Hispanic woman with long dark wavy hair wearing a burgundy sweater, smiling genuinely in natural outdoor lighting with soft bokeh background",
            quote: "Through Sarah's mentorship program, I found my voice as a writer. Her guidance is practical, encouraging, and always rooted in authenticity. She doesn't just teach writing—she teaches how to connect.",
            rating: 5
        },
        {
            name: "David Thompson",
            role: "Marketing Director",
            company: "Creative Solutions Ltd.",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e6eedfe1-1763294472971.png",
            imageAlt: "Professional portrait of David Thompson, a Caucasian man with a well-groomed beard wearing a charcoal gray blazer and light blue shirt, looking thoughtfully at the camera in a modern office setting",
            quote: "Sarah\'s content consistently outperforms industry benchmarks. Her understanding of audience psychology combined with exceptional writing skills makes her an invaluable resource for any brand.",
            rating: 5
        },
        {
            name: "Priya Sharma",
            role: "Digital Publisher",
            company: "Modern Stories Magazine",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1080cd3cc-1763296113306.png",
            imageAlt: "Professional headshot of Priya Sharma, an Indian woman with shoulder-length black hair wearing a teal blazer and pearl necklace, smiling warmly in a bright studio with soft lighting",
            quote: "We've published dozens of Sarah's articles, and each one brings tremendous value to our readers. Her research is thorough, her writing is engaging, and her deadlines are always met. A true professional.",
            rating: 5
        },
        {
            name: "James Wilson",
            role: "Entrepreneur",
            company: "StartUp Ventures",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1137cabc3-1763294027055.png",
            imageAlt: "Casual portrait of James Wilson, a young Caucasian man with short brown hair wearing a white t-shirt and denim jacket, smiling confidently outdoors with urban architecture in the background",
            quote: "Sarah helped us develop our brand voice from scratch. Her strategic approach to content creation transformed how we communicate with our audience. The results speak for themselves—engagement up 300%.",
            rating: 5
        },
        {
            name: "Lisa Anderson",
            role: "Long-time Reader",
            company: "PersonalBlogHub Community",
            image: "https://img.rocket.new/generatedImages/rocket_gen_img_1cdcb4aa6-1767165720112.png",
            imageAlt: "Natural portrait of Lisa Anderson, a blonde woman with wavy hair wearing a cream knit sweater, smiling genuinely while sitting in a cozy reading nook with books visible in the soft-focus background",
            quote: "I've been following Sarah's blog since 2019, and her content has genuinely impacted my life. Her stories inspire me to think differently, act boldly, and connect more authentically with others.",
            rating: 5
        }];


    return (
        <section className="py-12 md:py-16 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        What People Say
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Authentic feedback from readers, clients, and collaborators who have experienced the impact of genuine storytelling and meaningful connection.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials?.map((testimonial, index) =>
                        <div
                            key={index}
                            className="bg-card rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">

                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
                                    <Image
                                        src={testimonial?.image}
                                        alt={testimonial?.imageAlt}
                                        className="w-full h-full rounded-full object-cover ring-2 ring-primary/20" />

                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-base md:text-lg font-bold text-foreground truncate">
                                        {testimonial?.name}
                                    </h4>
                                    <p className="text-xs md:text-sm text-muted-foreground truncate">
                                        {testimonial?.role}
                                    </p>
                                    <p className="text-xs text-muted-foreground/80 truncate">
                                        {testimonial?.company}
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial?.rating)]?.map((_, i) =>
                                    <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                                )}
                            </div>

                            <blockquote className="text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                                "{testimonial?.quote}"
                            </blockquote>

                            <div className="mt-4 pt-4 border-t border-border">
                                <Icon name="Quote" size={24} className="text-accent/30" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>);

};

export default TestimonialsSection;