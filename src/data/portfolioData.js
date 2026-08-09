export const profile = {
  name: 'Rohit Prajapati',
  role: 'Full Stack Developer · AI Engineer',
  location: 'India',
  email: 'rohitprajapati0880@gmail.com',
  phone: '+91-9315104400',
  github: 'https://github.com/Rohit88435',
  linkedin: 'https://www.linkedin.com/in/rohit-prajapati-7762b2214',
  leetcode: 'https://leetcode.com/u/Rohit8800',
  tagline: 'I build full-stack products and wire them up to LLMs — RAG pipelines, multi-agent systems, and AI features that ship to production.',
}

export const experience = [
  {
    company: 'Self-Employed / Freelance',
    role: 'Full Stack & AI Developer',
    period: '2023 — Present',
    branch: 'main',
    points: [
      'Built 10+ scalable MERN applications using React.js, Node.js, Express.js and MongoDB, backed by REST APIs, JWT/Firebase auth, Socket.io and Dockerized microservices.',
      'Developed AI/LLM applications with the OpenAI API, LangChain and LangGraph — RAG, embeddings, vector databases, semantic search and tool calling.',
      'Applied Nginx, caching, message queues, rate limiting, database replication/sharding, AWS and CI/CD to keep services fast and resilient under load.',
    ],
  },
  {
    company: 'She Can Foundation (via Internshala)',
    role: 'Full Stack Development Intern',
    period: 'Selected Candidate',
    branch: 'internship',
    points: [
      'Selected for a Full Stack Development Internship, contributing to real-world web application features end to end.',
    ],
  },
]

export const projects = [
  {
    id: 'resume-intel',
    name: 'ai-resume-intelligence',
    title: 'AI Resume Intelligence & Job Matching',
    description:
      'An AI-powered resume analysis platform that scores resumes against job descriptions, flags keyword gaps, and rewrites bullet points to beat ATS filters.',
    highlights: [
      'ATS scoring, keyword optimization and skill-gap analysis via the OpenAI API',
      'Semantic search & ranking for job matching, plus resume parsing pipeline',
      'JWT-authenticated REST API with a React dashboard',
    ],
    stack: ['React', 'Node.js', 'OpenAI API', 'MongoDB', 'JWT'],
    accent: 'keyword',
  },
  {
    id: 'ai-interview',
    name: 'ai-interview-platform',
    title: 'AI Interview Platform — Multi-Agent System',
    description:
      'A multi-agent interview system where cooperating agents generate questions, evaluate technical answers, and produce structured candidate feedback.',
    highlights: [
      'Multi-agent orchestration with LangGraph + LangChain for question generation & evaluation',
      'Dockerized microservices with Redis caching, sessions and async workflows',
      'Persistent interview analytics behind an authenticated REST API',
    ],
    stack: ['LangGraph', 'LangChain', 'Redis', 'Docker', 'Microservices'],
    accent: 'tag',
  },
  {
    id: 'cotex-ai',
    name: 'cotex-ai-assistant',
    title: 'CotexAI — AI Assistant with RAG & Tool Calling',
    description:
      'A ChatGPT-style assistant with streaming responses, persistent memory, and a full RAG pipeline for grounding answers in your own documents.',
    highlights: [
      'Streaming responses, conversational memory and context-aware generation',
      'RAG pipeline: document chunking, embeddings, vector search, semantic retrieval',
      'Tool/function calling on top of a JWT-secured REST API + MongoDB',
    ],
    stack: ['OpenAI API', 'LangChain', 'RAG', 'MongoDB', 'JWT'],
    accent: 'string',
  },
]

export const skills = [
  {
    category: 'languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'frontend',
    items: ['React.js', 'Next.js', 'Redux Toolkit', 'Tailwind CSS'],
  },
  {
    category: 'backend',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Microservices', 'Socket.io'],
  },
  {
    category: 'ai-llm',
    items: [
      'OpenAI API', 'LLMs', 'LangChain', 'LangGraph', 'RAG',
      'Embeddings', 'Vector Databases', 'Semantic Search', 'Tool Calling',
      'Google Gemini API', 'OpenRouter',
    ],
  },
  {
    category: 'databases',
    items: ['MongoDB', 'MySQL', 'Redis', 'DB Replication', 'DB Sharding'],
  },
  {
    category: 'system-design',
    items: [
      'DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks',
      'Scalability', 'Load Balancing', 'Rate Limiting', 'Caching', 'Message Queues', 'Nginx',
    ],
  },
  {
    category: 'cloud-devops',
    items: ['AWS', 'Docker', 'Docker Compose', 'CI/CD', 'Vercel', 'Netlify'],
  },
  {
    category: 'auth-tools',
    items: ['JWT', 'Firebase Auth', 'Git', 'GitHub'],
  },
]

export const achievements = [
  { label: 'LeetCode problems solved', value: '190+', detail: 'Data Structures & Algorithms' },
  { label: 'Internship', value: 'She Can Foundation', detail: 'Full Stack Dev, via Internshala' },
  { label: 'Certification', value: 'Generative AI', detail: 'Google Cloud' },
  { label: 'Recognition', value: 'Top Performer', detail: 'Logic League — AI & analytical reasoning' },
]

export const education = {
  school: 'J.C. Bose University of Technology and Management',
  degree: 'B.Tech in Computer Science and Engineering',
  period: 'July 2023 — Present',
  cgpa: '8.02 / 10',
}
