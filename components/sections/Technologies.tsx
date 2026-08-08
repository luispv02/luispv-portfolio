import { technologies } from "@/data/technologies"
import { SectionHeader } from "./SectionHeader"

export const Technologies = () => {
  return (
    <div id="technologies">
      <SectionHeader title="Tecnologías"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          technologies.map((technology, i) => (
            <div key={technology.category} className="border border-stone-800 p-6 space-y-4 bg-white/[0.04] rounded-lg fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <p className="text-stone-100 font-bold">{technology.category}</p>

              <div className="flex flex-wrap gap-2">
                {
                  technology.skills.map(skill => (
                    <span key={skill} className="font-mono bg-stone-900 py-0.5 text-stone-400 px-3 rounded-md text-xs md:text-sm duration-200 hover:bg-stone-200 hover:text-stone-950 shadow-sm hover:shadow-white/10 cursor-default">{skill}</span>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}