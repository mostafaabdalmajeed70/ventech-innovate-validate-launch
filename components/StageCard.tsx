import React from 'react';
import { Stage } from '../types';

interface StageCardProps {
  stage: Stage;
  index: number;
}

const StageCard: React.FC<StageCardProps> = ({ stage, index }) => {
  return (
    <div className="relative flex gap-6 group">
      {/* Timeline Line */}
      <div className="flex flex-col items-center">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 transition-colors duration-300 ${
          index % 2 === 0 
            ? 'bg-dark-900 border-primary text-primary group-hover:bg-primary group-hover:text-white' 
            : 'bg-dark-900 border-secondary text-secondary group-hover:bg-secondary group-hover:text-white'
        }`}>
          <stage.icon className="w-6 h-6" />
        </div>
        <div className="h-full w-0.5 bg-gray-800 group-hover:bg-gray-700 -my-2"></div>
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
          <div className="flex flex-wrap justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white">{stage.title}</h3>
            <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              {stage.date}
            </span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            {stage.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StageCard;