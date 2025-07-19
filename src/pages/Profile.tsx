import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard, 
  Package, 
  Clock,
  Star,
  Edit,
  Save,
  X
} from 'lucide-react';

const Profile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    address: '123 Green Valley, Bangalore, Karnataka 560001'
  });

  const orders = [
    {
      id: '#PUR001',
      date: '2024-01-20',
      status: 'Delivered',
      items: 'Fresh Vegetables Box',
      total: 485.50
    },
    {
      id: '#PUR002',
      date: '2024-01-18',
      status: 'Delivered',
      items: 'Lunch Subscription (Week)',
      total: 699.00
    },
    {
      id: '#PUR003',
      date: '2024-01-15',
      status: 'Processing',
      items: 'Mixed Fruits Box',
      total: 324.80
    }
  ];

  const subscriptions = [
    {
      id: 'SUB001',
      type: 'Lunch Plan',
      status: 'Active',
      nextDelivery: '2024-01-22',
      price: 699
    },
    {
      id: 'SUB002',
      type: 'Breakfast Plan',
      status: 'Paused',
      nextDelivery: '2024-01-25',
      price: 4170
    }
  ];

  const handleSave = () => {
    setEditing(false);
    // Here you would typically save to backend
  };

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
                      <Button size="sm" onClick={handleSave}>
                        <Save className="w-4 h-4" />
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
                    {orders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Package className="w-8 h-8 text-primary" />
                          <div>
                            <p className="font-semibold">{order.id}</p>
                            <p className="text-sm text-muted-foreground">{order.items}</p>
                            <p className="text-xs text-muted-foreground">{order.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                            className={order.status === 'Delivered' ? 'bg-green-500' : ''}
                          >
                            {order.status}
                          </Badge>
                          <p className="text-lg font-semibold mt-1">₹{order.total}</p>
                        </div>
                      </div>
                    ))}
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
                    {subscriptions.map((sub) => (
                      <div key={sub.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-4">
                          <Clock className="w-8 h-8 text-primary" />
                          <div>
                            <p className="font-semibold">{sub.type}</p>
                            <p className="text-sm text-muted-foreground">
                              Next delivery: {sub.nextDelivery}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={sub.status === 'Active' ? 'default' : 'secondary'}
                            className={sub.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}
                          >
                            {sub.status}
                          </Badge>
                          <p className="text-lg font-semibold mt-1">₹{sub.price}/month</p>
                          <Button variant="outline" size="sm" className="mt-2">
                            {sub.status === 'Active' ? 'Pause' : 'Resume'}
                          </Button>
                        </div>
                      </div>
                    ))}
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
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <p className="font-semibold">Home</p>
                            <p className="text-sm text-muted-foreground">
                              123 Green Valley, Bangalore, Karnataka 560001
                            </p>
                            <p className="text-sm text-muted-foreground">+91 9876543210</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Delete</Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-primary mt-1" />
                          <div>
                            <p className="font-semibold">Office</p>
                            <p className="text-sm text-muted-foreground">
                              456 Tech Park, Electronic City, Bangalore 560100
                            </p>
                            <p className="text-sm text-muted-foreground">+91 9876543210</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm">Delete</Button>
                        </div>
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

export default Profile;