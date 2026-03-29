import React from 'react';

const stats = [
  {
    key: 'words',
    label: 'Words',
    getValue: (r) => r.wordCount,
    color: 'text-primary-400',
    bgColor: 'bg-primary-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
  },
  {
    key: 'chars',
    label: 'Characters',
    getValue: (r) => r.characterCount,
    color: 'text-accent-400',
    bgColor: 'bg-accent-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
      </svg>
    ),
  },
  {
    key: 'sources',
    label: 'Sources Checked',
    getValue: (r) => r.allMatches?.length || 0,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    key: 'matches',
    label: 'Matches Found',
    getValue: (r) => r.matches?.length || 0,
    color: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
];

const StatsGrid = ({ result }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6" id="stats-grid">
      {stats.map((stat) => (
        <div
          key={stat.key}
          className="glass-light rounded-xl p-4 hover-lift group"
        >
          <div className={`w-8 h-8 rounded-lg ${stat.bgColor} flex items-center justify-center mb-2 ${stat.color} group-hover:scale-110 transition-transform`}>
            {stat.icon}
          </div>
          <div className={`text-2xl font-bold font-display ${stat.color}`}>
            {stat.getValue(result).toLocaleString()}
          </div>
          <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
