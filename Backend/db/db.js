const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = prisma;

// function connectToDb() {
//     mongoose.connect(process.env.DB_CONNECT
//     ).then(() => {
//         console.log('Connected to DB');
//     }).catch(err => console.log(err));
// }


// module.exports = connectToDb;