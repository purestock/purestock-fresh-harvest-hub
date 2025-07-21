import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Package, 
  Clock,
  Edit,
  Save,
  X,
  Loader
} from 'lucide-react';

const Profile = () => {
  const { user, profile: userProfile } = useAuth();
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    name: userProfile?.name || '',
    email: userProfile?.email || user?.email || '',
    phone: userProfile?.phone || '',
    address: userProfile?.address || ''
  });
  const [orders, setOrders] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    if (userProfile) {
      setProfile({
        name: userProfile.name || '',
        email: userProfile.email || user?.email || '',
        phone: userProfile.phone || '',
        address: userProfile.address || ''
      });
    }
    
    if (user) {
      fetchUserData();
    }
  }, [userProfile, user]);

  const fetchUserData = async () => {
    if (!user) return;

    try {
      // Fetch orders
      const { data: ordersData } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      // Fetch subscriptions
      const { data: subscriptionsData } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id);

      // Fetch addresses
      const { data: addressesData } = await supabase
        .from('addresses')
        .select('*')
        .eq('user_id', user.id);

      setOrders(ordersData || []);
      setSubscriptions(subscriptionsData || []);
      setAddresses(addressesData || []);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: profile.name,
          phone: profile.phone,
          address: profile.address
        })
        .eq('id', user.id);

      if (error) throw error;

      toast({
        title: "Profile updated",
        description: "Your profile has been successfully updated.",
      });
      setEditing(false);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to update profile",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please sign in to view your profile</h2>
          <Button onClick={() => window.location.href = '/signin'}>Sign In</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-heading font-bold">My Profile</h1>
              <p className="text-muted-foreground">Manage your account and preferences</p>
            </div>
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xl font-bold">
              {profile.name.charAt(0)}
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="addresses">Addresses</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Personal Information</CardTitle>
                      {!editing ? (
                        <Button variant="outline" onClick={() => setEditing(true)}>
                          <Edit className="w-4 h-4 mr-2" />
                          Edit
                        </Button>
                      ) : (
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" onClick={() => setEditing(false)}>
                            <X className="w-4 h-4" />
                          </Button>
                          <Button size="sm" onClick={handleSave} disabled={loading}>
                            {loading ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                          </Button>
                        </div>
                      )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        {editing ? (
                          <Input
                            id="name"
                            value={profile.name}
                            onChange={(e) => setProfile({...profile, name: e.target.value})}
                            className="pl-10"
                          />
                        ) : (
                          <div className="pl-10 py-2 text-sm">{profile.name}</div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        {editing ? (
                          <Input
                            id="email"
                            type="email"
                            value={profile.email}
                            onChange={(e) => setProfile({...profile, email: e.target.value})}
                            className="pl-10"
                          />
                        ) : (
                          <div className="pl-10 py-2 text-sm">{profile.email}</div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        {editing ? (
                          <Input
                            id="phone"
                            value={profile.phone}
                            onChange={(e) => setProfile({...profile, phone: e.target.value})}
                            className="pl-10"
                          />
                        ) : (
                          <div className="pl-10 py-2 text-sm">{profile.phone}</div>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        {editing ? (
                          <Input
                            id="address"
                            value={profile.address}
                            onChange={(e) => setProfile({...profile, address: e.target.value})}
                            className="pl-10"
                          />
                        ) : (
                          <div className="pl-10 py-2 text-sm">{profile.address}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Orders Tab */}
            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {orders.length > 0 ? (
                      orders.map((order: any) => (
                        <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Package className="w-8 h-8 text-primary" />
                            <div>
                              <p className="font-semibold">{order.order_number}</p>
                              <p className="text-sm text-muted-foreground">{order.items}</p>
                              <p className="text-xs text-muted-foreground">
                                {new Date(order.created_at).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant={order.status === 'delivered' ? 'default' : 'secondary'}
                              className={order.status === 'delivered' ? 'bg-green-500' : ''}
                            >
                              {order.status}
                            </Badge>
                            <p className="text-lg font-semibold mt-1">₹{order.total}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-center py-8">No orders found</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions">
              <Card>
                <CardHeader>
                  <CardTitle>Active Subscriptions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subscriptions.length > 0 ? (
                      subscriptions.map((sub: any) => (
                        <div key={sub.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Clock className="w-8 h-8 text-primary" />
                            <div>
                              <p className="font-semibold">{sub.type}</p>
                              <p className="text-sm text-muted-foreground">
                                Next delivery: {sub.next_delivery || 'Not scheduled'}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge 
                              variant={sub.status === 'active' ? 'default' : 'secondary'}
                              className={sub.status === 'active' ? 'bg-green-500' : 'bg-yellow-500'}
                            >
                              {sub.status}
                            </Badge>
                            <p className="text-lg font-semibold mt-1">₹{sub.price}</p>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-center py-8">No active subscriptions</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Addresses Tab */}
            <TabsContent value="addresses">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Saved Addresses</CardTitle>
                  <Button>Add New Address</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {addresses.length > 0 ? (
                      addresses.map((address: any) => (
                        <div key={address.id} className="p-4 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                              <MapPin className="w-5 h-5 text-primary mt-1" />
                              <div>
                                <p className="font-semibold">{address.label}</p>
                                <p className="text-sm text-muted-foreground">
                                  {address.address_line}
                                </p>
                                {address.phone && (
                                  <p className="text-sm text-muted-foreground">{address.phone}</p>
                                )}
                              </div>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Delete</Button>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-center py-8">No saved addresses</p>
                    )}
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

export default Profile;