import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 354, suffix: '+', label: 'Completed Projects' },
  { value: 119, suffix: '+', label: 'Robotic Automation' },
  { value: 99, suffix: '%', label: 'Web Site Analyse' },
  { value: 321, suffix: '+', label: 'Clients Support Done' },
];

const StatsCounter = () => {
  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-6xl bg-gradient-to-r from-purple-600 to-blue-400 rounded-2xl py-10 px-6 text-white flex flex-col md:flex-row justify-around items-center gap-10 md:gap-0">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl font-extrabold">
              <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
            </div>
            <p className="mt-2 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
