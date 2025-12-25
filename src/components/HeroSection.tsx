import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star, QrCode } from 'lucide-react';
import heroAthlete from '@/assets/hero-athlete.jpg';
import appMockup from '@/assets/app-mockup.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const [counters, setCounters] = useState({ customers: 0, coaches: 0, trainers: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    const targets = { customers: 290, coaches: 175, trainers: 190 };
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
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-wider">
                <span className="text-foreground">GYM</span>
                <br />
                <span className="text-gradient-primary">TOWN</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
                Welcome to GYM TOWN, Your Go-To Gym In Town. We're Here To Help You Become The Best & Strongest
              </p>
              <p className="text-accent font-semibold text-lg">
                WE MAKE FITNESS FUN 🍎
              </p>
            </div>

            {/* CTA Button */}
            <Button variant="hero" size="xl" className="group">
              Join Our Workshop Now
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Button>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
                  {counters.customers}k+
                </p>
                <p className="text-muted-foreground text-sm">Happy Customers</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
                  {counters.coaches}k+
                </p>
                <p className="text-muted-foreground text-sm">Fitness Coaches</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
                  {counters.trainers}+
                </p>
                <p className="text-muted-foreground text-sm">Professional Trainers</p>
              </div>
            </div>

            {/* App Download Section */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-3 bg-card/50 p-4 rounded-xl border border-border/50">
                <div className="bg-foreground p-2 rounded-lg">
                  <QrCode className="w-12 h-12 text-background" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Scan The QR Code</p>
                  <p className="text-sm font-medium text-foreground">To Download The App</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${star <= 4 ? 'fill-primary text-primary' : 'fill-primary/50 text-primary/50'}`}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">4.8/5</p>
                  <p className="text-xs text-muted-foreground">Based on 165k Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Images */}
          <div className={`relative h-[500px] lg:h-[700px] ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Main athlete image */}
            <div className="absolute inset-0 flex items-center justify-center">
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
            <div className="absolute top-10 right-0 lg:-right-8 w-32 sm:w-40 lg:w-48 animate-float">
              <img
                src={appMockup}
                alt="Gym Town App"
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
