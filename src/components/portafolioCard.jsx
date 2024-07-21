/* eslint-disable react/prop-types */

import {motion} from "framer-motion"
export const PortafolioCard = ({item}) => {
  return (
    <>
    <motion.div 
    whileInView={{opacity:[0,1],y:[100, 0]}}
    transition={{duration: 0.5}}
    viewport={{once:true}}
    className="card">
    <div className="card-title">{item.title}</div>
    <div className="card-description">{item.description}</div>
    <img className="card-image" src={item.image} alt="" />

    </motion.div>
    
    </>
  )
}
