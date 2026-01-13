
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'AI' | 'Web' | 'Cloud' | 'Security';
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface ProjectBlueprint {
  title: string;
  architecture: string[];
  techStack: string[];
  estimatedTimeline: string;
  estimatedComplexity: 'Low' | 'Medium' | 'High';
}
