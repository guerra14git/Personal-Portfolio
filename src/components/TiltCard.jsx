import { useRef } from 'react';
import gsap from 'gsap';

const MAX_TILT_DEG = 7;

function TiltCard({ className = '', children, ...rest }) {
  const cardRef = useRef(null);
  const quickRotateX = useRef(null);
  const quickRotateY = useRef(null);
  const quickLift = useRef(null);

  const ensureQuickSetters = () => {
    if (quickRotateX.current || !cardRef.current) return;
    quickRotateX.current = gsap.quickTo(cardRef.current, 'rotationX', { duration: 0.5, ease: 'power3.out' });
    quickRotateY.current = gsap.quickTo(cardRef.current, 'rotationY', { duration: 0.5, ease: 'power3.out' });
    quickLift.current = gsap.quickTo(cardRef.current, 'z', { duration: 0.5, ease: 'power3.out' });
  };

  const handleMouseMove = (event) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const node = cardRef.current;
    if (!node) return;

    ensureQuickSetters();

    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    quickRotateY.current((px - 0.5) * MAX_TILT_DEG * 2);
    quickRotateX.current(-(py - 0.5) * MAX_TILT_DEG * 2);
    quickLift.current(12);
  };

  const handleMouseLeave = () => {
    if (!quickRotateX.current) return;
    quickRotateX.current(0);
    quickRotateY.current(0);
    quickLift.current(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      className={className}
      {...rest}
    >
      {children}
    </div>
  );
}

export default TiltCard;
