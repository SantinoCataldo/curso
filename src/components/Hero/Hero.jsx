import React from 'react';
import './Hero.scss'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1>Aberturas de Aluminio</h1>
        <p>Carpintería integral en aluminio de alta prestación, una empresa familiar con más de 20 años de experiencia en el mercado. Diseñamos y llevamos a cabo el producto que necesita cada cliente, ofreciendo una amplia gama de posibilidades y prestaciones acorde a su elección y presupuesto.</p>
        <Link className='hero__button' to="/contacto">Contacto</Link>
      </div>
    </div>
  );
};

export default Hero;
