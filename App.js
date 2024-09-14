/*import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './intro'; // Make sure this matches the actual filename
import Engineer from './engineer';
import Login from './login';
import Architecture from './architecture';
import Maintenance from './maintenance';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/engineer" element={<Engineer />} />
                <Route path="/architecture" element={<Architecture />} />
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Intro />} />
            </Routes>
        </Router>
    );
}

export default App;*/
// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Intro from './intro';
import Menu from './menu';
import Login from './login';
import Engineer from './engineer';
import Architecture from './architecture'; 
import Maintenance from './maintenance';
import UserForm from './upload';
import Signup from './signup';


const App = () => {
    return (
        <Router>
            <Routes>
            <Route path="/signup" element={<Signup />} />
                <Route path="/engineer" element={<Engineer />} />
                <Route path="/upload" element={<UserForm />} />
               <Route path="/architecture" element={<Architecture />} /> 
                <Route path="/maintenance" element={<Maintenance />} />
                <Route path="/" element={<Intro />} />
               {/* <Route path="/signup" element={<Signup />} />*/}
                <Route path="/menu" element={<Menu />} />
                <Route path="/login" element={<Login />} />
                {/* Define other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
