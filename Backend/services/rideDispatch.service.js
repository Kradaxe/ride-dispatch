const {
    sendMessageToSocketId
} = require('../socket');

const pendingDispatches = new Map();

async function dispatchRideToCaptains(
    ride,
    rankedCaptains
) {

    pendingDispatches.set(
        ride.id,
        {
            currentIndex: 0,
            captains: rankedCaptains
        }
    );

    sendToCaptain(
        ride.id,
        rankedCaptains,
        0,
        ride
    );

}

function sendToCaptain(
    rideId,
    captains,
    index,
    ride
) {

    if (index >= captains.length) {

        console.log(
            "No captain accepted ride"
        );

        pendingDispatches.delete(rideId);

        return;
    }

    const captain =
        captains[index];

    console.log(
        "Sending ride to:",
        captain.firstname
    );

    sendMessageToSocketId(
        captain.socketId,
        {
            event: "new-ride",
            data: ride
        }
    );

    setTimeout(() => {

        const dispatch =
            pendingDispatches.get(
                rideId
            );

        if (!dispatch) {
            return;
        }

        if (
            dispatch.currentIndex ===
            index
        ) {

            dispatch.currentIndex++;

            sendToCaptain(
                rideId,
                captains,
                index + 1,
                ride
            );

        }

    }, 15000);

}

module.exports = {
    pendingDispatches,
    dispatchRideToCaptains
};