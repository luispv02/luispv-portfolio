import { projects } from "@/data/projects"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { SectionHeader } from "./SectionHeader"
import { LuExternalLink } from "react-icons/lu"
import { FiGithub } from "react-icons/fi"

export const Projects = () => {

  

  return (
    <div id="projects">
      <SectionHeader title="Proyectos" />

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5">
        {
          projects.map(project => (
            <Card key={project.id} className="bg-white/10 border border-gray-500 transition hover:border-blue-500 hover:scale-105 space-y-4">
              <CardHeader>
                <CardTitle className="text-white">{ project.title }</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-300">{ project.description }</p>
              </CardContent>

              <CardFooter className="flex flex-col items-start mt-auto">
                <div className="flex flex-wrap gap-1 mb-4">
                  {
                    project.tech.map(t => (
                      <div key={t} className="bg-blue-500 text-white px-2 py-0.5 rounded-full font-mono text-xs">{t}</div>
                    ))
                  }
                </div>

                <div className="flex gap-3">
                  {
                    project.links.map(link => (
                      <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 gap-1 hover:text-white transition">
                        { link.type === 'demo' ? <LuExternalLink /> : <FiGithub /> }
                        <p className="text-sm">{link.label}</p>
                      </a>
                    ))
                  }
                </div>
                  
              </CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  )
}