import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Car, 
  FileText, 
  CreditCard, 
  CheckCircle,
  Star,
  Truck,
  Clock,
  Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DeliveryPartnerApplication = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    
    // Vehicle Info
    vehicleType: '',
    vehicleModel: '',
    licensePlate: '',
    licenseNumber: '',
    
    // Experience
    hasDeliveryExperience: false,
    experienceYears: '',
    availableHours: '',
    
    // Documents
    hasValidLicense: false,
    hasInsurance: false,
    hasVehicleRC: false,
    
    // Agreements
    agreeToTerms: false,
    agreeToBackgroundCheck: false
  });

  const { toast } = useToast();

  const benefits = [
    { icon: <Star className="w-6 h-6" />, title: "Flexible Schedule", desc: "Work when you want" },
    { icon: <CreditCard className="w-6 h-6" />, title: "Competitive Pay", desc: "Earn ₹15,000-₹25,000/month" },
    { icon: <Shield className="w-6 h-6" />, title: "Insurance Coverage", desc: "Free accident insurance" },
    { icon: <Clock className="w-6 h-6" />, title: "Daily Payouts", desc: "Get paid daily" }
  ];

  const requirements = [
    "Age 18-60 years",
    "Valid driving license",
    "Own vehicle (bike/scooter/car)",
    "Smartphone with internet",
    "Vehicle insurance",
    "Good communication skills"
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.phone || !formData.vehicleType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (!formData.agreeToTerms) {
      toast({
        title: "Terms & Conditions",
        description: "Please accept the terms and conditions to proceed",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
    
    // Reset form or redirect
    setFormStep(4);
  };

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Join Our Delivery Team
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Earn flexible income while serving your community with fresh, quality produce
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                <div className="text-white">{benefit.icon}</div>
                <span className="text-sm font-medium">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {formStep < 4 ? (
            <>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm text-muted-foreground">Step {formStep} of 3</div>
                  <div className="text-sm text-muted-foreground">{Math.round((formStep / 3) * 100)}% Complete</div>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        {formStep === 1 && <><User className="w-5 h-5" /> <span>Personal Information</span></>}
                        {formStep === 2 && <><Car className="w-5 h-5" /> <span>Vehicle & Experience</span></>}
                        {formStep === 3 && <><FileText className="w-5 h-5" /> <span>Documents & Agreement</span></>}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Step 1: Personal Info */}
                      {formStep === 1 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="fullName">Full Name *</Label>
                              <Input
                                id="fullName"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="Enter phone number"
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="Enter email address"
                            />
                          </div>
                          <div>
                            <Label htmlFor="address">Full Address</Label>
                            <Textarea
                              id="address"
                              value={formData.address}
                              onChange={(e) => handleInputChange('address', e.target.value)}
                              placeholder="Enter your complete address"
                              rows={3}
                            />
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="city">City</Label>
                              <Input
                                id="city"
                                value={formData.city}
                                onChange={(e) => handleInputChange('city', e.target.value)}
                                placeholder="Enter city"
                              />
                            </div>
                            <div>
                              <Label htmlFor="zipCode">ZIP Code</Label>
                              <Input
                                id="zipCode"
                                value={formData.zipCode}
                                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                                placeholder="Enter ZIP code"
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Vehicle & Experience */}
                      {formStep === 2 && (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="vehicleType">Vehicle Type *</Label>
                              <Select value={formData.vehicleType} onValueChange={(value) => handleInputChange('vehicleType', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select vehicle type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="motorcycle">Motorcycle/Scooter</SelectItem>
                                  <SelectItem value="car">Car</SelectItem>
                                  <SelectItem value="van">Van/Mini Truck</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="vehicleModel">Vehicle Model</Label>
                              <Input
                                id="vehicleModel"
                                value={formData.vehicleModel}
                                onChange={(e) => handleInputChange('vehicleModel', e.target.value)}
                                placeholder="e.g., Honda Activa, Maruti Swift"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="licensePlate">License Plate Number</Label>
                              <Input
                                id="licensePlate"
                                value={formData.licensePlate}
                                onChange={(e) => handleInputChange('licensePlate', e.target.value)}
                                placeholder="MH 01 AB 1234"
                              />
                            </div>
                            <div>
                              <Label htmlFor="licenseNumber">Driving License Number</Label>
                              <Input
                                id="licenseNumber"
                                value={formData.licenseNumber}
                                onChange={(e) => handleInputChange('licenseNumber', e.target.value)}
                                placeholder="Enter license number"
                              />
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="hasDeliveryExperience"
                              checked={formData.hasDeliveryExperience}
                              onCheckedChange={(checked) => handleInputChange('hasDeliveryExperience', checked as boolean)}
                            />
                            <Label htmlFor="hasDeliveryExperience">I have previous delivery experience</Label>
                          </div>
                          {formData.hasDeliveryExperience && (
                            <div>
                              <Label htmlFor="experienceYears">Years of Experience</Label>
                              <Select value={formData.experienceYears} onValueChange={(value) => handleInputChange('experienceYears', value)}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select experience" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                                  <SelectItem value="1-2">1-2 years</SelectItem>
                                  <SelectItem value="2-5">2-5 years</SelectItem>
                                  <SelectItem value="more-than-5">More than 5 years</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          )}
                          <div>
                            <Label htmlFor="availableHours">Available Hours per Day</Label>
                            <Select value={formData.availableHours} onValueChange={(value) => handleInputChange('availableHours', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select availability" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="4-6">4-6 hours</SelectItem>
                                <SelectItem value="6-8">6-8 hours</SelectItem>
                                <SelectItem value="8-10">8-10 hours</SelectItem>
                                <SelectItem value="full-time">Full time (10+ hours)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Documents & Agreement */}
                      {formStep === 3 && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-semibold mb-4">Required Documents</h3>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="hasValidLicense"
                                  checked={formData.hasValidLicense}
                                  onCheckedChange={(checked) => handleInputChange('hasValidLicense', checked as boolean)}
                                />
                                <Label htmlFor="hasValidLicense">I have a valid driving license</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="hasInsurance"
                                  checked={formData.hasInsurance}
                                  onCheckedChange={(checked) => handleInputChange('hasInsurance', checked as boolean)}
                                />
                                <Label htmlFor="hasInsurance">My vehicle has valid insurance</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Checkbox
                                  id="hasVehicleRC"
                                  checked={formData.hasVehicleRC}
                                  onCheckedChange={(checked) => handleInputChange('hasVehicleRC', checked as boolean)}
                                />
                                <Label htmlFor="hasVehicleRC">I have vehicle registration certificate (RC)</Label>
                              </div>
                            </div>
                          </div>
                          
                          <div className="border-t pt-6">
                            <h3 className="text-lg font-semibold mb-4">Terms & Conditions</h3>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-2">
                                <Checkbox
                                  id="agreeToTerms"
                                  checked={formData.agreeToTerms}
                                  onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                                />
                                <Label htmlFor="agreeToTerms" className="text-sm">
                                  I agree to the Terms & Conditions and Privacy Policy
                                </Label>
                              </div>
                              <div className="flex items-start space-x-2">
                                <Checkbox
                                  id="agreeToBackgroundCheck"
                                  checked={formData.agreeToBackgroundCheck}
                                  onCheckedChange={(checked) => handleInputChange('agreeToBackgroundCheck', checked as boolean)}
                                />
                                <Label htmlFor="agreeToBackgroundCheck" className="text-sm">
                                  I consent to background verification checks
                                </Label>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-6 border-t">
                        <Button 
                          variant="outline" 
                          onClick={prevStep} 
                          disabled={formStep === 1}
                        >
                          Previous
                        </Button>
                        {formStep < 3 ? (
                          <Button onClick={nextStep}>
                            Next
                          </Button>
                        ) : (
                          <Button onClick={handleSubmit} className="bg-gradient-primary">
                            Submit Application
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span>Requirements</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {requirements.map((req, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Benefits</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="text-primary mt-1">{benefit.icon}</div>
                          <div>
                            <h4 className="font-medium text-sm">{benefit.title}</h4>
                            <p className="text-xs text-muted-foreground">{benefit.desc}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <Card className="text-center py-12">
              <CardContent>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Thank you for your interest in joining our delivery team. We'll review your application and get back to you within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button onClick={() => window.location.href = '/'}>
                    Return to Home
                  </Button>
                  <Button variant="outline" onClick={() => window.location.href = '/delivery-services'}>
                    Learn More About Delivery
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default DeliveryPartnerApplication;