
import PropTypes from 'prop-types';

function LogementHeader({ title, location, tags, host, rating }) {
    return (
        <div className="logement-header">
            <div className="title-location">
                <h1>{title}</h1>
                <p>{location}</p>
                <div className="tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            </div>

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
        </div>
    );
}
export default LogementHeader;

LogementHeader.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired
    }).isRequired,
    rating: PropTypes.string.isRequired
};