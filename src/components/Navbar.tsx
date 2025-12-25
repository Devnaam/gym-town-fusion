import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#workshops' },
    { name: 'Contact', href: '#contact' },
  ];


  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Text Only */}
            <a 
              href="#home" 
              className="font-display text-2xl md:text-3xl tracking-wider text-foreground hover:opacity-80 transition-opacity"
              onClick={handleNavClick}
            >
              GYM <span className="text-gradient-primary">TOWN</span>
            </a>


            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-accent transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>


            {/* Desktop Right Section */}
            <div className="hidden md:flex items-center gap-4">
              {/* Phone Number */}
              <a
                href="tel:9025721997"
                className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">9025721997</span>
              </a>
              
              {/* Button */}
              <a href="#contact">
                <Button variant="heroOutline" size="sm">
                  Join Us
                </Button>
              </a>
            </div>


            {/* Animated Hamburger Button */}
            <button
              className="md:hidden relative w-10 h-10 text-foreground focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="absolute w-6 h-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop - fade in only */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            onClick={handleNavClick}
          />
          
          {/* Mobile Menu - slide down only */}
          <div className="fixed top-20 left-0 right-0 bottom-0 z-40 md:hidden">
            <div className="bg-background border-t border-border shadow-2xl max-h-[calc(100vh-5rem)] overflow-y-auto animate-slide-down">
              <div className="py-6 px-4 space-y-6">
                {/* Logo in mobile menu */}
                <div className="flex items-center justify-center gap-2 pb-4 border-b border-border animate-fade-in">
                  <span className="font-display text-xl tracking-wider text-foreground">
                    GYM <span className="text-gradient-primary">TOWN</span>
                  </span>
                </div>

                {/* Navigation Links - staggered animation on open */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-3 text-foreground/80 hover:text-accent hover:bg-muted rounded-lg transition-all text-base font-medium animate-slide-in-left"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={handleNavClick}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                {/* Phone Number */}
                <a
                  href="tel:9025721997"
                  className="flex items-center gap-3 px-4 py-3 text-foreground hover:text-accent hover:bg-muted rounded-lg transition-all animate-slide-in-left"
                  style={{ animationDelay: '0.4s' }}
                  onClick={handleNavClick}
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-base font-medium">Call: 9025721997</span>
                </a>

                {/* Button */}
                <div 
                  className="px-4 pt-2 space-y-3 animate-slide-in-left" 
                  style={{ animationDelay: '0.5s' }}
                >
                  <a href="#contact" className="block" onClick={handleNavClick}>
                    <Button variant="accent" className="w-full" size="lg">
                      Join Us Now
                    </Button>
                  </a>
                </div>

                {/* Quick Info */}
                <div 
                  className="px-4 pt-4 border-t border-border animate-fade-in" 
                  style={{ animationDelay: '0.6s' }}
                >
                  <p className="text-xs text-muted-foreground text-center">
                    Open daily: 5 AM – 10 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};


export default Navbar;
