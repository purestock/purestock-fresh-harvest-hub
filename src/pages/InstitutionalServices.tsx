import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Users, DollarSign, Truck, Clock, Shield, Award, TrendingUp } from "lucide-react";

const InstitutionalServices = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Bulk Pricing",
      description: "Special institutional rates with volume discounts up to 25%"
    },
    {
      icon: Clock,
      title: "Scheduled Deliveries",
      description: "Flexible delivery schedules that fit your operational needs"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Consistent quality with detailed traceability and compliance"
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description: "Dedicated logistics team ensuring on-time deliveries"
    },
    {
      icon: Award,
      title: "Account Management",
      description: "Dedicated account manager for personalized service"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Detailed consumption analytics and cost optimization reports"
    }
  ];

  const sectors = [
    {
      icon: Building2,
      title: "Corporate Offices",
      description: "Fresh produce for cafeterias, employee meals, and events",
      features: ["Bulk quantities", "Flexible delivery", "Invoice processing", "Menu planning support"]
    },
    {
      icon: Users,
      title: "Educational Institutions",
      description: "Nutritious produce for student meals and campus dining",
      features: ["Nutritional compliance", "Student-friendly portions", "Budget management", "Seasonal menus"]
    },
    {
      icon: Building2,
      title: "Healthcare Facilities",
      description: "High-quality produce for patient meals and staff nutrition",
      features: ["Medical-grade quality", "Dietary requirements", "Allergen management", "24/7 support"]
    }
  ];

  const caseStudies = [
    {
      client: "Tech Corp India",
      type: "Corporate Office",
      employees: "2,500+",
      challenge: "Consistent fresh produce for multiple office locations",
      solution: "Centralized procurement with location-specific deliveries",
      results: ["30% cost reduction", "95% employee satisfaction", "Zero waste initiative"]
    },
    {
      client: "Delhi University",
      type: "Educational Institution", 
      students: "15,000+",
      challenge: "Budget-friendly nutritious meals for large student population",
      solution: "Seasonal menu planning with bulk procurement",
      results: ["25% budget savings", "Improved nutrition scores", "Local farmer partnerships"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Institutional</span> Services
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Reliable, cost-effective fresh produce solutions for schools, offices, hospitals, and large organizations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Request Quote
            </Button>
            <Button variant="outline" size="lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Purestock for Institutions?</h2>
          <p className="text-muted-foreground">Designed specifically for large-scale operations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Sector Solutions */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Tailored Solutions by Sector</h2>
          <p className="text-muted-foreground">Specialized services for different institutional needs</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <sector.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{sector.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">{sector.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {sector.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Institutional Pricing Tiers</h2>
          <p className="text-muted-foreground">Volume-based pricing for maximum cost efficiency</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle>Small Institution</CardTitle>
              <div className="text-2xl font-bold text-primary">10-15%</div>
              <p className="text-muted-foreground">discount on retail prices</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center p-3 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold">50-200 people</h4>
                  <p className="text-sm text-muted-foreground">Schools, small offices</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Weekly delivery schedule</li>
                  <li>• Basic quality assurance</li>
                  <li>• Email support</li>
                  <li>• Monthly invoicing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-primary ring-2 ring-primary/20">
            <CardHeader className="text-center">
              <Badge className="bg-primary text-primary-foreground mb-2">Most Popular</Badge>
              <CardTitle>Medium Institution</CardTitle>
              <div className="text-2xl font-bold text-primary">20-25%</div>
              <p className="text-muted-foreground">discount on retail prices</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center p-3 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold">200-1000 people</h4>
                  <p className="text-sm text-muted-foreground">Universities, large offices</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Flexible delivery schedule</li>
                  <li>• Premium quality assurance</li>
                  <li>• Dedicated account manager</li>
                  <li>• Custom pricing negotiation</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle>Large Institution</CardTitle>
              <div className="text-2xl font-bold text-primary">25-35%</div>
              <p className="text-muted-foreground">discount on retail prices</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center p-3 bg-secondary/20 rounded-lg">
                  <h4 className="font-semibold">1000+ people</h4>
                  <p className="text-sm text-muted-foreground">Hospitals, large universities</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li>• Daily delivery options</li>
                  <li>• Highest quality standards</li>
                  <li>• Senior account management</li>
                  <li>• Custom contract terms</li>
                  <li>• Advanced analytics</li>
                  <li>• 24/7 support</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-muted-foreground">See how institutions benefit from our services</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{study.client}</CardTitle>
                  <Badge variant="secondary">{study.type}</Badge>
                </div>
                <p className="text-muted-foreground">
                  Serving {study.employees || study.students}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-destructive mb-1">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-primary mb-1">Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-accent mb-1">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm font-medium flex items-center gap-2">
                        <div className="w-1 h-1 bg-accent rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="container mx-auto px-6 py-16">
        <Card className="max-w-2xl mx-auto bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Request Institutional Quote</CardTitle>
            <p className="text-center text-muted-foreground">Get a customized proposal for your organization</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="institution">Institution Name</Label>
                <Input id="institution" placeholder="Your institution" />
              </div>
              <div>
                <Label htmlFor="sector">Sector</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate">Corporate Office</SelectItem>
                    <SelectItem value="education">Educational Institution</SelectItem>
                    <SelectItem value="healthcare">Healthcare Facility</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" placeholder="procurement@institution.com" />
              </div>
              <div>
                <Label htmlFor="people-count">Number of People</Label>
                <Input id="people-count" placeholder="e.g., 500 employees" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" />
              </div>
              <div>
                <Label htmlFor="budget">Monthly Budget Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                    <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="1l-5l">₹1,00,000 - ₹5,00,000</SelectItem>
                    <SelectItem value="over-5l">Over ₹5,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="requirements">Specific Requirements</Label>
              <Textarea 
                id="requirements" 
                placeholder="Tell us about your fresh produce needs, delivery requirements, and any special considerations"
                rows={4}
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
              Submit Quote Request
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default InstitutionalServices;