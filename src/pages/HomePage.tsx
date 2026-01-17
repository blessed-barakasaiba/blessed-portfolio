import About from "../components/About"
import Contacts from "../components/Contacts"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HistoryBackground from "../components/HistoryBackground"
import Skills from "../components/Skills"

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8"> 
        <Hero />
        <About />
        <Features />
        <Skills />
        <HistoryBackground />
        <Contacts />
        <Footer />
    </div>
  )
}

export default HomePage