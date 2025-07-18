import Header from "@/components/layout/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Truck, Package, Leaf, Clock, MapPin, Smartphone } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Farm Collection",
      description: "Fresh produce harvested directly from our partner farmers using sustainable practices",
      icon: Leaf,
      time: "6:00 AM",
      tech: "IoT Sensors Monitor Freshness"
    },
    {
      id: 2,
      title: "Warehouse Processing", 
      description: "Quality inspection and processing at our state-of-the-art facilities",
      icon: Package,
      time: "10:00 AM",
      tech: "AI-Powered Quality Control"
    },
    {
      id: 3,
      title: "Food Preparation",
      description: "Custom packaging and preparation based on order requirements",
      icon: Package,
      time: "2:00 PM", 
      tech: "Automated Packaging Systems"
    },
    {
      id: 4,
      title: "Last Mile Delivery",
      description: "Real-time tracked delivery to your doorstep within 24 hours",
      icon: Truck,
      time: "6:00 PM",
      tech: "GPS Tracking & Route Optimization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            How <span className="text-primary">Purestock</span> Works
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Follow the complete journey from farm to your table with transparency and technology
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="container mx-auto px-6 py-16">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 hidden md:block"></div>
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <Card className="bg-card/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full mr-4">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.time}
                        </Badge>
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <div className="flex items-center text-sm text-primary">
                      <Smartphone className="w-4 h-4 mr-2" />
                      {step.tech}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Features */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Powered by Technology</h2>
          <p className="text-muted-foreground">Advanced systems ensuring quality and transparency</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Real-Time Tracking</h3>
              <p className="text-muted-foreground">Track your order from farm to doorstep with live GPS updates</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <Package className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">AI-powered quality control ensuring only the freshest produce</p>
            </CardContent>
          </Card>
          
          <Card className="text-center bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-muted-foreground">Zero waste technology and eco-friendly packaging</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;