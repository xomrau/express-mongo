const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('dotenv').config();

//mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/', function (req, res, next) {
    if (mongoose) {
        res.json({ isMongooseOk: mongoose.connection.readyState });
    } else {
        res.json({ isMongooseOk: false });
    }
});

module.exports = router;