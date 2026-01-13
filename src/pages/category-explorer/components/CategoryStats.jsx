import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryStats = ({ stats }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-lg p-4 md:p-5 shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="FileText" size={20} className="text-primary" />
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground">
                            {stats?.totalPosts}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">Total Posts</div>
                    </div>
                </div>
            </div>
            <div className="bg-card rounded-lg p-4 md:p-5 shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Grid" size={20} className="text-accent" />
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground">
                            {stats?.totalCategories}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">Categories</div>
                    </div>
                </div>
            </div>
            <div className="bg-card rounded-lg p-4 md:p-5 shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Tag" size={20} className="text-success" />
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground">
                            {stats?.totalTags}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">Tags</div>
                    </div>
                </div>
            </div>
            <div className="bg-card rounded-lg p-4 md:p-5 shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-warning/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="TrendingUp" size={20} className="text-warning" />
                    </div>
                    <div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground">
                            {stats?.thisMonth}
                        </div>
                        <div className="text-xs md:text-sm text-muted-foreground">This Month</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryStats;