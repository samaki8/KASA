import PropTypes from 'prop-types';

export const ArrowIconNext = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="80"
        viewBox="0 0 48 80"
        fill="none"
        className={className}
    >
        <path d="M0.96 7.78312L8.08 0.703125L47.64 40.3031L8.04 79.9031L0.96 72.8231L33.48 40.3031L0.96 7.78312Z" fill="white" />
    </svg>
);

ArrowIconNext.propTypes = {
    className: PropTypes.string
};
