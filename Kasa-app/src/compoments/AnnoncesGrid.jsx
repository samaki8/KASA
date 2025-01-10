//import React from 'react';
import { useState, useEffect } from 'react';
import logements from '../data/logements.json';
import '../styles/AnnoncesGrid.css';
import { Link } from 'react-router-dom';

function AnnoncesGrid() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="annonces-container">
      <div className={`annonces-grid ${windowWidth <= 768 ? 'mobile' : 'desktop'}`}>
        {logements.map((logement) => (
          <Link 
            key={logement.id} 
            to={`/logement/${logement.id}`} 
            className="annonce-card"
          >
            <img src={logement.cover} className="annonce-image" alt={logement.title} />
            <h3 className="annonce-title">{logement.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AnnoncesGrid;
