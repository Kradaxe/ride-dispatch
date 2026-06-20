const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket');
const prisma = require('../db/db');
const demandService = require('../services/demand.services');
const {
    rankCaptains
} = require('../services/dispatch.service');
const {
    dispatchRideToCaptains,
    pendingDispatches
} = require('../services/rideDispatch.service');


module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ user: req.user.id, pickup, destination, vehicleType });
        res.status(201).json(ride);

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup); 
        const captainsInRadius = await mapService.getCaptainsInTheRadius(pickupCoordinates.ltd, pickupCoordinates.lng, 2);
        
        await demandService.recordDemand({
            pickupArea: pickup,
            activeCaptains: captainsInRadius.length,
            fare: ride.fare
        });

        const rideWithUser = await prisma.ride.findUnique({
            where: {
                id: ride.id
            },
            include: {
                user: true
            }
        });

        delete rideWithUser.otp;

        const rankedCaptains =
        rankCaptains(
            captainsInRadius,
            pickupCoordinates.ltd,
            pickupCoordinates.lng,
            1
        );

        console.log(
            rankedCaptains.map(c => ({
                name: c.firstname,
                score: c.score
            }))
        );

        await dispatchRideToCaptains(
            rideWithUser,
            rankedCaptains
        );

    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }

};

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.confirmRide({ rideId, captain: req.captain });
        pendingDispatches.delete(rideId);

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

module.exports.startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;

    try {
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });

        //console.log(ride);

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports.endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.endRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        })



        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}