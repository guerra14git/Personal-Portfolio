import { useLayoutEffect } from 'react';
import gsap from 'gsap';

/**
 * Staggered GSAP entrance for a page's top-level blocks (`data-reveal`)
 * and any card/list groups inside it (`data-reveal-group` > `[data-reveal-item]`).
 */
export default function usePageReveal(containerRef) {
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: reduce)', () => {
      gsap.set(container.querySelectorAll('[data-reveal], [data-reveal-item]'), { clearProps: 'all' });
    });

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const blocks = container.querySelectorAll('[data-reveal]');
      const tl = gsap.timeline();

      tl.from(blocks, {
        autoAlpha: 0,
        y: 24,
        duration: 0.7,
        ease: 'expo.out',
        stagger: 0.12,
      });

      container.querySelectorAll('[data-reveal-group]').forEach((group) => {
        const items = group.querySelectorAll('[data-reveal-item]');
        if (!items.length) return;

        tl.from(
          items,
          { autoAlpha: 0, y: 16, duration: 0.5, ease: 'expo.out', stagger: 0.06 },
          0.2,
        );
      });
    });

    return () => mm.revert();
  }, [containerRef]);
}
