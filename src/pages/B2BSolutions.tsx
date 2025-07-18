import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Code, BarChart3, Zap, ShoppingCart, Clock, Shield, Truck, DollarSign } from "lucide-react";

const B2BSolutions = () => {
  const features = [
    {
      icon: Code,
      title: "API Integration",
      description: "Seamless integration with your existing systems via RESTful APIs"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Real-time insights into inventory, sales, and customer behavior"
    },
    {
      icon: Zap,
      title: "Automated Processing",
      description: "Automatic order processing, invoicing, and inventory updates"
    },
    {
      icon: ShoppingCart,
      title: "Bulk Ordering",
      description: "Streamlined bulk ordering with custom pricing tiers"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated account management and technical support"
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% freshness guarantee with quality scoring system"
    }
  ];

  const partners = [
    { name: "Zepto", category: "Quick Commerce" },
    { name: "Blinkit", category: "Instant Delivery" },
    { name: "BigBasket", category: "Online Grocery" },
    { name: "Amazon Fresh", category: "E-commerce" },
    { name: "Swiggy Instamart", category: "Quick Commerce" },
    { name: "Dunzo", category: "Hyperlocal" }
  ];

  const caseStudies = [
    {
      partner: "Zepto",
      challenge: "Reduce spoilage and improve delivery times",
      solution: "Implemented real-time inventory sync and predictive ordering",
      result: "40% reduction in waste, 25% faster deliveries"
    },
    {
      partner: "Blinkit",
      challenge: "Scale fresh produce offerings across cities",
      solution: "Multi-city logistics network with quality control",
      result: "300% increase in fresh produce sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Purestock</span> B2B Solutions
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Power your business with our comprehensive fresh produce supply chain platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Demo
            </Button>
            <Button variant="outline" size="lg">
              View API Docs
            </Button>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Leading Platforms</h2>
          <p className="text-muted-foreground">Powering fresh deliveries for top e-commerce and quick-commerce platforms</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-primary">{partner.name.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-sm">{partner.name}</h3>
                <p className="text-xs text-muted-foreground">{partner.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Enterprise Features</h2>
          <p className="text-muted-foreground">Everything you need to scale your fresh produce business</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* API & Integration */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Seamless API Integration
            </h2>
            <p className="text-muted-foreground mb-6">
              Connect your platform with Purestock's supply chain in minutes, not months. Our RESTful APIs provide real-time access to inventory, pricing, and order management.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary">REST API</Badge>
                <span className="text-sm">Real-time inventory updates</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary">WEBHOOK</Badge>
                <span className="text-sm">Event-driven notifications</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge className="bg-primary/10 text-primary">SDK</Badge>
                <span className="text-sm">JavaScript, Python, PHP libraries</span>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Access API Documentation
            </Button>
          </div>
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <pre className="text-sm text-muted-foreground overflow-x-auto">
{`// Example API Usage
const response = await fetch('/api/inventory', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const inventory = await response.json();
console.log(inventory);

// Real-time updates via WebSocket
const ws = new WebSocket('wss://api.purestock.com/ws');
ws.onmessage = (event) => {
  const update = JSON.parse(event.data);
  updateInventory(update);
};`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-muted-foreground">See how our partners achieved remarkable results</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="font-bold text-primary">{study.partner.charAt(0)}</span>
                  </div>
                  <CardTitle>{study.partner} Success Story</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-destructive mb-1">Challenge</h4>
                    <p className="text-sm text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-primary mb-1">Solution</h4>
                    <p className="text-sm text-muted-foreground">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-accent mb-1">Result</h4>
                    <p className="text-sm font-medium">{study.result}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-16">
        <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Get Started with Purestock B2B</CardTitle>
            <p className="text-center text-muted-foreground">Let's discuss how we can power your fresh produce business</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" placeholder="Your company" />
              </div>
              <div>
                <Label htmlFor="email">Business Email</Label>
                <Input id="email" type="email" placeholder="business@company.com" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+91 9876543210" />
              </div>
              <div>
                <Label htmlFor="volume">Monthly Volume</Label>
                <Input id="volume" placeholder="e.g., 1000 orders/month" />
              </div>
            </div>
            <div>
              <Label htmlFor="requirements">Business Requirements</Label>
              <Textarea 
                id="requirements" 
                placeholder="Tell us about your fresh produce needs, integration requirements, and business goals"
                rows={4}
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
              Schedule Partnership Discussion
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default B2BSolutions;