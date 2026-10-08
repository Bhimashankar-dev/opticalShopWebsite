

import {useEffect, useState} from "react"
import "./Hero.css"

const sliderImages = [
  "https://media.lenscrafters.com/2023/Calendar/Week_31_August/Ray_Ban_BTS/RB_LP/D_RB_LP_Hero.jpg",
  "https://imgcdn.stablediffusionweb.com/2025/3/26/8710d4e6-3303-4549-98d8-05465966eb5d.jpg",
  "https://wallpaperaccess.com/full/4671857.jpg",
  "https://www.alensa.at/globalfiles/alensa/infoportal/sources/uk/ray-ban-banner-mobil.jpg"
]

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev =>
        (prev + 1) % sliderImages.length
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const showPreviousImage = () => {
    setCurrentImage(prev =>
      (prev - 1 + sliderImages.length) %
      sliderImages.length
    )
  }

  const showNextImage = () => {
    setCurrentImage(prev =>
      (prev + 1) % sliderImages.length
    )
  }

  return (
    <section id="home" className="hero-section">

      <img
        className="hero-image"
        src={sliderImages[currentImage]}
        alt="Chetan Opticals"
      />

      <button
        type="button"
        className="hero-arrow hero-prev"
        onClick={showPreviousImage}
        aria-label="Previous image"
      >
        ❮
      </button>

      <button
        type="button"
        className="hero-arrow hero-next"
        onClick={showNextImage}
        aria-label="Next image"
      >
        ❯
      </button>

      <div className="hero-dots">
        {sliderImages.map((_, index) => (
          <button
            type="button"
            key={index}
            className={
              currentImage === index
                ? "hero-dot active"
                : "hero-dot"
            }
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero