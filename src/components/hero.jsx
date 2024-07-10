/* eslint-disable react/no-unescaped-entities */
import figure2 from "/figure2.png"
import figure1 from "/figure1.png"
import "../styles/hero.css"

export const Hero = () => {

  return (
    <>
    <header>

                    {/* hero container */}
    <div className="hero-container">
                    {/* hero container left text */}
        <div className="hero-content-left">
            <div className="text-content">
                <h3 className="hi-iam-h3">HI I AM</h3>
                <span className="Jose-span">Jose Rodriguez</span>
                <h2 className="ui-ux-h2">UI & UX</h2>
                <h2 className="designer-h2">DESIGNER</h2>
                <p>Hello, I'm Jose Rodriguez, I'm a web designer and developer based in NYC, USA. I have a passion for web design and love to create for web and mobile devices.If you have a web based project that you want to get started.</p>
                <button className="hire-me-button">HIRE ME</button>
                <img className="figure2-image" src={figure2} alt="" />
            </div>
        </div>
                    {/* hero container right image */}
        <div className="hero-content-right">
                    {/* image content */}
            <div className="image-content">
                <img className="figure1-image" src={figure1} alt="" />
                <div className="socialNetwork">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
                </div>
            </div>
        </div>
    </div>

    </header>
    
    </>
  )
}
