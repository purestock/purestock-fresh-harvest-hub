import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Star, Plus, Minus } from 'lucide-react';

const Meals = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const addToCart = (mealId: string) => {
    setCart(prev => ({...prev, [mealId]: (prev[mealId] || 0) + 1}));
  };

  const removeFromCart = (mealId: string) => {
    setCart(prev => ({
      ...prev, 
      [mealId]: Math.max(0, (prev[mealId] || 0) - 1)
    }));
  };

  const breakfastMeals = [
    {
      id: 'bf1',
      name: 'Classic Idli Sambhar',
      description: 'Soft steamed idlis served with tangy sambhar and coconut chutney',
      price: 85,
      image: '/api/placeholder/300/200',
      rating: 4.5,
      time: '15 mins',
      category: 'South Indian'
    },
    {
      id: 'bf2',
      name: 'Aloo Poori',
      description: 'Crispy pooris with spiced potato curry and pickle',
      price: 95,
      image: '/api/placeholder/300/200',
      rating: 4.3,
      time: '20 mins',
      category: 'North Indian'
    },
    {
      id: 'bf3',
      name: 'Masala Dosa',
      description: 'Crispy dosa filled with spiced potato masala, served with sambhar',
      price: 110,
      image: '/api/placeholder/300/200',
      rating: 4.6,
      time: '25 mins',
      category: 'South Indian'
    },
    {
      id: 'bf4',
      name: 'Upma Special',
      description: 'Semolina upma with vegetables, nuts and curry leaves',
      price: 75,
      image: '/api/placeholder/300/200',
      rating: 4.2,
      time: '12 mins',
      category: 'South Indian'
    }
  ];

  const lunchMeals = [
    {
      id: 'ln1',
      name: 'Rajma Chawal',
      description: 'Red kidney beans curry with steamed basmati rice and pickle',
      price: 140,
      image: '/api/placeholder/300/200',
      rating: 4.4,
      time: '25 mins',
      category: 'North Indian'
    },
    {
      id: 'ln2',
      name: 'South Indian Thali',
      description: 'Complete meal with rice, sambhar, rasam, vegetables and curd',
      price: 180,
      image: '/api/placeholder/300/200',
      rating: 4.7,
      time: '30 mins',
      category: 'South Indian'
    },
    {
      id: 'ln3',
      name: 'Chole Bhature',
      description: 'Spicy chickpea curry with fluffy fried bread and onions',
      price: 160,
      image: '/api/placeholder/300/200',
      rating: 4.5,
      time: '28 mins',
      category: 'North Indian'
    },
    {
      id: 'ln4',
      name: 'Dal Tadka Rice',
      description: 'Yellow lentils with tempering, served with jeera rice',
      price: 120,
      image: '/api/placeholder/300/200',
      rating: 4.3,
      time: '20 mins',
      category: 'North Indian'
    }
  ];

  const dinnerMeals = [
    {
      id: 'dn1',
      name: 'Butter Chicken Rice',
      description: 'Creamy butter chicken with basmati rice and naan',
      price: 220,
      image: '/api/placeholder/300/200',
      rating: 4.8,
      time: '35 mins',
      category: 'North Indian'
    },
    {
      id: 'dn2',
      name: 'Paneer Biryani',
      description: 'Fragrant basmati rice with marinated paneer and spices',
      price: 190,
      image: '/api/placeholder/300/200',
      rating: 4.6,
      time: '40 mins',
      category: 'Biryani'
    },
    {
      id: 'dn3',
      name: 'Fish Curry Rice',
      description: 'Kerala style fish curry with coconut milk and rice',
      price: 210,
      image: '/api/placeholder/300/200',
      rating: 4.7,
      time: '30 mins',
      category: 'South Indian'
    },
    {
      id: 'dn4',
      name: 'Vegetable Thali',
      description: 'Complete dinner thali with dal, vegetables, roti and rice',
      price: 170,
      image: '/api/placeholder/300/200',
      rating: 4.4,
      time: '25 mins',
      category: 'Traditional'
    }
  ];

  const snacksMeals = [
    {
      id: 'sn1',
      name: 'Samosa Chaat',
      description: 'Crispy samosas topped with chutneys, yogurt and sev',
      price: 80,
      image: '/api/placeholder/300/200',
      rating: 4.2,
      time: '10 mins',
      category: 'Street Food'
    },
    {
      id: 'sn2',
      name: 'Pav Bhaji',
      description: 'Spicy vegetable curry served with buttered pav bread',
      price: 90,
      image: '/api/placeholder/300/200',
      rating: 4.5,
      time: '15 mins',
      category: 'Mumbai Street'
    },
    {
      id: 'sn3',
      name: 'Dhokla Plate',
      description: 'Steamed gram flour cakes with green chutney',
      price: 70,
      image: '/api/placeholder/300/200',
      rating: 4.1,
      time: '8 mins',
      category: 'Gujarati'
    }
  ];

  const MealCard = ({ meal }: { meal: any }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-gradient-subtle">
        <img 
          src={meal.image} 
          alt={meal.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-foreground">{meal.name}</h3>
          <Badge variant="secondary">{meal.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{meal.description}</p>
        <div className="flex items-center gap-4 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{meal.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{meal.time}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">₹{meal.price}</span>
          <div className="flex items-center gap-2">
            {cart[meal.id] > 0 && (
              <>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => removeFromCart(meal.id)}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="font-medium">{cart[meal.id]}</span>
              </>
            )}
            <Button
              size="sm"
              onClick={() => addToCart(meal.id)}
            >
              <Plus className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Fresh <span className="text-primary">Homestyle Meals</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delicious, freshly prepared meals delivered hot to your doorstep
          </p>
        </div>

        {/* Cart Summary */}
        {totalItems > 0 && (
          <div className="fixed bottom-4 right-4 z-50">
            <Button className="rounded-full shadow-lg">
              Cart ({totalItems})
            </Button>
          </div>
        )}

        <Tabs defaultValue="breakfast" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
            <TabsTrigger value="lunch">Lunch</TabsTrigger>
            <TabsTrigger value="dinner">Dinner</TabsTrigger>
            <TabsTrigger value="snacks">Snacks</TabsTrigger>
          </TabsList>

          <TabsContent value="breakfast">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {breakfastMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="lunch">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {lunchMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="dinner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dinnerMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="snacks">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {snacksMeals.map((meal) => (
                <MealCard key={meal.id} meal={meal} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Meals;