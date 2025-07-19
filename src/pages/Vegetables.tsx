import { useState } from 'react';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Leaf, Truck } from 'lucide-react';
import vegetablesHero from '@/assets/vegetables-hero.jpg';
import onionImg from '@/assets/products/onion.jpg';
import tomatoImg from '@/assets/products/tomato.jpg';
import potatoImg from '@/assets/products/potato.jpg';
import carrotImg from '@/assets/products/carrot.jpg';
import cucumberImg from '@/assets/products/cucumber.jpg';
import capsicumImg from '@/assets/products/capsicum.jpg';
import cauliflowerImg from '@/assets/products/cauliflower.jpg';

const vegetables = [
  {
    id: 1,
    name: 'Onion',
    description: 'Fresh local onions (Multipack, 5x1kg)',
    price: 166.6,
    image: onionImg,
    origin: 'India, Organically Grown',
    rating: 4.5,
    inStock: true
  },
  {
    id: 2,
    name: 'Tomato - Local',
    description: 'Local, juicy, loose tomatoes',
    price: 38,
    image: tomatoImg,
    origin: 'Hybrid',
    rating: 4.3,
    inStock: true
  },
  {
    id: 3,
    name: 'Potato',
    description: 'Premium, loose, starchy potatoes (1kg)',
    price: 33.44,
    image: potatoImg,
    origin: 'India, Organic',
    rating: 4.4,
    inStock: true
  },
  {
    id: 4,
    name: 'Carrot - Orange',
    description: 'Fresh orange carrots, vibrant color (1kg)',
    price: 70,
    image: carrotImg,
    origin: 'India',
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: 'Cucumber',
    description: 'Crisp, hydrating cucumbers (300g)',
    price: 12,
    image: cucumberImg,
    origin: 'India',
    rating: 4.2,
    inStock: true
  },
  {
    id: 6,
    name: 'Green Capsicum',
    description: 'Loose, fresh green capsicum/bell pepper',
    price: 33.44,
    image: capsicumImg,
    origin: 'India',
    rating: 4.1,
    inStock: true
  },
  {
    id: 7,
    name: 'Cauliflower',
    description: 'White, large, fresh cauliflower (400–600g)',
    price: 32.8,
    image: cauliflowerImg,
    origin: 'India',
    rating: 4.3,
    inStock: true
  }
];

const Vegetables = () => {
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
          style={{ backgroundImage: `url(${vegetablesHero})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-heading font-bold mb-6">
            Fresh Vegetables
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Shop a wide range of fresh, local, and exotic vegetables online at Purestock. 
            Enjoy doorstep delivery and guaranteed quality—all at amazing prices.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
              <Leaf className="w-4 h-4 mr-2" />
              Farm Fresh
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white text-lg px-4 py-2">
              <Truck className="w-4 h-4 mr-2" />
              Same Day Delivery
            </Badge>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Our Fresh Vegetables</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handpicked from trusted farms, delivered fresh to your doorstep
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {vegetables.map((vegetable) => (
              <Card key={vegetable.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={vegetable.image}
                      alt={vegetable.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {vegetable.inStock && (
                      <Badge className="absolute top-2 left-2 bg-green-500">
                        In Stock
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{vegetable.name}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-2">
                    {vegetable.description}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    Origin: {vegetable.origin}
                  </p>
                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(vegetable.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">
                      {vegetable.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-primary">
                      ₹{vegetable.price}
                    </div>
                    <Button
                      onClick={() => addToCart(vegetable.id)}
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

      {/* Trust Badges */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">100% Fresh</h3>
              <p className="text-muted-foreground">
                Handpicked vegetables from trusted local farms
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Same day delivery for orders placed before 2 PM
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Quality Assured</h3>
              <p className="text-muted-foreground">
                Money-back guarantee on quality issues
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vegetables;