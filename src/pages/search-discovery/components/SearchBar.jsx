import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({
    searchQuery,
    onSearchChange,
    onVoiceSearch,
    isVoiceSearching
}) => {
    return (
        <div className="relative w-full">
            <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
                    <Icon name="Search" size={20} />
                </div>

                <Input
                    type="search"
                    placeholder="Search articles, topics, or keywords..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e?.target?.value)}
                    className="pl-12 pr-12 h-14 text-base"
                />

                <button
                    onClick={onVoiceSearch}
                    className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-colors ${isVoiceSearching
                            ? 'text-error bg-error/10' : 'text-muted-foreground hover:text-primary hover:bg-muted'
                        }`}
                    aria-label="Voice search"
                >
                    <Icon name={isVoiceSearching ? 'MicOff' : 'Mic'} size={20} />
                </button>
            </div>
            {searchQuery && (
                <div className="absolute right-16 top-1/2 -translate-y-1/2">
                    <button
                        onClick={() => onSearchChange('')}
                        className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Clear search"
                    >
                        <Icon name="X" size={16} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default SearchBar;