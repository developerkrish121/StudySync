import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">

        {/* Logo */}
        <div className="logo">
          <Link to="/" className="logo-link">
            <h2>StudySync</h2>
          </Link>
        </div>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#features" onClick={closeMenu}>Features</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#pricing" onClick={closeMenu}>Pricing</a>
          </li>

          <li>
            <a href="#blog" onClick={closeMenu}>Blog</a>
          </li>
        </ul>

        {/* Buttons */}
        <div className="nav-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>

          <Link to="/register">
            <button className="register-btn">Register</button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;