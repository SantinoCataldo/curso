import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className='navbar__scrolled'>
      <div className='navbar__content'>
        <div className="navbar__logo">Empresa</div>
        <ul className="navbar__links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/portafolio">Portafolio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
