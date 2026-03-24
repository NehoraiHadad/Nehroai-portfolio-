import { FileText, Globe, Database } from 'lucide-react';
import { CaseStudy, SkillGroup } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'story-weaver',
    title: 'AI Story Weaver',
    description: 'An autonomous agentic system that generates personalized children\'s stories, complete with narrative arcs and formatting.',
    impact: 'Automated 100% of content generation, saving 5+ hours per book and increasing output by 10x.',
    tags: ['LLM Orchestration', 'Next.js', 'OpenAI', 'Prompt Engineering'],
    icon: FileText,
    details: {
      challenge: 'Creating engaging, personalized children\'s books manually was a bottleneck, taking hours per story and limiting scalability.',
      solution: 'Architected a multi-agent LLM pipeline where specialized agents handle plotting, character development, and prose generation sequentially.',
      architecture: ['Next.js Frontend', 'Node.js/Express Backend', 'LangChain Orchestration', 'OpenAI GPT-4', 'Vercel Edge Functions'],
      githubUrl: '#',
      liveUrl: '#'
    }
  },
  {
    id: 'route-optimizer',
    title: 'Smart Route Optimizer',
    description: 'A predictive logistics application that calculates optimal travel paths using real-time data and machine learning.',
    impact: 'Reduced average travel time by 15% and cut monthly logistics overhead by $10,000.',
    tags: ['Python', 'React', 'Maps API', 'Data Systems'],
    icon: Globe,
    details: {
      challenge: 'Delivery fleets were experiencing high fuel costs and delays due to static, inefficient routing that ignored real-time traffic and weather.',
      solution: 'Developed a dynamic routing engine that ingests live traffic APIs and historical data, using ML models to predict and adjust routes on the fly.',
      architecture: ['React Dashboard', 'Python/FastAPI Engine', 'PostgreSQL + PostGIS', 'Google Maps API', 'Docker'],
      githubUrl: '#'
    }
  },
  {
    id: 'enterprise-rag',
    title: 'Enterprise RAG System',
    description: 'A highly accurate retrieval-augmented generation pipeline for internal corporate knowledge bases.',
    impact: 'Achieved 99% RAG Accuracy, reducing support ticket resolution time by 40%.',
    tags: ['Vector DB', 'LangChain', 'TypeScript', 'Cloud Architecture'],
    icon: Database,
    details: {
      challenge: 'Support agents spent too much time searching through fragmented internal documentation, leading to slow response times.',
      solution: 'Built a secure RAG pipeline that embeds thousands of internal documents into a vector database, allowing agents to query knowledge in natural language.',
      architecture: ['Pinecone Vector DB', 'LangChain.js', 'OpenAI Embeddings', 'AWS S3', 'Serverless Functions']
    }
  }
];

export const SKILLS: SkillGroup[] = [
  { category: 'Agentic Systems', items: ['LLM Orchestration', 'LangChain', 'Multi-Agent Workflows', 'RAG Pipelines'] },
  { category: 'Full-Stack', items: ['React / Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS'] },
  { category: 'Backend & Data', items: ['Python', 'PostgreSQL', 'Vector Databases', 'REST/GraphQL APIs'] },
  { category: 'Cloud & Ops', items: ['AWS / GCP', 'Docker', 'CI/CD', 'System Architecture'] },
];
