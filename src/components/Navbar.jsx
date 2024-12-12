import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/rages-logo.svg";

export default function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/store", label: "Store" },
    { href: "/blogs", label: "Blogs" },
    { href: "/academics", label: "Academics" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="relative bg-black">
      <div className="absolute opacity-75" />
      <nav className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="Logo" className="h-16 w-auto" />
            </a>
          </div>

          {/* Navigation Links for larger screens */}
          <div className="hidden md:flex  md:gap-x-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-l font-semibold transition-colors ${
                  location.pathname === link.href
                    ? "text-red-500"
                    : "text-white hover:text-gray-300"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === link.href
                      ? "text-red-500"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
