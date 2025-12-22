import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Stack', href: '#stack' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'pt-2' : 'pt-6'}`}>
            <div className="max-w-7xl mx-auto px-6 transition-all duration-500">
                <nav className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-300 ${isScrolled ? 'glass-panel' : 'border border-transparent'}`}>
                    <a href="#" className="interactive inline-flex items-center gap-2 group">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                            <span className="font-bold text-xs tracking-tighter">JN</span>
                        </div>
                        <span className="text-sm font-medium tracking-tight text-white group-hover:text-zinc-300 transition-colors">Jeremy Nyende</span>
                    </a>
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="interactive text-xs font-medium text-zinc-400 hover:text-white tracking-tight transition-colors uppercase">
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="/Jeremy-Nyende-CV.pdf" download="Jeremy-Nyende-CV.pdf" className="interactive hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-tight text-zinc-950 bg-white hover:bg-zinc-200 transition-colors border border-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                            <span>CV/Resume</span>
                        </a>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="interactive md:hidden inline-flex items-center justify-center rounded-full w-9 h-9 border border-zinc-800 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg>
                            )}
                        </button>
                    </div>
                </nav>
                <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                    <div className="glass-panel rounded-2xl p-4 grid gap-1">
                        {navLinks.map(link => (
                            <a key={link.name} href={link.href} className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
                                {link.name}
                            </a>
                        ))}
                        <div className="border-t border-zinc-800 mt-2 pt-3">
                            <a href="/Jeremy-Nyende-CV.pdf" download="Jeremy-Nyende-CV.pdf" className="flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-black bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15V3" /><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /></svg>
                                CV/Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
