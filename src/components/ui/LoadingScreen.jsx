import React, { useEffect, useState } from "react";

const LoadingScreen = ({ duration = 2000 }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const intervalTime = duration / 20;
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return prev + 5;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, [duration]);

    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden">
            {/* Background Grain/Noise Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Animated Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-bounce-slow"></div>

            <div className="relative flex flex-col items-center">
                {/* Logo or Icon */}
                <div className="mb-12 relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center shadow-2xl shadow-primary/20 animate-float">
                        <span className="text-white text-4xl font-bold">B</span>
                    </div>
                </div>

                {/* Website Name */}
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[0.2em] uppercase bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                        PersonalBlogHub
                    </h2>

                    {/* Animated Dots Loader */}
                    <div className="flex gap-3 h-8 items-center">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="w-3 h-3 bg-primary rounded-full animate-bounce shadow-[0_0_15px_rgba(var(--color-primary),0.5)]"
                                style={{
                                    animationDelay: `${i * 0.15}s`,
                                    animationDuration: '0.8s'
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Progress Percentage */}
                    <span className="text-white/20 text-xs font-medium tracking-[0.3em] uppercase mt-4">
                        System Initialize {progress}%
                    </span>
                </div>
            </div>

            {/* Quote or Tagline */}
            <div className="absolute bottom-12 left-0 right-0 text-center px-6">
                <p className="text-white/30 text-sm italic font-light tracking-wide max-w-xs mx-auto">
                    "Crafting your next reading adventure..."
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;
