import React from 'react';
import Icon from '../../../components/AppIcon';


const EditorToolbar = ({
    onFormat,
    activeFormats = [],
    onInsertLink,
    onInsertImage,
    onTogglePreview,
    isPreviewMode
}) => {
    const formatButtons = [
        { id: 'bold', icon: 'Bold', label: 'Bold', shortcut: 'Ctrl+B' },
        { id: 'italic', icon: 'Italic', label: 'Italic', shortcut: 'Ctrl+I' },
        { id: 'underline', icon: 'Underline', label: 'Underline', shortcut: 'Ctrl+U' },
        { id: 'strikethrough', icon: 'Strikethrough', label: 'Strikethrough' }
    ];

    const headingButtons = [
        { id: 'h1', icon: 'Heading1', label: 'Heading 1' },
        { id: 'h2', icon: 'Heading2', label: 'Heading 2' },
        { id: 'h3', icon: 'Heading3', label: 'Heading 3' }
    ];

    const listButtons = [
        { id: 'bulletList', icon: 'List', label: 'Bullet List' },
        { id: 'numberedList', icon: 'ListOrdered', label: 'Numbered List' }
    ];

    const insertButtons = [
        { id: 'link', icon: 'Link', label: 'Insert Link', action: onInsertLink },
        { id: 'image', icon: 'Image', label: 'Insert Image', action: onInsertImage },
        { id: 'code', icon: 'Code', label: 'Code Block' },
        { id: 'quote', icon: 'Quote', label: 'Quote' }
    ];

    const isActive = (formatId) => activeFormats?.includes(formatId);

    const handleFormatClick = (formatId, action) => {
        if (action) {
            action();
        } else {
            onFormat(formatId);
        }
    };

    return (
        <div className="bg-card border border-border rounded-lg p-2 mb-4">
            <div className="flex flex-wrap items-center gap-1">
                {/* Text Formatting */}
                <div className="flex items-center gap-1 pr-2 border-r border-border">
                    {formatButtons?.map((btn) => (
                        <button
                            key={btn?.id}
                            onClick={() => handleFormatClick(btn?.id)}
                            className={`p-2 rounded hover:bg-muted transition-colors ${isActive(btn?.id) ? 'bg-muted text-primary' : 'text-muted-foreground'
                                }`}
                            title={`${btn?.label}${btn?.shortcut ? ` (${btn?.shortcut})` : ''}`}
                            aria-label={btn?.label}
                        >
                            <Icon name={btn?.icon} size={18} />
                        </button>
                    ))}
                </div>

                {/* Headings */}
                <div className="flex items-center gap-1 px-2 border-r border-border">
                    {headingButtons?.map((btn) => (
                        <button
                            key={btn?.id}
                            onClick={() => handleFormatClick(btn?.id)}
                            className={`p-2 rounded hover:bg-muted transition-colors ${isActive(btn?.id) ? 'bg-muted text-primary' : 'text-muted-foreground'
                                }`}
                            title={btn?.label}
                            aria-label={btn?.label}
                        >
                            <Icon name={btn?.icon} size={18} />
                        </button>
                    ))}
                </div>

                {/* Lists */}
                <div className="flex items-center gap-1 px-2 border-r border-border">
                    {listButtons?.map((btn) => (
                        <button
                            key={btn?.id}
                            onClick={() => handleFormatClick(btn?.id)}
                            className={`p-2 rounded hover:bg-muted transition-colors ${isActive(btn?.id) ? 'bg-muted text-primary' : 'text-muted-foreground'
                                }`}
                            title={btn?.label}
                            aria-label={btn?.label}
                        >
                            <Icon name={btn?.icon} size={18} />
                        </button>
                    ))}
                </div>

                {/* Insert Elements */}
                <div className="flex items-center gap-1 px-2 border-r border-border">
                    {insertButtons?.map((btn) => (
                        <button
                            key={btn?.id}
                            onClick={() => handleFormatClick(btn?.id, btn?.action)}
                            className="p-2 rounded hover:bg-muted transition-colors text-muted-foreground"
                            title={btn?.label}
                            aria-label={btn?.label}
                        >
                            <Icon name={btn?.icon} size={18} />
                        </button>
                    ))}
                </div>

                {/* Preview Toggle */}
                <div className="flex items-center gap-1 px-2 ml-auto">
                    <button
                        onClick={onTogglePreview}
                        className={`p-2 rounded hover:bg-muted transition-colors ${isPreviewMode ? 'bg-muted text-primary' : 'text-muted-foreground'
                            }`}
                        title="Toggle Preview"
                        aria-label="Toggle Preview"
                    >
                        <Icon name={isPreviewMode ? 'Eye' : 'EyeOff'} size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditorToolbar;