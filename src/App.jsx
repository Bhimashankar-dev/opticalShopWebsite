
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import BrandPartners from "./components/BrandPartners/BrandPartners"
import Team from "./components/Team/Team"
import Branches from "./components/Branches/Branches"
import Legacy from "./components/Legacy/Legacy"
import OpeningHours from "./components/OpeningHours/OpeningHours"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <BrandPartners />
        <Team />
        <Branches />
        <Legacy />
        <OpeningHours />
      </main>

      <Footer />
    </div>
  )
}

export default App