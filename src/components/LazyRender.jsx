import React, { useState, useEffect, useRef } from 'react';

function LazyRender({ children }) {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // smette di osservare
                }
            },
            { threshold: 0.1 } // parte quando 10% visibile
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return <div ref={ref}>{isVisible ? children : null}</div>;
}
export default LazyRender;