import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logo from "/image/bluefocus-logo-clean.png";


export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
       {/* Brand */}
<div>
  {/* Logo image instead of BF + text */}
  <div>
  <div className="flex items-center gap-3 mb-6">
   <div className="w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center bg-white">
  <img
    src={logo}
    alt="Blue Focus Logo"
    className="w-full h-full object-contain"
  />
</div>

    <div>
      <div className="text-xl font-bold">Blue Focus</div>
      <div className="text-xs text-[#b1b4ad] tracking-wider">
        EVENTS & EXHIBITIONS
      </div>
    </div>
  </div>

  <p className="text-gray-400 leading-relaxed">
    15+ years of excellence in creating unforgettable events and exhibitions across the UAE and beyond.
  </p>
</div>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Services", "About", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.toLowerCase())}
                    className="text-gray-400 hover:text-[#206ca6] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Event Management</li>
              <li>Exhibition Design</li>
              <li>Stand Fabrication</li>
              <li>Brand Strategy</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#206ca6] mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Dubai, United Arab Emirates
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#206ca6] flex-shrink-0" />
                <span className="text-gray-400">+971 55 150 8999</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#206ca6] flex-shrink-0" />
                <a
                  href="mailto:info@bluefocus.ae"
                  className="text-gray-400 hover:text-[#206ca6] transition-colors"
                >
                  info@bluefocusee.com
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 pt-2">
                <a
                  href="https://ae.linkedin.com/company/blue-focus-events-and-exhibitions-org"
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#206ca6] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/bluefocusee/"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#206ca6] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/bluefocusee/"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-gray-800 hover:bg-[#206ca6] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400 text-sm">
            © 2026 Blue Focus Events & Exhibitions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-[#206ca6] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#206ca6] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
