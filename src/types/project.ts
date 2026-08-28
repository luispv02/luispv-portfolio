export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  links: Link[];
}

interface Link {
  label: string;
  url: string;
  type: string;
}
