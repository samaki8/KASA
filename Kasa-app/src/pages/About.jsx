import image2 from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg';
import '../styles/About.css';
import CollapsibleSection from '../components/CollapseSection.jsx';
import Background from '../components/Background.jsx';

function About() {
	return (
		<div className="about">
			<Background
				imageSrc={image2}
				altText="image 2"
				tagline=""
			/>

			<div className="values-container">
				<CollapsibleSection
					title="Fiabilité"
					content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
				/>

				<CollapsibleSection
					title="Respect"
					content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				/>

				<CollapsibleSection
					title="Service"
					content="Notre équipe se tient à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
				/>

				<CollapsibleSection
					title="Sécurité"
					content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."
				/>
			</div>
		</div>
	);
}

export default About;
