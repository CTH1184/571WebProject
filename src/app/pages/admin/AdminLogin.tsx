import { useState } from "react";
import { useNavigate } from "react-router";
import { Lock, Mail } from "lucide-react";

export function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, this would validate against a backend
    if (credentials.email && credentials.password) {
      navigate("/admin/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c5050c] to-[#a00409] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src="/jpeg_wece_logo-main-e1744052584791-1024x624.jpg"
              alt="WECE Logo"
              className="w-full h-full object-contain rounded-lg shadow-md"
            />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">WECE Board Portal</h1>
          <p className="text-white/80">Sign in to manage your organization</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Board Member Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  id="email"
                  value={credentials.email}
                  onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                  placeholder="boardmember@wisc.edu"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  id="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5050c] bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-[#c5050c] border-gray-300 rounded focus:ring-[#c5050c]"
                />
                <span className="ml-2 text-gray-700 text-sm">Remember me</span>
              </label>
              <a href="#" className="text-[#c5050c] hover:text-[#a00409] text-sm font-semibold">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#c5050c] text-white rounded-lg hover:bg-[#a00409] transition-colors font-semibold"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Not a board member?{" "}
              <a href="/" className="text-[#c5050c] hover:text-[#a00409] font-semibold">
                Return to main site
              </a>
            </p>
          </div>
        </div>

        {/* Help Text */}
        <div className="mt-6 text-center text-white/80 text-sm">
          <p>
            Having trouble signing in? Contact{" "}
            <a href="mailto:wece@wisc.edu" className="underline">
              wece@wisc.edu
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
