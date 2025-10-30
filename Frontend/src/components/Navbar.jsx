import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Health Form", href: "/Pages/HealthProfileFroem" },
    { name: "AI Insights", href: "/ai" },
    { name: "Profile", href: "/profile" },
  ];

  const handleLogout = async () => {
   

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/users/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // ✅ Clear token locally
      localStorage.removeItem("token");

      // ✅ Redirect
      navigate("/Pages/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">Wellness<span className="text-purple-500">AI</span></div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
        <Link to="../components/MentalHealthcheckIn"  className="text-gray-700 hover:text-blue-600 transition font-medium">
            Home
            </Link>

            <Link to="../Pages/HealthProfileForm"  className="text-gray-700 hover:text-blue-600 transition font-medium">
           Health Form
            </Link>
            <Link to="../Pages/Insights"  className="text-gray-700 hover:text-blue-600 transition font-medium">
            AI Insights
            </Link>
            
            <Link to="../Pages/Profile"  className="text-gray-700 hover:text-blue-600 transition font-medium">
            Profile

            </Link>
            <button
          onClick={handleLogout}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                      Logout
        </button>
          
          
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 hover:text-blue-600"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col items-center gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
