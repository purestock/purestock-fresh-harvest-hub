import Header from '@/components/layout/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import freshProduce from '@/assets/fresh-produce.jpg';

const Food = () => {
  const categories = [
    { name: "Vegetables", count: 45, icon: "🥬" },
    { name: "Fruits", count: 32, icon: "🍎" },
    { name: "Herbs", count: 18, icon: "🌿" },
    { name: "Grains", count: 12, icon: "🌾" }
  ];

  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: 4.99,
      unit: "per kg",
      rating: 4.8,
      image: freshProduce,
      badge: "Fresh Today",
      farm: "Green Valley Farm"
    },
    {
      id: 2,
      name: "Fresh Spinach",
      price: 3.49,
      unit: "per bunch",
      rating: 4.9,
      image: freshProduce,
      badge: "Organic",
      farm: "Sunny Acres"
    },
    {
      id: 3,
      name: "Red Apples",
      price: 5.99,
      unit: "per kg",
      rating: 4.7,
      image: freshProduce,
      badge: "Premium",
      farm: "Mountain View"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-heading font-bold mb-4">Fresh Food Market</h1>
            <p className="text-lg text-muted-foreground">Premium quality produce directly from our partner farms</p>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {categories.map((category, index) => (
              <Card key={index} className="service-card cursor-pointer">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <div className="font-medium">{category.name}</div>
                  <div className="text-sm text-muted-foreground">{category.count} items</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="service-card group">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                      {product.badge}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="absolute top-2 right-2 hover-scale"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">From {product.farm}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">{product.unit}</span>
                    </div>
                    <Button size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Food;