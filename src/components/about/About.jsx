import development from '../../assets/images/development.gif'

export const About = () => {
  return (
    <section className="about bg-gray-950 z-10 relative py-10 px-7 text-white" id="about">
      <div className='w-full max-w-6xl mx-auto'>
        <h2 className='text-center text-3xl pb-6'>Sobre Mi</h2>

        <div className="about-content flex flex-col md:flex-row md:items-center lg:gap-16">
          <div className="about-content-info">
            <p className='md: text-sm'>
              Desarrollador web FrontEnd con más de dos años de experiencia y conocimientos básicos en BackEnd. Me enfoco en crear soluciones funcionales, accesibles y visualmente atractivas. Me motiva enfrentar desafíos que impulsen mi crecimiento profesional, me permitan aprender nuevas tecnologías y aportar a proyectos innovadores.
            </p>
          </div>

          <img 
            src={development}
            alt='img development'
            className="w-full m-auto md:w-1/2 px-10 pt-3"
          />
        </div>
      </div>
    </section>
  );
};