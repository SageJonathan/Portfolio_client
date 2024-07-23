import "./Landing.scss"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Contact from "../../components/Contact/Contact"
import Skills from "../../components/Skills/Skills"
import About from "../../components/About/About"
import Mission from "../../components/Mission/Mission"

function Landing () {

    return (
     <>
     <Hero></Hero>
     <About></About>
     <Projects></Projects>
     <Skills></Skills>
     <Mission></Mission>
     <Contact></Contact>
     </>
    )
  }
  
  export default Landing
  