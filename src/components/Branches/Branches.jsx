


import { useState } from "react"
import BranchTabs from "./BranchTabs"
import BranchDetails from "./BranchDetails"
import "./Branches.css"

const branches = [
  {
    id: "01",
    location: "Humnabad",
    name: "Chetan Opticals",
    address: "Add verified Humnabad branch address",
    phone: "Add branch phone number",
    timings: "09:30 AM – 08:30 PM",
    services: ["Optical Frames", "Sunglasses", "Lenses"],
  },
  {
    id: "02",
    location: "Basavakalyan",
    name: "Chetan Opticals",
    address: "Add verified Basavakalyan branch address",
    phone: "Add branch phone number",
    timings: "09:30 AM – 08:30 PM",
    services: ["Optical Frames", "Sunglasses", "Lenses"],
  },
  {
    id: "03",
    location: "Zaheerabad",
    name: "Chetan Opticals",
    address: "Add verified Zaheerabad branch address",
    phone: "Add branch phone number",
    timings: "09:30 AM – 08:30 PM",
    services: ["Optical Frames", "Sunglasses", "Lenses"],
  },
  {
    id: "04",
    location: "Narayankhed",
    name: "Chetan Opticals",
    address: "Add verified Narayankhed branch address",
    phone: "Add branch phone number",
    timings: "09:30 AM – 08:30 PM",
    services: ["Optical Frames", "Sunglasses", "Lenses"],
  },
]

const Branches = () => {
  const [activeTabId, setActiveTabId] = useState("01")

  const activeBranch = branches.find(
    branch => branch.id === activeTabId
  )

  return (
    <section id="branches" className="branches-section">
      <div className="branches-heading">
        <span className="section-eyebrow">COME VISIT US</span>
        <h2>Closer to <strong>your world.</strong></h2>
        <p>
          Choose a location to explore its branch information
          and available optical services.
        </p>
      </div>

      <BranchTabs
        branches={branches}
        activeTabId={activeTabId}
        onTabChange={setActiveTabId}
      />

      <BranchDetails branch={activeBranch} />

      <p className="branches-disclaimer">
        Branch information should be verified before publishing.
      </p>
    </section>
  )
}

export default Branches