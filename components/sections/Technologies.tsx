import { technologies } from "@/data/technologies"
import { SectionHeader } from "./SectionHeader"

export const Technologies = () => {
  return (
    <div id="technologies">
      <SectionHeader title="Tecnologías"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {
          technologies.map(technology => (
            <div key={technology.category} className="border border-gray-500 p-6 space-y-4 bg-white/10 rounded-lg">
              <p className="text-blue-500 font-bold">{technology.category}</p>

              <div className="flex flex-wrap gap-2">
                {
                  technology.skills.map(skill => (
                    <span key={skill} className="font-mono bg-gray-700 py-0.5 text-gray-400 px-3 rounded-md text-xs md:text-sm duration-200 hover:bg-blue-500 hover:text-white/80 shadow-sm hover:shadow-blue-500 cursor-default">{skill}</span>
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