import React from 'react';
import Icon from '../../../components/AppIcon';

const SubcategoryList = ({ subcategories, selectedSubcategory, onSubcategorySelect }) => {
    return (
        <div className="bg-card rounded-lg p-4 md:p-6 shadow-sm">
            <div className="flex items-center space-x-2 mb-4">
                <Icon name="Layers" size={20} className="text-primary" />
                <h3 className="text-lg md:text-xl font-bold text-foreground font-headline">
                    Subcategories
                </h3>
            </div>
            <div className="space-y-2">
                <button
                    onClick={() => onSubcategorySelect(null)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${selectedSubcategory === null
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'bg-muted/50 text-foreground hover:bg-muted'
                        }`}
                >
                    <div className="flex items-center justify-between">
                        <span className="font-semibold">All Topics</span>
                        <Icon
                            name="ChevronRight"
                            size={16}
                            className={selectedSubcategory === null ? 'opacity-100' : 'opacity-0'}
                        />
                    </div>
                </button>

                {subcategories?.map((subcategory) => {
                    const isSelected = selectedSubcategory === subcategory?.id;
                    return (
                        <button
                            key={subcategory?.id}
                            onClick={() => onSubcategorySelect(subcategory?.id)}
                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${isSelected
                                    ? 'bg-primary text-primary-foreground shadow-sm'
                                    : 'bg-muted/50 text-foreground hover:bg-muted'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <div className="font-semibold mb-1">{subcategory?.name}</div>
                                    <div className={`text-xs ${isSelected ? 'opacity-90' : 'text-muted-foreground'}`}>
                                        {subcategory?.postCount} {subcategory?.postCount === 1 ? 'post' : 'posts'}
                                    </div>
                                </div>
                                <Icon
                                    name="ChevronRight"
                                    size={16}
                                    className={isSelected ? 'opacity-100' : 'opacity-0'}
                                />
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default SubcategoryList;