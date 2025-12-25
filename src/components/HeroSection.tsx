import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroAthlete from '@/assets/hero-athlete.jpg';
import appMockup from '@/assets/app-mockup.png';

interface HeroSectionProps {
  loadingComplete?: boolean;
}

const HeroSection = ({ loadingComplete = false }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ customers: 0, coaches: 0, trainers: 0 });


  useEffect(() => {
    // Start animations IMMEDIATELY when loading completes (no delay)
    if (loadingComplete) {
      setIsVisible(true);
    }
  }, [loadingComplete]);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );


    if (statsRef.current) {
      observer.observe(statsRef.current);
    }


    return () => observer.disconnect();
  }, []);


  const animateCounters = () => {
    const duration = 2000;
    const targets = { customers: 500, coaches: 10, trainers: 5 };
    const startTime = Date.now();


    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);


      setCounters({
        customers: Math.floor(targets.customers * easeOut),
        coaches: Math.floor(targets.coaches * easeOut),
        trainers: Math.floor(targets.trainers * easeOut),
      });


      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };


    requestAnimationFrame(animate);
  };


  return (
    <section id="home" className="relative min-h-screen bg-background overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card opacity-50" />


      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div 
              className="space-y-4 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
              }}
            >
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-wider">
                <span className="text-foreground">GYM</span>
                <br />
                <span className="text-gradient-primary">TOWN</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Welcome to GYM TOWN, your go-to gym in town. We're here to help you become stronger, fitter, and more confident.
              </p>
              <p className="text-accent font-semibold text-lg">
                WE MAKE FITNESS FUN 🍎
              </p>
            </div>


            {/* CTA Button */}
            <div 
              className="transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '150ms'
              }}
            >
              <Button variant="hero" size="xl" className="group">
                Join Our Workshop Now
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>


            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
              <div 
                className="text-center lg:text-left transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '250ms'
                }}
              >
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
                  {counters.customers}+
                </p>
                <p className="text-muted-foreground text-sm">Happy Members</p>
              </div>
              <div 
                className="text-center lg:text-left transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '350ms'
                }}
              >
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
                  {counters.coaches}+
                </p>
                <p className="text-muted-foreground text-sm">Certified Coaches</p>
              </div>
              <div 
                className="text-center lg:text-left transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transitionDelay: '450ms'
                }}
              >
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
                  {counters.trainers}+
                </p>
                <p className="text-muted-foreground text-sm">Professional Trainers</p>
              </div>
            </div>
          </div>


          {/* Right Content - Hero Images */}
          <div className="relative h-[500px] lg:h-[700px]">
            {/* Main athlete image */}
            <div 
              className="absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                transitionDelay: '200ms'
              }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl opacity-50" />
                <img
                  src={heroAthlete}
                  alt="Fitness athlete"
                  className="relative w-full h-auto object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>


            {/* Floating phone mockup */}
            <div 
              className="absolute top-8 right-0 lg:right-4 w-32 sm:w-36 lg:w-44 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transitionDelay: '400ms'
              }}
            >
              <div className={isVisible ? 'animate-float' : ''}>
                <div className="relative">
                  {/* Glow effect behind phone */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl rounded-3xl scale-110" />

                  {/* Phone image */}
                  <img
                    src={appMockup}
                    alt="Gym Town App"
                    className="relative w-full h-auto drop-shadow-2xl rounded-3xl"
                  />

                  {/* Download badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-primary px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                    <p className="text-[10px] font-bold text-white">Download App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};


export default HeroSection;
