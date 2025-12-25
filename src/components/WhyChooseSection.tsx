import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';
import whyChooseAthlete from '@/assets/why-choose-athlete.jpg';


const WhyChooseSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Stop observing after first trigger
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );


    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }


    return () => observer.disconnect();
  }, []);


  const features = [
    {
      title: 'CLEAN AND SAFE ENVIRONMENT',
      description: 'Our facility is regularly sanitized and maintained to ensure a safe and hygienic workout environment for all members.',
    },
    {
      title: 'CUTTING-EDGE EQUIPMENT',
      description: 'Experience the latest in fitness technology with our state-of-the-art gym equipment and machines.',
    },
    {
      title: 'PROFESSIONAL TRAINERS',
      description: 'Work with certified fitness experts who create personalized training plans tailored to your goals.',
    },
    {
      title: 'VARIETY OF CLASSES',
      description: 'From yoga to HIIT, we offer diverse workout programs suitable for all fitness levels and preferences.',
    },
  ];


  return (
    <section id="about" ref={sectionRef} className="py-20 lg:py-32 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image - FIXED */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-50" />
              
              <img
                src={whyChooseAthlete}
                alt="Muscular athlete flexing"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
                loading="lazy"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold shadow-lg">
                15+ Years Experience
              </div>
            </div>
          </div>


          {/* Right - Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                WHY CHOOSE OUR
                <br />
                <span className="text-gradient-primary">FITNESS</span>
              </h2>
            </div>


            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-4 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                  style={{ transitionDelay: `${300 + (index * 100)}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="w-5 h-5 text-accent-foreground" strokeWidth={3} />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-accent transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WhyChooseSection;
