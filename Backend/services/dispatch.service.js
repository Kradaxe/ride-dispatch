function calculateCaptainScore(
    captain,
    rideLatitude,
    rideLongitude,
    demandMultiplier = 1
) {

    const distance = calculateDistance(
        rideLatitude,
        rideLongitude,
        captain.latitude,
        captain.longitude
    );

    const distanceScore =
        Math.max(0, 100 - distance * 10);

    const acceptanceRate =
        captain.acceptedRides > 0
            ? (
                (captain.acceptedRides - captain.cancelledRides)
                / captain.acceptedRides
            ) * 100
            : 50;

    const experienceScore =
        Math.min(
            captain.completedRides,
            100
        );

    const ratingScore =
        captain.rating * 20;

    const score =
        (
            distanceScore * 0.35 +
            acceptanceRate * 0.25 +
            ratingScore * 0.20 +
            experienceScore * 0.10 +
            demandMultiplier * 10 * 0.10
        );

    return score;
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
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    const c =
        2 * Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}

function rankCaptains(
    captains,
    rideLatitude,
    rideLongitude,
    demandMultiplier
) {

    return captains
        .map(captain => ({
            ...captain,
            score: calculateCaptainScore(
                captain,
                rideLatitude,
                rideLongitude,
                demandMultiplier
            )
        }))
        .sort((a, b) => b.score - a.score);

}

module.exports = {
    rankCaptains
};