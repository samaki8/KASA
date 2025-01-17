import '../styles/Background.css'
import image1 from '../assets/image1.jpg'

function Background() {
    return (
        <div className="background">
            <img src={image1} alt='image 1' className='image1' />
				<h1 className='tagline'>Chez vous, partout et ailleurs</h1>
        </div>
    )     

}
export default Background;