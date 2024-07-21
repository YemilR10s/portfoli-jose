/* eslint-disable react/no-unescaped-entities */
import figure2 from "/figure2.png"
import figure1 from "/figure1.png"
import {motion} from "framer-motion"
import "../styles/hero.css"

export const Hero = () => {

  return (
    <>
    <header id="home">

                    {/* hero container */}
    <div className="hero-container">
                    {/* hero container left text */}
        <div className="hero-content-left">
            <div className="text-content">

                <motion.h3 
                whileInView={{opacity:[0,1], x:[-200,0]}}
                transition={{duration:1}}
                viewport={{once:true}}
                className="hi-iam-h3">
                HI I AM
                </motion.h3>

                <motion.h4 
                whileInView={{opacity:[0,1], x:[-200,0]}}
                viewport={{once:true}}
                transition={{duration:1.2}}
                className="Jose-span">
                Jose Rodriguez
                </motion.h4>

                <motion.h2 
                whileInView={{opacity:[0,1], x:[-200,0]}}
                viewport={{once:true}}
                transition={{duration: 1.4}}
                className="ui-ux-h2">
                UI & UX
                </motion.h2>

                <motion.h2 
                whileInView={{opacity:[0,1], x:[-200,0]}}
                viewport={{once:true}}
                transition={{duration:1.6}}
                className="designer-h2">
                DESIGNER
                </motion.h2>

                <motion.p 
                whileInView={{opacity:[0,1], x:[-200,0]}}
                viewport={{once:true}}
                transition={{duration:1.8}}
                >Hello, I'm Jose Rodriguez, I'm a web designer and developer based in NYC, USA. I have a passion for web design and love to create for web and mobile devices.If you have a web based project that you want to get started.
                </motion.p>

                <motion.button 
                whileInView={{opacity:[0,1], x:[-200,0]}}
                viewport={{once:true}}
                transition={{duration:1}}
                className="hire-me-button">
                HIRE ME
                </motion.button>

                <motion.img 
                initial={{scale: [0,0,0,0,0]}}
                animate={{scale: [0,1.5,1.5,1.5,1], rotate:[0,0,300,360, 0]}}
                transition={{
                  repeat: Infinity,
                  duration:5,
                  ease: "easeInOut",
                }}
                className="figure2-image" 
                src={figure2} alt="" />
            </div>
        </div>
                    {/* hero container right image */}
        <div className="hero-content-right">
                    {/* image content */}
            <div className="image-content">

                <motion.img 
                whileInView={{opacity:[0,1], scale:[0,1]}}
                viewport={{once:true}}
                transition={{duration: 2}}
                className="figure1-image" 
                src={figure1} alt="" />

                <div className="socialNetwork">
                <motion.i 
                whileInView={{opacity:[0,1], x:[200,0]}}
                viewport={{once:true}}
                transition={{duration:2}}
                className="fa-brands fa-facebook"></motion.i>
                <motion.i 
                whileInView={{opacity:[0,1], x:[200,0]}}
                viewport={{once:true}}
                transition={{duration:2.2}}
                className="fa-brands fa-x-twitter"></motion.i>
                <motion.i 
                whileInView={{opacity:[0,1], x:[200,0]}}
                viewport={{once:true}}
                transition={{duration:2.4}}
                className="fa-brands fa-instagram"></motion.i>
                <motion.i 
                whileInView={{opacity:[0,1], x:[200,0]}}
                viewport={{once:true}}
                transition={{duration:2.6}}
                className="fa-brands fa-linkedin"></motion.i>
                </div>
            </div>
        </div>
    </div>

    </header>
    
    </>
  )
}
