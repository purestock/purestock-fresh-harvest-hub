import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Clock, Truck, Star, Heart, Leaf, Package } from "lucide-react";
import freshProduce from "@/assets/fresh-produce.jpg";

const D2CServices = () => {
  const subscriptionPlans = [
    {
      name: "Fresh Starter",
      price: "₹599",
      period: "per week",
      description: "Perfect for small families",
      features: [
        "5kg Mixed Vegetables",
        "2kg Seasonal Fruits", 
        "Weekly Delivery",
        "Basic Quality Guarantee",
        "Mobile App Access"
      ],
      badge: null
    },
    {
      name: "Family Feast",
      price: "₹1,199",
      period: "per week", 
      description: "Most popular for families of 4-6",
      features: [
        "10kg Mixed Vegetables",
        "5kg Seasonal Fruits",
        "2x Weekly Delivery",
        "Premium Quality Guarantee",
        "Customizable Box",
        "Recipe Suggestions",
        "Priority Support"
      ],
      badge: "Most Popular"
    },
    {
      name: "Health Enthusiast",
      price: "₹1,899",
      period: "per week",
      description: "Organic & exotic varieties",
      features: [
        "15kg Organic Vegetables",
        "8kg Premium Fruits",
        "3x Weekly Delivery",
        "100% Organic Guarantee",
        "Nutritionist Consultation",
        "Meal Planning Support",
        "Free Recipe Book",
        "VIP Customer Support"
      ],
      badge: "Premium"
    }
  ];

  const customerReviews = [
    {
      name: "Priya Menon",
      location: "Bangalore",
      rating: 5,
      review: "The freshness is unmatched! Vegetables last much longer than store-bought ones.",
      plan: "Family Feast"
    },
    {
      name: "Rajesh Kumar", 
      location: "Delhi",
      rating: 5,
      review: "Love the convenience and quality. My kids actually eat more vegetables now!",
      plan: "Fresh Starter"
    },
    {
      name: "Sneha Patel",
      location: "Mumbai",
      rating: 5,
      review: "The organic produce is amazing. Worth every penny for my family's health.",
      plan: "Health Enthusiast"
    }
  ];

  const deliveryLocations = [
    "Bangalore", "Delhi NCR", "Mumbai", "Pune", "Hyderabad", 
    "Chennai", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Purestock</span> Fresh Plans
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Farm-fresh vegetables and fruits delivered to your doorstep. Customize your box, choose your schedule, and enjoy the freshest produce every week.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Farm to Fork in 24 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">100% Quality Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm">Cancel Anytime</span>
              </div>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Build Your Box
            </Button>
          </div>
          <div className="relative">
            <img 
              src={freshProduce} 
              alt="Fresh vegetables and fruits"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-4 -left-4 bg-card p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">Farm Fresh</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-primary" />
                <span className="font-semibold text-sm">Next Day Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Fresh Plan</h2>
          <p className="text-muted-foreground">Flexible subscriptions tailored to your family's needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {subscriptionPlans.map((plan, index) => (
            <Card key={index} className={`relative bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 ${plan.badge === 'Most Popular' ? 'border-primary ring-2 ring-primary/20' : ''}`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">{plan.badge}</Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.badge === 'Most Popular' ? 'default' : 'outline'}>
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Subscription Builder */}
      <section className="container mx-auto px-6 py-16">
        <Card className="max-w-4xl mx-auto bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Build Your Custom Box</CardTitle>
            <p className="text-center text-muted-foreground">Customize your weekly delivery based on your preferences</p>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="vegetables" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="vegetables">Vegetables</TabsTrigger>
                <TabsTrigger value="fruits">Fruits</TabsTrigger>
                <TabsTrigger value="summary">Summary</TabsTrigger>
              </TabsList>
              
              <TabsContent value="vegetables" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Tomatoes', 'Potatoes', 'Onions', 'Carrots', 'Spinach', 'Broccoli'].map((vegetable, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                            <Leaf className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{vegetable}</h3>
                            <p className="text-sm text-muted-foreground">₹50/kg</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Add</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="fruits" className="mt-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {['Apples', 'Bananas', 'Oranges', 'Grapes', 'Mangoes', 'Strawberries'].map((fruit, index) => (
                    <Card key={index} className="p-4 hover:shadow-md transition-all duration-200 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                            <Heart className="w-6 h-6 text-accent" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{fruit}</h3>
                            <p className="text-sm text-muted-foreground">₹80/kg</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Add</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="summary" className="mt-6">
                <div className="bg-secondary/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-4">Your Custom Box Summary</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Total Items:</span>
                      <span className="font-semibold">0 items</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Weight:</span>
                      <span className="font-semibold">0 kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Frequency:</span>
                      <span className="font-semibold">Weekly</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Price:</span>
                      <span className="text-primary">₹0</span>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Start Subscription
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Delivery Information */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Delivery Schedule
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-secondary/20 rounded-lg">
                  <h3 className="font-semibold text-primary">Morning Slot</h3>
                  <p className="text-sm text-muted-foreground">6:00 AM - 11:00 AM</p>
                </div>
                <div className="text-center p-4 bg-secondary/20 rounded-lg">
                  <h3 className="font-semibold text-primary">Evening Slot</h3>
                  <p className="text-sm text-muted-foreground">5:00 PM - 9:00 PM</p>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold">Delivery Promise:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Harvested within 24 hours before delivery</li>
                  <li>• Temperature-controlled transportation</li>
                  <li>• Contactless delivery available</li>
                  <li>• SMS/WhatsApp notifications</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Service Areas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Currently delivering to major cities across India:</p>
              <div className="grid grid-cols-2 gap-2">
                {deliveryLocations.map((location, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">{location}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm text-primary">
                  Don't see your city? We're expanding rapidly. Join our waitlist!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">Join thousands of satisfied families enjoying fresh produce</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {customerReviews.map((review, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.review}"</p>
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <Badge variant="secondary" className="mt-2">{review.plan} subscriber</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default D2CServices;