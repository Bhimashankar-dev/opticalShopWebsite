


import "./Team.css"

const Team = () => {
  return (
    <section id="team" className="team-section">
      <div className="team-intro">
        <span className="section-eyebrow">THE PEOPLE BEHIND THE CARE</span>

        <h2>
          Professional people.
          <strong> Personal care.</strong>
        </h2>

        <p>
          Choosing eyewear is personal. Our team helps customers
          explore suitable frames, lenses and optical products
          with attentive, customer-focused service.
        </p>

        <div className="team-values">
          <div>
            <span>01</span>
            <p>Experience</p>
          </div>
          <div>
            <span>02</span>
            <p>Attention to detail</p>
          </div>
          <div>
            <span>03</span>
            <p>Personalized care</p>
          </div>
        </div>
      </div>

      <div className="team-visual">
        <div className="team-orbit orbit-one"></div>
        <div className="team-orbit orbit-two"></div>

        <div className="team-glass-icon">👓</div>

        <span className="team-side-label">VISION • EXPERIENCE • TRUST</span>

        <div className="team-visual-caption">
          <span>CHETAN OPTICALS</span>
          <p>Care that goes beyond eyewear.</p>
        </div>
      </div>
    </section>
  )
}

export default Team