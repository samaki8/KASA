import '../styles/Background.css'
import PropTypes from 'prop-types'

function Banner({ imageSrc, altText, tagline }) {
    return (
        <div className="background">
            <img src={imageSrc} alt={altText} className='banner-image' />
            {tagline && <h1 className='tagline'>{tagline}</h1>}
        </div>
    )
}

Banner.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    tagline: PropTypes.string
}

export default Banner

/*
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
export default Background;*/