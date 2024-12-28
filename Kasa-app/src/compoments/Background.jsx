import './css/background.css';
import image2 from './assets/image2.jpg'

fonction Background() {
    return (
        <div className="background">
            <div className="background-image"></div>
            <img src={image2} alt='image 2' className='image2' />
				<h1 className='tagline'>Chez vous, partout et ailleurs</h1>
        </div>
    )     

}