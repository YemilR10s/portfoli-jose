import "../styles/contact.css"
import {motion} from "framer-motion"

export const Contact = () => {
  return (
    <>
    
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <motion.div 
          whileInView={{opacity:[0,1],y:[100, 0]}}
          transition={{duration: 1}}
          viewport={{once:true}}
        className="map">
        <iframe 
           
          src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=santiago%20bernabeu+(Portafolio%20Jose)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
        </motion.div>

        <motion.div 
          whileInView={{opacity:[0,1],y:[100, 0]}}
          transition={{duration: 1}}
          viewport={{once:true}}
        className="form">
          <form action="" onSubmit={(e)=>{
              e.preventDefault()
            }}>
            <span>Contact</span>
            <h3>Get In Touch</h3>
            <div className="colum1">
            <input required type="text" placeholder="Name" />
            <input required  type="text" placeholder="lastName" />
            </div>
            <input required type="email" placeholder="Email" />
            <input required type="text" placeholder="Subject" />
            <textarea required placeholder="Project Details"></textarea>
            <button
              
            className="form-button">Submit</button>
          </form>
        </motion.div>
      </div>
    </section>
    
    </>
  )
}
