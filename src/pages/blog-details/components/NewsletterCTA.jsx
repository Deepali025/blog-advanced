import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterCTA = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (email?.trim()) {
            setSubscribed(true);
            setTimeout(() => {
                setEmail('');
                setSubscribed(false);
            }, 3000);
        }
    };

    return (
        <div className="newsletter-form mt-12 lg:mt-16">
            <div className="flex items-center space-x-2 mb-4 md:mb-6">
                <Icon name="Mail" size={24} className="text-primary" />
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                    Stay Updated
                </h3>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                Subscribe to our newsletter and never miss a story. Get weekly insights, exclusive content, and updates delivered straight to your inbox.
            </p>
            {subscribed ? (
                <div className="flex items-center space-x-2 text-success p-4 bg-success/10 rounded-lg">
                    <Icon name="CheckCircle" size={20} />
                    <span className="text-sm md:text-base font-medium">
                        Successfully subscribed! Check your email for confirmation.
                    </span>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e?.target?.value)}
                        required
                        className="flex-1"
                    />
                    <Button
                        type="submit"
                        variant="default"
                        iconName="Send"
                        iconPosition="right"
                        className="sm:w-auto"
                    >
                        Subscribe
                    </Button>
                </form>
            )}
        </div>
    );
};

export default NewsletterCTA;