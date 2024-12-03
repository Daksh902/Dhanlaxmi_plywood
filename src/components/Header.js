import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ThemeContext from '../utils/theme';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Dhanlaxmi Furniture Logo" />
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        Menu
      </button>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </header>
  );
};

export default Header;
