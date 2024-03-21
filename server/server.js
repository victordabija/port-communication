const net = require('net');

const port = '8080'

const server = net.createServer(socket => {
    const clientAddress = socket.remoteAddress;
    const clientPort = socket.remotePort;

    console.log(`Client connected: ${clientAddress}:${clientPort}`);

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

server.listen(port, '0.0.0.0');

