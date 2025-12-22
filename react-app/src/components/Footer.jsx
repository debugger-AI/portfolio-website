import React from 'react';

const Footer = () => (
    <footer id="contact" className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-8">
                Ready to <span className="text-zinc-600">Collaborate?</span>
            </h2>
            <a href="mailto:jeremyondata@gmail.com" className="interactive inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-950 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                Get in Touch
            </a>
            <div className="flex flex-col items-center gap-4 mt-16">
                <div className="flex items-center gap-6">
                    <a href="https://github.com/debugger-AI" target="_blank" rel="noopener noreferrer" className="interactive inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-4 py-2 border border-zinc-800 hover:border-zinc-700 rounded-lg">
                        <iconify-icon icon="lucide:github" width="18" height="18" stroke-width="1.5" />
                        <span className="text-sm font-mono">GitHub</span>
                    </a>
                    <a href="https://www.kaggle.com/jeremynyende" target="_blank" rel="noopener noreferrer" className="interactive inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-4 py-2 border border-zinc-800 hover:border-zinc-700 rounded-lg">
                        <iconify-icon icon="simple-icons:kaggle" width="18" height="18" />
                        <span className="text-sm font-mono">Kaggle</span>
                    </a>
                    <a href="mailto:jeremyondata@gmail.com" className="interactive inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-4 py-2 border border-zinc-800 hover:border-zinc-700 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        <span className="text-sm font-mono">Gmail</span>
                    </a>
                </div>
            </div>
            <div className="mt-24 w-full flex justify-between items-center text-[10px] text-zinc-600 font-mono uppercase tracking-widest border-t border-zinc-900 pt-8">
                <span>© 2026 Jeremy Nyende</span>
                <span>Built with React &amp; Three.js</span>
            </div>
        </div>
    </footer>
);

export default Footer;
