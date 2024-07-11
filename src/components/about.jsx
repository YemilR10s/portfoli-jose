/* eslint-disable react/no-unescaped-entities */
import "../styles/about.css"

export const About = () => {
  return (
    <>
    <section className="about-section">
        <div className="about-container">

            <div className="about-left-content">

                <div className="dribble-box">
                <i className="fa-brands fa-dribbble"></i>
                <span className="dribble-span">Dribble</span>
                <p className="dribble-box-p"> 32043</p>
                </div>

                <div className="be-box">
                <i className="fa-brands fa-behance"></i>
                <span className="behance-span">Behance</span>
                <p className="be-box-p">79242</p>
                </div>

                <div className="linkedin-box">
                <i className="fa-brands fa-linkedin"></i>
                <span className="linkedin-span">Linkedin</span>
                <p className="linkedin-box-p">20k</p>
                </div>
            </div>


            <div className="about-right-content">
                <h3 className="about-me-h3">About Me</h3>
                <h2 className="about-me-h2">CREATIVE DESIGNE WITH MODERN TECHNIQUES</h2>
                <p className="about-me-p">Hello I am Jose rodriguez, I'm a web designer and developer based in NYC, USA.
                    I have passion for web designe and love to create a web mobile devices. 
                    if you have a web based project that you want to get stared.
                </p>
                <div className="about-right-boxes">

                    <div className="about-right-box1">
                        <div className="icons">
                        <i className="fa-regular fa-user"></i>
                        <i className="fa-regular fa-envelope"></i>
                        <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="information">
                            <p>Jose Rodriguez</p>
                            <p>Info@jose.com</p>
                            <p>381-461-034</p>
                        </div>
                    </div>
                    <div className="about-right-box2">
                        <span>10+</span>
                        <p>Years Of Experience</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}
