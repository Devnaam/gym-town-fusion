import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [dots, setDots] = useState('');

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    // Animated dots
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

        {/* Animated dumbbell */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-6 h-12 bg-primary rounded-lg animate-bounce"></div>
          <div className="w-24 h-3 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
          <div className="w-6 h-12 bg-accent rounded-lg animate-bounce" style={{ animationDelay: '0.2s' }}></div>
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
