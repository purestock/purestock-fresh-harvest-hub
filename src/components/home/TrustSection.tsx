import { useState } from 'react';
import { Star, Shield, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import supplyChainImage from '@/assets/supply-chain.jpg';

const TrustSection = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const journeySteps = [
    {
      icon: "🌱",
      title: "Farm Fresh",
      description: "Direct from verified organic farms",
      details: "Our farmers follow strict organic standards and sustainable practices"
    },
    {
      icon: "🏭",
      title: "Quality Check",
      description: "Advanced quality control systems",
      details: "Each batch undergoes rigorous testing for freshness and safety"
    },
    {
      icon: "📦",
      title: "Smart Packaging",
      description: "Eco-friendly preservation technology",
      details: "Temperature-controlled packaging maintains freshness during transit"
    },
    {
      icon: "🚚",
      title: "Fast Delivery",
      description: "24-hour delivery guarantee",
      details: "Real-time tracking and optimized routes for maximum freshness"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      rating: 5,
      text: "Purestock has transformed our kitchen. The quality and freshness are unmatched!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b90f3004?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Home Chef",
      rating: 5,
      text: "Finally, a service that delivers truly fresh produce. My family loves it!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Kumar",
      role: "Farmer Partner",
      rating: 5,
      text: "Purestock gave us direct access to customers. Our income increased by 40%!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const stats = [
    { value: "15,000+", label: "Farmers Connected", icon: Users },
    { value: "1M+", label: "Fresh Deliveries", icon: TrendingUp },
    { value: "98%", label: "Waste Reduced", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gradient-organic">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Trust & Transparency</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Your Journey to Fresh Food
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track every step from farm to your table with complete transparency and quality assurance
          </p>
        </div>

        {/* Journey Visualization */}
        <div className="mb-16">
          <img src={supplyChainImage} alt="Supply Chain" className="w-full h-64 object-cover rounded-lg mb-8" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {journeySteps.map((step, index) => (
              <Card 
                key={index}
                className={`journey-step cursor-pointer transition-all ${
                  hoveredStep === index ? 'shadow-organic' : ''
                }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{step.description}</p>
                  {hoveredStep === index && (
                    <div className="text-xs text-primary border-t pt-4 border-border">
                      {step.details}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Real-time Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="service-card">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-foreground mb-2 counter-animate">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            What Our Community Says
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;