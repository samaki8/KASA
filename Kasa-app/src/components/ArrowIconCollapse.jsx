//Kasa-app/src/components/ArrowIconCollapse.jsx
import PropTypes from 'prop-types';

export const ArrowIconCollapse = ({ className }) => (
  <svg
    className={className}
    style={{ transition: 'transform 0.3s ease' }}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white" />
  </svg>
);

ArrowIconCollapse.propTypes = {
  className: PropTypes.string
};
