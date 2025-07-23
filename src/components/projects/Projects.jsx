import { projects } from "../../utils/projects";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {
  return (
    <section className="projects py-10 px-7 bg-white text-black" id="projects">
        <div className='w-full max-w-6xl mx-auto'>
            <h2 className="text-center text-3xl pb-6 ">Proyectos</h2>
            <div className="projects-content flex-col gap-10 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {
                    projects.map(project => (
                        <ProjectCard
                            key={project.titulo}
                            {...project}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  );
};