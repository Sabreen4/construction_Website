import React, { useState } from 'react';
import './engineer.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

const Engineer = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const engineers = [
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

    const filteredEngineers = engineers.filter(engineer =>
        engineer.place.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleNavigateBack = () => {
        navigate('/intro');
    };

    return (
        <div className="engineer-container">
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
                {filteredEngineers.map((engineer, index) => (
                    <div key={index} className="profile">
                        <img src={engineer.profilePic} alt={engineer.name} className="profile-pic" />
                        <h2>{engineer.name}</h2>
                        <p>{engineer.place}</p>
                    </div>
                ))}
            </div>
            <button className="back" onClick={handleNavigateBack}>
                <FontAwesomeIcon icon={faLongArrowAltLeft} />
            </button>
        </div>
    );
};

export default Engineer;
