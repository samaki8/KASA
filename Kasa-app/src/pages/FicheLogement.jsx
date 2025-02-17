//Kasa-app/src/pages/FicheLogement.jsx

// FicheLogement.jsx
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CollapseSection from '../components/CollapseSection';
import useFetchLogement from '../components/LogementLoader'; // Import du hook personnalisé
import '../styles/FicheLogement.css';
import { useState } from 'react';
import LogementHeader from '../components/LogementHeader';

function FicheLogement() {
  const { id } = useParams();
  const { logement, isLoading, error } = useFetchLogement(id); // Utilisation du hook
  //const [openSection, setOpenSection] = useState(null); // État pour suivre la section ouverte
  const [openSections, setOpenSections] = useState({
    description: false,
    equipements: false,
  });


  if (isLoading) return <div>Chargement...</div>;

  // Gestion des erreurs et redirection
  if (error) {
    console.error(error); // Log l'erreur pour le débogage
    return <Navigate to="/error404" />; // Redirection vers la page d'erreur
  }

  const toggleSection = (section) => {
    setOpenSections((prevSections) => ({ ...prevSections, [section]: !prevSections[section] }));
  };

  return (
    <div className="fiche-logement">
      <Carousel pictures={logement.pictures} />
      <div className="logement-info">
        {logement && (
          <LogementHeader
            title={logement.title}
            location={logement.location}
            tags={logement.tags}
            host={logement.host}
            rating={logement.rating}
          />
        )}
        <div className="details">
          <CollapseSection
            title="Description"
            content={logement.description}
            isOpen={openSections.description}
            onToggle={() => toggleSection('description')}
          />
          <CollapseSection
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
            isOpen={openSections.equipements}
            onToggle={() => toggleSection('equipements')}
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;


/*
import '../styles/FicheLogement.css';
import logements from '../data/logements.json';
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowIconCarousel } from '../components/ArrowIconCarousel.jsx';
import { ArrowIconCollapse } from '../components/ArrowIconCollapse.jsx';


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
            <button onClick={previousImage} className="carousel-btn prev"><ArrowIconCarousel className="carousel-btn prev" />‹</button>
            <button onClick={nextImage} className="carousel-btn next"><ArrowIconCarousel className="carousel-btn next" />›</button>
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

              <ArrowIconCollapse className={`ArrowIconCollapse ${isDescriptionOpen ? 'rotate' : ''}`} />
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

              <ArrowIconCollapse className={`ArrowIconCollapse ${isEquipementsOpen ? 'rotate' : ''}`} />

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
*/


