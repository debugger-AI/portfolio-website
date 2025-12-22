import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, { x: e.clientX, y: e.clientY, duration: 0.1 });
            gsap.to(followerRef.current, { x: e.clientX, y: e.clientY, duration: 0.4, ease: "power2.out" });
        };

        const handleHoverStart = () => {
            gsap.to(followerRef.current, { scale: 3, backgroundColor: "rgba(255,255,255,0.15)", mixBlendMode: "screen", duration: 0.3 });
            gsap.to(cursorRef.current, { scale: 0, duration: 0.3 });
        };

        const handleHoverEnd = () => {
            gsap.to(followerRef.current, { scale: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.3 });
            gsap.to(cursorRef.current, { scale: 1, duration: 0.3 });
        };

        window.addEventListener('mousemove', moveCursor);

        const updateListeners = () => {
            const interactives = document.querySelectorAll('a, button, .interactive');
            interactives.forEach(el => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        updateListeners();
        const interval = setInterval(updateListeners, 1000);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clearInterval(interval);
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[100] -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
            <div ref={followerRef} className="fixed top-0 left-0 w-6 h-6 border border-white/30 rounded-full pointer-events-none z-[99] -translate-x-1/2 -translate-y-1/2 transition-colors" />
        </>
    );
};

export default CustomCursor;
