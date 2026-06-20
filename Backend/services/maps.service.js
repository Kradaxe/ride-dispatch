const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    //const apiKey = process.env.GOOGLE_MAPS_API;
    //const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
    try {
        const response = await axios.get(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=jsonv2`
        );
        if (response.data.status === 'OK') {
            return {
                ltd: parseFloat(response.data[0].lat),
                lng: parseFloat(response.data[0].lon)
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime = async (
        origin,
        destination
        ) => {

        const originCoords =
            await getCoordinates(origin);

        const destinationCoords =
            await getCoordinates(destination);

        const url =
        `https://router.project-osrm.org/route/v1/driving/` +
        `${originCoords.lng},${originCoords.lat};` +
        `${destinationCoords.lng},${destinationCoords.lat}` +
        `?overview=false`;

        const response = await axios.get(url);

        const route =
            response.data.routes[0];

        return {
            distance: {
                value: route.distance
            },
            duration: {
                value: route.duration
            }
        };
}

module.exports.getAutoCompleteSuggestions =
    async (input) => {

        const response =
            await axios.get(
                `https://photon.komoot.io/api/?q=${encodeURIComponent(input)}`
            );

        return response.data.features.map(
            item => item.properties.name
        );
    };

module.exports.getCaptainsInTheRadius =
    async (lat, lng, radiusKm) => {

        const captains =
            await prisma.captain.findMany({
                where: {
                    latitude: {
                        not: null
                    },
                    longitude: {
                        not: null
                    }
                }
            });

        return captains.filter(captain => {

            const distance =
                calculateDistance(
                    lat,
                    lng,
                    captain.latitude,
                    captain.longitude
                );

            return distance <= radiusKm;

        });
}

async function getCoordinates(address) {

    const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=jsonv2`
    );

    return {
        lat: response.data[0].lat,
        lng: response.data[0].lon
    };
}

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371;

    const dLat =
        (lat2 - lat1) *
        Math.PI / 180;

    const dLon =
        (lon2 - lon1) *
        Math.PI / 180;

    const a =
        Math.sin(dLat/2) *
        Math.sin(dLat/2) +
        Math.cos(lat1*Math.PI/180) *
        Math.cos(lat2*Math.PI/180) *
        Math.sin(dLon/2) *
        Math.sin(dLon/2);

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1-a)
        );

    return R * c;
}