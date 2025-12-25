import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonialAvatar from '@/assets/testimonial-avatar.jpg';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Member',
      image: testimonialAvatar,
      rating: 5,
      text: 'Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer Is The Safest And Most Effective Way To Achieve Your Health And Fitness Goals. Health And Fitness Programs Help Them.',
      subtext: 'We Understand That Your Health And Fitness Goals Are Unique And Should Be Based On Your Specific Needs. For The Last 15 Years',
    },
    {
      name: 'Priya Sharma',
      role: 'Member',
      image: testimonialAvatar,
      rating: 5,
      text: 'The trainers at GYM TOWN are incredibly supportive and knowledgeable. They helped me transform my body and mindset in just 6 months. I\'ve never felt stronger!',
      subtext: 'The community here is amazing. Everyone motivates each other to push harder and achieve more.',
    },
    {
      name: 'Amit Patel',
      role: 'Member',
      image: testimonialAvatar,
      rating: 5,
      text: 'Best gym in town! The equipment is top-notch, the environment is clean, and the staff is always helpful. Highly recommend GYM TOWN to anyone serious about fitness.',
      subtext: 'I\'ve tried many gyms, but this one stands out for its professionalism and results-driven approach.',
    },
  ];

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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Header */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
              WHAT OUR HAPPY
              <br />
              <span className="text-gradient-primary">CLIENTS SAY</span>
              <br />
              ABOUT US
            </h2>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Welcome To GYM TOWN, Your Go-To Gym In The City. We're Here To Help You Become The Best And Strongest
            </p>
          </div>

          {/* Right - Testimonial Card */}
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50 relative overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/20" />
              
              {/* Profile */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent"
                />
                <div>
                  <h4 className="font-bold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonials[currentIndex].rating
                        ? 'fill-primary text-primary'
                        : 'text-muted'
                    }`}
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-foreground text-lg leading-relaxed mb-4">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonials[currentIndex].subtext}
              </p>

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border-2 border-accent/50 flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground hover:opacity-90 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
