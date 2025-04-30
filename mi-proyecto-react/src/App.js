import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importa los componentes
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Header con los enlaces */}
        <Header />

        {/* Rutas para el contenido */}
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about" element={<div>Acerca de</div>} />
          <Route path="/contact" element={<div>Contacto</div>} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
