export interface Experience {
  id: number;
  company: string;
  period: string;
  role: string;
  location: string;
  projects: Projects[];
}

interface Projects {
  name: string;
  period?: string;
  items: string[];
  tech: string[];
}
