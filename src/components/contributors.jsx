import behance from "/behance.png"
import google from "/google.png"
import dribble from "/dribble.png"
import "../styles/contributors.css"
import {motion} from "framer-motion"

export const Contributors = () => {
  return (
    <>
    <div className="contributors-section">
        <div className="contributors-content">
            <motion.h2
            whileInView={{opacity:[0,1],y:[100, 0]}}
            transition={{duration: 1}}
            viewport={{once:true}}
            >CONTRIBUTORS</motion.h2>
            <motion.p
            whileInView={{opacity:[0,1],y:[100, 0]}}
            transition={{duration: 1}}
            viewport={{once:true}}
            >They support product that simplify and automate decent mechanic processes saving time fot activities.</motion.p>

            <div className="logos">
                <motion.img
                whileInView={{opacity:[0,1],y:[100, 0]}}
            transition={{duration: 1}}
            viewport={{once:true}}
                src={behance} alt="" />
                <motion.img
                whileInView={{opacity:[0,1],y:[100, 0]}}
            transition={{duration: 1}}
            viewport={{once:true}}
                src={google} alt="" />
                <motion.img
                whileInView={{opacity:[0,1],y:[100, 0]}}
            transition={{duration: 1}}
            viewport={{once:true}}
                src={dribble} alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}
