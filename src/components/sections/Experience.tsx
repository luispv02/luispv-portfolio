import { experiences } from "@/src/data/experience";
import { MdOutlineWorkOutline } from "react-icons/md"
import { SectionHeader } from "./SectionHeader";


export const Experience = () => {

  return (
    <div id="experience">
      <SectionHeader title="Experiencia laboral" />

      <div className="fade-up">
        {
          experiences.map(exp => (
            <div key={exp.id}>
              <div className="text-xs md:text-sm lg:text-base backdrop-blur-sm bg-white/[0.04] p-3 md:p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <MdOutlineWorkOutline className="text-stone-200"/>
                      <p className="font-bold">{ exp.company }</p>
                    </div>
                    <p className="text-stone-200 font-semibold">{ exp.role }</p>
                  </div>

                  <div className="text-right">
                    <p className="">{exp.period}</p>
                    <p className="">{ exp.location }</p>
                  </div>
                </div>

                {
                  exp.projects.map(project => (
                    <div key={project.name} className="mt-6">
                      <div className="font-semibold">
                        <p>{ project.name }</p>
                        {
                          project.period && <p className="bg-stone-200/15 rounded-full px-2 inline-block mt-1 mb-2 md:text-sm py-0.5">{project.period}</p>
                        }
                      </div>

                      <ul className="list-disc marker:text-stone-300 ml-4">
                        {
                          project.items.map((item) => (
                            <li key={item} className="">{ item }</li>
                          ))
                        }
                      </ul>

                      <div className="flex gap-2 mt-2 flex-wrap">
                        {
                          project.tech.map((t) => (
                            <div key={t} className="bg-stone-200 text-stone-950 px-2 py-0.5 rounded-full font-mono text-xs">{t}</div>
                          ))
                        }
                      </div>
                    </div>
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