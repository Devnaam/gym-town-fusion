import { Button } from '@/components/ui/button';
import { Phone, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#workshops' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', color: 'hover:bg-blue-600' },
    { icon: Instagram, href: '#', color: 'hover:bg-pink-600' },
    { icon: Twitter, href: '#', color: 'hover:bg-sky-500' },
    { icon: Youtube, href: '#', color: 'hover:bg-red-600' },
  ];

  return (
    <footer id="contact" className="bg-background relative overflow-hidden">
      {/* CTA Section */}
      <div className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - CTA */}
            <div className="space-y-6">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                Have a <span className="text-gradient-accent">great idea</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-md">
                Looking for personal trainer to help achieve your fitness goals? We're here to help you every step of the way.
              </p>
              <Button variant="accent" size="lg">
                Contact Us
              </Button>

              {/* Decorative gradient circle */}
              <div className="relative w-48 h-48 mt-8">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-accent opacity-30 blur-xl animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border-2 border-accent/30" />
                <div className="absolute inset-8 rounded-full border-2 border-primary/30" />
              </div>
            </div>

            {/* Right - Links */}
            <div className="grid sm:grid-cols-2 gap-12">
              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-foreground text-lg mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-bold text-foreground text-lg mb-6">GYM TOWN</h4>
                <div className="space-y-4">
                  <a
                    href="tel:9025721997"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>9025721997</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>Open Daily 5 AM - 10 PM</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p className="text-foreground font-semibold mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 GYM TOWN. All rights reserved.
            </p>
            <a href="#home" className="font-display text-xl text-foreground hover:text-accent transition-colors">
              GYM <span className="text-gradient-primary">TOWN</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
