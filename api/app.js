const express = require('express');
const jwt = require('jsonwebtoken');

const ClientService = require('./clients/client.service');
const auth = require('./middleware/auth');
const isAdmin = require('./middleware/admin');

const app = express();

app.use(express.json());

// Login
app.post('/login', (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;

        // Validate user input
        if (!(email && password)) {
            res.status(400).send('All input is required');
        }

        const client = ClientService.findOne(email);

        // Find user and compare passwords
        if (!client || password != client.password) {
            return res.status(400).send('No such user or wrong password');
        }

        // Create token
        const token = jwt.sign(
            { email: client.email, role: client.role },
            process.env.TOKEN_KEY,
            {
                expiresIn: '2h',
            }
        );

        // return token
        res.status(200).json({ token });
    } catch (err) {
        console.log(err);
    }
});

app.get('/home', auth, (req, res) => {
    res.status(200).json(req.user);
});

app.get('/admin', auth, isAdmin, (req, res) => {
    res.status(200).json({ ...req.user, data: 'Secret data' });
});

module.exports = app;