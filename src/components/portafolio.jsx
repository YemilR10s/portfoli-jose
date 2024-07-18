import { useState } from "react"
import "../styles/portafolio.css"
import { CardsData } from "../utils/portafolioData"
import { PortafolioCard } from "./portafolioCard"


export const Portafolio = () => {

    const [category, setCategory] = useState('All Works')
    const [activeButton, setActiveButton] = useState(true)
   
    const categoryChange = (categorySelect)=>{
        setCategory(categorySelect)
        setActiveButton(!activeButton)
    }

    const filteredCards = category === 'All Works'
    ? CardsData 
    : CardsData.filter((item)=>
    item.category === category)
  return (
    <>
    <section className="portafolio-section">

        <div className="portafolio-content">

            <h3 className="portafolio-h3">Portafolio</h3>
            {/* buttons */}
            <div className="creative-worksAndButtons">
                <h2 className="creative-works-h2">Creative Works</h2>
                <div className="buttons-content">

                    <button  
                    onClick={()=> categoryChange("All Works")}>
                    All Works
                    </button>
                    <button  
                    onClick={()=> categoryChange("Logo")}>
                    Logos
                    </button>
                    <button  
                    onClick={()=> categoryChange("Design")}>
                    Design
                    </button>
                    <button  
                    onClick={()=> categoryChange("Mobile")}>
                    Mobile
                    </button>

                </div>
            </div>
            {/* cards */}
            <div className="cards-content">
                {filteredCards.map((item, index)=>(
                    <PortafolioCard key={index} item={item} />
                ))}
            </div>

        </div>
    </section>
    </>
  )
}
