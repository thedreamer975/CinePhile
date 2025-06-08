import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link" aria-label="Home">
        <img src={logo} alt="Logo" />
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/movies" className="nav-link">Movies</Link>
        <Link to="/about" className="nav-link">About Us</Link>
      </nav>
      <div className="signin-container">
        <Link to="/signin" className="signin-btn">Sign In</Link>
      </div>
    </header>
  );
};

export default Header;
