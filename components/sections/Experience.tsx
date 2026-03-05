import { experiences } from "@/data/experience";
import { MdOutlineWorkOutline } from "react-icons/md"
import { SectionHeader } from "./SectionHeader";


export const Experience = () => {

  return (
    <div id="experience">
      <SectionHeader title="Experiencia laboral" />

      <div>
        {
          experiences.map(exp => (
            <div key={exp.id}>
              <div className="text-xs md:text-sm lg:text-base backdrop-blur-sm bg-white/10 p-3 md:p-6 rounded-lg">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <MdOutlineWorkOutline className="text-blue-500"/>
                      <p className="font-bold">{ exp.company }</p>
                    </div>
                    <p className="text-blue-500 font-semibold">{ exp.role }</p>
                  </div>

                  <div className="text-right">
                    <p className="">{exp.period}</p>
                    <p className="">{ exp.location }</p>
                  </div>
                </div>

                {
                  exp.projects.map(project => (
                    <div key={project.name} className="mt-5">
                      <div className="font-semibold mb-1 flex items-center gap-2">
                        <p>{ project.name }</p>
                        {
                          project.period && <p className="bg-gray-200/20 rounded-full px-2">{project.period}</p>
                        }
                      </div>

                      <ul className="list-disc marker:text-blue-500 ml-4">
                        {
                          project.items.map((item) => (
                            <li key={item} className="">{ item }</li>
                          ))
                        }
                      </ul>

                      <div className="flex gap-2 mt-2 flex-wrap">
                        {
                          project.tech.map((t) => (
                            <div key={t} className="bg-blue-500 text-white px-2 py-0.5 rounded-full font-mono text-xs">{t}</div>
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