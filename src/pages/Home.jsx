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
                className="block w-full rounded-xl border border-cyan-500/50 py-1.5 text-center text-sm font-medium text-cyan-400 transition hover:bg-cyan-500/20 hover:text-cyan-300 active:scale-95"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </aside>

        {/* right sidebar */}
        <main data-reveal className="flex-1 rounded-2xl border border-[#334155]/40 bg-cyber-black/10 p-8 shadow-[0_0_20px_rgba(0,0,0,0.4)] backdrop-blur-[3px] md:p-10">
          
          <div className="mb-6 flex items-center gap-4">
            <h2 className="text-3xl font-bold text-[#334155]">$</h2>
            <h2 className="text-3xl font-bold text-white font-jetbrains">whoami</h2>
            <div className="glow-line h-[2px] w-32 bg-gradient-to-r from-cyan-500/80 to-transparent"></div>
          </div>
          
          <div className="space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
            <p>A 20 year-old Informatics Engineering student at UTAD, Portugal.</p>
            <p>Deep interest in <b>Cybersecurity and PenTesting</b>. Currently building my foundational skills in software development and networking!</p>
            <p>Hands-on experience with Linux environments, network analysis, and penetration testing methodologies, complemented by industry-recognized certifications from <b>Cisco Networking Academy</b>.</p>
            <p>Passionate about vulnerability assessment, threat analysis, and continuous learning in Red Teaming environments.</p>
            <p>Seeking entry-level opportunities, internships, or junior roles in Cybersecurity and Pen Testing.</p>
          </div>

          <h3 className="mb-6 mt-12 text-2xl font-semibold text-white">What I'm Doing</h3>
          
          <div data-reveal-group className="grid grid-cols-1 gap-4 xl:grid-cols-2">
            <div data-reveal-item className="rounded-xl border border-[#334155]/30 bg-cyber-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-accent/40 hover:bg-cyber-card/40">
              <h4 className="mb-2 font-semibold text-white">Web Development</h4>
              <p className="text-sm text-gray-400">Building modern and responsive web applications using React and Tailwind.</p>
            </div>
            <div data-reveal-item className="rounded-xl border border-[#334155]/30 bg-cyber-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-accent/40 hover:bg-cyber-card/40">
              <h4 className="mb-2 font-semibold text-white">Cybersecurity Labs</h4>
              <p className="text-sm text-gray-400">Practicing penetration testing and network defense in controlled environments.</p>
            </div>
            <div data-reveal-item className="rounded-xl border border-[#334155]/30 bg-cyber-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-accent/40 hover:bg-cyber-card/40">
              <h4 className="mb-2 font-semibold text-white">Hardware Hacking & RF</h4>
              <p className="text-sm text-gray-400">Exploring IoT security and wireless protocols. Building custom offensive tools with ESP32 microcontrollers and researching radio frequency vulnerabilities using nRF24L01 (for controlled jamming) and CC1101 transceivers.</p>
            </div>
            <div data-reveal-item className="rounded-xl border border-[#334155]/30 bg-cyber-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-accent/40 hover:bg-cyber-card/40">
              <h4 className="mb-2 font-semibold text-white">Network Security & Architecture</h4>
              <p className="text-sm text-gray-400">Analyzing network traffic with Wireshark, configuring firewalls, and understanding routing protocols and defense-in-depth strategies.</p>
            </div>
            <div data-reveal-item className="rounded-xl border border-[#334155]/30 bg-cyber-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-accent/40 hover:bg-cyber-card/40">
              <h4 className="mb-2 font-semibold text-white">Automation & Scripting</h4>
              <p className="text-sm text-gray-400">Developing custom Python tools and Bash scripts for automated reconnaissance, log analysis, and system administration.</p>
            </div>
            <div data-reveal-item className="rounded-xl border border-[#334155]/30 bg-cyber-black/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyber-accent/40 hover:bg-cyber-card/40">
              <h4 className="mb-2 font-semibold text-white">Offensive Security Labs</h4>
              <p className="text-sm text-gray-400">Active hands-on training on platforms like TryHackMe and Hack The Box, focusing on web exploitation, privilege escalation, and CTF challenges.</p>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
}

export default Home;