import React from 'react';
import Icon from '../../../components/AppIcon';

const SearchAnalytics = ({ analytics }) => {
    return (
        <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="BarChart3" size={20} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Popular Searches</h3>
            </div>
            <div className="space-y-3">
                {analytics?.map((item, index) => (
                    <div key={item?.id} className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full text-sm font-bold flex-shrink-0">
                            {index + 1}
                        </div>

                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <p className="text-sm font-medium text-foreground truncate">
                                    {item?.query}
                                </p>
                                <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                                    {item?.searchCount?.toLocaleString()} searches
                                </span>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                                <div
                                    className="h-full bg-primary rounded-full transition-all duration-500"
                                    style={{ width: `${item?.percentage}%` }}
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6 pt-4 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                        <p className="text-2xl font-bold text-foreground">
                            {analytics?.reduce((sum, item) => sum + item?.searchCount, 0)?.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Total Searches</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-foreground">
                            {analytics?.length}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">Unique Queries</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchAnalytics;