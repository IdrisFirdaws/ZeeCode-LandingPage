import React from 'react';

const Sidebar = ({ subLessons, toggleSidebar, sidebarOpen }) => {
    const handleScrollToSubLesson = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
            <div className="subTitle" style={{ textAlign: 'center' }}>Sublessons</div>
            <ul>
                {subLessons.map((subLesson) => (
                    <li key={subLesson.id}>
                        <button
                            onClick={() => {
                                handleScrollToSubLesson(subLesson.id);
                                toggleSidebar(); // Close the sidebar after navigating
                            }}
                        >
                            {subLesson.title}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
