import { useState } from "react";
import "../styles/portafolio.css";
import { CardsData } from "../utils/portafolioData";
import { motion } from "framer-motion";

export const Portafolio = () => {
  const [category, setCategory] = useState("All Works");

  const categoryChange = (categorySelect) => {
    setCategory(categorySelect);
  };

  const filteredCards =
    category === "All Works"
      ? CardsData
      : CardsData.filter((item) => item.category === category);

  return (
    <section className="portafolio-section" id="portfolio">
      <div className="portafolio-content">
        <motion.h3
          whileInView={{ opacity: [0, 1], y: [100, 0] }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="portafolio-h3"
        >
          Portafolio
        </motion.h3>

        {/* buttons */}
        <div className="creative-worksAndButtons">
          <motion.h2
            whileInView={{ opacity: [0, 1], y: [100, 0] }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="creative-works-h2"
          >
            Creative Works
          </motion.h2>

          <div className="buttons-content">
            <motion.button
              whileInView={{ y: [100, 0] }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              onClick={() => categoryChange("All Works")}
              className={category === "All Works" ? "activeButton" : ""}
            >
              All Works
            </motion.button>
            <motion.button
              whileInView={{ y: [100, 0] }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              onClick={() => categoryChange("Logo")}
              className={category === "Logo" ? "activeButton" : ""}
            >
              Logos
            </motion.button>
            <motion.button
              whileInView={{ y: [100, 0] }}
              transition={{ duration: 1.4 }}
              viewport={{ once: true }}
              onClick={() => categoryChange("Design")}
              className={category === "Design" ? "activeButton" : ""}
            >
              Design
            </motion.button>
            <motion.button
              whileInView={{ y: [100, 0] }}
              transition={{ duration: 1.6 }}
              viewport={{ once: true }}
              onClick={() => categoryChange("Mobile")}
              className={category === "Mobile" ? "activeButton" : ""}
            >
              Mobile
            </motion.button>
          </div>
        </div>

        {/* cards */}
        <div className="cards-content">
          {filteredCards.map((item, index) => (
            <motion.div 
             whileInView={{opacity:[0,1],y:[100, 0]}}
             transition={{duration: 0.5}}
             key={index}
            className="card">
            <div className="card-title">{item.title}</div>
            <div className="card-description">{item.description}</div>
            <img className="card-image" src={item.image} alt="" />
           </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


