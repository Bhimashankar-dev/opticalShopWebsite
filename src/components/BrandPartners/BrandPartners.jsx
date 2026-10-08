

import BrandCard from "./BrandCard"
import "./BrandPartners.css"

const brandsList = [
  {
    number: "01",
    name: "Carrera",
    category: "Eyewear & Sunglasses",
    featured: true,
  },
  {
    number: "02",
    name: "Ray-Ban",
    category: "Eyewear & Sunglasses",
    featured: false,
  },
  {
    number: "03",
    name: "Safilo",
    category: "Premium Eyewear",
    featured: false,
  },
  {
    number: "04",
    name: "Vogue",
    category: "Fashion Eyewear",
    featured: false,
  },
]

const BrandPartners = () => {
  return (
    <section id="brands" className="brands-section">

      <div className="brands-heading">

        <div>
          <span className="brands-label">
            BRANDS WE OFFER
          </span>

          <h2>
            Selected for
            <strong> you.</strong>
          </h2>
        </div>

        <p>
          Explore a curated selection of eyewear brands
          combining style, quality and comfort at
          Chetan Opticals.
        </p>

      </div>

      <div className="brands-showcase">

        {brandsList.map(eachBrand => (
          <BrandCard
            key={eachBrand.number}
            number={eachBrand.number}
            name={eachBrand.name}
            category={eachBrand.category}
            featured={eachBrand.featured}
          />
        ))}

      </div>

      <div className="brands-bottom">

        <span>CURATED EYEWEAR</span>

        <div className="brands-bottom-line"></div>

        <span>TRUSTED QUALITY</span>

        <div className="brands-bottom-line"></div>

        <span>34+ YEARS</span>

      </div>

    </section>
  )
}

export default BrandPartners