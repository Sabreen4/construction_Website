import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className='menubar'>
            <h2 id="profile"><Link to="/profile">My Profile</Link></h2>
            <h3 id="settings"><Link to="/settings">Settings</Link></h3>
            <h3 id="upload"><Link to="/upload">Add Model</Link></h3>
        </div>
    );
}

export default Menu;

