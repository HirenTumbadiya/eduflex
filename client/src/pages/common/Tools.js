import React from 'react';
import ToolCard from '../../components/common/ToolCard';

const Tools = () => {
  const tools = [
    {
      id: 1,
      title: 'Real-time Market Data',
      description: 'Access up-to-date market data, including stock quotes, charts, and financial news.',
      icon: 'fas fa-chart-line',
    },
    {
      id: 2,
      title: 'Stock Screener',
      description: 'Filter stocks based on specific criteria and find potential trading opportunities.',
      icon: 'fas fa-search',
    },
    {
      id: 3,
      title: 'Portfolio Tracker',
      description: 'Track and manage your investment portfolio with real-time updates and performance analytics.',
      icon: 'fas fa-briefcase',
    },
  ];

  return (
    <div className="m-20">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Trading Tools/Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <ToolCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Tools;
