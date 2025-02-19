//Kasa-app\src\components\Banner.jsx
import '../styles/Banner.css';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa" className="logo" />
      </Link>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Banner;
