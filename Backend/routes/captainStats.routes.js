const express = require('express');

const router = express.Router();

const captainStatsController =
require('../controllers/captainStats.controller');

const authMiddleware =
require('../middlewares/auth.middleware');

router.get(
    '/',
    authMiddleware.authCaptain,
    captainStatsController.getCaptainStats
);

module.exports = router;