
import React from 'react';

const HeartbeatLine = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full h-24 overflow-hidden ${className}`}>
      <svg 
        viewBox="0 0 1000 200" 
        className="w-full h-full"
      >
        <path
          d="M0,100 Q50,100 100,100 T200,100 T300,100 T350,100 T400,80 L410,40 L420,120 L430,40 L440,160 L450,80 T500,100 T600,100 T700,100 T800,100 T900,100 T1000,100"
          className="heartbeat-line animate-pulse-line"
          strokeDasharray="1000"
          strokeDashoffset="1000"
        />
      </svg>
    </div>
  );
};

export default HeartbeatLine;
