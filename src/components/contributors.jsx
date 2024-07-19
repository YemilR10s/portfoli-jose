import behance from "/behance.png"
import google from "/google.png"
import dribble from "/dribble.png"
import "../styles/contributors.css"

export const Contributors = () => {
  return (
    <>
    <div className="contributors-section">
        <div className="contributors-content">
            <h2>CONTRIBUTORS</h2>
            <p>They support product that simplify and automate decent mechanic processes saving time fot activities.</p>
            <div className="logos">
                <img src={behance} alt="" />
                <img src={google} alt="" />
                <img src={dribble} alt="" />
            </div>
        </div>
    </div>
    
    </>
  )
}
