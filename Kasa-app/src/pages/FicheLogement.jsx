import '../styles/FicheLogement.css';
import logements from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function FicheLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const selectedLogement = logements.find(item => item.id === id);
    setLogement(selectedLogement);
  }, [id]);

  if (!logement) {
    return <Navigate to="/error404" />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fiche-logement">
      <div className="carousel">
        <img 
          src={logement.pictures[currentImageIndex]} 
          alt={`${logement.title} - Vue ${currentImageIndex + 1}`} 
        />
        {logement.pictures.length > 1 && (
          <>
            <button onClick={previousImage} className="carousel-btn prev">‹</button>
            <button onClick={nextImage} className="carousel-btn next">›</button>
            <span className="image-counter">
              {currentImageIndex + 1}/{logement.pictures.length}
            </span>
          </>
        )}
      </div>

      <div className="logement-info">
        <div className="logement-header">
          <div className="title-location">
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className="tags">
              {logement.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="host-rating">
            <div className="host">
              <span>{logement.host.name}</span>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="rating">
              {[...Array(5)].map((_, index) => (
                <span key={index} className={index < parseInt(logement.rating) ? 'star filled' : 'star'}>
                  ★
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="details">
          <div className="description">
            <h2>Description</h2>
            <p>{logement.description}</p>
          </div>
          
          <div className="equipments">
            <h2>Équipements</h2>
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;



