import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const CategoryTagSelector = ({
    selectedCategory,
    onCategoryChange,
    selectedTags,
    onTagsChange
}) => {
    const [tagInput, setTagInput] = useState('');

    const categoryOptions = [
        { value: 'technology', label: 'Technology', description: 'Tech trends and innovations' },
        { value: 'lifestyle', label: 'Lifestyle', description: 'Daily life and wellness' },
        { value: 'travel', label: 'Travel', description: 'Adventures and destinations' },
        { value: 'food', label: 'Food & Cooking', description: 'Recipes and culinary experiences' },
        { value: 'business', label: 'Business', description: 'Entrepreneurship and career' },
        { value: 'personal-growth', label: 'Personal Growth', description: 'Self-improvement and mindfulness' },
        { value: 'creative', label: 'Creative Arts', description: 'Art, design, and creativity' },
        { value: 'health', label: 'Health & Fitness', description: 'Wellness and physical health' }
    ];

    const suggestedTags = [
        'Tutorial', 'Guide', 'Opinion', 'Review', 'Case Study',
        'Tips', 'Best Practices', 'How-to', 'Analysis', 'Story',
        'Interview', 'Research', 'Trends', 'Beginner', 'Advanced'
    ];

    const handleAddTag = (tag) => {
        const trimmedTag = tag?.trim();
        if (trimmedTag && !selectedTags?.includes(trimmedTag)) {
            onTagsChange([...selectedTags, trimmedTag]);
            setTagInput('');
        }
    };

    const handleRemoveTag = (tagToRemove) => {
        onTagsChange(selectedTags?.filter(tag => tag !== tagToRemove));
    };

    const handleTagInputKeyDown = (e) => {
        if (e?.key === 'Enter' && tagInput?.trim()) {
            e?.preventDefault();
            handleAddTag(tagInput);
        }
    };

    return (
        <div className="space-y-6">
            {/* Category Selection */}
            <div>
                <Select
                    label="Category"
                    description="Choose the primary category for your blog post"
                    options={categoryOptions}
                    value={selectedCategory}
                    onChange={onCategoryChange}
                    searchable
                    required
                />
            </div>
            {/* Tags Section */}
            <div className="space-y-3">
                <label className="block text-sm font-medium text-foreground">
                    Tags
                    <span className="text-muted-foreground font-normal ml-2">
                        (Help readers discover your content)
                    </span>
                </label>

                {/* Tag Input */}
                <div className="flex gap-2">
                    <Input
                        type="text"
                        placeholder="Add a tag and press Enter"
                        value={tagInput}
                        onChange={(e) => setTagInput(e?.target?.value)}
                        onKeyDown={handleTagInputKeyDown}
                        className="flex-1"
                    />
                    <button
                        onClick={() => handleAddTag(tagInput)}
                        disabled={!tagInput?.trim()}
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Add tag"
                    >
                        <Icon name="Plus" size={20} />
                    </button>
                </div>

                {/* Selected Tags */}
                {selectedTags?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {selectedTags?.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                            >
                                {tag}
                                <button
                                    onClick={() => handleRemoveTag(tag)}
                                    className="hover:text-destructive transition-colors"
                                    aria-label={`Remove ${tag} tag`}
                                >
                                    <Icon name="X" size={14} />
                                </button>
                            </span>
                        ))}
                    </div>
                )}

                {/* Suggested Tags */}
                <div className="space-y-2">
                    <p className="text-xs text-muted-foreground">Suggested tags:</p>
                    <div className="flex flex-wrap gap-2">
                        {suggestedTags?.filter(tag => !selectedTags?.includes(tag))?.slice(0, 10)?.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => handleAddTag(tag)}
                                className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryTagSelector;