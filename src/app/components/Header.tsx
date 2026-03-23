import { Link, useLocation } from "react-router";
import { ChevronDown, X, Menu } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import logo from "../../assets/rmr_logo.png";

export function Header() {
  const location = useLocation();
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products", hasDropdown: true },
    { name: "Team", path: "/team" },
    { name: "Process", path: "/process" },
    { name: "Contact", path: "/contact" },
  ];

  const mineralItems = [
    { name: "Iron Ore", path: "/products/iron-ore" },
    { name: "Coal", path: "/products/coal" },
    { name: "Bauxite", path: "/products/bauxite" },
    { name: "Limestone", path: "/products/limestone" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isProductsActive = () => {
    return location.pathname.startsWith("/products");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false);
      }
    };

    if (productsDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [productsDropdownOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  return (
    <header className="bg-[#3D4539] border-b border-[#575D52] sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center focus:outline-none focus:ring-2 focus:ring-[#C9A961] focus:ring-offset-2 focus:ring-offset-[#3D4539] rounded">
            <img src={logo} alt="Rathore Minerals & Resources Logo" className="h-24 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.path}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded px-2 py-1 ${
                      isProductsActive()
                        ? "text-[#C9A961]"
                        : "text-gray-300 hover:text-[#C9A961]"
                    }`}
                    aria-expanded={productsDropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </Link>

                  {/* Dropdown Menu */}
                  {productsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-[#2A2D26] border border-[#575D52] shadow-xl rounded">
                      <Link
                        to="/products"
                        className="block px-4 py-3 text-gray-300 hover:bg-[#3D4539] hover:text-[#C9A961] transition-colors border-b border-[#575D52] focus:outline-none focus:bg-[#3D4539] focus:text-[#C9A961]"
                      >
                        All Products & Services
                      </Link>
                      <div className="py-2">
                        <div className="px-4 py-2 text-xs text-[#C9A961] font-semibold uppercase">
                          Minerals We Handle
                        </div>
                        {mineralItems.map((mineral) => (
                          <Link
                            key={mineral.path}
                            to={mineral.path}
                            className="block px-4 py-2 text-gray-300 hover:bg-[#3D4539] hover:text-[#C9A961] transition-colors focus:outline-none focus:bg-[#3D4539] focus:text-[#C9A961]"
                          >
                            {mineral.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded px-2 py-1 ${
                    isActive(item.path)
                      ? "text-[#C9A961]"
                      : "text-gray-300 hover:text-[#C9A961]"
                  }`}
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay */}
          <button
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
            tabIndex={-1}
          />

          {/* Slide-in Menu */}
          <div 
            id="mobile-menu"
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#2A2D26] shadow-2xl z-50 md:hidden overflow-y-auto pb-24"
            role="dialog"
            aria-label="Mobile navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#575D52]">
              <span className="text-[#C9A961] font-semibold text-lg">Menu</span>
              <button
                className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded transition-colors"
                onClick={closeMobileMenu}
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="p-6 space-y-1" role="navigation" aria-label="Mobile navigation">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.path}>
                    <button
                      onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      className={`flex items-center justify-between w-full px-4 py-3 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[#C9A961] ${
                        isProductsActive()
                          ? "text-[#C9A961] bg-[#3D4539]"
                          : "text-gray-300 hover:text-[#C9A961] hover:bg-[#3D4539]"
                      }`}
                      aria-expanded={mobileProductsOpen}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileProductsOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Expandable Products Menu */}
                    {mobileProductsOpen && (
                      <div className="mt-1 ml-4 space-y-1">
                        <Link
                          to="/products"
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-gray-400 hover:text-[#C9A961] hover:bg-[#3D4539] transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[#C9A961]"
                        >
                          All Products & Services
                        </Link>
                        <div className="px-4 py-2 text-xs text-[#C9A961] font-semibold uppercase">
                          Minerals
                        </div>
                        {mineralItems.map((mineral) => (
                          <Link
                            key={mineral.path}
                            to={mineral.path}
                            onClick={closeMobileMenu}
                            className={`block px-4 py-2 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[#C9A961] ${
                              isActive(mineral.path)
                                ? "text-[#C9A961] bg-[#3D4539]"
                                : "text-gray-400 hover:text-[#C9A961] hover:bg-[#3D4539]"
                            }`}
                          >
                            {mineral.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[#C9A961] ${
                      isActive(item.path)
                        ? "text-[#C9A961] bg-[#3D4539]"
                        : "text-gray-300 hover:text-[#C9A961] hover:bg-[#3D4539]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>

            {/* Footer Logo */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-[#575D52] bg-[#3D4539]">
              <Link to="/" onClick={closeMobileMenu} className="block focus:outline-none focus:ring-2 focus:ring-[#C9A961] rounded">
                <img src={logo} alt="Rathore Minerals & Resources Logo" className="h-12 w-auto mx-auto" />
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
