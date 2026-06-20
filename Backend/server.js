const http = require('http');
const app = require('./app');
const prisma = require('./db/db');
const {
    initializeSocket
} = require('./socket');

const port =
process.env.PORT || 3000;

const server =
http.createServer(app);

initializeSocket(server);

async function startServer() {

    try {

        await prisma.$connect();

        console.log(
            'PostgreSQL Connected'
        );

        server.listen(
            port,
            () => {

            console.log(
                `Server is running on port ${port}`
            );

        });

    } catch (error) {

        console.error(
            'Database connection failed:',
            error
        );

        process.exit(1);
    }
}

startServer();

process.on(
    'SIGINT',
    async () => {

    await prisma.$disconnect();

    console.log(
        'Prisma disconnected'
    );

    process.exit(0);
});