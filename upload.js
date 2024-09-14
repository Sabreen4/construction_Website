import React, { useState } from 'react';
import './upload.css';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Engineer');
  const [experience, setExperience] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = { name, email, role, experience, photo };

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Photo = reader.result;
      const userDetailsWithPhoto = { ...userDetails, photo: base64Photo };

      console.log(userDetailsWithPhoto);

      const endpoint = role.toLowerCase(); // 'engineer', 'architect', or 'maintenance'
      fetch(`http://localhost:5000/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userDetailsWithPhoto),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert(`Profile created successfully as ${role}`);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setName('');
      setEmail('');
      setRole('Engineer');
      setExperience('');
      setPhoto(null);
    };

    if (photo) {
      reader.readAsDataURL(photo);
    } else {
      console.log(userDetails);
    }
  };

  return (
    <body id="bodytag">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Engineer">Engineer</option>
            <option value="Architect">Architect</option>
            <option value="Maintenance">Maintenance</option>
          </select>
        </div>
        <div>
          <label>Experience:</label>
          <input
            type="text"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Photo:</label>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}
            accept="image/*"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </body>
  );
};

export default UserForm;
