import "../styles/footer.css"
import logo from "/logoJose.png"
import figure from "/figure-footer.png"

export const Footer = () => {
  return (
    <>
    <footer>
        <div className="footer-content">
            <img src={figure} alt="" className="figure" />
            <p>Truth is a deep kindness that teaches us to be content in our everyday life and share with the people the same happiness. <br />the feeling of sunday is the same everywhere: heavy,melancholy, standing still.</p>
            <img src={logo} alt="" className="logo" />
            <div className="social-network">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-x-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
            <p className="copyRight">
                &copy;Copyright 2024 Yemil R. || Coded by 
                <a href="https://www.instagram.com/yemilr10s/" 
                   target="_blank">
                  Yemil Rios
               </a>.
          </p>
        </div>
    </footer>
    </>
  )
}
