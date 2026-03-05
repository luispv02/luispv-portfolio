import { Project } from "@/types/project";

// {
//   demo: 'https://e-commerce-app-teal-psi.vercel.app/',
//   frontendRepo: 'https://github.com/luispv02/e-commerce-frontend',
//   backendRepo: 'https://github.com/luispv02/e-commerce-backend'
// }

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce',
    description: 'Aplicación eCommerce Fullstack desarrollada con arquitectura MERN. Implementa autenticación JWT con roles (admin/user), gestión de productos y generación de órdenes, incluyendo panel administrativo con CRUD completo y protección de rutas. Frontend desplegado en Vercel y Backend en Render',
    tech: ['React.js', 'TypeScript', 'TanStack Query', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    links: [
      { label: 'Demo', url: 'https://e-commerce-app-teal-psi.vercel.app/', type: 'demo' },
      { label: 'Frontend', url: 'https://github.com/luispv02/e-commerce-frontend', type: 'github' },
      { label: 'Backend', url: 'https://github.com/luispv02/e-commerce-backend', type: 'github' }
    ]
  },
  {
    id: 2,
    title: 'DiaryApp',
    description: 'Aplicación web para la creación y gestión de notas personales. Incluye autenticación de usuarios, inicio de sesión y un CRUD completo para las notas. Cuenta con una interfaz moderna y totalmente responsiva.',
    tech: ['React.js', 'JavaScript', 'TanStack Query', 'Zustand', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    links: [
      { label: 'Demo', url: 'https://diary-app-frontend-opal.vercel.app/', type: 'demo' },
      { label: 'Frontend', url: 'https://github.com/luispv02/diary-app-frontend', type: 'github' },
      { label: 'Backend', url: 'https://github.com/luispv02/diary-app-backend', type: 'github' }
    ]
  },
  {
    id: 3,
    title: 'PlanTodo',
    description: 'Aplicación para la gestión de tareas con CRUD completo. Interfaz responsiva con navegación entre vistas y backend con Node.js, Express y MongoDB para el almacenamiento de datos.',
    tech: ['React.js', 'JavaScript', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    links: [
      { label: 'Demo', url: 'https://plan-todo-rouge.vercel.app/', type: 'demo'},
      { label: 'Frontend', url: 'https://github.com/luispv02/plan-todo-frontend', type: 'github' },
      { label: 'Backend', url: 'https://github.com/luispv02/plan-todo-backend', type: 'github' }
    ]
  },
]