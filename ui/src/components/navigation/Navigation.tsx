import { Menu, MessageSquare, X } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <MessageSquare size={24} />
        <span>Portfolio</span>
      </Link>

      <button
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link
            to="/projects"
            className={location.pathname === '/projects' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </Link>
        </li>
        <li onClick={() => setIsMenuOpen(false)}>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
