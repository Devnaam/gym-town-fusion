import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import appMockup from '@/assets/app-mockup.png';

const AppSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="workshops" ref={sectionRef} className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <p className="text-accent font-semibold uppercase tracking-wider">
                Make Your Easy Away
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                COMPETITION SPORT
                <br />
                <span className="text-gradient-primary">SPECIFIC TRAINING</span>
              </h2>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
              Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer Is The Safest And Most Effective Way To Achieve Your Health And Fitness Goals.
            </p>

            <Button variant="outline" size="lg" className="group">
              Try For Demo
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>

            {/* App features */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="font-display text-3xl text-primary">100+</p>
                <p className="text-muted-foreground text-sm">Workouts</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-primary">50+</p>
                <p className="text-muted-foreground text-sm">Programs</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl text-primary">24/7</p>
                <p className="text-muted-foreground text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className={`flex justify-center ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-full blur-3xl opacity-50" />
              
              <img
                src={appMockup}
                alt="GYM TOWN App"
                className="relative w-64 sm:w-72 lg:w-80 h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
