import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './intro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="intro">
            <div className="login">
                <nav className="nav-bar">
                    <FontAwesomeIcon icon={faBars} id="bar" onClick={toggleMenu} />
                    <Link className="child2" to="/login">Login/Signin</Link>
                </nav>
                {menuVisible && (
                    <div className="menubar">
                        <FontAwesomeIcon icon={faTimes} onClick={toggleMenu} />
                        <Link to="/profile" className="menulist">
                            <h2 id="profile"><FontAwesomeIcon icon={["fas", "user"]} /> My Profile</h2>
                        </Link>
                        <Link to="/settings" className="menulist">
                            <h3 id="settings"><FontAwesomeIcon icon={["fas", "gear"]} /> Settings</h3>
                        </Link>
                        <Link to="/upload" className="menulist">
                            <h3 id="upload"><FontAwesomeIcon icon={["fas", "arrow-up-from-bracket"]} /> Add Model</h3>
                        </Link>
                    </div>
                )}
            </div>
            <div id="intro-head">
                <div className="types">
                    <Link to="/engineer" className="Child3">
                        <h1 id="construction">Construction</h1>
                    </Link>
                    <Link to="/architecture" className="Child3">
                        <h1 id="architecture">Architecture</h1>
                    </Link>
                    <Link to="/maintenance" className="Child3">
                        <h1 id="maintenance">Maintenance</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Intro;
