interface Technology {
  category: string;
  skills: string[]
}

export const technologies: Technology[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Zustand', 'Redux', 'TanStack Query', 'Vue 3', 'Pinia','Jest', 'HTML', 'CSS', 'Tailwind CSS', 'Sass', 'Bootstrap', 'Quasar', 'Responsive Design']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Serverless Framework', 'AWS Lambda', 'Firebase', 'MongoDB', 'Docker']
  },
  {
    category: 'Herramientas',
    skills: ['Git','GitHub','Bitbucket','Jira']
  },
  {
    category: 'Metodologías',
    skills: ['Desarrollo Ágil', 'Scrum']
  }
]