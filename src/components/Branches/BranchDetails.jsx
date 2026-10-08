
const BranchDetails = ({ branch }) => {
  if (!branch) return null

  return (
    <article className="branch-details">
      <div className="branch-visual">
        <span className="branch-watermark">{branch.id}</span>
        <span className="branch-pin">⌖</span>
        <p>FIND YOUR NEAREST STORE</p>
      </div>

      <div className="branch-info">
        <span className="section-eyebrow">OUR LOCATION</span>

        <h3>{branch.name}</h3>

        <p className="branch-location">{branch.location}</p>

        <div className="branch-info-row">
          <span>ADDRESS</span>
          <p>{branch.address}</p>
        </div>

        <div className="branch-info-row">
          <span>PHONE</span>
          <p>{branch.phone}</p>
        </div>

        <div className="branch-info-row">
          <span>HOURS</span>
          <p>{branch.timings}</p>
        </div>

        <div className="branch-services">
          {branch.services.map(service => (
            <span key={service}>{service}</span>
          ))}
        </div>
      </div>
    </article>
  )
}

export default BranchDetails