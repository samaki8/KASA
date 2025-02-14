// LogementTitle.jsx
import PropTypes from 'prop-types';

function LogementTitle({ title, location }) {
    return (
        <div className="title-location">
            <h1>{title}</h1>
            <p>{location}</p>
        </div>
    );
}

LogementTitle.propTypes = {
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};

export default LogementTitle;