import React, { useState } from 'react';
import './architecture.css'; // Update the CSS import
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

const Architecture = () => { // Change component function name
    const [searchTerm, setSearchTerm] = useState('');
    const architects = [ // Update variable name
        { name: 'John Doe', place: 'New York', profilePic: 'john.jpg' },
        { name: 'Jane Smith', place: 'Los Angeles', profilePic: 'jane.jpg' },
        { name: 'Michael Johnson', place: 'Chicago', profilePic: 'michael.jpg' },
    ];

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic if needed
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredArchitects = architects.filter(architect => // Update variable name
        architect.place.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNavigateBack = () => {
        navigate('/intro');
    };

    return (
        <div className="architecture-container"> {/* Update class name */}
            <form onSubmit={handleSubmit}>
                <input
                    type="search"
                    id="search"
                    placeholder="Search by place"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                {/* Consider adding a submit button here if needed */}
            </form>
            <div className="profiles">
                {filteredArchitects.map((architect, index) => ( // Update variable name
                    <div key={index} className="profile">
                        <img src={architect.profilePic} alt={architect.name} className="profile-pic" />
                        <h2>{architect.name}</h2>
                        <p>{architect.place}</p>
                    </div>
                ))}
            </div>
            <button className="back" onClick={handleNavigateBack}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </button>
        </div>
    );
};

export default Architecture; // Update export default
