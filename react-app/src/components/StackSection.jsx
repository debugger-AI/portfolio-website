import React from 'react';

const stackItems = [
    { name: 'AWS SageMaker', type: 'ML Ops' },
    { name: 'Google BigQuery', type: 'Warehousing' },
    { name: 'Apache PySpark', type: 'Processing' },
    { name: 'Microsoft Azure', type: 'Cloud' },
    { name: 'SAP4HANA', type: 'Enterprise DB' },
    { name: 'ETL Processing', type: 'Pipeline' }
];

const StackSection = () => (
    <section id="stack" className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
                <h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-2">Data Engineering Stack</h2>
                <p className="text-zinc-400 text-sm max-w-md">Scalable infrastructure and processing pipelines utilized for deploying enterprise‑grade models.</p>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stackItems.map((item, idx) => (
                <div key={idx} className="interactive p-4 border border-zinc-800 bg-zinc-900/20 rounded-lg hover:bg-zinc-800/40 transition-colors flex flex-col justify-between h-28">
                    <div className="text-white opacity-80">
                        {/* placeholder icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z" /></svg>
                    </div>
                    <div>
                        <div className="text-[10px] font-mono uppercase text-zinc-500 mb-1">{item.type}</div>
                        <div className="text-sm font-medium text-zinc-200">{item.name}</div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default StackSection;
