//Kasa-app\src\pages\Home.jsx
import Background from '../components/Background.jsx';
import AnnoncesGrid from '../components/AnnoncesGrid.jsx';
import image1 from '../assets/image1.jpg'

function Home() {

    return (
        <div>
            <Background
                imageSrc={image1}
                altText='image 1'
                tagline='Chez vous, partout et ailleurs'
            />

            <AnnoncesGrid />
        </div>
    );
}

export default Home;
