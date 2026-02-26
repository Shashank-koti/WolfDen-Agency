import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import Services from "./components/Services"
import "./App.css"
import Review from "./components/Review"
import About from "./components/About"
import Footer from "./components/Footer"
import WhyChooseUs from "./components/WhyChooseUs"
import Clients from "./components/Clients"
import Contact from "./components/Contact"

function App() {

  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Services/>
    <WhyChooseUs/>
    <Clients/>
    <Review/>
    <Contact/>
    <Footer/>

    </>
  )
}

export default App
