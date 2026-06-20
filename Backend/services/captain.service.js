const prisma = require('../db/db');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = await prisma.captain.create({
        data : {
            firstname,
            lastname,
            email,
            password,
            vehicleColor: color,
            vehiclePlate: plate,
            vehicleCapacity: parseInt(capacity),
            vehicleType
        }
    })

    return captain;
}