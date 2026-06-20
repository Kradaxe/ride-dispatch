const mapService = require('./maps.service');
const crypto = require('crypto');
const prisma = require('../db/db');

async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };



    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;


}

module.exports.getFare = getFare;


function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}


    module.exports.createRide = async ({
        user, pickup, destination, vehicleType
    }) => {
        if (!user || !pickup || !destination || !vehicleType) {
           throw new Error('All fields are required');
        }

        const fare = await getFare(pickup, destination);



        const ride = await prisma.ride.create({
            data: {
                userId : user,
                pickup,
                destination,
                otp: getOtp(6),
                fare: fare[ vehicleType ]
            }
    })

    return ride;
}

module.exports.confirmRide = async ({
    rideId, captain
}) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const existingRide = await prisma.ride.findUnique({
    where: {
        id: rideId
    }
    });
    
    if (!existingRide) {
        throw new Error('Ride not found');
    }
    
    if (existingRide.status !== 'pending') {
        throw new Error('Ride already accepted');
    }

    await prisma.ride.update({
        where: {
            id: rideId
        },
        data: {
            status: 'accepted',
            captainId: captain.id
        }
    })

    const ride = await prisma.ride.findUnique({
        where: {
            id: rideId
        },
        include: {
            user: true,
            captain: true
        }
    });

    await prisma.captain.update({
        where: {
            id: captain.id
        },
        data: {
            acceptedRides: {
                increment: 1
            }
        }
    });

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;

}

module.exports.startRide = async ({ rideId, otp, captain }) => {
    if (!rideId || !otp) {
        throw new Error('Ride id and OTP are required');
    }

    const ride = await prisma.ride.findFirst({
        where: {
            id: rideId,
            captainId: captain.id
        },
        include: {
            user: true,
            captain: true
        }
    });

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'accepted') {
        throw new Error('Ride not accepted');
    }

    if (ride.otp !== otp) {
        throw new Error('Invalid OTP');
    }

    await prisma.ride.update({
        where: {
            id: rideId
        },
        data: {
            status: 'ongoing'
        }
    })
    ride.status = 'ongoing';

    return ride;
}

module.exports.endRide = async ({ rideId, captain }) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const ride = await prisma.ride.findFirst({
        where: {
            id: rideId,
            captainId: captain.id
        },
        include: {
            user: true,
            captain: true
        }
    });

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'ongoing') {
        throw new Error('Ride not ongoing');
    }

    await prisma.ride.update({
        where: {
            id: rideId
        },
        data: {
            status: 'completed'
        }
    })

    await prisma.captain.update({
        where: {
            id: captain.id
        },
        data: {
            totalEarnings: {
                increment: ride.fare
            },
            completedRides: {
                increment: 1
            }
        }
    });

    return ride;
}

