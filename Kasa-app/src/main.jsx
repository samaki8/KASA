//import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import FicheLogement from './pages/FicheLogement';
import Error404 from './pages/Error404';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
