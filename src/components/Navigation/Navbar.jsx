import { useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const NAV_ITEMS = [
  {
    to: '/about',
    label: 'ABOUT ME',
    icon: (
      <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    to: '/projects',
    label: 'PROJECTS',
    icon: (
      <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    ),
  },
  {
    to: '/resume',
    label: 'RESUME',
    icon: (
      <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <line x1="10" y1="9" x2="8" y2="9" />
      </svg>
    ),
  },
  {
    to: '/contact',
    label: 'CONTACT',
    icon: (
      <svg className="h-5.5 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const MAX_MAGNET_PX = 10;

function Navbar() {
  const location = useLocation();
  const itemRefs = useRef({});
  const pillRef = useRef(null);
  const quickSetters = useRef({});

  useLayoutEffect(() => {
    const activeNode = itemRefs.current[location.pathname];
    const pill = pillRef.current;
    if (!activeNode || !pill) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const move = () => {
      gsap.to(pill, {
        x: activeNode.offsetLeft,
        width: activeNode.offsetWidth,
        opacity: 1,
        duration: reduceMotion ? 0.01 : 0.5,
        ease: 'expo.out',
      });
    };

    move();
    window.addEventListener('resize', move);
    return () => window.removeEventListener('resize', move);
  }, [location.pathname]);

  const handlePointerMove = (to, event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = itemRefs.current[to];
    if (!node) return;

    if (!quickSetters.current[to]) {
      quickSetters.current[to] = {
        x: gsap.quickTo(node, 'x', { duration: 0.3, ease: 'power3.out' }),
        y: gsap.quickTo(node, 'y', { duration: 0.3, ease: 'power3.out' }),
      };
    }

    const rect = node.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;

    quickSetters.current[to].x(gsap.utils.clamp(-MAX_MAGNET_PX, MAX_MAGNET_PX, relX * 0.4));
    quickSetters.current[to].y(gsap.utils.clamp(-MAX_MAGNET_PX, MAX_MAGNET_PX, relY * 0.4));
  };

  const handlePointerLeave = (to) => {
    const setters = quickSetters.current[to];
    if (!setters) return;
    setters.x(0);
    setters.y(0);
  };

  return (
    <div className="fixed top-6 left-1/2 z-50 max-w-2xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-full border border-[#334155]/50 bg-cyber-black/60 px-6 py-3 backdrop-blur-md">
        <div className="relative flex w-full items-center justify-between gap-3">

          <span
            ref={pillRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 h-full w-0 rounded-full bg-[#334155]/50 opacity-0"
          />

          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                ref={(node) => { itemRefs.current[item.to] = node; }}
                onMouseMove={(event) => handlePointerMove(item.to, event)}
                onMouseLeave={() => handlePointerLeave(item.to)}
                aria-label={item.label}
                aria-current={isActive ? 'page' : undefined}
                className={`group relative z-10 flex items-center justify-center rounded-full p-2.5 transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-cyber-gray hover:bg-[#334155]/30 hover:text-white'
                }`}
              >
                {item.icon}

                <span className="pointer-events-none absolute top-14 scale-0 whitespace-nowrap rounded-md border border-[#334155]/50 bg-cyber-black px-3 py-1.5 text-xs font-medium tracking-widest text-white opacity-0 shadow-xl transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
