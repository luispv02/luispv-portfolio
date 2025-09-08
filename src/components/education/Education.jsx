
export const Education = () => {
    return (
    <section className="education bg-gray-950 z-10 relative py-10 px-7 text-white" id="education">
        <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-center text-3xl pb-6">Educación / Cursos y Certificaciones</h2>

            <div className="grid gap-6">
                <article className="rounded-lg border border-gray-800 p-5 bg-gray-900">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                            <h3 className="text-xl font-semibold">Centro de Estudios Superiores del Norte De Veracruz</h3>
                            <p className="text-blue-300 font-medium">Ingeniería en Sistemas Computacionales</p>
                        </div>
                        <div className="mt-2 md:mt-0 text-sm text-gray-300">2017 - 2020</div>
                    </div>
                </article>

                <article className="rounded-lg border border-gray-800 p-5 bg-gray-900">
                    <h3 className="text-lg font-semibold">Cursos y Certificaciones</h3>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-sm leading-6">
                        <li>JavaScript Moderno: Guía Definitiva + 15 proyectos - Udemy (2021)</li>
                        <li>GIT + GitHub - Udemy (2025)</li>
                        <li>Curso de introducción al desarrollo web: HTML/CSS - Google Active (2021)</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>
    );
};