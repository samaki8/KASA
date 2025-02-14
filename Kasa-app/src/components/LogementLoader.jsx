// LogementLoader.jsx
import { useState, useEffect } from 'react';
import logements from '../data/logements.json';


function useFetchLogement(id) {
    const [logement, setLogement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // Ajouter un état d'erreur

    useEffect(() => {
        const fetchLogement = async () => {
            setIsLoading(true); // Déplacer ici pour que le chargement commence
            try {
                // Simulez un appel API ici
                const selectedLogement = logements.find(item => item.id === id);
                if (selectedLogement) {
                    setLogement(selectedLogement);
                } else {
                    setError("Logement non trouvé"); // Mettre à jour l'état d'erreur
                }
            } catch {
                setError("Erreur lors du chargement du logement"); // Capture des erreurs
            } finally {
                setIsLoading(false);
            }
        };
        fetchLogement();
    }, [id]);

    return { logement, isLoading, error };
}

export default useFetchLogement;
