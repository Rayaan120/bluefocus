import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "/image/bluefocus-logo.png";

export default function Navigation({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "bulletin", label: "Bulletin" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <button
            type="button"
            className="flex items-center cursor-pointer"
            onClick={() => {
              onNavigate("home");
              setMobileMenuOpen(false);
            }}
          >
            <img
              src={logo}
              alt="Blue Focus Logo"
              className="h-32 md:h-40 lg:h-44 w-auto object-contain
                         transform group-hover:scale-105 transition-transform duration-300"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`text-[15px] transition-colors duration-300 ${
                  currentPage === item.id
                    ? "text-[#206ca6] font-semibold"
                    : "text-gray-700 hover:text-[#206ca6]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 font-medium transition-colors ${
                  currentPage === item.id
                    ? "text-[#206ca6]"
                    : "text-gray-700 hover:text-[#206ca6]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
