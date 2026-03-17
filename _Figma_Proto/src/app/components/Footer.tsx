import { Link } from "react-router";
import { Mail, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 bg-gradient-to-br from-[#c5050c] to-[#ffc5d0] rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white text-xl font-bold">W</span>
              </div>
              <span className="text-xl font-semibold">WECE</span>
            </div>
            <p className="text-gray-400 mb-4">
              Women in Electrical & Computer Engineering at UW-Madison. Empowering women and
              underrepresented genders in engineering through community, mentorship, and
              professional development.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:wece.uwmadison@gmail.com"
                className="text-gray-400 hover:text-[#ffc5d0] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.instagram.com/weceuwmadison/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ffc5d0] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/weceuwmadison/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ffc5d0] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/board" className="text-gray-400 hover:text-white transition-colors">
                  Board Members
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-400 hover:text-white transition-colors">
                  Sponsors
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/get-involved"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Join WECE
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-400 hover:text-white transition-colors">
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <a
                  href="/admin"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Board Login
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} WECE at UW-Madison. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}