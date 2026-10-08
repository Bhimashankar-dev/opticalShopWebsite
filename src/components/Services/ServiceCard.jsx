


const ServiceCard = ({number, title, description}) => {
  return (
    <article className="service-card">

      <span className="service-number">
        {number}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>

    </article>
  )
}

export default ServiceCard