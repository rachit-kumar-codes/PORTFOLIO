import Navbar from "./components/navbar"
import Hero from "./components/heroPage"
import Skills from "./components/skills"
import Project from "./pages/projects"
import Footer from "./components/footer"
import Particles from "./components/particles"
import Education from "./components/education"
function App() {
  return (
    <>
      <Particles quantity={100} />
      <Navbar />
      <Hero />
      <Education/>
      <Skills />
      <Project />
      <Footer />
    </>
  )
}
export default App
