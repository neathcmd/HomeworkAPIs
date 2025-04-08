import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { JSX } from "react/jsx-runtime";

// Define types for footer items

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const Footer: React.FC = () => {
  // Footer navigation items organized by category
  const footerSections = {
    company: [
      { name: "About", link: "/about" },
      { name: "Team", link: "/team" },
      { name: "Careers", link: "/careers" },
      { name: "Press", link: "/press" },
    ],
    product: [
      { name: "Features", link: "/features" },
      { name: "Pricing", link: "/pricing" },
      { name: "Documentation", link: "/docs" },
      { name: "Resources", link: "/resources" },
    ],
    support: [
      { name: "Contact", link: "/contact" },
      { name: "Help Center", link: "/help" },
      { name: "FAQ", link: "/faq" },
      { name: "Privacy Policy", link: "/privacy" },
    ],
  };

  // Social media links with icons
  const socialLinks: SocialLink[] = [
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: <Twitter className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: <Instagram className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: <Linkedin className="w-5 h-5" />,
    },
  ];

  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8 border-b border-gray-700">
          {/* Brand and tagline */}
          <div>
            <Link to="/" className="inline-block">
              <h2 className="text-2xl font-bold text-white">
                Brand<span className="text-blue-400">Name</span>
              </h2>
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Empowering users with intuitive solutions that transform the way
              you work, connect, and create.
            </p>
          </div>

          {/* Newsletter subscription */}
          <div className="lg:ml-auto">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to our newsletter
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 px-4 py-2 rounded text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 px-4 py-2 rounded font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerSections.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerSections.product.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerSections.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with social links and copyright */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              &copy; {currentYear} BrandName. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
