import { ArrowIconPrev } from './ArrowIconPrev.jsx';
import { ArrowIconNext } from './ArrowIconNext.jsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Carousel({ pictures }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <img
                src={pictures[currentImageIndex]}
                alt={`Vue ${currentImageIndex + 1}`}
            />
            {pictures.length > 1 && (
                <>
                    <button onClick={previousImage} className="carousel-btn prev">
                        <ArrowIconPrev className="carousel-btn prev" />
                    </button>
                    <button onClick={nextImage} className="carousel-btn next">
                        <ArrowIconNext className="carousel-btn next" />
                    </button>

                    <span className="image-counter">
                        {currentImageIndex + 1}/{pictures.length}
                    </span>
                </>
            )}
        </div>
    );
}

Carousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
