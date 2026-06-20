const prisma = require('../db/db');

module.exports.getCaptainStats = async (req, res) => {
    try {

        const completedRides = await prisma.ride.count({
            where: {
                captainId: req.captain.id,
                status: 'completed'
            }
        });

        res.status(200).json({
            completedRides
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }
};