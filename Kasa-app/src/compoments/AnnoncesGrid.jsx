import React from 'react';
import { useState, useEffect } from 'react';
import logements from '../data/logements.json';
import '../styles/AnnoncesGrid.css';

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
          <div key={logement.id} className="annonce-card">
            <img 
              src={logement.cover} 
              alt={logement.title}
              className="annonce-image"
            />
            <h3 className="annonce-title">{logement.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnnoncesGrid;
