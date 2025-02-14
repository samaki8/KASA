// HostRating.jsx
import PropTypes from 'prop-types';

function HostRating({ host, rating }) {
    return (
        <div className="host-rating">
            <div className="host">
                <span>{host.name}</span>
                <img src={host.picture} alt={host.name} />
            </div>
            <div className="rating">
                {[...Array(5)].map((_, index) => (
                    <span key={index} className={index < parseInt(rating) ? 'star filled' : 'star'}>
                        ★
                    </span>
                ))}
            </div>
        </div>
    );
}

HostRating.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.string.isRequired
};

export default HostRating;