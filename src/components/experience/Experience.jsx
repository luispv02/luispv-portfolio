
export const Experience = () => {
    return (
        <section className="experience py-10 px-7 bg-white text-black" id="experience">
            <div className="w-full max-w-6xl mx-auto">
                <h2 className="text-center text-3xl pb-6 ">Experiencia</h2>

                <div className="grid gap-6">
                    <article className="rounded-lg border border-gray-200 p-5 shadow-sm bg-white">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-xl font-semibold">Tierra</h3>
                                <p className="text-blue-700 font-medium">Desarrollador FullStack</p>
                                <p className="text-sm text-gray-600">Remoto</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-sm text-gray-600">
                                Agosto 2022 - Mayo 2025
                            </div>
                        </div>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-sm leading-6">
                            <li>Desarrollé e implementé pantallas responsivas utilizando Vue3, Bootstrap y Sass, optimizando la experiencia de usuario en la plataforma.</li>
                            <li>Añadí nuevas funcionalidades y visualizaciones de datos mediante Mapbox GL y ApexCharts, mejorando la interacción y comprensión de información por parte de los usuarios.</li>
                            <li>Colaboré en tareas del backend creando endpoints con Node.js y Serverless Framework, incluyendo AWS Lambda Functions.</li>
                        </ul>
                    </article>

                    <article className="rounded-lg border border-gray-200 p-5 shadow-sm bg-white">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="text-xl font-semibold">Ana GPT</h3>
                                <p className="text-blue-700 font-medium">Desarrollador FrontEnd</p>
                                <p className="text-sm text-gray-600">Remoto</p>
                            </div>
                            <div className="mt-2 md:mt-0 text-sm text-gray-600">
                                Agosto 2024 - Diciembre 2024
                            </div>
                        </div>
                        <ul className="list-disc pl-5 mt-3 space-y-2 text-sm leading-6">
                            <li>Implementé nuevas funcionalidades y resolví errores en el proyecto usando Quasar, Vue3, y Firebase.</li>
                            <li>Diseñé e implementé pantallas para mejorar la interacción de los usuarios.</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    );
};