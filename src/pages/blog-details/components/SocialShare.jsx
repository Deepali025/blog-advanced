import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';


const SocialShare = ({ article }) => {
    const [copied, setCopied] = useState(false);

    const shareUrl = window.location?.href;
    const shareText = `${article?.title} - ${article?.excerpt}`;

    const handleCopyLink = () => {
        navigator.clipboard?.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const shareLinks = [
        {
            name: 'Twitter',
            icon: 'Twitter',
            url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-[#1DA1F2]'
        },
        {
            name: 'Facebook',
            icon: 'Facebook',
            url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-[#1877F2]'
        },
        {
            name: 'LinkedIn',
            icon: 'Linkedin',
            url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
            color: 'hover:text-[#0A66C2]'
        },
        {
            name: 'WhatsApp',
            icon: 'MessageCircle',
            url: `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`,
            color: 'hover:text-[#25D366]'
        }
    ];

    return (
        <div className="sticky top-24 space-y-4">
            <h3 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">
                Share this article
            </h3>
            <div className="flex lg:flex-col gap-2 lg:gap-3">
                {shareLinks?.map((social) => (
                    <a
                        key={social?.name}
                        href={social?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted text-muted-foreground transition-all duration-300 ${social?.color} hover:bg-background hover:shadow-md`}
                        aria-label={`Share on ${social?.name}`}
                    >
                        <Icon name={social?.icon} size={20} />
                    </a>
                ))}

                <button
                    onClick={handleCopyLink}
                    className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-lg bg-muted text-muted-foreground hover:text-primary hover:bg-background hover:shadow-md transition-all duration-300"
                    aria-label="Copy link"
                >
                    <Icon name={copied ? 'Check' : 'Link'} size={20} />
                </button>
            </div>
            {copied && (
                <p className="text-xs md:text-sm text-success font-medium">
                    Link copied!
                </p>
            )}
        </div>
    );
};

export default SocialShare;