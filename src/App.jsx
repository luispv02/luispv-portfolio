import { About } from "./components/about/About"
import { Contact } from "./components/contact/Contact"
import { Education } from "./components/education/Education"
import { Experience } from "./components/experience/Experience"
import { Header } from "./components/header/Header"
import { Hero } from "./components/hero/Hero"
import { Projects } from "./components/projects/Projects"
import { Skills } from "./components/skills/Skills"

function App() {
  return (
    <>
      <Header />

      <Hero />

      <About />

      <Experience />

      <Projects />

      <Skills />

      <Education />

      <Contact />
    </>
  )
}

export default App
