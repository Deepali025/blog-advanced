import React, { useState, useEffect } from 'react';

const ReadingProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement?.scrollHeight - windowHeight;
            const scrolled = window.scrollY;
            const progressPercentage = (scrolled / documentHeight) * 100;
            setProgress(Math.min(progressPercentage, 100));
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="reading-progress"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin="0"
            aria-valuemax="100"
        />
    );
};

export default ReadingProgress;