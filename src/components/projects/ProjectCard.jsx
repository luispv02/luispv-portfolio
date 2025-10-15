
export const ProjectCard = ({ githubFront, githubBack,imagen,pagina,titulo,descripcion}) => {
  return (
    <div className="project-card w-full h-64 relative shadow-xl/20 duration-500 cursor-pointer border border-gray-300">
        <img 
            src={imagen}
            alt='img project'
            className="w-full h-full object-cover"
        />

      <div className="project-card-info z-3 pt-15 text-white opacity-0 translate-0 duration-600 transition-all absolute bottom-5 right-0 px-5 text-center">
            <h3 className="font-bold">{titulo}</h3>
            <p className="text-sm py-4">{descripcion}</p>  

            <div className="flex justify-center items-center gap-2 md:gap-6 pt-1">
              <a href={pagina} target='_blank' rel='noopener noreferrer' className="flex items-center cursor-pointer drop-shadow-sm hover:drop-shadow-red-50" >
                  <i className="fas fa-link text-2xl"></i> 
              </a>

              {
                githubFront &&
                  <a href={githubFront} target='_blank' rel='noopener noreferrer' className="flex items-center gap-1 cursor-pointer drop-shadow-sm hover:drop-shadow-red-50 ">
                    <i className="fab fa-github text-2xl "></i>
                    { githubBack  && <span className="text-sm md:text-md">Frontend</span>}
                  </a>
              }

              {
                githubBack &&
                <a href={githubBack} target='_blank' rel='noopener noreferrer' className="flex items-center gap-1 cursor-pointer drop-shadow-sm hover:drop-shadow-red-50 ">
                  <i className="fab fa-github text-2xl"></i>
                  <span className="text-sm md:text-md">Backend</span>
                </a>
              }
            </div>
            
        </div>
    </div>
  );
};