const prisma = require('../db/db');

async function generateDemandRecord() {

    const areas = [
        'Connaught Place',
        'Noida Sector 18',
        'Cyber City',
        'Karol Bagh',
        'Rajouri Garden'
    ];

    const hour = Math.floor(Math.random() * 24);

    let rideRequests;

    // Rush hour simulation
    if (
        (hour >= 8 && hour <= 10) ||
        (hour >= 17 && hour <= 20)
    ) {
        rideRequests = 50 + Math.floor(Math.random() * 100);
    }
    else {
        rideRequests = 10 + Math.floor(Math.random() * 30);
    }

    const activeCaptains =
        20 + Math.floor(Math.random() * 60);

    const avgFare =
        100 + Math.floor(Math.random() * 300);

    await prisma.demandRecord.create({
        data: {
            pickupArea:
                areas[Math.floor(Math.random() * areas.length)],

            hour,

            dayOfWeek:
                Math.floor(Math.random() * 7),

            activeCaptains,

            rideRequests,

            avgFare
        }
    });
}

async function main() {

    for(let i = 0; i < 10000; i++) {
        await generateDemandRecord();
    }

    console.log('Generated 10,000 records');
}

main()
.catch(console.error)
.finally(() => prisma.$disconnect());