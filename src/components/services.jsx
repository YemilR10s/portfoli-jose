import "../styles/services.css"
import marketing from "/services-marketing.png"
import design from "/services-design.png"
import uxui from "/services-ux-ui.png"
import development from "/services-development.png"
import {motion} from "framer-motion"


export const Services = () => {
  return (
    <>
    <section className="services-section" id="services">

        <div className="services-container">

        <motion.h3 
        whileInView={{opacity:[0,1],y:[100,0]}}
        transition={{duration:1}}
        viewport={{once: true}}
        className="services-h3">
        Services
        </motion.h3>

        <motion.h2 
        whileInView={{opacity:[0,1],y:[100,0]}}
        transition={{duration:1}}
        viewport={{once: true}}
        className="services-h2">
        What I do
        </motion.h2>

        <div className="services-boxes">
            {/* box */}
            <motion.div              whileInView={{opacity:[0,1],y:[100,0]}}
             transition={{duration:1}}
             viewport={{once: true}}
            className="services-box">
                <img className="boxes-image"  
                src={marketing} alt="marketing services" />
                <h3 className="boxes-h3">Digital Marketing</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </motion.div>
            {/* box */}
            <motion.div            whileInView={{opacity:[0,1],y:[100,0]}}
            transition={{duration:1.2}}
            viewport={{once: true}}
            className="services-box">
            <img className="boxes-image"  
                src={design} alt="services design" />
                <h3 className="boxes-h3" >Product Design</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </motion.div>
            {/* box */}
            <motion.div 
             whileInView={{opacity:[0,1],y:[100,0]}}
             transition={{duration:1.4}}
             viewport={{once: true}}
            className="services-box">
            <img className="boxes-image"  
                src={uxui} alt="ux ui services" />
                <h3 className="boxes-h3">UI/UX Design</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </motion.div>
            {/* box */}
            <motion.div            
             whileInView={{opacity:[0,1],y:[100,0]}}
             transition={{duration:1.6}}
             viewport={{once: true}}
            className="services-box">
            <img className="boxes-image"  
                src={development} alt="development services" />
                <h3 className="boxes-h3">Web Development</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </motion.div>
        </div>
        </div>
    </section>
    </>
  )
}
