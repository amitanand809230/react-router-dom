import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinkClass = (path) =>
    `hover:text-yellow-400 transition-colors duration-200 ${location.pathname === path ? 'text-yellow-400 font-semibold' : ''}`;

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex gap-6 shadow">
      <Link to="/" className={navLinkClass('/')}>Home</Link>
      <Link to="/about" className={navLinkClass('/about')}>About</Link>
      <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
    </nav>
  );
};

export default Navbar;