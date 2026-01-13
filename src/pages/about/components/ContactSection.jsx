import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const socialLinks = [
        {
            platform: "Twitter",
            icon: "Twitter",
            url: "https://twitter.com/sarahmitchell",
            handle: "@sarahmitchell",
            color: "text-[#1DA1F2]"
        },
        {
            platform: "LinkedIn",
            icon: "Linkedin",
            url: "https://linkedin.com/in/sarahmitchell",
            handle: "Sarah Mitchell",
            color: "text-[#0A66C2]"
        },
        {
            platform: "Instagram",
            icon: "Instagram",
            url: "https://instagram.com/sarahmitchell",
            handle: "@sarahmitchell",
            color: "text-[#E4405F]"
        },
        {
            platform: "Facebook",
            icon: "Facebook",
            url: "https://facebook.com/sarahmitchellwriter",
            handle: "Sarah Mitchell Writer",
            color: "text-[#1877F2]"
        }
    ];

    const contactInfo = [
        {
            icon: "Mail",
            label: "Email",
            value: "hello@sarahmitchell.com",
            link: "mailto:hello@sarahmitchell.com"
        },
        {
            icon: "MapPin",
            label: "Location",
            value: "San Francisco, CA",
            link: null
        },
        {
            icon: "Clock",
            label: "Response Time",
            value: "Within 48 hours",
            link: null
        }
    ];

    const handleChange = (e) => {
        const { name, value } = e?.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors?.[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData?.name?.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData?.email?.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/?.test(formData?.email)) {
            newErrors.email = 'Please enter a valid email';
        }

        if (!formData?.subject?.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData?.message?.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData?.message?.trim()?.length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        const newErrors = validateForm();

        if (Object.keys(newErrors)?.length === 0) {
            alert('Thank you for your message! I will get back to you within 48 hours.');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-12 lg:mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Let's Connect
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Whether you have a question, collaboration idea, or just want to say hello, I'd love to hear from you. Every message gets a personal response.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    <div className="space-y-6 md:space-y-8">
                        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {contactInfo?.map((info, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <Icon name={info?.icon} size={20} className="text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm text-muted-foreground mb-1">{info?.label}</p>
                                            {info?.link ? (
                                                <a
                                                    href={info?.link}
                                                    className="text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors break-words"
                                                >
                                                    {info?.value}
                                                </a>
                                            ) : (
                                                <p className="text-base md:text-lg font-medium text-foreground break-words">
                                                    {info?.value}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
                            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                                Follow Me
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {socialLinks?.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social?.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors group"
                                    >
                                        <Icon
                                            name={social?.icon}
                                            size={24}
                                            className={`${social?.color} group-hover:scale-110 transition-transform`}
                                        />
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-foreground">{social?.platform}</p>
                                            <p className="text-xs text-muted-foreground truncate">{social?.handle}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-accent/10 rounded-2xl p-6 md:p-8 border-2 border-accent/20">
                            <div className="flex items-start gap-4">
                                <Icon name="Mail" size={32} className="text-accent flex-shrink-0" />
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-2">
                                        Newsletter
                                    </h4>
                                    <p className="text-sm md:text-base text-muted-foreground mb-4">
                                        Join 5,000+ readers receiving weekly insights on authentic storytelling and creative growth.
                                    </p>
                                    <Button variant="default" iconName="ArrowRight" iconPosition="right">
                                        Subscribe Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg">
                        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <Input
                                label="Your Name"
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                value={formData?.name}
                                onChange={handleChange}
                                error={errors?.name}
                                required
                            />

                            <Input
                                label="Email Address"
                                type="email"
                                name="email"
                                placeholder="john@example.com"
                                value={formData?.email}
                                onChange={handleChange}
                                error={errors?.email}
                                required
                            />

                            <Input
                                label="Subject"
                                type="text"
                                name="subject"
                                placeholder="What's this about?"
                                value={formData?.subject}
                                onChange={handleChange}
                                error={errors?.subject}
                                required
                            />

                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    Message <span className="text-destructive">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    rows="6"
                                    placeholder="Tell me more about your inquiry..."
                                    value={formData?.message}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 rounded-lg border ${errors?.message ? 'border-destructive' : 'border-input'
                                        } bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none`}
                                />
                                {errors?.message && (
                                    <p className="mt-2 text-sm text-destructive">{errors?.message}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                variant="default"
                                fullWidth
                                iconName="Send"
                                iconPosition="right"
                            >
                                Send Message
                            </Button>

                            <p className="text-xs md:text-sm text-muted-foreground text-center">
                                I typically respond within 48 hours. Your information is kept private and never shared.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;