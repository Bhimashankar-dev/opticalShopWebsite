


import "./OpeningHours.css"

const OpeningHours = () => {
  return (
    <section className="hours-section">
      <div className="hours-heading">
        <span className="section-eyebrow">PLAN YOUR VISIT</span>
        <h2>Time for <strong>better vision.</strong></h2>
        <p>Visit us during our regular business hours.</p>
      </div>

      <div className="hours-card">
        <div className="hours-row">
          <div>
            <span className="hours-day-number">01</span>
            <div>
              <h3>Monday – Saturday</h3>
              <p>Regular business hours</p>
            </div>
          </div>

          <time>09:30 AM – 08:30 PM</time>
        </div>

        <div className="hours-row sunday-row">
          <div>
            <span className="hours-day-number">02</span>
            <div>
              <h3>Sunday</h3>
              <p>Shorter business hours</p>
            </div>
          </div>

          <time>09:30 AM – 02:30 PM</time>
        </div>
      </div>

      <p className="hours-note">
        Please confirm the timings of your preferred branch before visiting.
      </p>
    </section>
  )
}

export default OpeningHours