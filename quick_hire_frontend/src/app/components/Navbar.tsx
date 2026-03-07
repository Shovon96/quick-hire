'use client';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-[124px] py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">Q</span>
          </div>
          <span className="text-xl font-bold text-gray-900">QuickHire</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
            Find Jobs
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
            Browse Companies
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
            Login
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-2 rounded">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
