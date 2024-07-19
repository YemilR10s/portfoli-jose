import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Contributors } from "./components/contributors"
import { Footer } from "./components/footer"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { Portafolio } from "./components/portafolio"
import { Services } from "./components/services"


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portafolio/>
      <Contact/>
      <Contributors/>
      <Footer/>
    </>
  )
}

export default App
