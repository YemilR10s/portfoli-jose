import "../styles/footer.css"
import logo from "/logoJose.png"
import figure from "/figure-footer.png"
import {motion} from "framer-motion"

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-content">

            <motion.img 
             whileInView={{opacity:[0,1],y:[100, 0]}}
            transition={{duration: 1}}
            viewport={{once:true}} 
              src={figure} alt="" 
              className="figure" />

            <motion.p 
             whileInView={{opacity:[0,1],y:[100, 0]}}
            transition={{duration: 1}}
            viewport={{once:true}}>
              Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. <br />the feeling of sunday is the same everywhere: heavy,melancholy, standing still.
            </motion.p>

            <motion.img  
             whileInView={{opacity:[0,1]}}
            transition={{duration: 1}}
            viewport={{once:true}}
              src={logo} alt="" 
              className="logo" />

            <div className="social-network">

                <motion.i  
                 whileInView={{opacity:[0,1]}}
            transition={{duration: 1}}
            viewport={{once:true}}
                className="fa-brands fa-facebook">
                </motion.i>

                <motion.i  
                 whileInView={{opacity:[0,1]}}
            transition={{duration: 1}}
            viewport={{once:true}}
                className="fa-brands fa-x-twitter">
                </motion.i>

                <motion.i  
                 whileInView={{opacity:[0,1]}}
            transition={{duration: 1}}
            viewport={{once:true}}
                className="fa-brands fa-instagram">
                </motion.i>

                <motion.i  
                 whileInView={{opacity:[0,1]}}
            transition={{duration: 1}}
            viewport={{once:true}}
                className="fa-brands fa-linkedin">
                </motion.i>

            </div>
            <motion.p  
             whileInView={{opacity:[0,1]}}
            transition={{duration: 1}}
            viewport={{once:true}}
            className="copyRight">
            &copy;Copyright 2024 Yemil R. || Coded by 
            <a href="https://www.instagram.com/yemilr10s/" 
                   target="_blank">
                  Yemil Rios
             </a>.
          </motion.p>
        </div>
    </footer>
    </>
  )
}
