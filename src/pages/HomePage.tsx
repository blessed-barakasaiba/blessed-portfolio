import About from "../components/About"
import Features from "../components/Features"
import Hero from "../components/Hero"
import HistoryBackground from "../components/HistoryBackground"
import Skills from "../components/Skills"

const HomePage = () => {
  return (
    <div> 
        <Hero />
        <About />
        <Features />
        <Skills />
        <HistoryBackground />
    </div>
  )
}

export default HomePage