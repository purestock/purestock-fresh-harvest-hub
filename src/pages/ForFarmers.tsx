import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { DollarSign, TrendingUp, Shield, Smartphone, Star, Users, CheckCircle } from "lucide-react";
import farmerPortrait from "@/assets/farmer-portrait.jpg";

const ForFarmers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Instant Payments",
      description: "Get paid within 24 hours of delivery with transparent pricing"
    },
    {
      icon: TrendingUp,
      title: "Price Transparency", 
      description: "Real-time market prices with guaranteed minimum rates"
    },
    {
      icon: Shield,
      title: "Quality Feedback",
      description: "Direct feedback from customers to improve your produce quality"
    },
    {
      icon: Users,
      title: "Direct Market Access",
      description: "Connect directly with consumers and businesses, cutting middlemen"
    }
  ];

  const successStories = [
    {
      name: "Ramesh Kumar",
      location: "Punjab",
      crop: "Organic Vegetables",
      income: "300% increase",
      story: "Joined Purestock 2 years ago, now supplying to 5 cities directly"
    },
    {
      name: "Priya Sharma", 
      location: "Maharashtra",
      crop: "Fresh Fruits",
      income: "250% increase",
      story: "From local market to national platform, Purestock changed my life"
    },
    {
      name: "Suresh Patel",
      location: "Gujarat", 
      crop: "Leafy Greens",
      income: "400% increase",
      story: "Technology made farming profitable and sustainable for my family"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-earth-light/20 to-earth/10">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Join the <span className="text-primary">Purestock</span> Family
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your farming business with direct market access, guaranteed payments, and technology support
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg">
                Download Farmer App
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={farmerPortrait} 
              alt="Successful farmer with Purestock"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.9/5</span>
              </div>
              <p className="text-sm text-muted-foreground">Farmer Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Purestock?</h2>
          <p className="text-muted-foreground">Join thousands of farmers already benefiting from our platform</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Simple 3-Step Onboarding</h2>
          <p className="text-muted-foreground">Get started in minutes, not days</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">1</Badge>
                <CardTitle>Register & Verify</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sign up with basic details and upload your farming documents for quick verification
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Aadhaar Card
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Land Records
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Bank Details
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">2</Badge>
                <CardTitle>List Your Produce</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Add your crops, set quantities, and pricing with our easy-to-use interface
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Crop Selection
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Quality Grades
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Harvest Schedule
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="w-8 h-8 rounded-full flex items-center justify-center bg-primary">3</Badge>
                <CardTitle>Start Earning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Receive orders, deliver to collection points, and get paid instantly
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Order Notifications
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Pickup Scheduling
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Instant Payments
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Farmer Success Stories</h2>
          <p className="text-muted-foreground">Real farmers, real results with Purestock</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.location}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Crop:</span>
                    <span className="text-sm font-medium">{story.crop}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Income Growth:</span>
                    <Badge variant="secondary" className="text-primary">{story.income}</Badge>
                  </div>
                </div>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground italic">"{story.story}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="container mx-auto px-6 py-16">
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <Smartphone className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Download Purestock Farmer App</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Manage your crops, track orders, communicate with buyers, and get paid - all from your smartphone
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Download for Android
              </Button>
              <Button variant="outline" size="lg">
                Download for iOS
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default ForFarmers;