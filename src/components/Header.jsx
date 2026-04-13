import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectNavItems } from '../store/selectors/contentSelectors';

const baseLinkClass =
  'relative inline-flex pb-1 uppercase text-sm tracking-[0.14em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300';
const activeClass = 'text-accent font-semibold after:scale-x-100';
const defaultClass = 'text-on-surface/70 hover:text-accent hover:after:scale-x-100';

export default function Header() {
  const navItems = useSelector(selectNavItems);

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/20 bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-8">
        <NavLink to="/" className="text-2xl font-medium tracking-[0.12em] uppercase">
          BARE LINE
        </NavLink>
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
    </header>
  );
}
