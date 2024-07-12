import "../styles/services.css"
import marketing from "/services-marketing.png"
import design from "/services-design.png"
import uxui from "/services-ux-ui.png"
import development from "/services-development.png"

export const Services = () => {
  return (
    <>
    <section className="services-section">

        <div className="services-container">

        <h3 className="services-h3">Services</h3>
        <h2 className="services-h2">What I do</h2>
        <div className="services-boxes">
            <div className="services-box">
                <img className="boxes-image"  
                src={marketing} alt="marketing services" />
                <h3 className="boxes-h3">Digital Marketing</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="services-box">
            <img className="boxes-image"  
                src={design} alt="services design" />
                <h3 className="boxes-h3" >Product Design</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="services-box">
            <img className="boxes-image"  
                src={uxui} alt="ux ui services" />
                <h3 className="boxes-h3">UI/UX Design</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
            <div className="services-box">
            <img className="boxes-image"  
                src={development} alt="development services" />
                <h3 className="boxes-h3">Web Development</h3>
                <p className="boxes-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, veniam?</p>
                <button className="services-boxes-button">
                    Read More
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
