import { FaArrowDown, FaWhatsapp } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialLinkedin } from "react-icons/sl";


export const Hero = () => {

  const networks = [
    { url: 'https://www.linkedin.com/in/luis-fpv/', icon: SlSocialLinkedin, label: 'Linkedin' },
    { url: 'https://github.com/luispv02', icon: FiGithub, label: 'Github' },
    { url: 'mailto:luispv.1002@gmail.com', icon: MdOutlineEmail, label: 'Gmail' },
    { url: 'https://wa.me/52784110937', icon: FaWhatsapp, label: 'Whatsapp' }
  ]

  return (
    <div id="hero" className="h-screen flex flex-col justify-center space-y-8 text-center">
      <div className="animate-top">
        <h1 className="text-3xl md:text-6xl font-bold font-mono tracking-tight">Desarrollador <span className="text-blue-500">Fullstack</span></h1>

        <p className="text-sm md:text-xl font-sans text-gray-400">
          Especializado en Frontend con React.js y Vue 3, enfocado en integración de APIs y desarrollo de interfaces escalables y mantenibles.
        </p>
      </div>
      
      <div className="animate-bottom">
        <a 
          href="/CV_Luis_Fernando.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border border-gray-500 px-4 py-1 rounded-md cursor-pointer text-sm transition  hover:border-blue-400 hover:text-blue-400 text-gray-400 hover:scale-110"
        >
          Ver CV
        </a>

        <div className="mt-4 flex justify-center items-center gap-4">
          {
            networks.map(({ url, icon: Icon, label }) => (
              <a 
                key={label} 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border border-gray-500 p-2 rounded-full transition hover:border-blue-400 hover:text-blue-400 hover:scale-110 text-gray-400"
              >
                <Icon size={20} />
              </a>
            ))
          }
        </div>
      </div>

      <a href="#about" className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-gray-300">
        <FaArrowDown size={20}/>
      </a>

    </div>
  )
}