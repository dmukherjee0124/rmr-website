import { Link } from "react-router";

export function Footer() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Team", path: "/team" },
    { name: "Process", path: "/process" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3D4539] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Company Name */}
          <div>
            <h3 className="text-2xl mb-4 text-[#C9A961]">RMR</h3>
            <p className="text-gray-400">Rathore Minerals & Resources</p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg mb-4 text-white">Quick Links</h4>
            <nav aria-label="Footer navigation">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-gray-300 hover:text-[#C9A961] transition-colors mb-3 focus:outline-none focus:text-[#C9A961] focus:underline"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-6">
              <h4 className="text-lg mb-2 text-white font-bold">Head Office</h4>
              <address className="text-gray-400 text-sm leading-relaxed not-italic">
                Unit 402C, 4th Floor Magnum Tower 1,<br />
                Golf Course Extension, Sector 58<br />
                Gurgaon, Haryana 122011
              </address>
            </div>

            <div className="mb-6">
              <h4 className="text-lg mb-2 text-white font-bold">Other Sites</h4>
              <p className="text-gray-400 text-sm">
                Haryana, Andhra Pradesh, Goa, Odisha, Maharashtra
              </p>
            </div>

            <div>
              <h4 className="text-lg mb-2 text-white font-bold">Email</h4>
              <a
                href="mailto:info@rmrgroup.in"
                className="text-gray-300 hover:text-[#C9A961] transition-colors text-sm focus:outline-none focus:text-[#C9A961] focus:underline"
              >
                info@rmrgroup.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#575D52] mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Rathore Minerals & Resources (RMR). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
