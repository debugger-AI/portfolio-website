import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const Hero = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-line', { y: 100, opacity: 0, duration: 1.5, stagger: 0.15, ease: 'power4.out', delay: 0.2 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="min-h-screen flex flex-col justify-center px-6 max-w-7xl mx-auto pt-24">
            <div className="space-y-2 relative z-10">
                <div className="flex items-center gap-3 mb-6 hero-line">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-widest text-emerald-500">Available for Hire</span>
                </div>
                <h1 className="hero-line text-[clamp(3rem,8vw,7rem)] font-semibold text-white tracking-tighter leading-[0.95]">
                    Predicting the <br />
                    <span className="text-zinc-600">Unseen.</span>
                </h1>
                <p className="hero-line text-lg md:text-xl text-zinc-400 font-light max-w-xl mt-8 leading-relaxed">
                    AI Engineer &amp; Data Scientist specializing in turning raw unstructured data into <span className="text-white font-medium">actionable intelligence</span>.
                </p>
                <div className="hero-line flex flex-wrap gap-4 mt-12">
                    {['Python', 'Prophet', 'PySpark', 'SAP4HANA', 'AWS'].map(tech => (
                        <span key={tech} className="px-3 py-1 rounded-full border border-zinc-800 text-xs font-mono text-zinc-500 bg-zinc-900/50">{tech}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
