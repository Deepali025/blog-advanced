import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const PublishSettings = ({
    status,
    onStatusChange,
    scheduledDate,
    onScheduledDateChange,
    visibility,
    onVisibilityChange,
    allowComments,
    onAllowCommentsChange,
    onSaveDraft,
    onPublish,
    isSaving
}) => {
    const statusOptions = [
        { value: 'draft', label: 'Draft', description: 'Save as draft for later' },
        { value: 'scheduled', label: 'Scheduled', description: 'Schedule for future publication' },
        { value: 'published', label: 'Published', description: 'Publish immediately' }
    ];

    const visibilityOptions = [
        { value: 'public', label: 'Public', description: 'Visible to everyone' },
        { value: 'private', label: 'Private', description: 'Only visible to you' },
        { value: 'unlisted', label: 'Unlisted', description: 'Only accessible via direct link' }
    ];

    const getMinDateTime = () => {
        const now = new Date();
        now?.setMinutes(now?.getMinutes() + 5);
        return now?.toISOString()?.slice(0, 16);
    };

    return (
        <div className="space-y-6 bg-card border border-border rounded-lg p-4 md:p-6">
            <div className="flex items-center gap-2 mb-4">
                <Icon name="Settings" size={20} className="text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Publish Settings</h3>
            </div>
            {/* Status Selection */}
            <div>
                <Select
                    label="Publication Status"
                    options={statusOptions}
                    value={status}
                    onChange={onStatusChange}
                    required
                />
            </div>
            {/* Scheduled Date (only show when status is scheduled) */}
            {status === 'scheduled' && (
                <div className="space-y-2">
                    <Input
                        label="Schedule Date & Time"
                        type="datetime-local"
                        value={scheduledDate}
                        onChange={(e) => onScheduledDateChange(e?.target?.value)}
                        min={getMinDateTime()}
                        description="Choose when to automatically publish this post"
                        required
                    />
                    <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted px-3 py-2 rounded">
                        <Icon name="Calendar" size={14} />
                        <span>
                            Will be published on {scheduledDate ? new Date(scheduledDate)?.toLocaleString('en-US', {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            }) : 'selected date'}
                        </span>
                    </div>
                </div>
            )}
            {/* Visibility */}
            <div>
                <Select
                    label="Visibility"
                    options={visibilityOptions}
                    value={visibility}
                    onChange={onVisibilityChange}
                    required
                />
            </div>
            {/* Additional Settings */}
            <div className="space-y-4 pt-4 border-t border-border">
                <h4 className="text-sm font-medium text-foreground">Additional Options</h4>

                <Checkbox
                    label="Allow Comments"
                    description="Enable readers to comment on this post"
                    checked={allowComments}
                    onChange={(e) => onAllowCommentsChange(e?.target?.checked)}
                />
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                <Button
                    variant="outline"
                    fullWidth
                    iconName="Save"
                    iconPosition="left"
                    onClick={onSaveDraft}
                    disabled={isSaving}
                    loading={isSaving && status === 'draft'}
                >
                    Save Draft
                </Button>

                <Button
                    variant="default"
                    fullWidth
                    iconName={status === 'scheduled' ? 'Clock' : 'Send'}
                    iconPosition="left"
                    onClick={onPublish}
                    disabled={isSaving}
                    loading={isSaving && status !== 'draft'}
                >
                    {status === 'scheduled' ? 'Schedule Post' : 'Publish Now'}
                </Button>
            </div>
            {/* Last Saved Indicator */}
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                <Icon name="CheckCircle2" size={14} className="text-success" />
                <span>Auto-saved at {new Date()?.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
        </div>
    );
};

export default PublishSettings;