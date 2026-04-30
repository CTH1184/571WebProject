import { Link } from "react-router";
import { Home, Search } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="inline-block p-6 bg-[#ffc5d0] rounded-full mb-6">
            <Search aria-hidden="true" className="text-[#8b0000]" size={64} />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#8b0000] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold"
          >
            <Home aria-hidden="true" className="mr-2" size={20} />
            Back to Home
          </Link>
          <Link
            to="/events"
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#8b0000] border-2 border-[#8b0000] rounded-lg hover:bg-gray-50 transition-colors font-semibold"
          >
            View Events
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Looking for something else?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/about" className="text-[#8b0000] hover:text-[#a00409] font-semibold">
              About Us
            </Link>
            <Link to="/board" className="text-[#8b0000] hover:text-[#a00409] font-semibold">
              Board Members
            </Link>
            <Link to="/sponsors" className="text-[#8b0000] hover:text-[#a00409] font-semibold">
              Sponsors
            </Link>
            <Link to="/contact" className="text-[#8b0000] hover:text-[#a00409] font-semibold">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
