import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  Clock, 
  MapPin, 
  Shield, 
  Zap, 
  CheckCircle,
  Star,
  Phone,
  MessageSquare,
  Route
} from 'lucide-react';

const DeliveryServices = () => {
  const deliveryFeatures = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Express Delivery",
      description: "Get your fresh produce delivered in 30 minutes within city limits",
      badge: "Most Popular"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Scheduled Delivery", 
      description: "Plan your deliveries up to 7 days in advance",
      badge: "Convenient"
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Safe & Fresh",
      description: "Temperature controlled vehicles ensure freshness",
      badge: "Quality"
    }
  ];

  const serviceAreas = [
    { area: "Central Mumbai", time: "20-30 mins", fee: "₹29" },
    { area: "South Mumbai", time: "25-35 mins", fee: "₹39" },
    { area: "Western Suburbs", time: "30-45 mins", fee: "₹49" },
    { area: "Eastern Suburbs", time: "35-50 mins", fee: "₹59" },
    { area: "Navi Mumbai", time: "40-60 mins", fee: "₹69" },
    { area: "Thane", time: "45-70 mins", fee: "₹79" }
  ];

  const deliveryStats = [
    { label: "Active Delivery Partners", value: "500+", icon: <Truck className="w-6 h-6" /> },
    { label: "Average Delivery Time", value: "28 mins", icon: <Clock className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "4.8★", icon: <Star className="w-6 h-6" /> },
    { label: "Orders Delivered Daily", value: "2000+", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Farm Fresh, Delivered Fast
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Professional delivery network ensuring your fresh produce reaches you quickly and safely
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Route className="w-5 h-5 mr-2" />
              Track Your Order
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Truck className="w-5 h-5 mr-2" />
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Delivery Features */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Delivery Options</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the delivery option that best fits your schedule and needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <Card key={index} className="relative text-center">
                <CardHeader className="pb-4">
                  {feature.badge && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                      {feature.badge}
                    </Badge>
                  )}
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Delivery Areas</h2>
            <p className="text-muted-foreground text-lg">
              We deliver across Mumbai and surrounding areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <h3 className="font-semibold">{area.area}</h3>
                    </div>
                    <Badge variant="outline">{area.fee}</Badge>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{area.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Delivery Network</h2>
            <p className="text-muted-foreground text-lg">
              Trusted by thousands of customers across the city
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryStats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">How Delivery Works</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-semibold mb-2">Place Order</h3>
              <p className="text-muted-foreground text-sm">Select your fresh produce and checkout</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-semibold mb-2">Order Confirmed</h3>
              <p className="text-muted-foreground text-sm">We prepare your order with care</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-semibold mb-2">On The Way</h3>
              <p className="text-muted-foreground text-sm">Track your delivery agent in real-time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-semibold mb-2">Delivered</h3>
              <p className="text-muted-foreground text-sm">Fresh produce at your doorstep</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-muted p-12 rounded-2xl">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Join Our Delivery Network
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Become a delivery partner and earn flexible income while serving your community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary">
              <Truck className="w-5 h-5 mr-2" />
              Apply as Delivery Partner
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DeliveryServices;