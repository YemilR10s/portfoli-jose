import { useState } from "react"
import "../styles/portafolio.css"
import { CardsData } from "../utils/portafolioData"
import { PortafolioCard } from "./portafolioCard"
import {motion} from "framer-motion"


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
    <section className="portafolio-section" id="portfolio">

        <div className="portafolio-content">

            <motion.h3 
            whileInView={{opacity:[0,1],y:[100,0]}}
            transition={{duration:1}}
            viewport={{once: true}}
            className="portafolio-h3">
            Portafolio
            </motion.h3>

            {/* buttons */}
            <div className="creative-worksAndButtons">

                <motion.h2 
                whileInView={{opacity:[0,1],y:[100,0]}}
                transition={{duration:1}}
                viewport={{once: true}}
                className="creative-works-h2">
                Creative Works
                </motion.h2>

                <div className="buttons-content">

                    <motion.button
                    whileInView={{y:[100,0]}}
                    transition={{duration:1}} 
                    viewport={{once: true}} 
                    onClick={()=> categoryChange("All Works")}>
                    All Works
                    </motion.button>
                    <motion.button
                    whileInView={{y:[100,0]}}
                    transition={{duration:1.2}}
                    viewport={{once: true}}  
                    onClick={()=> categoryChange("Logo")}>
                    Logos
                    </motion.button>
                    <motion.button
                    whileInView={{y:[100,0]}}
                    transition={{duration:1.4}}
                    viewport={{once: true}}  
                    onClick={()=> categoryChange("Design")}>
                    Design
                    </motion.button>
                    <motion.button
                    whileInView={{y:[100,0]}}
                    transition={{duration:1.6}}
                    viewport={{once: true}}  
                    onClick={()=> categoryChange("Mobile")}>
                    Mobile
                    </motion.button>

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
