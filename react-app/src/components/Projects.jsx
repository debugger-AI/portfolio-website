import React from 'react';

const projects = [
    {
        title: 'Jali AI — CHW Health Toolkit',
        desc: 'An offline-first health application empowering Community Health Workers with clinical decision support, RAG/LLM-powered diagnostics, and a Snowflake + Airflow data pipeline for real-time community health insights.',
        tags: ['RAG/LLM', 'Snowflake', 'Airflow', 'PouchDB', 'React', 'Data Engineering'],
        year: '2025',
        githubLink: 'https://github.com/debugger-AI/jali_AI'
    },
    {
        title: 'Customer Segmentation',
        desc: 'Developed a clustering model for retail clients using K-Means, improving campaign targeting and ensuring consistent route delivery of goods at Tolaram East Africa Limited.',
        tags: ['K-Means', 'Clustering', 'Python', 'Retail'],
        year: '2025',
        githubLink: 'https://github.com/debugger-AI'
    },
    {
        title: 'Sales & MRP Forecasting',
        desc: 'Created a time-series forecasting model using ARIMA and Prophet to predict sales trends. Optimized raw material usage estimates for production allocation.',
        tags: ['ARIMA', 'Prophet', 'Time-Series', 'SQL'],
        year: '2025',
        githubLink: 'https://github.com/debugger-AI'
    },
    {
        title: 'Financial Data Pipelines',
        desc: 'Built Python-based data cleaning pipelines and Power BI dashboards to track portfolio performance and improve financial dataset accuracy for Jubilee Insurance.',
        tags: ['Python', 'Power BI', 'Data Pipelines', 'Finance'],
        year: '2024',
        githubLink: 'https://github.com/debugger-AI'
    },
    {
        title: 'Operational Data Mining',
        desc: 'Conducted online data mining and created interactive dashboards using Power BI and Excel for Beacon of Hope to support organizational decision-making.',
        tags: ['Data Mining', 'Power BI', 'Excel', 'Analytics'],
        year: '2022',
        githubLink: 'https://github.com/debugger-AI'
    }
];

const ProjectCard = ({ title, desc, tags, year, link, githubLink }) => {
    const content = (
        <div className="flex flex-col md:flex-row gap-8 justify-between md:items-start relative z-10 px-4 md:px-0">
            <div className="md:w-1/3">
                <h3 className="text-2xl text-zinc-100 font-medium tracking-tight mb-2 group-hover:translate-x-2 transition-transform duration-300">{title}</h3>
                <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] font-mono uppercase text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded-md">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="md:w-1/2">
                <p className="text-zinc-400 font-light leading-relaxed text-sm md:text-base">{desc}</p>
            </div>
            <div className="md:w-auto text-right">
                <span className="text-xs font-mono text-zinc-600 group-hover:text-white transition-colors">{year}</span>
                <div className="mt-4 flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-white hover:text-zinc-300 transition-colors"
                            title="View on GitHub"
                        >
                            <iconify-icon icon="lucide:github" width="20" height="20" />
                        </a>
                    )}
                    {link && (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M7 17L17 7" /><polyline points="7 7 17 7 17 17" /></svg>
                    )}
                </div>
            </div>
        </div>
    );

    // Use GitHub link as primary, fallback to external link
    const primaryLink = githubLink || link;

    if (primaryLink) {
        return (
            <a
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive group relative border-t border-zinc-800/60 py-12 hover:bg-zinc-900/30 transition-all duration-500 block cursor-pointer"
            >
                {content}
            </a>
        );
    }

    return (
        <div className="interactive group relative border-t border-zinc-800/60 py-12 hover:bg-zinc-900/30 transition-all duration-500">
            {content}
        </div>
    );
};

const Projects = () => (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-16 border-b border-zinc-800 pb-6">
            <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">Selected Work</h2>
            <span className="hidden md:inline-block text-xs font-mono text-zinc-500 uppercase tracking-widest">Case Studies 01—05</span>
        </div>
        <div className="flex flex-col">
            {projects.map((p, i) => (
                <ProjectCard key={i} {...p} />
            ))}
        </div>
    </section>
);

export default Projects;
