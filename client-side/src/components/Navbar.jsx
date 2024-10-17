import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered, FaBlog, FaX } from "react-icons/fa6";
import Home from "../pages/Home";
import { AuthContext } from "../context/AuthProvider";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { Link: "Home", path: "/" },
    { Link: "About", path: "/about" },
    { Link: "Shop", path: "/shop" },
    { Link: "Sell your book", path: "/admin/dashboard" },
    { Link: "Blog", path: "/blog" },
  ];
  return (
    <header className="w-full fixed top-0 left-0 right-0 bg-transparent transition-all ease-in duration-300 z-50 ">
      <nav
        className={`lg:px-24 px-4 py-4 ${
          isSticky ? " bg-blue-700 shadow-lg shadow-blue-500/50" : ""
        }`}
      >
        <div className={`flex justify-between items-center text-base gap-8 `}>
          <Link
            to="/"
            className={`text-2xl font-bold ${
              isSticky ? "text-white" : "text-blue-700"
            } flex items-center gap-1`}
          >
            <FaBlog className="inline-block" />
            Books
          </Link>

          <ul className="md:flex space-x-12 hidden pr-5">
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className={`text-base block  uppercase cursor-pointer  ${
                  isSticky
                    ? "hover:text-white text-white"
                    : "hover:text-blue-700 text-black"
                } hover:font-bold`}
              >
                {item.Link}
              </Link>
            ))}
          </ul>
          <div>
            <button
              className={`space-x-12 hidden lg:flex items-center ${
                isSticky
                  ? "hover:text-white text-white"
                  : "hover:text-blue-700 text-black"
              }`}
            >
              <FaBarsStaggered
                className={`w-5 hover:font-bold ${
                  isSticky
                    ? "hover:text-white text-white"
                    : "hover:text-blue-700 text-black"
                }`}
              />
              {user ? ` ${user.email}` : null}
            </button>
          </div>
          <div className="md:hidden pr-5">
            <button onClick={toggleMenu} className="focus:outline-none ">
              {isMenuOpen ? (
                <FaX className="w-5 h-5 text-black" />
              ) : (
                <FaBarsStaggered className="w-5 h-5 text-black" />
              )}
            </button>
          </div>
          {/* nav items for smaller devices */}

          <div
            className={`space-y-4 px-4 mt-10 py-7 bg-blue-700 md:hidden ${
              isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
            }`}
          >
            {navItems.map((item) => (
              <Link
                to={item.path}
                key={item.path}
                className="text-base block text-white uppercase cursor-pointer  hover:font-bold"
              >
                {item.Link}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
