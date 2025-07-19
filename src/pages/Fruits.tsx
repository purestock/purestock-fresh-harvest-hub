import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Leaf, Truck } from 'lucide-react';
import fruitsHero from '@/assets/fruits-hero.jpg';
import mangoImg from '@/assets/products/mango.jpg';
import bananaImg from '@/assets/products/banana.jpg';
import appleImg from '@/assets/products/apple.jpg';
import pomegranateImg from '@/assets/products/pomegranate.jpg';
import blueberryImg from '@/assets/products/blueberry.jpg';
import jamunImg from '@/assets/products/jamun.jpg';

const fruits = [
  {
    id: 1,
    name: 'Banganapalli Mango',
    description: 'Sweet, juicy Banganapalli mango (1kg)',
    price: 124.64,
    image: mangoImg,
    origin: 'Indian, Seasonal',
    rating: 4.8,
    inStock: true,
    badge: 'Seasonal'
  },
  {
    id: 2,
    name: 'Banana – Yelakki',
    description: 'Small, sweet bananas, perfect for kids',
    price: 61,
    image: bananaImg,
    origin: 'Indian, Local',
    rating: 4.5,
    inStock: true,
    badge: 'Local'
  },
  {
    id: 3,
    name: 'Apple – Red Delicious',
    description: 'Firm, sweet apples (approx. 500g)',
    price: 201.6,
    image: appleImg,
    origin: 'India/Import',
    rating: 4.4,
    inStock: true,
    badge: 'Premium'
  },
  {
    id: 4,
    name: 'Pomegranate',
    description: 'Regular, antioxidant-rich pomegranates (1kg)',
    price: 268,
    image: pomegranateImg,
    origin: 'Indian, Regular',
    rating: 4.6,
    inStock: true,
    badge: 'Antioxidant Rich'
  },
  {
    id: 5,
    name: 'Blueberry',
    description: 'Fresh, imported blueberries (125g)',
    price: 228,
    image: blueberryImg,
    origin: 'Imported',
    rating: 4.7,
    inStock: true,
    badge: 'Imported'
  },
  {
    id: 6,
    name: 'Jamun',
    description: 'Deep purple, tangy summer fruit (250g)',
    price: 68.4,
    image: jamunImg,
    origin: 'India, Seasonal',
    rating: 4.3,
    inStock: true,
    badge: 'Seasonal'
  }
];

const Fruits = () => {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${fruitsHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Fresh Fruits
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover and buy Indian and imported fruits online. Purestock guarantees fresh, 
            handpicked fruits delivered straight from the farm to your doorstep.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Handpicked
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
              <Truck className="w-4 h-4 mr-2" />
              Fresh Delivery
            </Badge>
          </div>
        </div>
      </section>

      {/* Seasonal Banner */}
      <section className="py-8 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">🥭 Mango Season Special! 🥭</h2>
          <p className="text-lg">Get the best seasonal mangoes at unbeatable prices</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Fresh Fruits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From local farms to exotic imports, we bring you the finest fruits
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fruits.map((fruit) => (
              <Card key={fruit.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={fruit.image}
                      alt={fruit.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-2 left-2 bg-orange-500">
                      {fruit.badge}
                    </Badge>
                    {fruit.inStock && (
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        In Stock
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{fruit.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">
                    {fruit.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Origin: {fruit.origin}
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(fruit.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {fruit.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">
                      ₹{fruit.price}
                    </div>
                    <Button
                      onClick={() => addToCart(fruit.id)}
                      className="bg-gradient-primary"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Nutritional Benefits */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Why Choose Our Fruits?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Naturally Sweet</h3>
              <p className="text-muted-foreground">
                No artificial ripening agents used
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                Hand-selected for perfect ripeness
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Cold Chain</h3>
              <p className="text-muted-foreground">
                Temperature controlled delivery
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Best Prices</h3>
              <p className="text-muted-foreground">
                Direct from farms to your table
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fruits;