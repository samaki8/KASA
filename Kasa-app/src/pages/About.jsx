import image2 from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg'
//import { useParams, Navigate } from 'react-router-dom';
import { useState } from 'react';
//import { useState, useEffect } from 'react';
//import { ArrowIcon } from '../compoments/ArrowIcon.jsx';
import { ArrowIcon2 } from '../compoments/ArrowIcon2.jsx';
import '../styles/About.css';


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
						<ArrowIcon2 className={`ArrowIcon2 ${openSection.fiabilite ? 'rotate' : ''}`} />
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
						<ArrowIcon2 className={`ArrowIcon2 ${openSection.respect ? 'rotate' : ''}`} />
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
						<ArrowIcon2 className={`ArrowIcon2 ${openSection.service ? 'rotate' : ''}`} />
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
						<ArrowIcon2 className={`ArrowIcon2 ${openSection.securite ? 'rotate' : ''}`} />
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
