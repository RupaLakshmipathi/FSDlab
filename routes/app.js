const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS!');
});

// Handling routes
app.get('/about', (req, res) => {
    res.send('About Page');
});

// Route parameter
app.get('/user/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});

// Query parameter
app.get('/search', (req, res) => {
    res.send('Search: ' + req.query.name);
});

// URL building
app.get('/link', (req, res) => {
    const url = '/user/101';
    res.send('Built URL: ' + url);
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
