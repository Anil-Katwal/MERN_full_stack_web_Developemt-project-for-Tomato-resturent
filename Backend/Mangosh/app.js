const express = require('express');
const app = express();
const userModel = require('./usermodel'); // Ensure this path is correct

// Root route
app.get('/', (req, res) => {
    res.send("Hey Anil");
});

// Route to create a user
app.get('/create', async (req, res) => {
    try {
        let createdUser = await userModel.create({
            name: "Anil",
            email: "anilkatwal65@gmail.com",
            username: "anil",
        });
        res.send(createdUser);
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while creating the user' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
