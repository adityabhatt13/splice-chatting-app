const mongoose = require('mongoose');

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async () => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.hdkphkr.mongodb.net/splice`;
    try {
        await mongoose.connect(URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Error from MongoDB Connection: ", error.message);
    }
}

module.exports = connection;
