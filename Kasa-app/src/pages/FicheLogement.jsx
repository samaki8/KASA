//Kasa-app/src/pages/FicheLogement.jsx
import '../styles/FicheLogement.css';
import logements from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowIcon } from '../compoments/ArrowIcon.jsx';
import { ArrowIcon2 } from '../compoments/ArrowIcon2.jsx';


function FicheLogement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipementsOpen, setIsEquipementsOpen] = useState(false);

  useEffect(() => {
    const selectedLogement = logements.find(item => item.id === id);
    if (selectedLogement) {
      setLogement(selectedLogement);
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return <div>Chargement...</div>;
  }

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
          src={logement.pictures[currentImageIndex]} alt={`${logement.title} - Vue ${currentImageIndex + 1}`}
        />
        {logement.pictures.length > 1 && (
          <>
            <button onClick={previousImage} className="carousel-btn prev"><ArrowIcon className="carousel-btn prev" />‹</button>
            <button onClick={nextImage} className="carousel-btn next"><ArrowIcon className="carousel-btn next" />›</button>
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
            <button
              className={`collapsible ${isDescriptionOpen ? 'active' : ''}`}
              onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
            >
              <span>Description</span>
              <ArrowIcon2 className={`ArrowIcon2 ${isDescriptionOpen ? 'rotate' : ''}`} />
            </button>
            <div className={`content ${isDescriptionOpen ? 'active' : ''}`}>
              <p>{logement.description}</p>
            </div>
          </div>

          <div className="equipments">
            <button
              className={`collapsible ${isEquipementsOpen ? 'active' : ''}`}
              onClick={() => setIsEquipementsOpen(!isEquipementsOpen)}
            >
              <span>Équipements</span>

              <ArrowIcon2 className={`ArrowIcon2 ${isEquipementsOpen ? 'rotate' : ''}`} />

            </button>
            <div className={`content ${isEquipementsOpen ? 'active' : ''}`}>
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;



