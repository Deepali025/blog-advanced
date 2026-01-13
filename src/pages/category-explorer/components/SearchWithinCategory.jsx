import React from 'react';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const SearchWithinCategory = ({ searchQuery, onSearchChange, categoryName }) => {
    return (
        <div className="bg-card rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="Search" size={20} className="text-primary" />
                <h3 className="text-lg md:text-xl font-bold text-foreground font-headline">
                    Search in {categoryName || 'All Categories'}
                </h3>
            </div>
            <Input
                type="search"
                placeholder="Search articles, topics, keywords..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e?.target?.value)}
                className="w-full"
            />
            {searchQuery && (
                <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                        Searching for: <span className="font-semibold text-foreground">{searchQuery}</span>
                    </span>
                    <button
                        onClick={() => onSearchChange('')}
                        className="text-primary hover:text-primary/80 font-semibold flex items-center space-x-1"
                    >
                        <Icon name="X" size={14} />
                        <span>Clear</span>
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchWithinCategory;