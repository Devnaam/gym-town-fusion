import { useEffect, useState } from 'react';


const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');


  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);


    const dotsInterval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
    }, 400);


    return () => {
      clearInterval(progressInterval);
      clearInterval(dotsInterval);
    };
  }, []);


  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 animate-pulse-slow"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>


      {/* Main content */}
      <div className="relative z-10 text-center space-y-12 px-4">
        {/* Animated Logo with glow */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl opacity-50">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl leading-none tracking-wider">
              <span className="text-primary">GYM</span>
              <br />
              <span className="text-accent">TOWN</span>
            </h1>
          </div>
          <h1 className="relative font-display text-6xl sm:text-7xl lg:text-9xl leading-none tracking-wider animate-pulse-slow">
            <span className="text-foreground">GYM</span>
            <br />
            <span className="text-gradient-primary">TOWN</span>
          </h1>
        </div>


        {/* Premium Animated Dumbbell */}
        <div className="flex items-center justify-center">
          <div className="w-48 sm:w-64 animate-bounce" style={{ filter: 'drop-shadow(0 15px 25px rgba(255, 105, 56, 0.3))' }}>
            <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
              {/* Left Weight Plates */}
              <rect x="10" y="10" width="16" height="80" rx="4" fill="url(#leftWeightOuter)">
                <animate attributeName="height" values="80;75;80" dur="1s" repeatCount="indefinite" />
                <animate attributeName="y" values="10;12.5;10" dur="1s" repeatCount="indefinite" />
              </rect>
              <rect x="26" y="20" width="12" height="60" rx="2" fill="url(#leftWeightInner)">
                <animate attributeName="height" values="60;56;60" dur="1s" repeatCount="indefinite" />
                <animate attributeName="y" values="20;22;20" dur="1s" repeatCount="indefinite" />
              </rect>
              
              {/* Right Weight Plates */}
              <rect x="174" y="10" width="16" height="80" rx="4" fill="url(#rightWeightOuter)">
                <animate attributeName="height" values="80;75;80" dur="1s" repeatCount="indefinite" begin="0.1s" />
                <animate attributeName="y" values="10;12.5;10" dur="1s" repeatCount="indefinite" begin="0.1s" />
              </rect>
              <rect x="162" y="20" width="12" height="60" rx="2" fill="url(#rightWeightInner)">
                <animate attributeName="height" values="60;56;60" dur="1s" repeatCount="indefinite" begin="0.1s" />
                <animate attributeName="y" values="20;22;20" dur="1s" repeatCount="indefinite" begin="0.1s" />
              </rect>
              
              {/* Central Bar/Handle */}
              <rect x="38" y="41" width="124" height="18" rx="2" fill="url(#metalGradient)"/>
              
              {/* Grip Texture */}
              <g stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" className="text-muted">
                <path d="M70 41v18M75 41v18M80 41v18M85 41v18M90 41v18M95 41v18M100 41v18M105 41v18M110 41v18M115 41v18M120 41v18M125 41v18M130 41v18"/>
              </g>

              {/* Gradients */}
              <defs>
                {/* Left weights - Primary color */}
                <linearGradient id="leftWeightOuter" x1="18" y1="10" x2="18" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(18, 100%, 65%)" />
                  <stop offset="0.5" stopColor="hsl(18, 100%, 60%)" />
                  <stop offset="1" stopColor="hsl(18, 100%, 50%)" />
                </linearGradient>
                <linearGradient id="leftWeightInner" x1="32" y1="20" x2="32" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(18, 100%, 70%)" />
                  <stop offset="1" stopColor="hsl(18, 100%, 55%)" />
                </linearGradient>

                {/* Right weights - Accent color */}
                <linearGradient id="rightWeightOuter" x1="182" y1="10" x2="182" y2="90" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(153, 100%, 55%)" />
                  <stop offset="0.5" stopColor="hsl(153, 100%, 50%)" />
                  <stop offset="1" stopColor="hsl(153, 100%, 45%)" />
                </linearGradient>
                <linearGradient id="rightWeightInner" x1="168" y1="20" x2="168" y2="80" gradientUnits="userSpaceOnUse">
                  <stop stopColor="hsl(153, 100%, 60%)" />
                  <stop offset="1" stopColor="hsl(153, 100%, 50%)" />
                </linearGradient>

                {/* Bar gradient - Metallic */}
                <linearGradient id="metalGradient" x1="100" y1="41" x2="100" y2="59" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#95a5a6" />
                  <stop offset="0.5" stopColor="#dcdde1" />
                  <stop offset="1" stopColor="#7f8c8d" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>


        {/* Premium circular progress */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-32 h-32">
            {/* Background circle */}
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-muted opacity-20"
              />
              {/* Progress circle */}
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 56}`}
                strokeDashoffset={`${2 * Math.PI * 56 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(18, 100%, 60%)" />
                  <stop offset="100%" stopColor="hsl(153, 100%, 50%)" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-3xl text-foreground">{progress}%</span>
            </div>
          </div>


          {/* Loading text with animated dots */}
          <div className="space-y-2">
            <p className="text-foreground font-semibold text-lg">
              Preparing Your Workout{dots}
            </p>
            <p className="text-muted-foreground text-sm">
              {progress < 30 && "Loading gym equipment..."}
              {progress >= 30 && progress < 60 && "Setting up training programs..."}
              {progress >= 60 && progress < 90 && "Getting trainers ready..."}
              {progress >= 90 && "Almost there..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default LoadingScreen;
