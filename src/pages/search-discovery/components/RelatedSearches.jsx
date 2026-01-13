import React from 'react';
import Icon from '../../../components/AppIcon';

const RelatedSearches = ({ searches, onSearchClick }) => {
    if (searches?.length === 0) return null;

    return (
        <div className="bg-muted/50 rounded-lg p-4 lg:p-6 border border-border">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="Link2" size={18} className="text-primary" />
                <h4 className="text-base font-semibold text-foreground">Related Searches</h4>
            </div>
            <div className="flex flex-wrap gap-2">
                {searches?.map((search) => (
                    <button
                        key={search?.id}
                        onClick={() => onSearchClick(search?.query)}
                        className="inline-flex items-center space-x-2 px-3 py-2 bg-card hover:bg-primary hover:text-primary-foreground rounded-lg border border-border transition-all duration-300 text-sm group"
                    >
                        <Icon name="ArrowRight" size={14} className="group-hover:translate-x-1 transition-transform" />
                        <span>{search?.query}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default RelatedSearches;