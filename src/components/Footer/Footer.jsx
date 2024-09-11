import React from 'react';
import './Footer.scss'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section footer__section--info">
          <h3>Sobre Nosotros</h3>
          <p>Somos una empresa líder en soluciones arquitectónicas, ofreciendo productos de alta calidad que combinan diseño y funcionalidad. Nuestra misión es proporcionar soluciones innovadoras que mejoren el confort y la eficiencia energética de los espacios.</p>
        </div>

        <div className="footer__section footer__section--links">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/portafolio">portafolio</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </div>

        <div className="footer__section footer__section--contact">
          <h3>Contacto</h3>
          <p><strong>Dirección:</strong> Calle Ejemplo 123, Ciudad, País</p>
          <p><strong>Teléfono:</strong> +123 456 7890</p>
          <p><strong>Email:</strong> contacto@ejemplo.com</p>
        </div>

        <div className="footer__section footer__section--social">
          <h3>Síguenos</h3>
          <div className="footer__social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
