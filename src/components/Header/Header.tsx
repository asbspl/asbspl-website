import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import headerLogo from "../../assets/header-logo.png";

const productMenu = [
  {
    label: "Block Jointing Mortar",
    path: "/products/BJM",
  },
  {
    label: "Premix Plaster",
    path: "/products/PREMIXPlaster",
  },
  {
    label: "Tile Adhesive",
    path: "/products/TileAdhesive",
  },

  {
    label: "Bonding Agent",
    path: "/products/BondingAgent",
  },
  {
    label: "Hacking Agent",
    path: "/products/HackingAgent",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Check exact active page
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Product menu stays active on all product pages
  const isProductActive = location.pathname.startsWith("/products");

  return (
    <header className="site-header">
      <nav className="navbar navbar-expand-lg header-navbar">
        <div className="container">

          {/* Logo */}
          <Link
            to="/"
            className="navbar-brand header-logo"
            onClick={closeMenu}
          >
            <img
              src={headerLogo}
              alt="Logo"
              className="logo-image"
            />
          </Link>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="mainNavbar"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation */}
          <div
            id="mainNavbar"
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""
              }`}
          >
            <ul className="navbar-nav mx-auto header-nav">

              {/* Home */}
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive("/") ? "active" : ""
                    }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${isActive("/about") ? "active" : ""
                    }`}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>

              {/* Product Dropdown */}
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className={`nav-link dropdown-toggle product-dropdown-btn ${isProductActive ? "active" : ""
                    }`}
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </button>

                <ul className="dropdown-menu product-menu">
                  {productMenu.map((product) => (
                    <li key={product.path}>
                      <Link
                        to={product.path}
                        className={`dropdown-item ${isActive(product.path) ? "active" : ""
                          }`}
                        onClick={closeMenu}
                      >
                        {product.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* Solutions */}
              <li className="nav-item">
                <Link
                  to="/Solutions"
                  className={`nav-link ${isActive("/Solutions") ? "active" : ""
                    }`}
                  onClick={closeMenu}
                >
                  Solutions
                </Link>
              </li>

              {/* Technical Data / Downloads */}
              <li className="nav-item">
                <Link
                  to="/Technical-Data-Downloads"
                  className={`nav-link ${isActive("/Technical-Data-Downloads")
                    ? "active"
                    : ""
                    }`}
                  onClick={closeMenu}
                >
                  Technical Data / Downloads
                </Link>
              </li>

              {/* Rewards */}
              {/* <li className="nav-item">
                <Link
                  to="/rewards"
                  className={`nav-link ${
                    isActive("/rewards") ? "active" : ""
                  }`}
                  onClick={closeMenu}
                >
                  Rewards
                </Link>
              </li> */}

              {/* Careers */}
              <li className="nav-item">
                <Link
                  to="/Careers"
                  className={`nav-link ${isActive("/Careers") ? "active" : ""
                    }`}
                  onClick={closeMenu}
                >
                  Careers
                </Link>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${isActive("/contact") ? "active" : ""
                    }`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Login */}
            <div className="header-login">
              <Link
                to="/"
                className={`login-btn ${isActive("/") ? "active" : ""
                  }`}
                onClick={closeMenu}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
