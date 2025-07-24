
export const ProjectCard = ({ github,imagen,pagina,titulo, descripcion}) => {
  return (
    <div className="project-card w-full h-64 relative shadow-xl/20 duration-500 cursor-pointer">
        <img 
            src={imagen}
            alt='img project'
            className="w-full h-full object-cover"
        />

      <div className="project-card-info z-3 pt-15 text-white opacity-0 translate-0 duration-600 transition-all absolute bottom-5 right-0 px-5 text-center">
            <h3 className="font-bold">{titulo}</h3>
            <p className="text-sm py-4">{descripcion}</p>  

            <a 
              href={pagina}
              target='_blank'
              rel='noopener noreferrer'
              className="text-white"
            >
                <i className="fas fa-link text-2xl cursor-pointer  mx-6 drop-shadow-sm hover:drop-shadow-red-50"></i> 
            </a>

            <a 
              href={github}
              target='_blank'
              rel='noopener noreferrer'
            >
                <i className="fab fa-github text-2xl cursor-pointer  mx-6 drop-shadow-sm hover:drop-shadow-red-50"></i>
            </a>
        </div>
    </div>
  );
};