const prisma = require('../db/db');

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password
}) => {

    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    const user =
    await prisma.user.create({
        data: {
            firstname,
            lastname,
            email,
            password
        }
    });

    return user;
};