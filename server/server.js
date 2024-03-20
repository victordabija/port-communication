const net = require('net');

const port = '1000'

const server = net.createServer(socket => {
    const clientAddress = socket.remoteAddress
    console.log(`Client connected: ${clientAddress}`);

    socket.on('data', data => {
        console.log('Received:', data.toString());
    });

    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.on('error', err => {
        console.error('Socket error:', err.message);
    });
});

server.on('listening', () => {
    console.log(`Server listening on port ${port}`);
});

server.on('error', err => {
    console.error('Server error:', err.message);
});

server.listen(port);

