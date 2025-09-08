import development from '../../assets/images/development.gif'
import whatsapp from '../../assets/images/whatsapp.png';
import gmail from '../../assets/images/gmail.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github-white.png';


export const About = () => {
  return (
    <section className="about bg-gray-950 z-10 relative py-10 px-7 text-white" id="about">
      <div className='w-full max-w-6xl mx-auto'>
        <h2 className='text-center text-3xl pb-6'>Sobre Mi</h2>

        <div className="about-content flex flex-col md:items-center md:gap-8  lg:px-46">
          <div className="about-content-info">
            <p className='md: text-sm'>
            Desarrollador Frontend con más de 2 años de experiencia creando interfaces modernas, accesibles y responsivas con VueJs y ReactJs. Con conocimientos en backend (Node.js, Express, AWS Lambda, Serverless y Firebase), lo que me permite contribuir en proyectos FullStack. Me motiva asumir desafíos que impulsen mi crecimiento profesional, abierto a aprender y adaptarme a nuevas tecnologías para aportar en proyectos innovadores.
            </p>
          </div>

          <div className="contact-content-icons flex justify-center gap-8 md:gap-6 mt-6 md:mt-0">
            <a href="https://wa.me/527841109307" target="_blank"  rel="noopener noreferrer">
              <img src={whatsapp} alt="whatsapp" className='w-10 md:w-10 lg:w-12'/>
            </a>

            <a href="mailto:luispv.1002@gmail.com" target="_blank"  rel="noopener noreferrer">
              <img src={gmail} alt="gmail" className='w-10 md:w-10 lg:w-12'/>
            </a>

            <a href="https://www.linkedin.com/in/luis-fernando-p%C3%A9rez-varajas-b6539818b/" target="_blank"  rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className='w-10 md:w-10 lg:w-12'/>
            </a>

            <a href="https://github.com/luispv02" target="_blank"  rel="noopener noreferrer">
              <img src={github} alt="github" className='w-10 md:w-10 lg:w-12'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};