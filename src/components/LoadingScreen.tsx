import React, { useEffect, useState } from 'react';

const LoadingScreen = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isExit, setIsExit] = useState(false);

  const loadingStatuses = [
    "ASSEMBLING RACK",
    "CALIBRATING PLATES",
    "HEATING UP",
    "MAXING OUT",
    "LIFT OFF"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExit(true), 500);
          setTimeout(() => onFinished?.(), 1200);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(prev + diff, 100);
      });
    }, 250);

    return () => clearInterval(timer);
  }, [onFinished]);

  useEffect(() => {
    const segment = Math.floor(progress / 25);
    setStatusIndex(Math.min(segment, loadingStatuses.length - 1));
  }, [progress]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-transform duration-700 ease-in-out ${isExit ? '-translate-y-full' : 'translate-y-0'}`}>
      
      {/* 1. Industrial Background */}
      <div className="absolute inset-0 bg-[#070707]">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(#222 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/5 blur-[100px] rounded-full animate-pulse"></div>
      </div>

      {/* 2. Main Content */}
      <div className={`relative z-10 flex flex-col items-center transition-all duration-500 ${isExit ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        
        {/* Branding */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-[1px] w-8 bg-orange-500/50"></span>
            <h2 className="text-[10px] font-bold tracking-[0.6em] text-orange-500 uppercase">Est. 2025</h2>
            <span className="h-[1px] w-8 bg-orange-500/50"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white">
            GYM<span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>TOWN</span>
          </h1>
        </div>

        {/* 3. The Central "Plate" Animation */}
        <div className="relative flex items-center justify-center">
          {/* Outer Progress Circle */}
          <svg className="w-56 h-56 transform -rotate-90">
            <circle cx="112" cy="112" r="105" stroke="rgba(255,255,255,0.03)" strokeWidth="1" fill="none" />
            <circle
              cx="112" cy="112" r="105"
              stroke="#f97316"
              strokeWidth="3"
              fill="none"
              strokeDasharray={660}
              strokeDashoffset={660 - (660 * progress) / 100}
              strokeLinecap="butt"
              className="transition-all duration-500 ease-out"
            />
          </svg>

          {/* Calibrated Weight Plate SVG */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-40 h-40 transition-transform duration-700"
              style={{ transform: `rotate(${progress * 3.6}deg)` }}
            >
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                {/* Main Plate Body */}
                <circle cx="100" cy="100" r="95" fill="#1a1a1a" stroke="#222" strokeWidth="2" />
                <circle cx="100" cy="100" r="85" fill="none" stroke="#2a2a2a" strokeWidth="8" />
                
                {/* Plate Inner Ring (Metal Hub) */}
                <circle cx="100" cy="100" r="30" fill="#222" />
                <circle cx="100" cy="100" r="22" fill="#333" stroke="#444" strokeWidth="1" />
                <circle cx="100" cy="100" r="12" fill="#0a0a0a" /> {/* Center Hole */}
                
                {/* Plate Labels */}
                <text x="100" y="60" textAnchor="middle" fill="#444" className="text-[14px] font-black tracking-widest uppercase" style={{ fontStyle: 'normal' }}>GTX-Elite</text>
                <text x="100" y="155" textAnchor="middle" fill="#f97316" className="text-[24px] font-black italic" style={{ fontStyle: 'normal' }}>20KG</text>
                
                {/* Decorative Rivets */}
                <circle cx="100" cy="35" r="2" fill="#333" />
                <circle cx="100" cy="165" r="2" fill="#333" />
                <circle cx="35" cy="100" r="2" fill="#333" />
                <circle cx="165" cy="100" r="2" fill="#333" />
              </svg>
            </div>
          </div>
        </div>

        {/* 4. Statistics Display */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-4">
             <div className="flex flex-col items-end">
                <span className="text-[10px] text-gray-500 font-mono tracking-tighter uppercase">Power Output</span>
                <span className="text-white font-black italic leading-none text-xl">{(progress * 1.5).toFixed(0)}%</span>
             </div>
             <div className="w-[1px] h-8 bg-white/10"></div>
             <div className="flex flex-col items-start">
                <span className="text-[10px] text-gray-500 font-mono tracking-tighter uppercase">Status</span>
                <span className="text-orange-500 font-black italic leading-none text-xl">{loadingStatuses[statusIndex]}</span>
             </div>
          </div>
          
          {/* Minimal Progress Bar */}
          <div className="w-64 h-[2px] bg-white/5 relative overflow-hidden">
            <div 
                className="absolute inset-y-0 left-0 bg-orange-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Aesthetic Technical Overlays */}
      <div className="absolute top-8 left-8 flex flex-col gap-1">
        <span className="text-[9px] font-mono text-white/20 tracking-widest">SYSTEM_INIT_0x24</span>
        <div className="flex gap-1">
            <div className="w-1 h-1 bg-orange-500"></div>
            <div className="w-1 h-1 bg-white/10"></div>
            <div className="w-1 h-1 bg-white/10"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;