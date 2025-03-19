const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = mongoose.connect(process.env.MONGO_URL);
// const connectDB = mongoose.connect("mongodb+srv://raktimsarkar373:raksark1234@cluster0.sijxz.mongodb.net/myDB?retryWrites=true&w=majority&appName=Cluster0");
module.exports = {
    connectDB
};
