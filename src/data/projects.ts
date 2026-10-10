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
    link: 'woleary.vercel.app',
  },
  {
    id: 'p2',
    title: 'Network Activity Tracker',
    description: 'C++ real time network monitoring CLI that tracks upload/download throughput, interface statistics, active connections, and network activity  Developed heuristic based threat detection for unusual network behavior, including configurable upload/download spike thresholds, and suspicious listening or remote port tracking.',
    tags: ['C++', 'Networking', 'TCP/UDP'],
    link: 'https://github.com/woleary2/network_activity',
  },
  {
    id: 'p3',
    title: 'Markov Chain Simulator',
    description: 'Frontend simulation of markov chains, with interactive interface to add nodes/edges, and adjustable sliders to change transfer rates.',
    tags: ['react', 'typescript', 'statistics'],
    link: 'https://github.com/woleary2/markov-sim',
  },
  
]
