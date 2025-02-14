// CollapseSections.jsx
// CollapseSections.jsx
import { useState } from 'react';
import CollapsibleSection from './CollapseSection';
import PropTypes from 'prop-types';

function CollapseSections({ sections }) {
    const [openSection, setOpenSection] = useState(null);

    const handleToggle = (id) => {
        setOpenSection((prevId) => (prevId === id ? null : id));
    };

    return (
        <>
            {sections.map((section) => (
                <CollapsibleSection
                    key={section.id}
                    title={section.title}
                    content={section.content}
                    isOpen={section.id === openSection}
                    onToggle={() => handleToggle(section.id)}
                />
            ))}
        </>
    );
}

CollapseSections.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
        })
    ).isRequired,
};

export default CollapseSections;

