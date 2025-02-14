// LogementLoader.jsx

import { useState, useEffect } from 'react';
import logements from '../data/logements.json';

function useFetchLogement(id) {
    const [logement, setLogement] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null); // État pour stocker l'erreur

    useEffect(() => {
        const fetchLogement = async () => {
            setIsLoading(true);
            try {
                const selectedLogement = logements.find(item => item.id === id);
                if (selectedLogement) {
                    setLogement(selectedLogement);
                    setError(null); // Réinitialiser l'erreur en cas de succès
                } else {
                    setError("Logement non trouvé"); // Mettre à jour l'état d'erreur
                }
            } catch {
                setError("Erreur lors du chargement du logement");
            } finally {
                setIsLoading(false);
            }
        };
        fetchLogement();
    }, [id]);

    return { logement, isLoading, error };
}

export default useFetchLogement;

