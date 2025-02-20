// Kasa-app\src\components\CollapseSection.jsx
import { ArrowIconCollapse } from './ArrowIconCollapse.jsx';
import PropTypes from 'prop-types';
import { useState } from 'react';

function CollapsibleSection({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

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
};

export default CollapsibleSection;
