import React from 'react';
import Icon from '../../../components/AppIcon';

const TrendingTopics = ({ topics, onTopicClick }) => {
    return (
        <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="TrendingUp" size={20} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Trending Topics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {topics?.map((topic) => (
                    <button
                        key={topic?.id}
                        onClick={() => onTopicClick(topic?.name)}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all duration-300 group"
                    >
                        <span className="text-sm font-medium">{topic?.name}</span>
                        <span className="text-xs opacity-70">{topic?.count}</span>
                        <Icon
                            name="ArrowUpRight"
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TrendingTopics;