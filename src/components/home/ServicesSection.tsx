import { ArrowRight, Building, Users, GraduationCap, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "B2B Solutions",
      description: "Seamless integration with platforms like Zepto, Blinkit, and your existing systems",
      icon: Building,
      features: [
        "API Integration",
        "Bulk Ordering",
        "Real-time Inventory",
        "Automated Processing"
      ],
      gradient: "from-blue-500 to-blue-700",
      link: "/b2b",
      partners: ["Zepto", "Blinkit", "Swiggy"],
      badge: "Enterprise"
    },
    {
      title: "Direct to Consumer",
      description: "Fresh produce delivered straight to your doorstep with flexible subscription plans",
      icon: Users,
      features: [
        "Subscription Plans",
        "Custom Meal Planning",
        "Family Packages",
        "Flexible Delivery"
      ],
      gradient: "from-green-500 to-green-700",
      link: "/b2c",
      partners: ["Family Plans", "Weekly Boxes", "Custom Orders"],
      badge: "Popular"
    },
    {
      title: "Institutional Services",
      description: "Serving schools, offices, and organizations with bulk fresh food solutions",
      icon: GraduationCap,
      features: [
        "Bulk Orders",
        "Meal Planning",
        "Nutritional Analysis",
        "Cost Optimization"
      ],
      gradient: "from-purple-500 to-purple-700",
      link: "/institutional",
      partners: ["Schools", "Offices", "Hospitals"],
      badge: "Bulk"
    }
  ];

  const integrations = [
    { name: "Zepto", logo: "🛒", status: "Active" },
    { name: "Blinkit", logo: "⚡", status: "Active" },
    { name: "Swiggy", logo: "🍽️", status: "Active" },
    { name: "Zomato", logo: "🍕", status: "Coming Soon" },
    { name: "BigBasket", logo: "🛍️", status: "Coming Soon" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Multi-Channel Fresh Food Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a business, family, or institution, we have the perfect solution for your fresh food needs
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="service-card group relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${service.gradient} text-white`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary">{service.badge}</Badge>
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Partners:</div>
                  <div className="flex flex-wrap gap-1">
                    {service.partners.map((partner, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {partner}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link to={service.link}>
                  <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Partners */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-heading font-semibold mb-8">
            Seamless Integration Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="flex items-center space-x-3 bg-card rounded-lg p-4 shadow-card">
                <div className="text-2xl">{integration.logo}</div>
                <div>
                  <div className="font-medium">{integration.name}</div>
                  <div className={`text-xs ${
                    integration.status === 'Active' ? 'text-green-600' : 'text-yellow-600'
                  }`}>
                    {integration.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile App CTA */}
        <Card className="bg-gradient-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-semibold mb-4">
              Get the Purestock Mobile App
            </h3>
            <p className="text-primary-foreground/90 mb-6">
              Order fresh produce, track deliveries, and manage your subscriptions on the go
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" size="lg">
                📱 Download iOS App
              </Button>
              <Button variant="secondary" size="lg">
                🤖 Download Android App
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ServicesSection;