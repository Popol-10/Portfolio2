export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies:string[];
  features:string[];
  duration:string;
  role:string;
  apropoPoj:string
}

export interface Service {
  id: number;
  title: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  level: string; // ex: "Débutant", "Intermédiaire", "Avancé"
}
