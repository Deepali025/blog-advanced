import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CommentSection = ({ initialComments }) => {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');

    const formatTimeAgo = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);

        if (diffInSeconds < 60) return 'Just now';
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        return `${Math.floor(diffInSeconds / 86400)} days ago`;
    };

    const handleSubmitComment = (e) => {
        e?.preventDefault();
        if (newComment?.trim()) {
            const comment = {
                id: Date.now(),
                author: 'You',
                avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d0e83b5-1763298687249.png",
                avatarAlt: 'Profile picture of current user with friendly smile wearing casual attire',
                content: newComment,
                timestamp: new Date()?.toISOString(),
                likes: 0,
                replies: []
            };
            setComments([comment, ...comments]);
            setNewComment('');
        }
    };

    const handleSubmitReply = (commentId) => {
        if (replyText?.trim()) {
            const updatedComments = comments?.map((comment) => {
                if (comment?.id === commentId) {
                    return {
                        ...comment,
                        replies: [
                            ...comment?.replies,
                            {
                                id: Date.now(),
                                author: 'You',
                                avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_19d0e83b5-1763298687249.png",
                                avatarAlt: 'Profile picture of current user with friendly smile wearing casual attire',
                                content: replyText,
                                timestamp: new Date()?.toISOString(),
                                likes: 0
                            }]

                    };
                }
                return comment;
            });
            setComments(updatedComments);
            setReplyText('');
            setReplyingTo(null);
        }
    };

    const handleLike = (commentId, isReply = false, parentId = null) => {
        const updatedComments = comments?.map((comment) => {
            if (isReply && comment?.id === parentId) {
                return {
                    ...comment,
                    replies: comment?.replies?.map((reply) =>
                        reply?.id === commentId ?
                            { ...reply, likes: reply?.likes + 1 } :
                            reply
                    )
                };
            }
            if (comment?.id === commentId) {
                return { ...comment, likes: comment?.likes + 1 };
            }
            return comment;
        });
        setComments(updatedComments);
    };

    return (
        <section className="mt-12 lg:mt-16">
            <div className="flex items-center justify-between mb-6 lg:mb-8">
                <div className="flex items-center space-x-2">
                    <Icon name="MessageSquare" size={24} className="text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        Comments ({comments?.length})
                    </h2>
                </div>
            </div>
            <form onSubmit={handleSubmitComment} className="bg-card rounded-lg p-4 md:p-6 shadow-sm border border-border mb-6 lg:mb-8">
                <Input
                    type="text"
                    placeholder="Share your thoughts..."
                    value={newComment}
                    onChange={(e) => setNewComment(e?.target?.value)}
                    className="mb-4" />

                <div className="flex justify-end">
                    <Button
                        type="submit"
                        variant="default"
                        iconName="Send"
                        iconPosition="right"
                        disabled={!newComment?.trim()}>

                        Post Comment
                    </Button>
                </div>
            </form>
            <div className="space-y-6 lg:space-y-8">
                {comments?.map((comment) =>
                    <div key={comment?.id} className="bg-card rounded-lg p-4 md:p-6 shadow-sm border border-border">
                        <div className="flex items-start space-x-3 md:space-x-4 mb-4">
                            <Image
                                src={comment?.avatar}
                                alt={comment?.avatarAlt}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0" />


                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <h4 className="text-sm md:text-base font-bold text-foreground">
                                        {comment?.author}
                                    </h4>
                                    <span className="text-xs md:text-sm text-muted-foreground">
                                        {formatTimeAgo(comment?.timestamp)}
                                    </span>
                                </div>

                                <p className="text-sm md:text-base text-foreground leading-relaxed mb-3 md:mb-4">
                                    {comment?.content}
                                </p>

                                <div className="flex flex-wrap items-center gap-3 md:gap-4">
                                    <button
                                        onClick={() => handleLike(comment?.id)}
                                        className="flex items-center space-x-1 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">

                                        <Icon name="ThumbsUp" size={16} />
                                        <span>{comment?.likes}</span>
                                    </button>

                                    <button
                                        onClick={() => setReplyingTo(replyingTo === comment?.id ? null : comment?.id)}
                                        className="flex items-center space-x-1 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors">

                                        <Icon name="Reply" size={16} />
                                        <span>Reply</span>
                                    </button>
                                </div>

                                {replyingTo === comment?.id &&
                                    <div className="mt-4 pl-0 md:pl-4">
                                        <Input
                                            type="text"
                                            placeholder="Write a reply..."
                                            value={replyText}
                                            onChange={(e) => setReplyText(e?.target?.value)}
                                            className="mb-3" />

                                        <div className="flex gap-2">
                                            <Button
                                                variant="default"
                                                size="sm"
                                                onClick={() => handleSubmitReply(comment?.id)}
                                                disabled={!replyText?.trim()}>

                                                Reply
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    setReplyingTo(null);
                                                    setReplyText('');
                                                }}>

                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                }

                                {comment?.replies && comment?.replies?.length > 0 &&
                                    <div className="mt-4 md:mt-6 space-y-4 pl-4 md:pl-8 border-l-2 border-border">
                                        {comment?.replies?.map((reply) =>
                                            <div key={reply?.id} className="flex items-start space-x-3">
                                                <Image
                                                    src={reply?.avatar}
                                                    alt={reply?.avatarAlt}
                                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0" />


                                                <div className="flex-1 min-w-0">
                                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                                        <h5 className="text-xs md:text-sm font-bold text-foreground">
                                                            {reply?.author}
                                                        </h5>
                                                        <span className="text-xs text-muted-foreground">
                                                            {formatTimeAgo(reply?.timestamp)}
                                                        </span>
                                                    </div>

                                                    <p className="text-xs md:text-sm text-foreground leading-relaxed mb-2">
                                                        {reply?.content}
                                                    </p>

                                                    <button
                                                        onClick={() => handleLike(reply?.id, true, comment?.id)}
                                                        className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary transition-colors">

                                                        <Icon name="ThumbsUp" size={14} />
                                                        <span>{reply?.likes}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>);

};

export default CommentSection;