import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AuthorCard = ({ author }) => {
    return (
        <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm border border-border">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 mb-4 md:mb-6">
                <div className="relative flex-shrink-0">
                    <Image
                        src={author?.avatar}
                        alt={author?.avatarAlt}
                        className="author-avatar w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-cover"
                    />
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {author?.name}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                        {author?.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="FileText" size={16} />
                            <span>{author?.articlesCount} articles</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Icon name="Users" size={16} />
                            <span>{author?.followers?.toLocaleString()} followers</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-sm md:text-base text-foreground leading-relaxed mb-4 md:mb-6">
                {author?.bio}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
                <Button
                    variant="default"
                    iconName="UserPlus"
                    iconPosition="left"
                    fullWidth
                    className="sm:flex-1"
                >
                    Follow
                </Button>
                <Button
                    variant="outline"
                    asChild
                    fullWidth
                    className="sm:flex-1"
                >
                    <Link to="/about">View Profile</Link>
                </Button>
            </div>
        </div>
    );
};

export default AuthorCard;