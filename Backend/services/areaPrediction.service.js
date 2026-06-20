const mlService = require('./ml.services');

const AREAS = [
    "Noida Sector 18",
    "Rajouri Garden",
    "Karol Bagh",
    "Connaught Place"
];

async function getBestDemandArea(
    hour,
    dayOfWeek,
    activeCaptains,
    avgFare
) {

    const predictions = [];

    for (const area of AREAS) {

        const result =
            await mlService.predictDemand(
                hour,
                dayOfWeek,
                activeCaptains,
                avgFare,
                area
            );

        predictions.push({
            area,
            demand: result.predictedDemand
        });

    }

    predictions.sort(
        (a, b) => b.demand - a.demand
    );

    return {
        bestArea: predictions[0],
        allAreas: predictions
    };

}

module.exports = {
    getBestDemandArea
};