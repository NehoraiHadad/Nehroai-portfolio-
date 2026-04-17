import { Podcast, LayoutDashboard, Globe, Map } from 'lucide-react';
import { CaseStudy, SkillGroup } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'podcasto',
    title: 'Podcasto',
    description: 'Turns Telegram news channels into AI-narrated podcasts delivered by email. Chunked audio pipeline on AWS — Lambda, SQS, DynamoDB, SES — with Google Gemini 2.5 Flash TTS.',
    impact: '7× faster episode processing and ~84% lower cost on retries vs. the original monolithic approach.',
    tags: ['AWS Lambda', 'SQS', 'DynamoDB', 'Gemini TTS', 'Next.js 15'],
    icon: Podcast,
    details: {
      challenge: 'Single-shot audio generation was slow and fragile — one failure killed a whole episode.',
      solution: 'Split each episode into parallel chunks processed by isolated Lambdas, merged downstream. Failures stay contained; retries only re-run the broken chunk.',
      architecture: ['Next.js 15', 'React 19', 'Supabase + Drizzle ORM', 'AWS Lambda (Python)', 'SQS', 'DynamoDB', 'SES', 'Gemini 2.5 Flash TTS', 'CloudWatch'],
      liveUrl: 'https://podcasto.org',
      githubUrl: 'https://github.com/NehoraiHadad/Podcasto',
    },
  },
  {
    id: 'agendo',
    title: 'Agendo',
    description: 'Self-hosted dashboard for orchestrating AI coding agents — Claude, Codex, Gemini — from a single Kanban-style interface with MCP integration.',
    impact: 'Removes the need to juggle multiple CLIs; agents share a task board and coordinate via MCP.',
    tags: ['Next.js 16', 'TypeScript', 'PostgreSQL 17', 'MCP'],
    icon: LayoutDashboard,
    details: {
      challenge: 'Working with multiple AI coding CLIs means losing state, copy-pasting context, and no shared task board.',
      solution: 'A Next.js 16 app that auto-discovers installed agent CLIs, wraps them with a PostgreSQL-backed Kanban and live session terminals, and exposes everything over MCP so agents can coordinate.',
      architecture: ['Next.js 16', 'TypeScript (strict)', 'PostgreSQL 17', 'Docker', 'PM2', 'Model Context Protocol'],
      githubUrl: 'https://github.com/NehoraiHadad/agendo',
    },
  },
  {
    id: 'ykl',
    title: "Yeshiva Ketana Ma'ale Hever",
    description: "Full-stack website for a yeshiva — content management, media gallery, Hebrew-first responsive UI. Shipped for a paying client.",
    impact: "Live at ykl.org.il — the institution's public face.",
    tags: ['Next.js', 'TypeScript', 'Tailwind'],
    icon: Globe,
    details: {
      challenge: 'The yeshiva needed a modern, Hebrew-first site their staff could update without a developer.',
      solution: 'Next.js + Tailwind with an opinionated content model and an admin flow tuned for non-technical editors.',
      architecture: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      liveUrl: 'https://ykl.org.il',
      githubUrl: 'https://github.com/NehoraiHadad/ykl',
    },
  },
  {
    id: 'judah-brigade',
    title: 'Be-Shvil Yehuda',
    description: 'Website for the Judah Brigade community — trip guides, points of interest, and content built for mobile-first browsing in the field.',
    impact: 'Live and in use by the community.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind'],
    icon: Map,
    details: {
      challenge: 'Community content was scattered across chat groups and docs; members needed one place to explore sites and routes.',
      solution: 'Mobile-first Next.js site with structured content, map-aware browsing, and offline-friendly performance.',
      architecture: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://judah-brigade.vercel.app',
      githubUrl: 'https://github.com/NehoraiHadad/Judah-Brigade',
    },
  },
];

export const SKILLS: SkillGroup[] = [
  { category: 'AI & Agents', items: ['LangGraph', 'AWS AgentCore', 'Strands Agents SDK', 'MCP', 'RAG + pgvector'] },
  { category: 'Full-Stack Web', items: ['Next.js 15/16', 'React 19', 'TypeScript', 'Tailwind + shadcn/ui'] },
  { category: 'Backend & Data', items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase + Drizzle'] },
  { category: 'Cloud & Infra', items: ['AWS (Lambda, SQS, SES, DynamoDB)', 'Docker + PM2', '8 yrs on-prem datacenter', 'Server hardware & physical infra'] },
];
