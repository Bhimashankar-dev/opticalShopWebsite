



import "./About.css"

const About = () => {
  return (
    <section id="about" className="about-section">

      {/* First About Block */}

      <div className="about-intro">

        <div className="about-image-wrapper">
          <img
            src="https://facts.net/wp-content/uploads/2024/02/8-best-sunglasses-for-men-1707186039.jpg"
            alt="Chetan Opticals showroom"
            className="about-image"
          />
        </div>

        <div className="about-content">

          <span className="about-label">
            ABOUT CHETAN OPTICALS
          </span>

          <h2>
            Vision built on
            <strong> Trust.</strong>
          </h2>

          <p>
            Established in 1992, Chetan Opticals has been
            serving customers with trusted optical care,
            quality eyewear and personalized service.
          </p>

          <p>
            Over the years, we have built lasting
            relationships with generations of customers
            by combining experience, quality products
            and attentive service.
          </p>

          <div className="about-highlight">

            <div>
              <strong>34+</strong>
              <span>Years of Experience</span>
            </div>

            <div>
              <strong>6</strong>
              <span>Branches</span>
            </div>

          </div>

        </div>

      </div>


      {/* Second About Block */}

      <div className="about-quality">

        <div className="quality-content">

          <span className="quality-label">
            OUR APPROACH
          </span>

          <h2>
            Quality you can
            <strong> see.</strong>
          </h2>

          <p>
            At Chetan Opticals, we believe good vision is
            about more than just clear sight. It is about
            comfort, confidence and finding eyewear that
            suits you.
          </p>

          <p>
            We bring together quality eyewear, trusted
            optical solutions and personalized service to
            help every customer find the right choice for
            their vision and lifestyle.
          </p>

          <div className="quality-line">
            <span></span>
            <p>
              Experience. Quality. Care.
            </p>
          </div>

        </div>

        <div className="quality-image-wrapper">
          <img
            src="https://luxurycolumnist.com/wp-content/uploads/2024/01/Best-Luxury-Eyewear-Brands.jpg"
            alt="Quality eyewear"
            className="quality-image"
          />
        </div>

      </div>

    </section>
  )
}

export default About