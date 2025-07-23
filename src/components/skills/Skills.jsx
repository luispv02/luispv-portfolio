import { skills } from "../../utils/skills";

export const Skills = () => {
  return (
    <section className="skills bg-gray-950 z-10 relative py-10 px-7 text-white">
        <div className="w-full max-w-6xl mx-auto skills-content">
            <h2 className="text-center text-3xl pb-6 text-white">Tecnologias</h2>

            <div className="skills-content-technologies grid grid-cols-[repeat(auto-fill,minmax(100px,1fr))] place-items-center gap-8">
                {
                    skills.map((skill) => (
                        <div className="skills-content-technologies-image" key={skill.titulo}>
                            <img 
                                src={skill.imagen} 
                                alt={`icon ${skill.titulo.toLowerCase()}`}
                                className="w-12 cursor-pointer object-contain drop-shadow-md transition-all duration-300  hover:drop-shadow-gray-200"
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  );
};