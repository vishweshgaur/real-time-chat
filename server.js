const net = require('net');

// Store all connected clients
let clients = [];

// Create a server
const server = net.createServer((socket) => {
    socket.write('Welcome to the chat!\n');
    clients.push(socket);

    // Broadcast messages to all clients
    socket.on('data', (data) => {
        clients.forEach(client => {
            if (client !== socket) {
                client.write(data.toString());
            }
        });
    });

    // Handle client disconnection
    socket.on('end', () => {
        clients = clients.filter(client => client !== socket);
    });

    socket.on('error', (err) => {
        console.log(`Error: ${err.message}`);
    });
});

// Start listening on port 3000
server.listen(3000, () => {
    console.log('Server started on port 3000');
});
