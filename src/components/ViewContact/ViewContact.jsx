// ViewContact.jsx
import React from 'react';
import './ViewContact.scss'; // Asegúrate de tener este archivo para los estilos

const ViewContact = () => {
  return (
    <section className="contact">
      <div className="contact__container">
        <h2>Contáctanos</h2>
        <form action="mailto:contacto@ejemplo.com" method="post" encType="text/plain">
          <div className="contact__form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          
          <div className="contact__form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" required />
          </div>

          <div className="contact__form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea rows="5" ></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default ViewContact;
