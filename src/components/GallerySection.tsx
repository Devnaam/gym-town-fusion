import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';

const GallerySection = () => {
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

  const galleryItems = [
    {
      image: gallery1,
      title: 'Fit Women Cheering In Weights Room',
      description: 'Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer.',
    },
    {
      image: gallery2,
      title: 'Fit People Smiling At Camera In Weights Room',
      description: 'Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer.',
    },
    {
      image: gallery3,
      title: 'Male Personal Trainer Supporting Woman',
      description: 'Start With A Personal Trainer And Obtain Your Fitness Goals. Working With A Personal Trainer.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <h3 className="font-bold text-foreground text-lg leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Arrow Button */}
              <button className="absolute bottom-6 right-6 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 translate-y-4 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              className={`w-3 h-3 rounded-full transition-all ${
                dot === 0 ? 'bg-accent w-8' : 'bg-muted hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
