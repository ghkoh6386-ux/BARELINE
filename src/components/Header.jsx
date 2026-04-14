import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNavItems } from '../store/selectors/contentSelectors';

const baseLinkClass =
  'relative inline-flex pb-1 uppercase text-base tracking-[0.14em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300';
const activeClass = 'text-accent font-semibold after:scale-x-100';
const defaultClass = 'text-on-surface/70 hover:text-accent hover:after:scale-x-100';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = useSelector(selectNavItems);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/20 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <NavLink to="/" className="text-2xl font-medium tracking-[0.12em] uppercase">
          BARE LINE
        </NavLink>
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="inline-flex items-center gap-2 border border-outline-variant/20 px-4 py-2 text-base uppercase tracking-[0.2em] text-on-surface md:hidden"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-[18px]">{isMenuOpen ? 'close' : 'menu'}</span>
          Menu
        </button>
        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `${baseLinkClass} ${isActive ? activeClass : defaultClass}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="absolute left-0 right-0 top-full z-50 border-t border-outline-variant/20 bg-white shadow-soft md:hidden"
          >
            <nav className="mx-auto max-w-7xl px-6 py-4">
              <div className="grid gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, delay: index * 0.04, ease: 'easeOut' }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between border px-4 py-4 text-base uppercase tracking-[0.22em] transition-colors ${
                          isActive
                            ? 'border-accent/30 bg-accent/5 text-accent'
                            : 'border-outline-variant/20 bg-surface text-on-surface/80'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_outward</span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
