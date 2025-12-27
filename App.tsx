
import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  X, 
  ExternalLink,
  Award,
  BookOpen,
  MonitorPlay,
  Play,
  Info,
  Lightbulb,
  Zap,
  Target,
  School,
  MapPin,
  Layers,
  Terminal,
  User
} from 'lucide-react';
import { 
  EXPERIENCES, 
  PROJECTS, 
  SKILLS, 
  SOFT_SKILLS,
  RESEARCH_PAPERS, 
  CERTIFICATIONS, 
  HOBBIES,
  TARGET_ROLES,
  EDUCATION
} from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen selection:bg-red-600 selection:text-white">
      {/* Immersive Background */}
      <div className="fixed inset-0 -z-10 bg-[#0f0f0f] lego-pattern opacity-20"></div>
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-red-950/20 via-black to-blue-950/20 animate-drift"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center font-bold text-white">AA</div>
            <span className="font-heading font-bold text-xl tracking-tight hidden sm:block uppercase">Anoushka Anand</span>
          </div>
          <div className="flex gap-8 items-center text-sm font-medium text-gray-400">
            <a href="#experience" className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold">Projects</a>
            <a href="#research" className="hover:text-white transition-colors uppercase tracking-widest text-[10px] font-bold border-b border-red-600">Research</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-end items-start px-6 md:px-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Hero Background"
          />
          <div className="absolute inset-0 netflix-gradient"></div>
        </div>

        <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-red-500 font-bold tracking-widest uppercase text-sm mb-4">
            <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs uppercase">UMD MS AML '27</span>
            <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white"><Target size={14} /> Engineering / ML / Data Science</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-heading font-black leading-none uppercase tracking-tighter">
            Engineering <br />
            <span className="text-red-600">The Insights.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed font-light">
            I like building ML systems that are meant to work in the real world, not just in a notebook.
          </p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {TARGET_ROLES.map((role, i) => (
              <span key={i} className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                {role.icon} {role.name}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-8">
            <a href="#projects" className="flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded hover:bg-white/90 transition-all scale-105 shadow-2xl shadow-red-600/20 uppercase tracking-widest">
              <Play fill="black" size={20} /> View Work
            </a>
          </div>
        </div>
      </header>

      {/* Profile Section */}
      <section id="profile" className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2 glass-card rounded-2xl p-10 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <MonitorPlay size={80} />
          </div>
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 uppercase tracking-tighter text-red-600">
            Digital Identity
          </h3>
          <p className="text-gray-400 leading-relaxed font-light">
            I’m Anoushka Anand, an Applied ML Master’s student at UMD. I like breaking software problems into smaller pieces and turning them into systems that actually work in the real world. I’ve worked on everything from financial fraud prediction at Infosys to graph neural network research at IIT. I’m motivated by the same kind of precision you see in a sub two second Formula 1 pit stop and the satisfaction of building something well thought out.
          </p>
          <div className="flex gap-4 mt-8">
            <a href="https://github.com/anoushkanand" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-red-600/20 transition-all border border-white/10 group-hover:scale-110"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/anoushkaa18/" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-red-600/20 transition-all border border-white/10 group-hover:scale-110"><Linkedin size={20}/></a>
            <a href="mailto:aanand9@umd.edu" className="p-4 bg-white/5 rounded-full hover:bg-red-600/20 transition-all border border-white/10 group-hover:scale-110"><Mail size={20}/></a>
          </div>
        </div>

        <div className="md:col-span-2 glass-card rounded-2xl p-10 bg-gradient-to-br from-red-600/10 to-transparent">
          <h3 className="text-xl font-bold mb-8 flex items-center gap-2 uppercase tracking-tighter text-white">
             Core Drivers
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {HOBBIES.map((h, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-white/5 hover:border-red-600/30 transition-all cursor-default group justify-start">
                <div className="group-hover:scale-125 transition-transform">{h.icon}</div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-tight text-gray-300 group-hover:text-white">{h.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section id="experience" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="mb-12">
              <span className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase mb-2 block">Academics</span>
              <h2 className="text-5xl font-heading font-black uppercase tracking-tighter">Education</h2>
            </div>
            <div className="space-y-8">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="glass-card p-8 rounded-2xl border-l-4 border-l-red-600 hover:bg-white/5 transition-all group">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-red-500 transition-colors">{edu.institution}</h4>
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest bg-black px-2 py-1 rounded">{edu.duration}</span>
                  </div>
                  <p className="text-red-500 text-sm font-black mb-4 uppercase tracking-widest">{edu.degree}</p>
                  <div className="flex flex-wrap items-center gap-6 text-xs text-gray-500 font-bold">
                    <span className="flex items-center gap-1.5"><MapPin size={12} className="text-red-600" /> {edu.location}</span>
                    {edu.details && <span className="flex items-center gap-1.5 bg-white/5 px-2 py-1 rounded text-white border border-white/10"><Layers size={12} className="text-red-600" /> {edu.details}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 glass-card rounded-2xl bg-gradient-to-br from-red-600/10 to-transparent border-red-600/20">
               <h3 className="text-xl font-bold mb-8 flex items-center gap-2 uppercase tracking-widest"><Award className="text-red-600" /> Certifications</h3>
               <div className="space-y-5">
                 {CERTIFICATIONS.map((cert, i) => (
                   <div key={i} className="flex justify-between items-center group cursor-default">
                      <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">{cert.name}</span>
                      <span className="text-gray-600 text-[9px] uppercase font-black tracking-[0.2em]">{cert.issuer}</span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <div>
            <div className="mb-12">
              <span className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase mb-2 block">Career Season</span>
              <h2 className="text-5xl font-heading font-black uppercase tracking-tighter">Episodes</h2>
            </div>
            <div className="space-y-12 relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 to-transparent opacity-30"></div>
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[30px] top-3 w-4 h-4 rounded-full bg-red-600 border-4 border-black z-10 group-hover:scale-150 transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)]"></div>
                  <div className="glass-card p-8 rounded-2xl hover:border-red-600/40 transition-all group-hover:-translate-y-1">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-2xl font-bold uppercase tracking-tighter">{exp.role}</h4>
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">{exp.duration}</span>
                    </div>
                    <p className="text-red-600 text-sm font-black uppercase tracking-[0.2em] mb-6">{exp.company}</p>
                    <ul className="space-y-3">
                      {exp.description.map((desc, di) => (
                        <li key={di} className="text-gray-400 text-xs leading-relaxed flex gap-3 font-light">
                          <span className="text-red-600 font-black flex-shrink-0">›</span> {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-7xl mx-auto px-6 py-24 bg-black/40 rounded-[3rem] border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-24 opacity-5 pointer-events-none">
          <Terminal size={400} />
        </div>
        <div className="text-center mb-20">
          <h2 className="text-5xl font-heading font-black mb-4 uppercase tracking-tighter">Engineering Stack</h2>
          <p className="text-gray-500 font-light text-lg italic">The toolset driving my modular and high-performance ML architectures.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative z-10">
          {SKILLS.map((skillGroup, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-xl font-bold flex items-center gap-4 text-red-500 uppercase tracking-[0.3em] border-b border-red-600/20 pb-6">
                {skillGroup.category}
              </h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between text-[11px] font-black uppercase tracking-widest mb-3">
                      <span className="group-hover:text-red-500 transition-colors">{skill.name}</span>
                      <span className="text-gray-600 tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-1000 group-hover:brightness-125" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="lg:col-span-3 mt-12">
            <h3 className="text-xl font-bold flex items-center gap-4 text-red-500 uppercase tracking-[0.3em] border-b border-red-600/20 pb-6 mb-10">
               Competencies & Core Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SOFT_SKILLS.map((ss, i) => (
                <div key={i} className="glass-card p-5 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-all group border-white/5">
                  <div className="p-2.5 bg-red-600/10 rounded-lg text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all shrink-0">
                    {ss.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider group-hover:text-red-500 transition-colors">{ss.name}</h4>
                    <p className="text-[9px] text-gray-500 mt-0.5 leading-tight font-light">{ss.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl font-heading font-black mb-4 uppercase tracking-tighter">Project Vault</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div 
                key={i} 
                onClick={() => setSelectedProject(project)} 
                className="group relative rounded-3xl overflow-hidden glass-card h-[480px] cursor-pointer hover:ring-4 ring-red-600/20 transition-all duration-500 shadow-2xl"
              >
                <img src={project.image} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent p-10 flex flex-col justify-end">
                  <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-3 flex items-center gap-2"><Zap size={14} fill="currentColor" /> {project.category}</span>
                  <h3 className="text-3xl font-black mb-5 uppercase tracking-tighter leading-tight group-hover:text-red-500 transition-colors">{project.title}</h3>
                  <div className="flex gap-2 flex-wrap mb-8">
                    {project.tech.map(t => <span key={t} className="text-[9px] bg-white/5 px-3 py-1 rounded text-gray-400 border border-white/5 uppercase tracking-widest font-black">{t}</span>)}
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                    className="flex items-center gap-3 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 bg-white text-black px-6 py-4 rounded-full self-start shadow-xl active:scale-95"
                  >
                    <Info size={16} /> Open Vault
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/98 backdrop-blur-3xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl max-h-[95vh] overflow-y-auto glass-card rounded-[3rem] border-white/10 shadow-2xl no-scrollbar border-t-4 border-t-red-600">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-10 right-10 p-3 bg-white/5 hover:bg-red-600 rounded-full z-10 transition-all group"
            >
              <X size={28} className="group-hover:rotate-90 transition-transform" />
            </button>
            
            <div className="aspect-[21/9] w-full relative">
              <img src={selectedProject.image} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                   <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.4em] mb-4 block">{selectedProject.category}</span>
                   <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter">{selectedProject.title}</h2>
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.link} target="_blank" className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all shadow-xl active:scale-95">
                    <Play size={20} fill="currentColor" /> Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="p-16 grid grid-cols-1 lg:grid-cols-3 gap-20 text-left">
              <div className="lg:col-span-2 space-y-12">
                <div>
                  <h4 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                    <Info size={18} /> Problem Statement
                  </h4>
                  <p className="text-2xl text-gray-300 leading-relaxed font-light">
                    {selectedProject.problemStatement}
                  </p>
                </div>

                <div className="p-10 bg-red-600/5 rounded-[2rem] border border-red-600/20 relative group overflow-hidden">
                  <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:rotate-12 transition-transform">
                    <Zap size={160} />
                  </div>
                  <h4 className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                    <Lightbulb size={18} /> Key Technical Breakthrough
                  </h4>
                  <p className="text-gray-400 leading-relaxed italic text-lg relative z-10">
                    "{selectedProject.insights}"
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] mb-6">Built With</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="px-4 py-2 bg-white/5 rounded-xl text-xs text-gray-300 border border-white/5 font-black uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-10 border-t border-white/5">
                  <h4 className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] mb-4">Focus Domain</h4>
                  <p className="text-white font-black uppercase text-lg tracking-widest">{selectedProject.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Research Section */}
      <section id="research" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-20">
          <span className="text-red-500 font-bold text-xs tracking-[0.3em] uppercase mb-2 block">The Lab Logs</span>
          <h2 className="text-5xl font-heading font-black mb-4 uppercase tracking-tighter">Research Publications</h2>
          <p className="text-gray-500 font-light max-w-2xl mt-4">Exploring the frontiers of ML applied to biology, finance, and critical infrastructure.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {RESEARCH_PAPERS.map((paper, i) => (
            <div key={i} className="glass-card p-10 rounded-[2.5rem] flex flex-col justify-between hover:border-red-600/50 transition-all group hover:bg-gradient-to-br from-red-600/5 to-transparent relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                <BookOpen size={120} />
              </div>
              <div>
                <div className="flex justify-between items-center mb-8">
                   <div className="p-4 bg-red-600/10 rounded-2xl text-red-500 group-hover:bg-red-600 group-hover:text-white transition-all">
                     <BookOpen size={24} />
                   </div>
                   <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.3em] bg-black px-3 py-1.5 rounded-lg border border-white/5">{paper.year}</span>
                </div>
                <h4 className="text-xl font-black mb-4 leading-tight uppercase tracking-tighter group-hover:text-red-500 transition-colors">{paper.title}</h4>
                
                {paper.authors && (
                  <div className="flex items-start gap-2 mb-6 text-gray-500">
                    <User size={14} className="mt-0.5 flex-shrink-0 text-red-600" />
                    <p className="text-[10px] uppercase font-bold tracking-wider leading-relaxed">{paper.authors}</p>
                  </div>
                )}

                <p className="text-[11px] text-gray-400 mb-10 line-clamp-4 leading-relaxed font-light italic border-l border-red-600/20 pl-4">{paper.abstract}</p>
              </div>
              <div className="flex justify-between items-center pt-8 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[8px] text-gray-600 uppercase font-black tracking-widest mb-1">Published In</span>
                  <span className="text-[10px] text-white font-black uppercase tracking-tight">{paper.venue}</span>
                </div>
                <a href={paper.link} target="_blank" className="flex items-center gap-2 text-[10px] text-white hover:text-black hover:bg-white transition-all font-black uppercase tracking-widest bg-white/5 px-4 py-2.5 rounded-xl border border-white/10">
                  PAPER <ExternalLink size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-32 bg-black/90 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 relative z-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-red-600 rounded-xl flex items-center justify-center text-white font-black text-3xl">AA</div>
              <span className="font-heading font-black text-4xl uppercase tracking-tighter">Anoushka Anand</span>
            </div>
            <p className="text-gray-500 max-w-md leading-relaxed font-light text-lg">Applied ML student at UMD. Engineering discovery through data and high-performance strategy.</p>
          </div>
          <div className="flex flex-col gap-6">
            <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">Connect</span>
            <a href="https://linkedin.com/in/anoushkaa18/" target="_blank" className="text-sm text-gray-400 hover:text-red-500 transition-all font-bold">LinkedIn</a>
            <a href="https://github.com/anoushkanand" target="_blank" className="text-sm text-gray-400 hover:text-red-500 transition-all font-bold">GitHub</a>
            <a href="mailto:aanand9@umd.edu" className="text-sm text-gray-400 hover:text-red-500 transition-all font-bold">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
