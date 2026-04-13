import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCategoryItems } from '../store/selectors/contentSelectors';

export default function CategoryNav() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') ?? 'all';
  const categoryItems = useSelector(selectCategoryItems);
  const navItems = [{ id: 'all', title: '인기' }, ...categoryItems];

  return (
    <nav className="overflow-x-auto border-b border-outline-variant/20 bg-surface py-4 text-xs uppercase tracking-[0.16em] text-on-surface/80">
      <div className="mx-auto flex max-w-7xl gap-8 px-6 md:px-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => (item.id === 'all' ? setSearchParams({}) : setSearchParams({ category: item.id }))}
            className={`relative inline-flex whitespace-nowrap pb-1 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-300 ${
              activeCategory === item.id
                ? 'text-accent after:scale-x-100'
                : 'hover:text-accent after:scale-x-0 hover:after:scale-x-100'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
