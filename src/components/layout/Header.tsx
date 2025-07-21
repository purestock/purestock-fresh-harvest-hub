import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, ChevronDown, LogOut, Settings, UserCog } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3); // Mock cart count
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 nav-glass border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">P</span>
            </div>
            <span className="text-xl font-heading font-bold text-foreground">Purestock</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link to="/vegetables" className="w-full">Fresh Vegetables</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/fruits" className="w-full">Fresh Fruits</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/meals" className="w-full">Meal Subscription</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/food" className="w-full">All Products</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link to="/b2b-solutions" className="w-full">B2B Solutions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/d2c-services" className="w-full">Direct to Consumer</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/institutional-services" className="w-full">Institutional</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
              How it Works
            </Link>

            <Link to="/for-farmers" className="text-foreground hover:text-primary transition-colors">
              For Farmers
            </Link>

            <Link to="/track-order" className="text-foreground hover:text-primary transition-colors">
              Track Order
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-foreground hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {cartCount}
                </Badge>
              )}
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center text-white text-xs">
                      {profile?.name?.[0] || user.email?.[0] || 'U'}
                    </div>
                    <span>{profile?.name || user.email?.split('@')[0] || 'User'}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  {profile?.role === 'admin' && (
                    <DropdownMenuItem>
                      <Link to="/admin" className="w-full flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {profile?.role === 'delivery_agent' && (
                    <DropdownMenuItem>
                      <Link to="/delivery" className="w-full flex items-center">
                        <UserCog className="w-4 h-4 mr-2" />
                        Delivery Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link to="/signin" className="w-full">Sign In</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/signup" className="w-full">Sign Up</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

{!user && (
              <Button className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Link to="/signup">Join Purestock</Link>
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/how-it-works" className="text-foreground hover:text-primary transition-colors">
                How it Works
              </Link>
              <Link to="/farmers" className="text-foreground hover:text-primary transition-colors">
                For Farmers
              </Link>
              <Link to="/sustainability" className="text-foreground hover:text-primary transition-colors">
                Sustainability
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <div className="flex items-center space-x-4 pt-4">
                <Link to="/cart" className="relative">
                  <ShoppingCart className="w-6 h-6 text-foreground" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                      {cartCount}
                    </Badge>
                  )}
                </Link>
                {user ? (
                  <Button variant="outline" size="sm" onClick={handleSignOut}>
                    Sign Out
                  </Button>
                ) : (
                  <>
                    <Link to="/signin">
                      <Button variant="outline" size="sm">Sign In</Button>
                    </Link>
                    <Link to="/signup">
                      <Button size="sm" className="bg-gradient-primary">Join Now</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;