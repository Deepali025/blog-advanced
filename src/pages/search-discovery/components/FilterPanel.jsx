import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterPanel = ({
    filters,
    onFilterChange,
    onClearFilters,
    isOpen,
    onToggle
}) => {
    const contentTypeOptions = [
        { value: 'all', label: 'All Types' },
        { value: 'article', label: 'Articles' },
        { value: 'guide', label: 'Guides' },
        { value: 'tutorial', label: 'Tutorials' },
        { value: 'opinion', label: 'Opinion Pieces' },
        { value: 'review', label: 'Reviews' }
    ];

    const dateRangeOptions = [
        { value: 'all', label: 'All Time' },
        { value: 'today', label: 'Today' },
        { value: 'week', label: 'This Week' },
        { value: 'month', label: 'This Month' },
        { value: 'year', label: 'This Year' }
    ];

    const sortOptions = [
        { value: 'relevance', label: 'Most Relevant' },
        { value: 'recent', label: 'Most Recent' },
        { value: 'popular', label: 'Most Popular' },
        { value: 'oldest', label: 'Oldest First' }
    ];

    const hasActiveFilters =
        filters?.contentType !== 'all' ||
        filters?.dateRange !== 'all' ||
        filters?.sortBy !== 'relevance' ||
        filters?.showFeatured;

    return (
        <div className="bg-card rounded-lg border border-border">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 lg:p-6 hover:bg-muted/50 transition-colors lg:cursor-default"
            >
                <div className="flex items-center space-x-2">
                    <Icon name="SlidersHorizontal" size={20} className="text-primary" />
                    <h2 className="text-lg font-semibold text-foreground">Filters</h2>
                </div>
                <div className="flex items-center space-x-2">
                    {hasActiveFilters && (
                        <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">
                            Active
                        </span>
                    )}
                    <Icon
                        name={isOpen ? 'ChevronUp' : 'ChevronDown'}
                        size={20}
                        className="lg:hidden text-muted-foreground"
                    />
                </div>
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} lg:block border-t border-border`}>
                <div className="p-4 lg:p-6 space-y-6">
                    <Select
                        label="Content Type"
                        options={contentTypeOptions}
                        value={filters?.contentType}
                        onChange={(value) => onFilterChange('contentType', value)}
                    />

                    <Select
                        label="Date Range"
                        options={dateRangeOptions}
                        value={filters?.dateRange}
                        onChange={(value) => onFilterChange('dateRange', value)}
                    />

                    <Select
                        label="Sort By"
                        options={sortOptions}
                        value={filters?.sortBy}
                        onChange={(value) => onFilterChange('sortBy', value)}
                    />

                    <Checkbox
                        label="Featured Content Only"
                        description="Show only editor-picked articles"
                        checked={filters?.showFeatured}
                        onChange={(e) => onFilterChange('showFeatured', e?.target?.checked)}
                    />

                    {hasActiveFilters && (
                        <button
                            onClick={onClearFilters}
                            className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground border border-border rounded-lg hover:bg-muted transition-colors"
                        >
                            <Icon name="X" size={16} />
                            <span>Clear All Filters</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;