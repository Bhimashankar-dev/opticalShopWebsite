


import ServiceCard from "./ServiceCard"
import "./Services.css"

const servicesList = [
  {
    number: "01",
    title: "Opticians",
    description:
      "Professional optical guidance to help you find suitable eyewear and vision solutions.",
  },
  {
    number: "02",
    title: "Sunglasses",
    description:
      "A wide range of stylish sunglasses designed for comfort, protection and everyday style.",
  },
  {
    number: "03",
    title: "Contact Lenses",
    description:
      "Contact lens solutions for different vision requirements and everyday lifestyles.",
  },
  {
    number: "04",
    title: "Eyeglass Lenses",
    description:
      "Quality prescription lenses for clear vision, comfort and different vision needs.",
  },
  {
    number: "05",
    title: "Optical Frames",
    description:
      "Frames in different styles and designs to help you find eyewear that suits you.",
  },
  {
    number: "06",
    title: "Eyewear Solutions",
    description:
      "Complete eyewear solutions bringing frames, lenses and optical products together.",
  },
  {
    number: "07",
    title: "Vision Care",
    description:
      "Customer-focused optical assistance to make your eyewear selection easier.",
  },
  {
    number: "08",
    title: "And More",
    description:
      "Explore more optical products and solutions available across Chetan Opticals.",
  },
]

const Services = () => {
  return (
    <section id="services" className="services-section">

      <div className="services-intro">

        <span className="services-label">
          WHAT WE OFFER
        </span>

        <h2>
          Our
          <strong> Services.</strong>
        </h2>

        <p>
          From eyewear and optical lenses to contact lenses
          and professional optical solutions, Chetan Opticals
          brings quality products and trusted service together
          under one roof.
        </p>

      </div>

      <div className="services-grid">

        {servicesList.map(eachService => (
          <ServiceCard
            key={eachService.number}
            number={eachService.number}
            title={eachService.title}
            description={eachService.description}
          />
        ))}

      </div>

    </section>
  )
}

export default Services