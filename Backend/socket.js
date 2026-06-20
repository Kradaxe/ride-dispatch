const socketIo = require('socket.io');
const prisma = require('./db/db');

let io;

function initializeSocket(server) {
    io = socketIo(server, {
        cors: {
            origin: '*',
            methods: [ 'GET', 'POST' ]
        }
    });

    io.on('connection', (socket) => {
        console.log(`Client connected: ${socket.id}`);


        socket.on('join', async (data) => {
            //console.log('JOIN:', data);
            const { userId, userType } = data;

            if (userType === 'user') {
                await prisma.user.update({
                    where: { id: userId },
                    data: { socketId: socket.id }
                });
            } else if (userType === 'captain') {
                await prisma.captain.update({
                    where: { id: userId },
                    data: { socketId: socket.id }
                });
            }
        });


        socket.on('update-location-captain', async (data) => {

            //console.log("LOCATION DATA:", data);
            //console.log("userId =", data.userId);
            const { userId, location } = data;

            if (!location || location.ltd == null || location.lng == null) {
                return socket.emit('error', { message: 'Invalid location data' });
            }

            await prisma.captain.update({
                where: {
                    id: userId
                },
                data: {
                    latitude: location.ltd,
                    longitude: location.lng
                }
            });
        });

        socket.on('disconnect', async () => {

            await prisma.captain.updateMany({
                where: {
                    socketId: socket.id
                },
                data: {
                    socketId: null
                }
            });
        
            await prisma.user.updateMany({
                where: {
                    socketId: socket.id
                },
                data: {
                    socketId: null
                }
            });
        
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {

//console.log(messageObject);

    if (io) {
        io.to(socketId).emit(messageObject.event, messageObject.data);
    } else {
        console.log('Socket.io not initialized.');
    }
}

module.exports = { initializeSocket, sendMessageToSocketId };