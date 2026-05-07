import { CgDatabase } from "react-icons/cg"
import { GoGear } from "react-icons/go"
import { LuCodeXml } from "react-icons/lu"
import { SectionHeader } from "./SectionHeader"

export const About = () => {

  const mainSkills = [
    {
      title: 'Frontend',
      icon: LuCodeXml,
      items: 'React.js, Vue 3, JavaScript, TypeScript, Tailwind CSS',
    },
    {
      title: 'Backend',
      icon: CgDatabase,
      items: 'Node.js, Express, MongoDB + Mongoose'
    },
    {
      title: 'Herramientas',
      icon: GoGear,
      items: 'Git, GitHub, Bitbucket, Jira',
    }
  ]

  return (
    <div id="about">
      <SectionHeader title="Sobre mí" />
      
      <p className="text-gray-400 fade-up">
        Desarrollador Fullstack enfocado en Frontend con 3 años de experiencia construyendo aplicaciones web con <span className="text-white">React.js</span> y <span className="text-white">Vue 3</span>. Especializado en desarrollo de interfaces modernas, integración de APIs REST y optimización de rendimiento, con conocimientos en Node.js y arquitecturas serverless sobre AWS.
      </p>

      <div className="md:grid grid-cols-3 gap-4 mt-8">
        {
          mainSkills.map(({title, icon: Icon, items}, i) => (
            <div key={title} className="h-20 py-2 mb-4 ring ring-gray-500 rounded px-2 transition hover:ring-blue-500 shadow-sm hover:shadow-blue-500 hover:scale-105 flex flex-col justify-center fade-up" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="flex items-center gap-3 text-sm font-semibold md:flex  md:items-start"> 
                <Icon size={20} className="text-blue-500" /> 
                <p>{title}</p>
              </div>
              <p className="text-gray-400 text-xs mt-2 font-mono">{items}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}