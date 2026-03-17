import { Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Board", path: "/board" },
    { name: "Events", path: "/events" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/jpeg_wece_logo-main-e1744052584791-1024x624.jpg"
              alt="WECE Logo"
              className="h-10 w-auto rounded-lg shadow-md"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md transition-colors ${
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
              className="ml-4 px-6 py-2 bg-[#c5050c] text-white rounded-md hover:bg-[#a00409] transition-colors"
            >
              Get Involved
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isActive(link.path)
                    ? "bg-[#c5050c] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/get-involved"
              className="block px-4 py-2 bg-[#c5050c] text-white rounded-md hover:bg-[#a00409] transition-colors text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Involved
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
