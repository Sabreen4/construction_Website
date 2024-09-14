const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

app.use(bodyParser.json({ limit: '10mb' })); // Increase limit to handle base64 images
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Construction', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Profile Schemas
const profileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    experience: { type: String, required: true },
    photo: { type: String, required: true },
});

const EngineerProfile = mongoose.model('EngineerProfile', profileSchema, 'engineer_profile');
const ArchitectProfile = mongoose.model('ArchitectProfile', profileSchema, 'architecture_profile');
const MaintenanceProfile = mongoose.model('MaintenanceProfile', profileSchema, 'maintenance_profile');

// Signup Route
app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Signup error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Find the user by username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Profile Submission Routes
app.post('/engineer', async (req, res) => {
    try {
        const newProfile = new EngineerProfile(req.body);
        await newProfile.save();
        res.status(201).json({ message: 'Engineer profile created successfully' });
    } catch (error) {
        console.error('Error creating engineer profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/architect', async (req, res) => {
    try {
        const newProfile = new ArchitectProfile(req.body);
        await newProfile.save();
        res.status(201).json({ message: 'Architect profile created successfully' });
    } catch (error) {
        console.error('Error creating architect profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.post('/maintenance', async (req, res) => {
    try {
        const newProfile = new MaintenanceProfile(req.body);
        await newProfile.save();
        res.status(201).json({ message: 'Maintenance profile created successfully' });
    } catch (error) {
        console.error('Error creating maintenance profile:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
