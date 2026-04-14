import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import useIsMobile from '../hooks/useIsMobile';
import { selectMobileBreakpoint } from '../store/selectors/contentSelectors';

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export default function Section({ title, caption, className = '', children }) {
  const mobileBreakpoint = useSelector(selectMobileBreakpoint);
  const isMobile = useIsMobile(mobileBreakpoint);

  if (isMobile) {
    return (
      <section className={`py-10 ${className}`}>
        {title || caption ? (
          <div className="mb-8">
            {caption ? <p className="text-base uppercase tracking-[0.22em] text-outline mb-3">{caption}</p> : null}
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
          {caption ? <p className="text-base uppercase tracking-[0.22em] text-outline mb-3">{caption}</p> : null}
          {title ? <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </motion.section>
  );
}
