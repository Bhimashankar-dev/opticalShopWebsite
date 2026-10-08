import {useState} from "react"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">

      <div className="header-container">

        {/* Logo */}

        <a href="#home" className="brand-logo" onClick={closeMenu}>
          <div className="brand-icon">◉</div>

          <div className="brand-content">
            <h1>CHETAN OPTICALS</h1>
            <p className="brand-location">BIDAR · EST. 1992</p>
            <p>YOUR VISION • OUR CARE</p>
          </div>
        </a>


        {/* Desktop Navigation */}

        <nav className="desktop-nav">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#services">Services</a>

          <a href="#brands">Brands</a>

          <a href="#team">Team</a>

          <a href="#branches">Branches</a>

          <a href="#contact">Contact</a>

        </nav>


        {/* Mobile Menu Button */}

        <button
          type="button"
          className={`menu-button ${
            isMenuOpen ? "menu-open" : ""
          }`}
          onClick={() => setIsMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* Mobile Navigation */}

      <nav
        className={`mobile-nav ${
          isMenuOpen ? "mobile-nav-open" : ""
        }`}
      >

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#brands" onClick={closeMenu}>
          Brands
        </a>

        <a href="#team" onClick={closeMenu}>
          Team
        </a>

        <a href="#branches" onClick={closeMenu}>
          Branches
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

    </header>
  )
}

export default Header