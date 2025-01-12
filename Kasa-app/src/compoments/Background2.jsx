import '../styles/Background.css'
import image2 from '../assets/image2.jpg'

function Background2() {
    return (
        <div className="background">
            <img src={image2} alt='image 2' className='image2' />
            <h1 className='tagline'>Chez vous, partout et ailleurs</h1>
        </div>
    )

}
export default Background2;