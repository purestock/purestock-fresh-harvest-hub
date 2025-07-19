import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  Users, 
  Shield, 
  Leaf, 
  Star, 
  Check,
  Calendar,
  Phone
} from 'lucide-react';
import mealsHero from '@/assets/meals-hero.jpg';

const mealPlans = [
  {
    id: 'breakfast',
    name: 'Breakfast Plans',
    price: 4170,
    period: 'month',
    description: 'Rotating daily menu, regional Indian dishes, freshly made',
    features: [
      'Includes dishes like idli sambhar, aloo poori, poha',
      'Flexible scheduling',
      'Home delivery',
      'No time limit',
      'Daily changing menu'
    ],
    image: '/placeholder.svg',
    popular: false
  },
  {
    id: 'lunch',
    name: 'Lunch Plans',
    price: 699,
    period: 'week',
    description: 'Homestyle thalis, vegetarian options, skip/reschedule',
    features: [
      'Homemade, hygienic preparation',
      'Variety assured',
      'Eco-friendly packing options',
      'Daily changing menu',
      'Skip/reschedule anytime'
    ],
    image: '/placeholder.svg',
    popular: true
  },
  {
    id: 'dinner',
    name: 'Dinner Plans',
    price: 699,
    period: 'week',
    description: 'Balanced Indian dinners, skip unused, home style',
    features: [
      'Doorstep delivery',
      'Customization available',
      'Fresh every evening',
      'Suited for students & professionals',
      'Home-style cooking'
    ],
    image: '/placeholder.svg',
    popular: false
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Working Professional',
    content: 'The lunch plans have been a lifesaver! Homestyle food delivered fresh every day.',
    rating: 5,
    image: '/placeholder.svg'
  },
  {
    name: 'Rahul Kumar',
    role: 'Student',
    content: 'Affordable, healthy, and tastes just like home. Perfect for hostel life!',
    rating: 5,
    image: '/placeholder.svg'
  },
  {
    name: 'Anjali Patel',
    role: 'New Mother',
    content: 'The breakfast variety is amazing. Saves me so much time in the morning.',
    rating: 5,
    image: '/placeholder.svg'
  }
];

const MealSubscription = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mealsHero})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Purestock Meal Subscription
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Purestock offers affordable, customizable meal subscriptions—breakfast, lunch, dinner—
            crafted in local kitchens, FSSAI certified, and delivered fresh daily.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              FSSAI Certified
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Eco-Friendly
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
              <Clock className="w-4 h-4 mr-2" />
              Daily Fresh
            </Badge>
          </div>
        </div>
      </section>

      {/* Meal Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Choose Your Meal Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible, affordable, and delicious meal options for every lifestyle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mealPlans.map((plan) => (
              <Card key={plan.id} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    ₹{plan.price}
                    <span className="text-lg text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-primary">
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Purestock Meals?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">FSSAI Certified</h3>
              <p className="text-muted-foreground">
                All our kitchens are FSSAI certified ensuring highest food safety standards
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Home Kitchens</h3>
              <p className="text-muted-foreground">
                Prepared in hygienic home kitchens by experienced cooks
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Flexible Plans</h3>
              <p className="text-muted-foreground">
                Skip, reschedule, or pause your subscription anytime
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Eco-Friendly</h3>
              <p className="text-muted-foreground">
                Biodegradable packaging options available
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meal Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Meal Options</h2>
            <p className="text-muted-foreground">Choose from a variety of meal types</p>
          </div>
          
          <Tabs defaultValue="vegetarian" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="vegetarian">Vegetarian</TabsTrigger>
              <TabsTrigger value="non-vegetarian">Non-Vegetarian</TabsTrigger>
              <TabsTrigger value="custom">Custom</TabsTrigger>
            </TabsList>
            
            <TabsContent value="vegetarian" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Pure Vegetarian Meals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Breakfast Options:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Idli Sambhar with Chutney</li>
                        <li>• Aloo Poori with Sabzi</li>
                        <li>• Poha with Tea</li>
                        <li>• Upma with Coconut Chutney</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Lunch/Dinner Options:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dal, Rice, 2 Sabzi, Roti</li>
                        <li>• Rajma Rice with Salad</li>
                        <li>• Chole Bhature</li>
                        <li>• South Indian Thali</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="non-vegetarian" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Non-Vegetarian Meals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Chicken Dishes:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Chicken Curry with Rice</li>
                        <li>• Butter Chicken with Naan</li>
                        <li>• Chicken Biryani</li>
                        <li>• Tandoori Chicken</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Other Options:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Mutton Curry</li>
                        <li>• Fish Curry with Rice</li>
                        <li>• Egg Curry</li>
                        <li>• Mixed Non-Veg Thali</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="custom" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Custom Meal Plans</h3>
                  <p className="text-muted-foreground mb-4">
                    Tell us your preferences and we'll create a personalized meal plan for you.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Customization Options:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Dietary restrictions (Jain, No onion-garlic, etc.)</li>
                        <li>• Regional cuisine preferences</li>
                        <li>• Spice level adjustments</li>
                        <li>• Portion size modifications</li>
                        <li>• Special occasion meals</li>
                      </ul>
                    </div>
                    <Button className="bg-gradient-primary">
                      <Phone className="w-4 h-4 mr-2" />
                      Call for Custom Plan
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MealSubscription;