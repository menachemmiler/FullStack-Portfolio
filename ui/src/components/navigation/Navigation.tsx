import { Menu, MessageSquare, Moon, Sun, X } from 'lucide-react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDarkMode } from '../../hooks/useTheme';
import './navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useDarkMode();

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
            About
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
            to="/skills"
            className={location.pathname === '/skills' ? 'nav-link active' : 'nav-link'}
          >
            Skills
          </Link>
        </li>
        <li>
          <button
            className={`theme-toggle-btn ${isDark ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label="החלף ערכת צבעים"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
