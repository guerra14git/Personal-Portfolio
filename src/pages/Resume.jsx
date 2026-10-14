import React, { useRef, useState } from 'react';
import usePageReveal from '../hooks/usePageReveal';

function Home() {
  const [isInfoExpanded, setIsInfoExpanded] = useState(false);
  const containerRef = useRef(null);
  usePageReveal(containerRef);

  return (
    <div ref={containerRef} className="pointer-events-auto relative z-10 flex min-h-[100svh] w-full justify-center px-4 pb-12 pt-28 sm:px-8">

      <div className="flex w-full max-w-[1300px] flex-col items-start gap-8 lg:flex-row">

        {/* left sidebar */}
        <aside data-reveal className="w-full shrink-0 rounded-2xl border border-[#334155]/40 bg-cyber-black/50 p-6 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-[3px] lg:sticky lg:top-28 lg:w-[320px] lg:p-8">
          
          {/* header */}
          <div className="flex items-center lg:flex-col lg:text-center">
            
            <img 
              src="/myImg.jpg" 
              alt="Ricardo Guerra"
              className="h-16 w-16 rounded-xl border border-[#334155]/50 object-cover shadow-[0_0_15px_rgba(0,0,0,0.5)] lg:mb-6 lg:h-36 lg:w-36 lg:rounded-2xl"
            />
            
            <div className="ml-4 flex flex-1 flex-col items-start justify-center lg:ml-0 lg:items-center">
              <h1 className="text-xl font-bold text-white lg:mb-2 lg:text-2xl">Ricardo Guerra</h1>
            </div>

            <button 
              onClick={() => setIsInfoExpanded(!isInfoExpanded)}
              className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 transition-all duration-300 hover:bg-[#334155]/50 lg:hidden"
            >
              <svg 
                className={`h-5 w-5 transition-transform duration-300 ${isInfoExpanded ? 'rotate-180' : ''}`} 
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* collapsible area */}
          <div className={`grid transition-all duration-500 ease-in-out lg:mt-0 lg:grid-rows-[1fr] lg:opacity-100 ${isInfoExpanded ? 'mt-6 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'}`}>
            <div className="overflow-hidden">
              
              <div className="mb-6 flex justify-center lg:justify-center">
                <div className="rounded-md border border-cyber-card/50 px-3 py-1 lg:px-4 lg:py-1.5">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-cyber-gray lg:text-xs">Informatics Engineering Student</p>
                </div>
              </div>

              <div className="mb-6 w-full border-t border-[#334155]/30"></div>

              <div className="mb-6 flex w-full flex-col gap-5 text-left">
                {/* Phone */}
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-cyber-gray">Phone</span>
                    <a href="tel:+351910145693" className="truncate text-sm text-white transition-colors hover:text-cyan-400">+351 910 145 693</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-cyber-gray">Email</span>
                    <span className="truncate text-sm text-white" title="contacts@ricardoguerra.dev">contacts@ricardoguerra.dev</span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex min-w-0 flex-col">
                    <span className="text-[10px] font-medium uppercase tracking-wider text-cyber-gray">Location</span>
                    <span className="truncate text-sm text-white">Vila Real, Portugal</span>
                  </div>
                </div>
              </div>

              <div className="mb-6 w-full border-t border-[#334155]/30"></div>

              <div className="mb-6 flex w-full items-center justify-center gap-3">
                <a
                  href="https://github.com/guerra14git"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-colors hover:bg-[#334155]/50 hover:text-cyan-300 active:scale-90"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/ricardo-guerra-3a3367349/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-colors hover:bg-[#334155]/50 hover:text-cyan-300 active:scale-90"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11.001-4.124 2.062 2.062 0 01-.001 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
                  </svg>
                </a>

                <a
                  href="tel:+351910145693"
                  aria-label="Phone"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-card/40 text-cyan-400 shadow-[0_4px_10px_rgba(0,0,0,0.3)] transition-colors hover:bg-[#334155]/50 hover:text-cyan-300 active:scale-90"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 00-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97a1.125 1.125 0 00.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </a>
              </div>

              <div className="mb-6 w-full border-t border-[#334155]/30"></div>

              <a
                href="./assets/Ricardo-Guerra-CV.pdf"
                download="Ricardo-Guerra-CV.pdf"
                className="block w-full rounded-xl border border-cyan-500/50 py-1.5 text-center text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </aside>

        {/*right sidebar*/}
        <main data-reveal className="flex-1 w-full rounded-2xl border border-[#334155]/40 bg-cyber-card/40 p-8 shadow-cyber-cyan backdrop-blur-[8px] md:p-10">

          {/* Título da Página (Estilo da imagem com linha curta) */}
          <h2 className="mb-10 text-4xl font-bold text-cyber-white">
            Resume
            <div className="glow-line mt-4 h-[3px] w-12 rounded-full bg-cyber-accent/80"></div>
          </h2>
          <div className="mb-14">
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-black/40 text-cyber-accent shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyber-white">Education</h3>
            </div>

            <div className="relative ml-[23px] border-l border-[#334155]/50 pl-10">
              
              <div className="relative mb-10">
                <div className="glow-dot absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent"></div>
                
                <h4 className="text-lg font-bold text-cyber-white">University of Trás-os-Montes and Alto Douro (UTAD)</h4>
                <p className="mt-1 text-base text-cyber-gray">B.Sc. in Informatics Engineering</p>
                <p className="mt-2 text-sm text-cyber-accent">Sept. 2024 — June 2027 (Expected)</p>
              </div>

              <div className="relative">
                <div className="glow-dot absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent"></div>

                <h4 className="text-lg font-bold text-cyber-white">Morgado De Mateus High School</h4>
                <p className="mt-1 text-base text-cyber-gray">High School Diploma in Science and Technology</p>
                <p className="mt-2 text-sm text-cyber-accent">Sept. 2021 — June 2024</p>
              </div>

            </div>
          </div>

          <div className="mb-14">
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-black/40 text-cyber-accent shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyber-white">Certifications</h3>
            </div>

            <div className="relative ml-[23px] border-l border-[#334155]/50 pl-10">
              
              <div className="relative mb-10">
                <div className="glow-dot absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent"></div>

                <h4 className="text-lg font-bold text-cyber-white">Ethical Hacker Certification</h4>
                <p className="mt-1 text-base text-cyber-gray">Cisco Networking Academy</p>
                <p className="mt-2 text-sm text-cyber-accent">2026</p>
              </div>

              <div className="relative">
                <div className="glow-dot absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent"></div>

                <h4 className="text-lg font-bold text-cyber-white">Cisco Certified Network Associate (CCNA)</h4>
                <p className="mt-1 text-base text-cyber-gray">Cisco Networking Academy — In Progress</p>
                <p className="mt-2 text-sm text-cyber-accent">Expected 2026</p>
              </div>
            </div>
          </div>
          
          <div>
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-black/40 text-cyber-accent shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyber-white">Experience</h3>
            </div>

            {/* Contentor da Linha Temporal */}
            <div className="relative ml-[23px] border-l border-[#334155]/50 pl-10">

              <div className="relative">
                <div className="glow-dot absolute -left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-cyber-accent"></div>

                <h4 className="text-lg font-bold text-cyber-white">Head of IT Department</h4>
                <p className="mt-1 text-base text-cyber-gray">NEEI — Núcleo de Estudantes de Engenharia Informática, UTAD</p>
                <div className="mb-4 mt-2 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-cyber-accent">June 2026 — Present</span>
                </div>

                <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-cyber-gray">
                  <li>Direct the entire IT department within a 100-member student engineering association, overseeing digital infrastructure and student-facing services across the university.</li>
                  <li>Lead full-stack development initiatives using React.js, TypeScript, PHP, and JavaScript, establishing Git workflows, repository standards, and code quality benchmarks.</li>
                  <li>Conduct technical code reviews, mentor student developers, and drive architectural decisions to ensure secure, maintainable, and scalable internal tools.</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-14">

            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#334155]/50 bg-cyber-black/40 text-cyber-accent shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-cyber-white">Technical Skills</h3>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyber-gray">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Python", "C/C++", "Java", "SQL", "HTML5/CSS3", "PHP"].map((skill) => (
                    <span key={skill} className="rounded-md bg-cyber-accent/10 px-2.5 py-1 text-xs font-medium text-cyber-accent">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyber-gray">Frameworks & Web Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "Tailwind CSS", "Vite"].map((skill) => (
                    <span key={skill} className="rounded-md bg-cyber-accent/10 px-2.5 py-1 text-xs font-medium text-cyber-accent">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyber-gray">Networking & Cybersecurity</h4>
                <div className="flex flex-wrap gap-2">
                  {["TCP/IP", "Routing & Switching", "Cisco Packet Tracer", "Wireshark", "Ethical Hacking"].map((skill) => (
                    <span key={skill} className="rounded-md bg-cyber-accent/10 px-2.5 py-1 text-xs font-medium text-cyber-accent">{skill}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyber-gray">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Linux", "Bash", "Docker", "VS Code"].map((skill) => (
                    <span key={skill} className="rounded-md bg-cyber-accent/10 px-2.5 py-1 text-xs font-medium text-cyber-accent">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}

export default Home;