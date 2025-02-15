//Kasa-app\src\pages\Home.jsx
import Background from '../components/Background.jsx';
import ResidenceGrid from '../components/ResidenceGrid.jsx'
import image1 from '../assets/image1.jpg'

function Home() {

    return (
        <div>
            <Background
                imageSrc={image1}
                altText='image 1'
                tagline='Chez vous, partout et ailleurs'
            />

            <ResidenceGrid />
        </div>
    );
}

export default Home;
