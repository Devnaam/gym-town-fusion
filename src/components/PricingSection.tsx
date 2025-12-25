import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
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

  const plans = [
    {
      name: 'Basic Membership',
      price: '₹1,650',
      period: 'Month',
      featured: false,
      features: [
        'Unlimited gym access',
        'Personal training included',
        'Question and answer session',
        'Video instruction of workouts',
        'Supplement consulting and diet',
        'Gym bag',
        'Payment flexibility',
      ],
    },
    {
      name: 'Popular Membership',
      price: '₹9,999',
      period: 'Year',
      featured: true,
      badge: 'SAVE ₹9,801 ANNUALLY',
      features: [
        'Unlimited gym access',
        'Personal training included',
        'Question and answer session',
        'Video instruction of workouts',
        'Supplement consulting and diet',
        'Gym bag + Merchandise',
        'Priority booking for classes',
        'Nutrition plan included',
      ],
    },
    {
      name: 'Standard Membership',
      price: '₹1,650',
      period: 'Month',
      featured: false,
      features: [
        'Unlimited gym access',
        'Personal training included',
        'Question and answer session',
        'Video instruction of workouts',
        'Supplement consulting and diet',
        'Gym bag',
        'Payment flexibility',
      ],
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground">
            ONLINE <span className="text-gradient-primary">PACKAGE</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border transition-all duration-500 hover:scale-105 ${
                plan.featured
                  ? 'bg-gradient-featured border-primary/50 shadow-glow-primary'
                  : 'bg-card border-border/50 hover:border-accent/50'
              } ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="font-semibold text-foreground text-lg mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl lg:text-5xl text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent-foreground" strokeWidth={3} />
                    </div>
                    <span className="text-foreground/90 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button
                variant="accent"
                className="w-full"
                size="lg"
              >
                Subscribe To Become Member
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
