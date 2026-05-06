interface Technology {
  category: string;
  skills: string[]
}

export const technologies: Technology[] = [
  {
    category: 'Frontend',
    skills: ['React.js', 'TypeScript', 'JavaScript', 'Zustand', 'Redux', 'React Query','Jest', 'React Testing Library', 'Vue 3', 'Pinia', 'HTML', 'CSS', 'Tailwind CSS', 'Sass', 'Bootstrap', 'Quasar', 'Responsive Design']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express', 'Serverless Framework', 'AWS Lambda', 'PostgreSQL', 'Firebase', 'MongoDB']
  },
  {
    category: 'Herramientas',
    skills: ['Docker', 'Git','GitHub','Bitbucket','Jira']
  },
  {
    category: 'Metodologías',
    skills: ['Scrum (Metodologías ágiles).']
  }
]