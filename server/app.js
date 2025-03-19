const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://mongo:27017/mydb";

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Hello from Docker Compose!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
