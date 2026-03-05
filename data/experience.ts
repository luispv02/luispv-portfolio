import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'iTierra',
    period: 'Agosto 2024 - Mayo 2025',
    role: 'Desarrollador Fullstack',
    location: 'Remoto',
    projects: [
      {
        name: 'Plataforma iTierra',
        items: [
          'Desarrollé y mantuve más de 8 pantallas productivas con Vue 3 y Sass, implementando consumo de APIs.',
          'Extendí funcionalidades de visualización de datos con MapboxGL y ApexCharts, integrando datos dinámicos',
          'Desarrollé endpoints con Node.js usando Serverless Framework, desplegados en AWS Lambda.',
          'Resolví incidencias en producción bajo metodología ágil.'
        ],
        tech: ['Vue3', 'Sass', 'Node.js', 'Serverless Framework', 'AWS Lambda']
      },
      {
        name: 'Plataforma Ana GPT',
        period: 'Ago 2024 - Dic 2024',
        items: [
          'Implementé nuevas funcionalidades en producción y resolví bugs mejorando la estabilidad del sistema.',
          'Desarrollé pantallas responsivas con Vue 3 y Quasar framework.',
          'Desarrollé y optimicé funcionalidades integradas con Firebase.',
        ],
        tech: ['Vue3', 'Quasar', 'Firebase']
      }
    ]

  }
]