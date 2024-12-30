const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mongopractice')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define the user schema
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String
});

// Export the user model
module.exports = mongoose.model('User', userSchema);
