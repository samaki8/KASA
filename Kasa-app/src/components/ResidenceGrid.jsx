//import React from 'react';
import logements from '../data/logements.json';
import '../styles/ResidenceGrid.css';
import { Link } from 'react-router-dom';

function ResidenceGrid() {
  return (
    <div className="annonces-container">
      <div className="annonces-grid">
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

export default ResidenceGrid;

