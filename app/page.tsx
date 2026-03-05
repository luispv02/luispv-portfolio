import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Technologies } from "@/components/sections/Technologies";


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
