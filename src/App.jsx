import {useState} from "react"
import "./App.css"

const shopsList = [
  {
    id: "HUM",
    location: "Humnabad",
    name: "Chetan Opticals - Humnabad",
    address: "Main Road, Humnabad",
    phone: "+91 XXXXX XXXXX",
    timings: "9:30 AM - 9:00 PM",
    services: [
      "Eye Frames",
      "Sunglasses",
      "Prescription Glasses",
      "Contact Lenses",
    ],
  },
  {
    id: "BAS",
    location: "Basavakalyan",
    name: "Chetan Opticals - Basavakalyan",
    address: "Main Road, Basavakalyan",
    phone: "+91 XXXXX XXXXX",
    timings: "9:30 AM - 9:00 PM",
    services: [
      "Eye Frames",
      "Sunglasses",
      "Prescription Glasses",
      "Contact Lenses",
    ],
  },
  {
    id: "ZAH",
    location: "Zaheerabad",
    name: "Chetan Opticals - Zaheerabad",
    address: "Main Road, Zaheerabad",
    phone: "+91 XXXXX XXXXX",
    timings: "9:30 AM - 9:00 PM",
    services: [
      "Eye Frames",
      "Sunglasses",
      "Prescription Glasses",
      "Contact Lenses",
    ],
  },
  {
    id: "NAR",
    location: "Narayankhed",
    name: "Chetan Opticals - Narayankhed",
    address: "Main Road, Narayankhed",
    phone: "+91 XXXXX XXXXX",
    timings: "9:30 AM - 9:00 PM",
    services: [
      "Eye Frames",
      "Sunglasses",
      "Prescription Glasses",
      "Contact Lenses",
    ],
  },
]



const brands = [
  "Careera",
  "Tommy Hilfiger",
  "ZEISS",
  "Crizal",
  "Ash",
  "Pure Vision",
]








const App = () => {
  const [activeTabId, setActiveTabId] = useState("HUM")

  const activeShop = shopsList.find(
    eachShop => eachShop.id === activeTabId
  )

  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="fixed-header">
         <div className="logo-container">
           <div className="logo-icon">◉</div>

             <div>
              <h1>CHETAN OPTICALS</h1>
              <p>YOUR VISION • OUR CARE</p>
             </div>
         </div>
      </header>

      <section className="image-banner">
        <img
          src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371"
          alt="Eyewear collection"
        />

        <div className="banner-content">
          <h2>See the Difference</h2>
          <p>
            Quality eyewear and trusted optical care
          </p>
        </div>
      </section>

      

      

      

  <section className="about-intro">

  <div className="about-image">
    <img
      src="https://facts.net/wp-content/uploads/2024/02/8-best-sunglasses-for-men-1707186039.jpg"
      alt="Chetan Opticals"
    />
  </div>

  <div className="about-text">
    <h2>Chetan Opticals</h2>

    <p>
      With over 34 years of experience, Chetan Opticals
      has been serving customers in Bidar and surrounding
      areas with trusted optical care and quality eyewear.
    </p>

    <p>
      From stylish frames and sunglasses to prescription
      eyewear and trusted optical brands, we are committed
      to helping our customers find the right vision
      solutions.
    </p>

    <p>
      Our multiple branches make it convenient for
      customers to visit us and experience our products
      and services.
    </p>
  </div>

</section>


  {/* PREMIUM BRAND DEALERS SECTION */}

<section className="dealer-section">

  <div className="dealer-header">

    <span>OUR BRAND PARTNERS</span>

    <h2>
      Official <strong>Dealers</strong>
    </h2>

    <p>
      We offer a curated selection of eyewear and sunglasses
      from recognized brands, bringing style, quality and
      comfort together at Chetan Opticals.
    </p>

  </div>


  <div className="dealer-showcase">

    <div className="dealer-card dealer-card-large">
      <span className="dealer-number">01</span>
      <h3>Carrera</h3>
      <p>Sunglasses & Eyewear</p>
      <div className="dealer-line"></div>
    </div>


    <div className="dealer-card">
      <span className="dealer-number">02</span>
      <h3>Ray-Ban</h3>
      <p>Sunglasses & Eyewear</p>
      <div className="dealer-line"></div>
    </div>


    <div className="dealer-card">
      <span className="dealer-number">03</span>
      <h3>Safilo</h3>
      <p>Eyewear Collection</p>
      <div className="dealer-line"></div>
    </div>


    <div className="dealer-card dealer-card-wide">
      <span className="dealer-number">04</span>
      <h3>Vogue</h3>
      <p>Fashion Eyewear & Sunglasses</p>
      <div className="dealer-line"></div>
    </div>

  </div>


  <div className="dealer-bottom">

    <span>CURATED EYEWEAR</span>

    <div className="dealer-dot"></div>

    <span>TRUSTED BRANDS</span>

    <div className="dealer-dot"></div>

    <span>34+ YEARS OF EXPERIENCE</span>

  </div>

</section>






    {/* SECOND ABOUT SECTION */}

<section className="about-second">

  {/* LEFT — CONTENT */}
  <div className="about-second-text">

    <h2>Quality You Can See</h2>

    <p>
      At Chetan Opticals, we believe that good vision
      is about more than just clear sight. It is about
      comfort, confidence and finding eyewear that
      suits you.
    </p>

    <p>
      We bring together quality eyewear, trusted
      optical solutions and personalized service to
      help every customer find the right choice for
      their vision and lifestyle.
    </p>

    

  </div>


  {/* RIGHT — IMAGE */}
  <div className="about-second-image">

    <img
      src="https://img.freepik.com/premium-photo/black-sunglasses-black-background-closeup_457211-5226.jpg"
      alt="Quality eyewear at Chetan Opticals"
    />

  </div>

</section>


     {/* OUR SERVICES */}

<section className="services-section">

  <div className="services-heading">

    <span className="services-label">WHAT WE OFFER</span>

    <h2>
      Our <span>Services</span>
    </h2>

    <p>
      From eyewear and optical lenses to contact lenses and
      professional optical solutions, Chetan Opticals brings
      quality products and trusted service together under one roof.
    </p>

    <p>
      Explore our range of optical products and services
      designed to meet different vision needs and preferences.
    </p>

  </div>


  <div className="services-grid">

    <div className="service-card">
      <div className="service-number">01</div>
      <h3>Opticians</h3>
      <p>
        Professional optical guidance to help you find
        suitable eyewear and vision solutions.
      </p>
    </div>


    <div className="service-card">
      <div className="service-number">02</div>
      <h3>Sunglass Dealers</h3>
      <p>
        A wide range of stylish sunglasses for everyday
        wear, comfort and personal style.
      </p>
    </div>


    <div className="service-card">
      <div className="service-number">03</div>
      <h3>Contact Lens Manufacturers</h3>
      <p>
        Contact lens solutions from trusted manufacturers
        for different vision requirements.
      </p>
    </div>


    <div className="service-card">
      <div className="service-number">04</div>
      <h3>Contact Lens Dealers</h3>
      <p>
        Contact lenses and related optical products
        available through our optical network.
      </p>
    </div>


    <div className="service-card">
      <div className="service-number">05</div>
      <h3>Eyeglass Lens Dealers</h3>
      <p>
        Quality eyeglass lenses for prescription eyewear,
        everyday use and different vision needs.
      </p>
    </div>


    <div className="service-card">
      <div className="service-number">06</div>
      <h3>Optical Frame Dealers</h3>
      <p>
        Frames in different styles and designs to help
        you find eyewear that suits your personality.
      </p>
    </div>


    <div className="service-card">
      <div className="service-number">07</div>
      <h3>Eyewear Solutions</h3>
      <p>
        Complete eyewear solutions bringing frames,
        lenses and optical products together.
      </p>
    </div>


    <div className="service-card more-card">
      <div className="service-number">+</div>
      <h3>And More</h3>
      <p>
        More optical products and solutions are available
        across our Chetan Opticals branches.
      </p>
    </div>

  </div>

</section>


  <section className="team-section">

  <div className="team-intro">
    <span>OUR TEAM</span>

    <h2>
      Professional People.
      <br />
      <strong>Personalized Care.</strong>
    </h2>

    <p>
      Behind Chetan Opticals is a team of experienced and
      dedicated optical professionals who understand that
      every customer has different vision needs and preferences.
    </p>

    <p>
      From helping you choose the right frame to guiding you
      with lenses and eyewear, our team focuses on providing
      attentive service and a comfortable experience.
    </p>
  </div>

  <div className="team-highlight">

    <div className="team-highlight-top">
      <span>01</span>
      <span>EXPERIENCE & SERVICE</span>
    </div>

    <div className="team-icon">
      👓
    </div>

    <h3>
      Experienced Optical
      <br />
      Professionals
    </h3>

    <p>
      Our professionals combine optical knowledge,
      experience and customer-focused service to help
      you make the right eyewear choice.
    </p>

    <div className="team-line"></div>

    <div className="team-bottom">
      <span>TRUST</span>
      <span>•</span>
      <span>EXPERIENCE</span>
      <span>•</span>
      <span>CARE</span>
    </div>

  </div>

</section>






   <section className="hours-section">

  <div className="hours-heading">
    <span>VISIT US</span>
    <h2>Opening <strong>Hours</strong></h2>
    <p>
      We are here to serve you throughout the week.
      Visit Chetan Opticals during our convenient business hours.
    </p>
  </div>

  <div className="hours-card">

    <div className="hours-row">
      <div className="day">
        <span className="day-icon">◷</span>
        <div>
          <h3>Monday - Saturday</h3>
          <p>Regular Hours</p>
        </div>
      </div>

      <div className="time">
        09:30 AM <span>—</span> 08:30 PM
      </div>
    </div>

    <div className="hours-divider"></div>

    <div className="hours-row sunday-row">
      <div className="day">
        <span className="day-icon">◷</span>
        <div>
          <h3>Sunday</h3>
          <p>Special Hours</p>
        </div>
      </div>

      <div className="time">
        09:30 AM <span>—</span> 02:30 PM
      </div>
    </div>

  </div>

  <div className="hours-note">
    <span></span>
    Hours may vary by branch
  </div>

</section>

       

      <section className="legacy-section">
  <img
    src="https://static.vecteezy.com/system/resources/thumbnails/016/626/231/small_2x/modern-background-with-jeans-and-sunglasses-with-free-space-for-text-photo.jpg"
    alt="Chetan Opticals"
  />

  <div className="legacy-overlay">
    <h2>34 Years of Trust</h2>

    <p>
      For over three decades, Chetan Opticals has
      been helping families see the world with
      clarity, confidence and care.
    </p>

    <p className="legacy-small">
      Quality Eyewear • Trusted Brands • Customer Care
    </p>
  </div>
</section>

      {/* SHOP TABS */}
      <section className="shops-section">

        <h2>Our Branches</h2>

        <p className="section-description">
          Visit us at any of our branches.
        </p>

        <div className="tabs-container">
          {shopsList.map(eachShop => (
            <button
              key={eachShop.id}
              className={`tab-button ${
                activeTabId === eachShop.id
                  ? "active-tab"
                  : ""
              }`}
              onClick={() =>
                setActiveTabId(eachShop.id)
              }
            >
              {eachShop.location}
            </button>
          ))}
        </div>

        {/* ACTIVE SHOP */}
        <div className="shop-card">

          <h2>{activeShop.name}</h2>

          <p>
            <strong>📍 Location:</strong>{" "}
            {activeShop.location}
          </p>

          <p>
            <strong>🏠 Address:</strong>{" "}
            {activeShop.address}
          </p>

          <p>
            <strong>📞 Phone:</strong>{" "}
            {activeShop.phone}
          </p>

          <p>
            <strong>🕐 Timings:</strong>{" "}
            {activeShop.timings}
          </p>

          <h3>Our Services</h3>

          <ul>
            {activeShop.services.map(service => (
              <li key={service}>
                {service}
              </li>
            ))}
          </ul>

        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section">

        <h2>About Chetan Opticals</h2>

        <p>
          Established in 1992, Chetan Opticals has been serving customers with trusted optical care, quality eyewear, and personalized service, building lasting relationships through generations.

        </p>

      </section>

      {/* FOOTER */}
      <footer className="footer">

  <h2>CHETAN OPTICALS</h2>

  <p className="footer-address">
    Megur Eye Care Center,<br />
    Behind Akkamahadevi College,<br />
    Megur Hospital Road,<br />
    Bidar - 585401
  </p>

  <p className="footer-copy">
    © 2026 Chetan Opticals. All Rights Reserved.
  </p>

</footer>

    </div>
  )
}

export default App
