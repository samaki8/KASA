// Kasa-app/src/pages/FicheLogement.jsx
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../components/Carousel';
import CollapsibleSection from '../components/CollapseSection';
import useFetchLogement from '../components/LogementLoader';
import '../styles/FicheLogement.css';
import LogementHeader from '../components/LogementHeader';

function FicheLogement() {
  const { id } = useParams();
  const { logement, isLoading, error } = useFetchLogement(id);

  if (isLoading) return <div>Chargement...</div>;

  if (error) {
    console.error(error);
    return <Navigate to="/error404" />;
  }

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
          <CollapsibleSection
            title="Description"
            content={logement.description}
          />
          <CollapsibleSection
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default FicheLogement;
