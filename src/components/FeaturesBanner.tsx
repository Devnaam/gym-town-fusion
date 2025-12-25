import { Check } from 'lucide-react';

const FeaturesBanner = () => {
  const features = [
    'CLEAN AND SAFE ENVIRONMENT',
    'CUTTING-EDGE EQUIPMENT',
    'PROFESSIONAL TRAINERS',
    'VARIETY OF CLASSES',
  ];

  const repeatedFeatures = [...features, ...features, ...features, ...features];

  return (
    <section className="bg-gradient-accent py-4 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeatedFeatures.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 mx-8">
            <Check className="w-5 h-5 text-accent-foreground" strokeWidth={3} />
            <span className="font-bold text-accent-foreground text-sm md:text-base uppercase tracking-wide">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesBanner;
