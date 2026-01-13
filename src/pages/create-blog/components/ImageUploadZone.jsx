import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ImageUploadZone = ({ onImageSelect, currentImage, label = "Featured Image" }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [previewUrl, setPreviewUrl] = useState(currentImage || '');
    const fileInputRef = useRef(null);

    const handleDragOver = (e) => {
        e?.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e) => {
        e?.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e) => {
        e?.preventDefault();
        setIsDragging(false);

        const files = e?.dataTransfer?.files;
        if (files?.length > 0) {
            handleFileSelect(files?.[0]);
        }
    };

    const handleFileSelect = (file) => {
        if (file && file?.type?.startsWith('image/')) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageUrl = reader?.result;
                setPreviewUrl(imageUrl);
                onImageSelect(imageUrl);
            };
            reader?.readAsDataURL(file);
        }
    };

    const handleFileInputChange = (e) => {
        const file = e?.target?.files?.[0];
        if (file) {
            handleFileSelect(file);
        }
    };

    const handleRemoveImage = () => {
        setPreviewUrl('');
        onImageSelect('');
        if (fileInputRef?.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleBrowseClick = () => {
        fileInputRef?.current?.click();
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground mb-2">
                {label}
            </label>

            {previewUrl ? (
                <div className="relative rounded-lg overflow-hidden border border-border bg-card">
                    <div className="aspect-video w-full overflow-hidden">
                        <Image
                            src={previewUrl}
                            alt="Featured image preview showing uploaded blog post cover"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2">
                        <Button
                            variant="secondary"
                            size="sm"
                            iconName="Upload"
                            onClick={handleBrowseClick}
                        >
                            Change
                        </Button>
                        <Button
                            variant="destructive"
                            size="sm"
                            iconName="Trash2"
                            onClick={handleRemoveImage}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            ) : (
                <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging
                            ? 'border-primary bg-muted' : 'border-border hover:border-primary hover:bg-muted/50'
                        }`}
                >
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                            <Icon name="Upload" size={32} className="text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                            <p className="text-foreground font-medium">
                                Drop your image here, or browse
                            </p>
                            <p className="text-sm text-muted-foreground">
                                Supports: JPG, PNG, GIF (Max 5MB)
                            </p>
                        </div>
                        <Button
                            variant="outline"
                            iconName="FolderOpen"
                            iconPosition="left"
                            onClick={handleBrowseClick}
                        >
                            Browse Files
                        </Button>
                    </div>
                </div>
            )}

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileInputChange}
                className="hidden"
                aria-label="Upload image file"
            />
        </div>
    );
};

export default ImageUploadZone;