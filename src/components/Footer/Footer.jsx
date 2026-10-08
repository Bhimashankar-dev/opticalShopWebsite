


import "./Footer.css"

const Footer = () => {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a href="#home">CHETAN OPTICALS</a>
          <p>YOUR VISION. OUR CARE.</p>
          <span>Serving customers since 1992.</span>
        </div>

        <div className="footer-address">
          <h3>Visit Us</h3>
          <p>
            Megur Eye Care Center,
            <br />
            Behind Akkamahadevi College,
            <br />
            Megur Hospital Road,
            <br />
            Bidar – 585401
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#brands">Brands</a>
          <a href="#branches">Our Branches</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Chetan Opticals. All rights reserved.</span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  )
}

export default Footer