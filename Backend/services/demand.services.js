const prisma = require('../db/db');

async function recordDemand({
    pickupArea,
    activeCaptains,
    fare
}) {

    const now = new Date();

    await prisma.demandRecord.create({
        data: {
            pickupArea,

            hour: now.getHours(),

            dayOfWeek: now.getDay(),

            activeCaptains,

            rideRequests: 1,

            avgFare: fare
        }
    });
}

module.exports = {
    recordDemand
};