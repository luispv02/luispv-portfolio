import { About } from "@/src/components/sections/About";
import { Contact } from "@/src/components/sections/Contact";
import { Education } from "@/src/components/sections/Education";
import { Experience } from "@/src/components/sections/Experience";
import { Hero } from "@/src/components/sections/Hero";
import { Projects } from "@/src/components/sections/Projects";
import { Technologies } from "@/src/components/sections/Technologies";


export default function Home() {
  return (
    <div className="text-white px-4 space-y-30 mb-20">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Technologies />
      <Education />
      <Contact />
    </div>
  )
}
