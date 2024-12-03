import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="footer-info">
        <p>Dhanlaxmi Furniture & Plywood</p>
        <p>Phone: +91-9429193010</p>
        <p>Email: info@dhanlaxmifurniture.com</p>
        <p>Address: 123 Furniture Street, India</p>
        <p>Created by <a href="https://dps-portfolio.onrender.com" target="_blank" rel="noopener noreferrer">Daksh Prajapati</a></p>
      </div>
    </footer>
  );
};

export default Footer;
