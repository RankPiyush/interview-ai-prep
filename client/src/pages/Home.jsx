import About from "../components/About"
import Categories from "../components/Categories"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import Navbar from "../components/Navbar"
import Testimonials from "../components/Testimonials"


function Home()
{
    return (
        <>
            <Navbar/>
            <Hero/>
            <Features/>
            <HowItWorks/>
            <Categories/>
            <Testimonials/>
            <About/>
            <Footer/>
           
        </>
    )
}
export default Home