import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./ui/LoadingScreen";

const PageTransition = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => {
            setLoading(false);
        }, 800); // Shorter duration for page transitions

        return () => clearTimeout(timer);
    }, [location.pathname]);

    return (
        <>
            {loading && <LoadingScreen duration={800} />}
            <div className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </>
    );
};

export default PageTransition;
