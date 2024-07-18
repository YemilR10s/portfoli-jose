import "../styles/contact.css"

export const Contact = () => {
  return (
    <>
    
    <section className="contact-section">
      <div className="contact-content">
        <div className="map">
        <iframe 
           
          src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=santiago%20bernabeu+(Portafolio%20Jose)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
        </div>
        <div className="form">
          <form action="">
            <span>Contact</span>
            <h3>Get In Touch</h3>
            <div className="colum1">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="lastName" />
            </div>
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Project Details"></textarea>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </div>
    </section>
    
    </>
  )
}
