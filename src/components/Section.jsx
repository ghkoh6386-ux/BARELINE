import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Section({ title, caption, className = '', children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const syncIsMobile = (event) => setIsMobile(event.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', syncIsMobile);

    return () => {
      mediaQuery.removeEventListener('change', syncIsMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <section className={`py-10 ${className}`}>
        {title || caption ? (
          <div className="mb-8">
            {caption ? <p className="text-sm uppercase tracking-[0.22em] text-outline mb-3">{caption}</p> : null}
            {title ? <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2> : null}
          </div>
        ) : null}
        {children}
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={fade}
      className={`py-10 ${className}`}
    >
      {title || caption ? (
        <div className="mb-8">
          {caption ? <p className="text-sm uppercase tracking-[0.22em] text-outline mb-3">{caption}</p> : null}
          {title ? <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </motion.section>
  );
}
