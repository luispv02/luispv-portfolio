import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'iTierra',
    period: 'Agosto 2022 - Mayo 2025',
    role: 'Desarrollador Fullstack',
    location: 'Remoto',
    projects: [
      {
        name: 'Plataforma iTierra',
        period: 'Ago 2022 - Ago 2024 | Ene 2025 - May 2025',
        items: [
          'Desarrollé y mantuve módulos frontend con Vue 3 y SCSS, creando más de 10 pantallas y mejorando la reutilización de componentes',
          'Implementé visualizaciones de datos con Mapbox GL y ApexCharts, integrando datos dinámicos para análisis en la interfaz',
          'Desarrollé servicios backend con Node.js utilizando Serverless Framework y AWS Lambda, contribuyendo a la integración end-to-end de la aplicación.',
          'Resolví incidencias en producción y participé en mejoras evolutivas bajo metodología ágil (Scrum).'
        ],
        tech: ['Vue3', 'Sass', 'Node.js', 'Serverless Framework', 'AWS Lambda']
      },
      {
        name: 'Plataforma Ana GPT',
        period: 'Ago 2024 - Dic 2024',
        items: [
          'Colaboré en un producto enfocado en IA, adaptando la interfaz para flujos conversacionales y dinámicos.',
          'Desarrollé nuevas funcionalidades, mejorando la estabilidad y comportamiento de la aplicación.',
          'Implementé integraciones con Firebase, mejorando el rendimiento y la gestión de datos en la aplicación.',
        ],
        tech: ['Vue3', 'Quasar', 'Firebase']
      }
    ]

  }
]