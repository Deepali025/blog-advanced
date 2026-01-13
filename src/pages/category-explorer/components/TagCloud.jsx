import React from 'react';
import Icon from '../../../components/AppIcon';

const TagCloud = ({ tags, selectedTags, onTagToggle }) => {
    return (
        <div className="bg-card rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="Tag" size={20} className="text-primary" />
                <h3 className="text-lg md:text-xl font-bold text-foreground font-headline">
                    Filter by Tags
                </h3>
            </div>
            <div className="flex flex-wrap gap-2">
                {tags?.map((tag) => {
                    const isSelected = selectedTags?.includes(tag?.name);
                    return (
                        <button
                            key={tag?.id}
                            onClick={() => onTagToggle(tag?.name)}
                            className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${isSelected
                                    ? 'bg-primary text-primary-foreground shadow-md scale-105'
                                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                                }`}
                        >
                            {tag?.name}
                            <span className="ml-1.5 opacity-70">({tag?.count})</span>
                        </button>
                    );
                })}
            </div>
            {selectedTags?.length > 0 && (
                <button
                    onClick={() => onTagToggle(null)}
                    className="mt-4 text-sm text-primary hover:text-primary/80 font-semibold flex items-center space-x-1"
                >
                    <Icon name="X" size={14} />
                    <span>Clear all filters</span>
                </button>
            )}
        </div>
    );
};

export default TagCloud;