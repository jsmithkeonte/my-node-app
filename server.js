const express = require('express');
const app = express();

const PORT = 3000;

// Middleware to parse incoming request bodies
app.use(express.json());  // For parsing application/json
app.use(express.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

// Root route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// About route
app.get('/about', (req, res) => {
    res.send('This is the About page.');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('This is the Contact page.');
});

// Services route
app.get('/services', (req, res) => {
    res.send('This is the Services page.');
});

// User route with dynamic parameter
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

// Start the server and listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
