/*import '../styles/Banner.css'


function Banner({ children }) {
	return <div className='lmj-banner'>{children}</div>
}

export default Banner
*/
//import React from 'react';
import '../styles/Banner.css';
import '../assets/logo.png';

function Banner() {
    return (
        <header className="header">
            <div className="logo">
                <img src="./src/assets/logo.png" alt="Logo" />
            </div>
            <nav className="nav">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">À propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Banner;

