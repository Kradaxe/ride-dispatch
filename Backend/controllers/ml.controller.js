const mlService = require('../services/ml.services');
const prisma = require('../db/db');
const {
    getDemandInsight
} = require('../services/mlInsights.service');
const {
    getBestDemandArea
} = require(
    '../services/areaPrediction.service'
);

module.exports.predictDemand = async (req, res) => {
    try {

        const hour = new Date().getHours();

        const dayOfWeek = new Date().getDay();

        const activeCaptains = await prisma.captain.count({
            where: {
                socketId: {
                    not: null
                }
            }
        });

        const fareResult = await prisma.ride.aggregate({
            _avg: { 
                fare: true
            }
        });

        const avgFare = fareResult._avg.fare || 250;

        const areaPredictions =
        await getBestDemandArea(
            hour,
            dayOfWeek,
            activeCaptains,
            avgFare
        );

        const prediction =
        await mlService.predictDemand(
            hour,
            dayOfWeek,
            activeCaptains,
            avgFare,
            areaPredictions.bestArea
        );
        
        const insight = getDemandInsight(
            prediction.predictedDemand
        );
        
        return res.status(200).json({
        ...prediction,
        insight,
        bestArea:areaPredictions.bestArea,
        allAreas:areaPredictions.allAreas,
        hour,
        dayOfWeek,
        activeCaptains,
        avgFare
        });

    } catch (err) {

        console.log(err);

        return res.status(500).json({
            message: err.message
        });

    }
};