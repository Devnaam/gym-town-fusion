import { Button } from '@/components/ui/button';
import { Phone, Clock, Facebook, Instagram, Twitter, Youtube, Apple } from 'lucide-react';


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
      <div className="py-12 sm:py-16 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left - CTA */}
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl text-foreground leading-tight">
                Have a <span className="text-gradient-accent">great idea</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                Looking for a personal trainer to help you achieve your fitness goals? We're here to support you every step of the way.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  Contact Us
                </Button>
              </div>


              {/* Quick Stats - REPLACES decorative circle */}
              
            </div>


            {/* Right - Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
              {/* Quick Links */}
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-foreground text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
                <ul className="space-y-3 sm:space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors text-sm sm:text-base"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Contact Info */}
              <div className="text-center sm:text-left">
                <h4 className="font-bold text-foreground text-base sm:text-lg mb-4 sm:mb-6">GYM TOWN</h4>
                <div className="space-y-3 sm:space-y-4">
                  <a
                    href="tel:9025721997"
                    className="flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-accent transition-colors justify-center sm:justify-start text-sm sm:text-base"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span>9025721997</span>
                  </a>
                  <div className="flex items-start gap-2 sm:gap-3 text-muted-foreground justify-center sm:justify-start text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>Open daily:</p>
                      <p>5 AM – 10 PM</p>
                    </div>
                  </div>
                </div>


                {/* Social Links */}
                <div className="mt-6 sm:mt-8">
                  <p className="text-foreground font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</p>
                  <div className="flex gap-3 justify-center sm:justify-start">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-muted flex items-center justify-center text-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
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

      {/* Download App Section */}
      <div className="border-t border-border/50 py-10 sm:py-12 lg:py-16 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground">
                DOWNLOAD APP
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg px-4">
                Get the GYM TOWN app for iOS and Android to track your fitness journey.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4 px-4 max-w-md mx-auto">
              {/* App Store Button */}
              <a
                href="#"
                className="group bg-foreground hover:bg-foreground/90 text-background px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Apple className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" />
                <div className="text-left">
                  <p className="text-xs opacity-80">Download on</p>
                  <p className="text-base sm:text-lg font-bold leading-tight">App Store</p>
                </div>
              </a>

              {/* Play Store Button */}
              <a
                href="#"
                className="group bg-foreground hover:bg-foreground/90 text-background px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <svg className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-xs opacity-80">Get it on</p>
                  <p className="text-base sm:text-lg font-bold leading-tight">Play Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-border/50 py-5 sm:py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-center sm:text-left order-2 sm:order-1">
              <p className="text-muted-foreground text-xs sm:text-sm">
                © 2025 GYM TOWN. All rights reserved.
              </p>
              <p className="text-muted-foreground text-[10px] sm:text-xs mt-1">
                Designed and Developed by{' '}
                <a 
                  href="https://devnaam.us" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:text-primary transition-colors font-semibold"
                >
                  Devnaam Priyadershi
                </a>
              </p>
            </div>
            <a 
              href="#home" 
              className="font-display text-lg sm:text-xl text-foreground hover:text-accent transition-colors order-1 sm:order-2"
            >
              GYM <span className="text-gradient-primary">TOWN</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
