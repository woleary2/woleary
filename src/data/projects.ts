export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'p1',
    title: 'Personal site (this)',
    description: 'A simple portfolio built with Vite, React, TypeScript and Tailwind.',
    tags: ['react', 'typescript', 'tailwind'],
    link: '#',
  },
  
]
