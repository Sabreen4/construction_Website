import React, { useState } from 'react';
import './maintenance.css';

const Maintenance = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const maintenances = [
        { name: 'John Doe', place: 'New York', profilePic: 'john.jpg' },
        { name: 'Jane Smith', place: 'Los Angeles', profilePic: 'jane.jpg' },
        { name: 'Michael Johnson', place: 'Chicago', profilePic: 'michael.jpg' },
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMaintenances = maintenances.filter(maintenance =>
        maintenance.place.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="maintenance-container">
            <input
                type="search"
                id="search"
                placeholder="Search by place"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="profiles">
                {filteredMaintenances.map((maintenance, index) => (
                    <div key={index} className="profile">
                        <img src={maintenance.profilePic} alt={maintenance.name} className="profile-pic" />
                        <h2>{maintenance.name}</h2>
                        <p>{maintenance.place}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Maintenance;
