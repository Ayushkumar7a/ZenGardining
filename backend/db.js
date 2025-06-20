const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/local";

const connectToMongo = async() => {
    await mongoose.connect(mongoURI).then(() => {
        console.log('Database connect successfully');
    }).catch(err => {
        console.error('Database connection error:', err);
    })
}

module.exports = connectToMongo;