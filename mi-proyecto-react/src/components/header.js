import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ background: '#222', padding: '1rem', color: 'white' }}>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Proyeccion</Link>
        <Link to="/about" style={{ marginRight: '1rem', color: 'white' }}>Problematica</Link>
        <Link to="/contact" style={{ color: 'white' }}>Contacto</Link>
      </nav>
    </header>
  );
};

export default Header;

