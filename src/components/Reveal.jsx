import { useEffect, useRef, useState } from 'react';

/**
 * Wraps children with a fade-up-on-scroll effect using IntersectionObserver.
 * Usage: <Reveal delay={100}><div>content</div></Reveal>
 */
export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);

  const transforms = {
    up: 'translate-y-8',
    down: '-translate-y-8',
    left: 'translate-x-8',
    right: '-translate-x-8'
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${transforms[direction]}`
      } ${className}`}
    >
      {children}
    </div>
  );
}