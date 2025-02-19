//Kasa-app\src\components\CollapseSection.jsx
import { ArrowIconCollapse } from './ArrowIconCollapse.jsx';
import PropTypes from 'prop-types';

function CollapsibleSection({ title, content, isOpen, onToggle }) {
    return (
        <div className="collapsible-section">
            <button
                className={`collapsible ${isOpen ? 'active' : ''}`}
                onClick={onToggle}
            >
                <span>{title}</span>
                <ArrowIconCollapse className={`ArrowIconCollapse ${isOpen ? 'rotate' : ''}`} />
            </button>
            <div className={`content ${isOpen ? 'active' : ''}`}>
                {typeof content === 'string' ? <p>{content}</p> : content}
            </div>
        </div>
    );
}

CollapsibleSection.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default CollapsibleSection;


