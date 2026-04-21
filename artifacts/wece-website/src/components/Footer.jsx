import { Link } from "wouter";
import { Mail, Instagram, Linkedin } from "lucide-react";

const CONTACT_EMAIL = "wece.uwmadison@gmail.com";
const LINKEDIN_URL = "https://linkedin.com/company/weceuwmadison/";
const INSTAGRAM_URL = "https://www.instagram.com/weceuwmadison/";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand / About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/wece_logo-abstract.png"
                alt="WECE Logo"
                className="h-10 w-auto object-contain bg-white rounded px-1"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Women in Electrical and Computer Engineering at the University of Wisconsin–Madison.
              Building a supportive community for underrepresented genders in ECE.
            </p>
            <div className="flex space-x-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About", to: "/about" },
                { label: "Board", to: "/board" },
                { label: "Events", to: "/events" },
                { label: "Sponsors", to: "/sponsors" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Get Involved
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/get-involved" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Join WECE
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {CONTACT_EMAIL}
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
