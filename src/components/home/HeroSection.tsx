import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@/assets/hero-farm-to-table.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const valueProps = [
    "100% Pure Stock",
    "Directly from Farmers", 
    "Zero Waste Technology"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroImage})`,
        }}
      />
      
      {/* Organic floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-primary/20 to-accent/20 organic-shape animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 organic-shape animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 organic-shape animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className={`hero-entrance ${isVisible ? 'animate-hero-entrance' : 'opacity-0'}`}>
          {/* Value proposition badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {valueProps.map((prop, index) => (
              <Badge 
                key={index} 
                className="trust-badge text-sm px-4 py-2"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {prop}
              </Badge>
            ))}
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
            Pure Stock, Pure Freshness
            <span className="block text-accent mt-2">Farm to Fork in 24 Hours</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connecting farmers, warehouses, and consumers through a seamless fresh food delivery ecosystem
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:opacity-90 transition-all text-lg px-8 py-6 rounded-full hover-scale animate-pulse-glow"
          >
            Start Your Fresh Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          {/* Stats preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-white/80">Farmers Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50,000+</div>
              <div className="text-white/80">Fresh Deliveries Today</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-white/80">Waste Reduced</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;