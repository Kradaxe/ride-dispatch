// routes/ml.routes.js

const express = require('express');
const router = express.Router();
const mlController = require('../controllers/ml.controller');

router.get('/demand', mlController.predictDemand);

module.exports = router;