
import React from 'react';
import { 
  Database, 
  BrainCircuit, 
  Code2, 
  Cpu, 
  Music, 
  Film, 
  Video, 
  FlagTriangleRight, 
  Box,
  Terminal,
  LineChart,
  Sparkles,
  School,
  Award,
  Globe,
  Layers,
  Search,
  Zap,
  Layout,
  MessageSquare,
  Presentation,
  CheckCircle2,
  FileSpreadsheet,
  BookOpen,
  Mic,
  PenTool,
  Target,
  BarChart3,
  SearchCode,
  Lightbulb,
  Gamepad2
} from 'lucide-react';
import { Experience, Project, ResearchPaper, Certification, Skill } from './types';

export const TARGET_ROLES = [
  { name: "ML Engineer", icon: <BrainCircuit size={14} /> },
  { name: "Software Engineer", icon: <Code2 size={14} /> },
  { name: "Gen AI Engineer", icon: <Sparkles size={14} /> },
  { name: "Data Scientist", icon: <Database size={14} /> },
  { name: "Data Analyst", icon: <LineChart size={14} /> },
  { name: "Prompt Engineering", icon: <Terminal size={14} /> }
];

export const EDUCATION = [
  {
    institution: "University of Maryland",
    degree: "Master of Science in Applied Machine Learning",
    duration: "Aug 2025 – May 2027",
    location: "College Park, MD",
    details: "GPA: 3.7/4.0",
    logo: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&q=80&w=100"
  },
  {
    institution: "Medicaps University",
    degree: "Bachelor of Technology in Computer Science Engineering",
    duration: "Aug 2021 – May 2025",
    location: "Indore, India",
    details: "GPA: 3.5/4.0",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=100"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Beyond Key Systems",
    role: "Machine Learning Engineer Intern",
    duration: "Jan 2025 – May 2025",
    description: [
      "Assisted in designing and implementing machine learning algorithms for predictive analytics and process optimization.",
      "Worked with structured and unstructured data to build and validate models using Python (scikit-learn, TensorFlow) and SQL.",
      "Translated ML models into production-ready code modules, ensuring integration with backend systems.",
      "Supported model testing, debugging, and documentation to improve reliability and scalability of deployed systems."
    ],
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=100"
  },
  {
    company: "Infosys Springboard",
    role: "Data Science Intern",
    duration: "Nov 2024 – Jan 2025",
    description: [
      "Built regression and classification models in Python for anomaly and fraud detection, achieving 28% improvement in accuracy.",
      "Applied data preprocessing, validation, and SQL-based transformations for structured and unstructured datasets.",
      "Presented key insights through visualizations and technical documentation to non-technical teams."
    ],
    logo: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=100"
  },
  {
    company: "Indian Institute of Technology (IIT)",
    role: "Research Intern — Machine Learning",
    duration: "Mar 2024 – Sept 2024",
    description: [
      "Researched deep learning and graph neural networks for time-series forecasting and secure anomaly detection.",
      "Applied optimization, statistical modeling, and distributed training on geospatial datasets using PyTorch and NumPy.",
      "Co-authored peer-reviewed papers on transfer learning, GNNs, and predictive modeling."
    ],
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=100"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Music Recommendation Engine",
    category: "Recommendation System",
    description: "A comprehensive data science pipeline for personalized music recommendations using collaborative and content-based filtering.",
    tech: ["Python", "Scikit-Learn", "Spotify API", "Pandas"],
    image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800",
    link: "https://himisha-gupta.github.io/",
    problemStatement: "Bridging the gap between vast music libraries and user preferences requires an efficient, scalable recommendation architecture.",
    insights: "Engineered a hybrid model that balances popularity-based cold starts with deep personalization, significantly enhancing user discovery metrics."
  },
  {
    title: "VizAI – Automated Product Analytics Assistant",
    category: "Product Analytics / GenAI",
    description: "An end-to-end machine learning pipeline for automated exploratory data analysis and forecasting.",
    tech: ["Python", "SQL", "Streamlit", "LangChain"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/anoushkanand/vizAI",
    problemStatement: "Manual product analytics often takes hours of querying and visualization. VizAI aims to automate the entire EDA process through a natural language interface.",
    insights: "Integrated modular design and robust debugging which allowed the system to scale to datasets with over 1M records while maintaining low latency."
  },
  {
    title: "Insightizer – NLP Text Analytics Platform",
    category: "NLP / Transformers",
    description: "A text analytics platform for summarization and sentiment analysis using fine-tuned transformer models.",
    tech: ["Python", "Flask", "PyTorch", "Hugging Face"],
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800",
    link: "https://drive.google.com/file/d/1Y7V_nPeFDzS46UIMDQtqu8yKwMUWnJep/view?usp=sharing",
    problemStatement: "Generic NLP models often fail on domain-specific slang and sentiment nuances. We needed a fine-tuned approach to increase F1-score.",
    insights: "Fine-tuning Hugging Face Transformers specifically for customer review datasets achieved a 14% boost in F1-score over baseline models."
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    title: "Enhancing Alpha Fold Predictions with Transfer Learning",
    venue: "IJISRT, Volume 8, Issue 12",
    year: "2023",
    authors: "Dr. Pankaj Malik, Anmol Sharma, Anoushka Anand, Anmol Baliyan, Amisha Raj, Jasleen Singh",
    abstract: "A comprehensive analysis and benchmarking of transfer learning techniques applied to protein structure prediction models, specifically focusing on Alpha Fold integration.",
    link: "https://drive.google.com/file/d/1zrbHzCz2CnEVkINW0dz8dK7QtBjGIM_0/view?usp=sharing"
  },
  {
    title: "Credit Risk Assessment and Fraud Detection in Financial Transactions",
    venue: "IJSRET, Volume 10, Issue 2",
    year: "2024",
    authors: "Dr. Pankaj Malik, Anoushka Anand, Anmol K. Baliyan, Anant Dongre, Palak Panwar",
    abstract: "A comparative study of machine learning algorithms for identifying high-risk credit applications and detecting real-time fraud in complex financial datasets.",
    link: "https://drive.google.com/file/d/1ylSyBxsq88fhKpBZ1W3BOkBZtKrPuNkz/view?usp=sharing"
  },
  {
    title: "Energy Theft Detection in Smart Grids Using Graph Neural Networks",
    venue: "IJSRET, Volume 10, Issue 5",
    year: "2024",
    authors: "Dr. Pankaj Malik, Himisha Gupta, Anoushka Anand, Siddhesh Bhatt, Devansh Gupta",
    abstract: "Leveraging Graph Neural Networks (GNNs) to model grid connectivity and identify anomalous consumption patterns indicative of energy theft in smart grid environments.",
    link: "https://drive.google.com/file/d/1Wq-5IIyyWgqD213kA3kBvGKzQ9Wiqi7G/view?usp=sharing"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Gen AI Intensive Course",
    issuer: "Kaggle",
    date: "2024",
    link: "#"
  },
  {
    name: "AWS Academy: Cloud Architecting",
    issuer: "AWS Academy",
    date: "2024",
    link: "#"
  },
  {
    name: "Python (Basic) & SQL (Intermediate)",
    issuer: "HackerRank",
    date: "2024",
    link: "#"
  },
  {
    name: "AWS Academy: Cloud Foundations",
    issuer: "AWS Academy",
    date: "2024",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "AI & Generative Tools",
    items: [
      { name: "RAG / Prompt Engineering", level: 98 },
      { name: "LLMs / Transformers", level: 95 },
      { name: "Generative AI Tools", level: 94 },
      { name: "LangChain", level: 92 },
      { name: "Deep Learning (TensorFlow/PyTorch)", level: 90 }
    ],
    icon: "Sparkles"
  },
  {
    category: "Data Science & Analytics",
    items: [
      { name: "Data Cleaning / EDA", level: 97 },
      { name: "Statistical Analysis", level: 95 },
      { name: "Pandas / NumPy / SQL", level: 98 },
      { name: "Data Visualization", level: 96 },
      { name: "Machine Learning", level: 94 }
    ],
    icon: "LineChart"
  },
  {
    category: "Software & Infrastructure",
    items: [
      { name: "Python / Java / R", level: 95 },
      { name: "Software Development", level: 92 },
      { name: "AWS Academy", level: 88 },
      { name: "CSS / Web Layouts", level: 85 },
      { name: "System Organization", level: 90 }
    ],
    icon: "Code2"
  }
];

export const SOFT_SKILLS = [
  { name: "Microsoft Suite", desc: "Expert use of Excel, PowerPoint, and Word for reporting.", icon: <FileSpreadsheet className="w-4 h-4" /> },
  { name: "Qualitative Research", desc: "Analyzing non-numerical data for complex case analysis.", icon: <SearchCode className="w-4 h-4" /> },
  { name: "Professional Communication", desc: "Oral and written communication training for technical teams.", icon: <MessageSquare className="w-4 h-4" /> },
  { name: "Presentation Skills", desc: "Highly skilled in technical presentations and visualization.", icon: <Presentation className="w-4 h-4" /> },
  { name: "Problem Solving", desc: "Methodical approach to debugging and case analysis.", icon: <CheckCircle2 className="w-4 h-4" /> },
  { name: "Skilled Multi-tasker", desc: "Managing multiple ML modules with attention to detail.", icon: <Layers className="w-4 h-4" /> },
  { name: "Organization Skills", desc: "Meticulous focus on documentation and modular builds.", icon: <Layout className="w-4 h-4" /> },
  { name: "Interpersonal Skills", desc: "Building strong collaborative relationships in tech teams.", icon: <Target className="w-4 h-4" /> },
  { name: "Case Analysis", desc: "Detailed breakdown of organizational data problems.", icon: <BarChart3 className="w-4 h-4" /> },
  { name: "Writing", desc: "Technical and professional written communication.", icon: <PenTool className="w-4 h-4" /> },
  { name: "Oral Communication", desc: "Clear delivery of complex architectural insights.", icon: <Mic className="w-4 h-4" /> },
  { name: "Analytical Thinking", desc: "Deep diving into data cleaning and statistics.", icon: <Zap className="w-4 h-4" /> }
];

export const HOBBIES = [
  { label: "Curiosity", icon: <Lightbulb className="w-5 h-5 text-yellow-400" /> },
  { label: "Storytelling", icon: <MessageSquare className="w-5 h-5 text-blue-400" /> },
  { label: "Systems Thinking", icon: <Layers className="w-5 h-5 text-purple-400" /> },
  { label: "Craft", icon: <PenTool className="w-5 h-5 text-green-400" /> },
  { label: "Formula 1", icon: <FlagTriangleRight className="w-5 h-5 text-red-600" /> },
  { label: "Optimization", icon: <Zap className="w-5 h-5 text-orange-400" /> },
  { label: "Music", icon: <Music className="w-5 h-5 text-pink-400" /> },
  { label: "Cinema", icon: <Film className="w-5 h-5 text-cyan-400" /> }
];
