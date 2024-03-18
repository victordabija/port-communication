const net = require('net');

const port = '8080'

const server = net.createServer(socket => {
    console.log('Client connected');

    socket.on('data', data => {
        console.log('Received:', data.toString());
        socket.write('Echo: ' + data);
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

