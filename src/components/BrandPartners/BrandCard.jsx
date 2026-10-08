

const BrandCard = ({number, name, category, featured}) => {
  return (
    <article
      className={`brand-card ${
        featured ? "brand-card-featured" : ""
      }`}
    >
      <div className="brand-card-top">
        <span>{number}</span>
        <span>BRAND</span>
      </div>

      <div className="brand-card-content">
        <h3>{name}</h3>
        <p>{category}</p>
      </div>

      <div className="brand-card-line"></div>

      <div className="brand-card-footer">
        <span>CHETAN OPTICALS</span>
        <span>↗</span>
      </div>
    </article>
  )
}

export default BrandCard