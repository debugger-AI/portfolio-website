import React from 'react';

const competencies = [
    {
        title: 'Data Science & Analytics',
        skills: 'Predictive modeling, Artificial Intelligence, Clustering, Classification, Simulations.'
    },
    {
        title: 'Programming',
        skills: 'Python (pandas, NumPy, scikit-learn, Stats models), SQL, R.'
    },
    {
        title: 'Machine Learning',
        skills: 'Linear regression, Logistic regression, Decision trees, Random forests, ARIMA, Prophet.'
    },
    {
        title: 'Big Data & Cloud',
        skills: 'AWS SageMaker, Google BigQuery, pySpark, Microsoft Azure, SAP4HANA.'
    },
    {
        title: 'Data Visualization',
        skills: 'Tableau, Power BI, Matplotlib, Seaborn.'
    },
    {
        title: 'Other Skills',
        skills: 'Feature engineering, EDA, Statistical sampling, Survey design, Model deployment, ETL.'
    }
];

const CoreCompetencies = () => (
    <section id="about" className="py-24 bg-zinc-900/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-12">Core Competencies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {competencies.map((comp, i) => (
                    <div key={i} className="group interactive p-6 border border-zinc-800 hover:border-zinc-600 rounded-xl bg-zinc-950/50 transition-colors h-full flex flex-col">
                        <h4 className="text-lg text-white font-medium tracking-tight mb-3 group-hover:text-zinc-200 transition-colors">
                            {comp.title}
                        </h4>
                        <p className="text-sm text-zinc-400 font-light leading-relaxed">
                            {comp.skills}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default CoreCompetencies;
