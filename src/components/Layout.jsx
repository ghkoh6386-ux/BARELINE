import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-on-surface">
      <Header />
      <main className="mx-auto w-full max-w-7xl px-0 md:px-0">{children}</main>
      <Footer />
    </div>
  );
}
