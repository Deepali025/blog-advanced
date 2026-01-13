import React from 'react';
import Icon from '../../../components/AppIcon';

const SavedSearches = ({ searches, onSearchClick, onDeleteSearch }) => {
    if (searches?.length === 0) return null;

    return (
        <div className="bg-card rounded-lg border border-border p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <Icon name="Bookmark" size={20} className="text-primary" />
                    <h3 className="text-lg font-semibold text-foreground">Saved Searches</h3>
                </div>
                <span className="text-xs text-muted-foreground">
                    {searches?.length} saved
                </span>
            </div>
            <div className="space-y-2">
                {searches?.map((search) => (
                    <div
                        key={search?.id}
                        className="flex items-center justify-between p-3 hover:bg-muted rounded-lg transition-colors group"
                    >
                        <button
                            onClick={() => onSearchClick(search?.query)}
                            className="flex-1 flex items-center space-x-3 text-left"
                        >
                            <Icon name="Search" size={16} className="text-muted-foreground" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
                                    {search?.query}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                    {search?.resultCount} results • Saved {search?.savedDate}
                                </p>
                            </div>
                        </button>

                        <button
                            onClick={() => onDeleteSearch(search?.id)}
                            className="p-2 text-muted-foreground hover:text-error opacity-0 group-hover:opacity-100 transition-all"
                            aria-label="Delete saved search"
                        >
                            <Icon name="Trash2" size={16} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SavedSearches;