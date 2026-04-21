import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Board", path: "/board" },
  { name: "Events", path: "/events" },
  { name: "Sponsors", path: "/sponsors" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/wece_logo-abstract.png"
              alt="WECE Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-[#c5050c] text-white"
                    : "text-gray-700 hover:bg-[#ffc5d0]/30"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-involved"
              className={`ml-4 px-6 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive("/get-involved")
                  ? "bg-[#a00409] text-white"
                  : "bg-[#c5050c] text-white hover:bg-[#a00409]"
              }`}
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-[#c5050c] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="block px-4 py-2 bg-[#c5050c] text-white text-sm font-medium rounded-md hover:bg-[#a00409] transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
