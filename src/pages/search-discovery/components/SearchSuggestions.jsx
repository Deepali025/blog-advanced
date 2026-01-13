import React from 'react';
import Icon from '../../../components/AppIcon';

const SearchSuggestions = ({ suggestions, onSuggestionClick, searchQuery }) => {
    if (!searchQuery || suggestions?.length === 0) return null;

    const highlightMatch = (text, query) => {
        const parts = text?.split(new RegExp(`(${query})`, 'gi'));
        return parts?.map((part, index) =>
            part?.toLowerCase() === query?.toLowerCase() ? (
                <mark key={index} className="bg-accent/20 text-foreground font-medium">
                    {part}
                </mark>
            ) : (
                part
            )
        );
    };

    return (
        <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
            <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    Suggestions
                </div>
                {suggestions?.map((suggestion) => (
                    <button
                        key={suggestion?.id}
                        onClick={() => onSuggestionClick(suggestion?.text)}
                        className="w-full flex items-center space-x-3 px-3 py-2 hover:bg-muted rounded-lg transition-colors text-left"
                    >
                        <Icon
                            name={suggestion?.type === 'recent' ? 'Clock' : 'TrendingUp'}
                            size={16}
                            className="text-muted-foreground flex-shrink-0"
                        />
                        <span className="text-sm text-foreground flex-1">
                            {highlightMatch(suggestion?.text, searchQuery)}
                        </span>
                        {suggestion?.count && (
                            <span className="text-xs text-muted-foreground">
                                {suggestion?.count} results
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default SearchSuggestions;