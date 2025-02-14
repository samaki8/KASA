
//Kasa-app\src\components\LogementHeader.jsx
// LogementHeader.jsx
import PropTypes from 'prop-types';
import LogementTitle from './LogementTitle';
import TagList from './TagList';
import HostRating from './HostRating';

function LogementHeader({ title, location, tags, host, rating }) {
    return (
        <div className="logement-header">
            <div>
                <LogementTitle title={title} location={location} />
                <TagList tags={tags} />
            </div>
            <HostRating host={host} rating={rating} />
        </div>
    );
}

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

export default LogementHeader;
