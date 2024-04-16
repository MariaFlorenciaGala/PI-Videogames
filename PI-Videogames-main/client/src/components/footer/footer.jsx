import "./footer.styles.css";

//REDUX - REACT
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>María Florencia Batalla Córdoba</h3>
          <p>Proyecto integrador e individual para Soy Henry&copy;</p>
        </div>
        <div className="footer-right">
          <h3>Contacto</h3>
          <p>Email: mariaflorenciagala8@gmail.com</p>
          <p>Teléfono: +54 3472 509569</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Mi proyecto integrador | Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
  