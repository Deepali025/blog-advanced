import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmptyState = ({ searchQuery, onClearSearch, onBrowseCategories }) => {
    return (
        <div className="text-center py-12 lg:py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 lg:w-24 lg:h-24 bg-muted rounded-full mb-6">
                <Icon name="SearchX" size={40} className="text-muted-foreground" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
                No Results Found
            </h3>

            <p className="text-muted-foreground text-base lg:text-lg mb-2 max-w-md mx-auto">
                We couldn't find any articles matching "{searchQuery}"
            </p>

            <p className="text-sm text-muted-foreground mb-8 max-w-lg mx-auto">
                Try adjusting your search terms, checking for typos, or exploring our categories to discover great content.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                    variant="default"
                    iconName="RotateCcw"
                    iconPosition="left"
                    onClick={onClearSearch}
                >
                    Clear Search
                </Button>

                <Button
                    variant="outline"
                    iconName="Grid"
                    iconPosition="left"
                    onClick={onBrowseCategories}
                >
                    Browse Categories
                </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
                <h4 className="text-sm font-semibold text-foreground mb-4">
                    Search Tips:
                </h4>
                <ul className="text-sm text-muted-foreground space-y-2 max-w-md mx-auto text-left">
                    <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle2" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>Use specific keywords related to your topic</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle2" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>Try different word combinations or synonyms</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle2" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>Use filters to narrow down your search</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <Icon name="CheckCircle2" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span>Check trending topics for popular content</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default EmptyState;