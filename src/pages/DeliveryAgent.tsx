import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Truck, 
  Package, 
  MapPin, 
  Clock, 
  CheckCircle,
  AlertCircle,
  Navigation,
  Phone,
  MessageSquare,
  Route
} from 'lucide-react';

const DeliveryAgent = () => {
  const { user, profile } = useAuth();
  const [loading, setLoading] = useState(true);
  const [deliveries, setDeliveries] = useState([]);
  const [stats, setStats] = useState({
    totalDeliveries: 0,
    completedToday: 0,
    pendingDeliveries: 0,
    avgRating: 0
  });

  useEffect(() => {
    if (user && profile?.role === 'delivery_agent') {
      fetchDeliveryData();
    }
  }, [user, profile]);

  const fetchDeliveryData = async () => {
    try {
      // Fetch delivery tracking data
      const { data: deliveryData } = await supabase
        .from('delivery_tracking')
        .select(`
          *,
          orders (
            id,
            order_number,
            total,
            user_id,
            created_at
          )
        `)
        .order('created_at', { ascending: false });

      setDeliveries(deliveryData || []);

      // Calculate stats
      const today = new Date().toDateString();
      const todayDeliveries = deliveryData?.filter((d: any) => 
        new Date(d.created_at).toDateString() === today
      ) || [];
      
      setStats({
        totalDeliveries: deliveryData?.length || 0,
        completedToday: todayDeliveries.filter((d: any) => d.status === 'delivered').length,
        pendingDeliveries: deliveryData?.filter((d: any) => 
          ['pending', 'picked_up', 'in_transit'].includes(d.status)
        ).length || 0,
        avgRating: 4.5 // Mock rating
      });
    } catch (error) {
      console.error('Error fetching delivery data:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateDeliveryStatus = async (deliveryId: string, newStatus: string, notes?: string) => {
    try {
      const updateData: any = { 
        status: newStatus,
        updated_at: new Date().toISOString()
      };

      if (notes) {
        updateData.delivery_notes = notes;
      }

      if (newStatus === 'picked_up') {
        updateData.delivery_person_name = profile?.name || 'Delivery Agent';
        updateData.delivery_person_phone = profile?.phone || '';
      }

      if (newStatus === 'delivered') {
        updateData.actual_delivery = new Date().toISOString();
      }

      const { error } = await supabase
        .from('delivery_tracking')
        .update(updateData)
        .eq('id', deliveryId);

      if (error) throw error;

      // Refresh data
      fetchDeliveryData();
    } catch (error) {
      console.error('Error updating delivery status:', error);
    }
  };

  const assignToSelf = async (deliveryId: string) => {
    try {
      const { error } = await supabase
        .from('delivery_tracking')
        .update({
          delivery_person_name: profile?.name || 'Delivery Agent',
          delivery_person_phone: profile?.phone || '',
          updated_at: new Date().toISOString()
        })
        .eq('id', deliveryId);

      if (error) throw error;
      fetchDeliveryData();
    } catch (error) {
      console.error('Error assigning delivery:', error);
    }
  };

  if (!user || profile?.role !== 'delivery_agent') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-muted-foreground mb-4">You need delivery agent privileges to access this page.</p>
          <Button onClick={() => window.location.href = '/'}>Go Home</Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Loading delivery panel...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold">Delivery Dashboard</h1>
              <p className="text-muted-foreground">Manage your delivery assignments</p>
            </div>
            <Button className="bg-gradient-primary">
              <Navigation className="w-4 h-4 mr-2" />
              Start Route
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Deliveries</p>
                    <p className="text-2xl font-bold">{stats.totalDeliveries}</p>
                  </div>
                  <Package className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Completed Today</p>
                    <p className="text-2xl font-bold">{stats.completedToday}</p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                    <p className="text-2xl font-bold">{stats.pendingDeliveries}</p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-500" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="text-2xl font-bold">{stats.avgRating}★</p>
                  </div>
                  <Truck className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="active" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="active">Active Deliveries</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="profile">My Profile</TabsTrigger>
            </TabsList>

            {/* Active Deliveries Tab */}
            <TabsContent value="active">
              <Card>
                <CardHeader>
                  <CardTitle>Today's Deliveries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deliveries
                      .filter((delivery: any) => !['delivered', 'cancelled'].includes(delivery.status))
                      .map((delivery: any) => (
                      <div key={delivery.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                              <Package className="w-6 h-6" />
                            </div>
                            <div>
                              <p className="font-semibold">Order #{delivery.orders?.order_number}</p>
                              <p className="text-sm text-muted-foreground">
                                Amount: ₹{delivery.orders?.total}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(delivery.orders?.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <Badge 
                            variant={delivery.status === 'delivered' ? 'default' : 'secondary'}
                            className={
                              delivery.status === 'delivered' ? 'bg-green-500' :
                              delivery.status === 'in_transit' ? 'bg-blue-500' :
                              delivery.status === 'picked_up' ? 'bg-orange-500' : ''
                            }
                          >
                            {delivery.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        
                        {delivery.delivery_person_name && (
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{delivery.delivery_person_phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">View Location</span>
                            </div>
                          </div>
                        )}

                        {delivery.delivery_address && (
                          <div className="mb-4 p-3 bg-muted rounded-lg">
                            <p className="text-sm font-medium mb-1">Delivery Address:</p>
                            <p className="text-sm text-muted-foreground">{delivery.delivery_address}</p>
                          </div>
                        )}

                        <div className="flex flex-col space-y-2">
                          <Textarea 
                            placeholder="Add delivery notes..."
                            className="min-h-[60px]"
                            defaultValue={delivery.delivery_notes || ''}
                            id={`notes-${delivery.id}`}
                          />
                          <div className="flex flex-wrap gap-2">
                            {delivery.status === 'pending' && !delivery.delivery_person_name && (
                              <Button 
                                size="sm" 
                                onClick={() => assignToSelf(delivery.id)}
                                variant="outline"
                              >
                                Assign to Me
                              </Button>
                            )}
                            {delivery.status === 'pending' && delivery.delivery_person_name && (
                              <Button 
                                size="sm" 
                                onClick={() => {
                                  const notes = (document.getElementById(`notes-${delivery.id}`) as HTMLTextAreaElement)?.value;
                                  updateDeliveryStatus(delivery.id, 'picked_up', notes);
                                }}
                              >
                                Mark as Picked Up
                              </Button>
                            )}
                            {delivery.status === 'picked_up' && (
                              <Button 
                                size="sm" 
                                onClick={() => {
                                  const notes = (document.getElementById(`notes-${delivery.id}`) as HTMLTextAreaElement)?.value;
                                  updateDeliveryStatus(delivery.id, 'in_transit', notes);
                                }}
                              >
                                Mark in Transit
                              </Button>
                            )}
                            {delivery.status === 'in_transit' && (
                              <Button 
                                size="sm" 
                                onClick={() => {
                                  const notes = (document.getElementById(`notes-${delivery.id}`) as HTMLTextAreaElement)?.value;
                                  updateDeliveryStatus(delivery.id, 'delivered', notes);
                                }}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                Mark as Delivered
                              </Button>
                            )}
                            <Button variant="outline" size="sm">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Contact Customer
                            </Button>
                            <Button variant="outline" size="sm">
                              <Route className="w-4 h-4 mr-2" />
                              View Route
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Completed Deliveries Tab */}
            <TabsContent value="completed">
              <Card>
                <CardHeader>
                  <CardTitle>Completed Deliveries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {deliveries
                      .filter((delivery: any) => delivery.status === 'delivered')
                      .map((delivery: any) => (
                      <div key={delivery.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <CheckCircle className="w-8 h-8 text-green-500" />
                          <div>
                            <p className="font-semibold">Order #{delivery.orders?.order_number}</p>
                            <p className="text-sm text-muted-foreground">₹{delivery.orders?.total}</p>
                            <p className="text-xs text-muted-foreground">
                              Delivered on {new Date(delivery.actual_delivery).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <Badge className="bg-green-500">Delivered</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Agent Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <Input value={profile?.name || ''} disabled />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Phone</label>
                        <Input value={profile?.phone || ''} disabled />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Vehicle Type</label>
                        <Input placeholder="e.g., Motorcycle, Van" />
                      </div>
                      <div>
                        <label className="text-sm font-medium">License Plate</label>
                        <Input placeholder="Enter vehicle number" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAgent;