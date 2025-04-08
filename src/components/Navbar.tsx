import { Link } from "react-router";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/product" },
    { name: "About", link: "/about" },
  ];

  const LogoBrand = "Fake Store";

  return (
    <header className="w-full h-auto bg-gray-100 shadow-md fixed top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:scale-105 transition-transform duration-300"
        >
          {LogoBrand}
        </Link>

        {/* Hamburger Menu Button (visible on mobile) */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
          }`}
        >
          {NavItems.map((item, index) => (
            <li
              key={index}
              className="relative group"
              onClick={() => setIsOpen(false)} // Close menu on mobile click
            >
              <Link
                to={item.link}
                className="text-gray-600 hover:text-blue-500 transition-all duration-300 ease-in-out group-hover:scale-105 block py-2"
              >
                {item.name}
              </Link>
              {/* Underline animation */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 ease-in-out" />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
