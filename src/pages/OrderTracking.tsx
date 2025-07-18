import Header from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Truck, Package, MapPin, Phone, Bell } from "lucide-react";
import { useState } from "react";

const OrderTracking = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);

  const mockOrderData = {
    orderNumber: "PS2024001234",
    status: "Out for Delivery",
    estimatedDelivery: "Today, 6:30 PM",
    currentLocation: "Distribution Center - Sector 18, Noida",
    deliveryPartner: "Rajesh Kumar",
    partnerPhone: "+91 98765 43210",
    items: [
      { name: "Organic Tomatoes", quantity: "2 kg", price: "₹120" },
      { name: "Fresh Spinach", quantity: "1 kg", price: "₹40" },
      { name: "Red Onions", quantity: "3 kg", price: "₹90" }
    ],
    timeline: [
      {
        status: "Order Placed",
        time: "Yesterday, 2:30 PM",
        description: "Your order has been confirmed",
        completed: true
      },
      {
        status: "Harvested",
        time: "Yesterday, 8:00 PM", 
        description: "Fresh produce harvested from partner farms",
        completed: true
      },
      {
        status: "Quality Checked",
        time: "Today, 6:00 AM",
        description: "Quality inspection completed at our facility",
        completed: true
      },
      {
        status: "Packed",
        time: "Today, 10:00 AM",
        description: "Order packed and ready for dispatch",
        completed: true
      },
      {
        status: "Out for Delivery",
        time: "Today, 4:00 PM",
        description: "Order is on the way to your address",
        completed: true,
        current: true
      },
      {
        status: "Delivered",
        time: "Estimated: Today, 6:30 PM",
        description: "Order will be delivered to your doorstep",
        completed: false
      }
    ]
  };

  const handleTrackOrder = () => {
    if (orderNumber) {
      setTrackingData(mockOrderData);
    }
  };

  const getProgressPercentage = () => {
    const completed = trackingData?.timeline.filter(item => item.completed).length || 0;
    const total = trackingData?.timeline.length || 1;
    return (completed / total) * 100;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            <span className="text-primary">Purestock</span> Tracker
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Track your fresh produce order in real-time from farm to your doorstep
          </p>
        </div>
      </section>

      {/* Order Input */}
      <section className="container mx-auto px-6 pb-16">
        <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center">Track Your Order</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="order-number">Order Number</Label>
              <Input 
                id="order-number"
                placeholder="Enter your order number"
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
              />
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handleTrackOrder}
            >
              Track Order
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Tracking Results */}
      {trackingData && (
        <section className="container mx-auto px-6 pb-16">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Order Status Overview */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Order #{trackingData.orderNumber}</CardTitle>
                  <Badge className="bg-primary/10 text-primary">{trackingData.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Estimated Delivery</h3>
                    <p className="text-muted-foreground">{trackingData.estimatedDelivery}</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Current Location</h3>
                    <p className="text-muted-foreground">{trackingData.currentLocation}</p>
                  </div>
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold">Delivery Partner</h3>
                    <p className="text-muted-foreground">{trackingData.deliveryPartner}</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Delivery Progress</h3>
                    <span className="text-sm text-muted-foreground">{Math.round(getProgressPercentage())}% Complete</span>
                  </div>
                  <Progress value={getProgressPercentage()} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Timeline */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Order Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trackingData.timeline.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            item.completed 
                              ? item.current 
                                ? 'bg-primary text-primary-foreground animate-pulse'
                                : 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}>
                            {item.completed ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              <Clock className="w-4 h-4" />
                            )}
                          </div>
                          {index < trackingData.timeline.length - 1 && (
                            <div className={`w-0.5 h-12 mt-2 ${
                              item.completed ? 'bg-primary' : 'bg-muted'
                            }`} />
                          )}
                        </div>
                        <div className="flex-1 pb-6">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className={`font-semibold ${item.current ? 'text-primary' : ''}`}>
                              {item.status}
                            </h3>
                            {item.current && (
                              <Badge variant="secondary" className="text-xs">Current</Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{item.time}</p>
                          <p className="text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Order Items */}
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Order Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trackingData.items.map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Package className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm">{item.name}</h3>
                            <p className="text-xs text-muted-foreground">{item.quantity}</p>
                          </div>
                        </div>
                        <span className="font-semibold">{item.price}</span>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount</span>
                      <span>₹250</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live Map Placeholder */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Live Tracking Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Live GPS Tracking</h3>
                    <p className="text-muted-foreground">Interactive map will be available here</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Current location: {trackingData.currentLocation}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  Order Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <Bell className="w-4 h-4 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Out for Delivery</p>
                      <p className="text-xs text-muted-foreground">Your order is on the way - ETA 6:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm">Order Packed</p>
                      <p className="text-xs text-muted-foreground">Your fresh produce has been packed and ready for dispatch</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-secondary/20 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm">Quality Check Complete</p>
                      <p className="text-xs text-muted-foreground">All items passed our quality inspection</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </div>
  );
};

export default OrderTracking;