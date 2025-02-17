import image2 from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg';
import { useState } from 'react';
import '../styles/About.css';
import CollapsibleSection from '../components/CollapseSection.jsx';
import Background from '../components/Background.jsx';

function About() {
	// Utilisation d'un objet pour gérer plusieurs sections ouvertes
	const [openSections, setOpenSections] = useState({
		fiabilite: false,
		respect: false,
		service: false,
		securite: false
	});

	// Fonction pour basculer l'état d'une section spécifique
	const toggleSection = (section) => {
		setOpenSections((prevSections) => ({
			...prevSections,
			[section]: !prevSections[section] // Inverse l'état de la section cliquée
		}));
	};
	/*
	const [openSection, setOpenSection] = useState(null); // État pour suivre la section ouverte

	const toggleSection = (section) => {
	setOpenSection(prevSection => (prevSection === section ? null : section)); // Ouvrir seulement la section cliquée
			};
	*/

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
					isOpen={openSections.fiabilite} // Vérifie si "fiabilite" est ouvert
					onToggle={() => toggleSection('fiabilite')} // Basculer "fiabilite"
				/>

				<CollapsibleSection
					title="Respect"
					content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
					isOpen={openSections.respect} // Vérifie si "respect" est ouvert
					onToggle={() => toggleSection('respect')} // Basculer "respect"
				/>

				<CollapsibleSection
					title="Service"
					content="Notre équipe se tient à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
					isOpen={openSections.service} // Vérifie si "service" est ouvert
					onToggle={() => toggleSection('service')} // Basculer "service"
				/>

				<CollapsibleSection
					title="Sécurité"
					content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."
					isOpen={openSections.securite} // Vérifie si "securite" est ouvert
					onToggle={() => toggleSection('securite')} // Basculer "securite"
				/>
			</div>
		</div>
	);
}

export default About;


/*
function About() {
	const [openSection, setOpenSection] = useState({
		fiabilite: false,
		respect: false,
		service: false,
		securite: false
	});

	const toggleSection = (section) => {
		setOpenSection({
			...openSection,
			[section]: !openSection[section]
		});
	};

	return (
		<div className="about">
			<div className="banner">
				<img src={image2} alt="Paysage" />
			</div>

			<div className="values-container">
				<div className="value-item">
					<button
						className={`collapsible ${openSection.fiabilite ? 'active' : ''}`}
						onClick={() => toggleSection('fiabilite')}
					>
						<span>Fiabilité</span>
						<ArrowIconCollapse className={`ArrowIconCollapse ${openSection.fiabilite ? 'rotate' : ''}`} />
					</button>
					<div className={`content ${openSection.fiabilite ? 'active' : ''}`}>
						<p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
					</div>
				</div>

				<div className="value-item">
					<button
						className={`collapsible ${openSection.respect ? 'active' : ''}`}
						onClick={() => toggleSection('respect')}
					>
						<span>Respect</span>
						<ArrowIconCollapse className={`ArrowIconCollapse ${openSection.respect ? 'rotate' : ''}`} />
					</button>
					<div className={`content ${openSection.respect ? 'active' : ''}`}>
						<p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
					</div>
				</div>

				<div className="value-item">
					<button
						className={`collapsible ${openSection.service ? 'active' : ''}`}
						onClick={() => toggleSection('service')}
					>
						<span>Service</span>
						<ArrowIconCollapse className={`ArrowIconCollapse ${openSection.service ? 'rotate' : ''}`} />
					</button>
					<div className={`content ${openSection.service ? 'active' : ''}`}>
						<p>{"Notre équipe se tient à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."}</p>
					</div>
				</div>

				<div className="value-item">
					<button
						className={`collapsible ${openSection.securite ? 'active' : ''}`}
						onClick={() => toggleSection('securite')}
					>
						<span>Sécurité</span>
						<ArrowIconCollapse className={`ArrowIconCollapse ${openSection.securite ? 'rotate' : ''}`} />
					</button>
					<div className={`content ${openSection.securite ? 'active' : ''}`}>
						<p>{"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
*/