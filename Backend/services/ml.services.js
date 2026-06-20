const { exec } = require('child_process');

module.exports.predictDemand = (
    hour,
    dayOfWeek,
    activeCaptains,
    avgFare,
    pickupArea
) => {
    return new Promise((resolve, reject) => {

        exec(
            `python ml/predict.py ${hour} ${dayOfWeek} ${activeCaptains} ${avgFare} "${pickupArea}"`,
            (error, stdout) => {

                if (error) {
                    return reject(error);
                }

                resolve(JSON.parse(stdout));
            }
        );

    });
};