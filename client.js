const net = require('net');
const readline = require('readline');

// Set up readline interface for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Connect to the server
const client = net.createConnection({ port: 3000 }, () => {
    console.log('Connected to the server!\n');
    
    rl.addListener('line', (input) => {
        client.write(input);  // Send input to the server
    });
});

// Display incoming messages
client.on('data', (data) => {
    console.log(`Message: ${data}`);
});

client.on('end', () => {
    console.log('Disconnected from the server');
});

client.on('error', (err) => {
    console.log(`Error: ${err.message}`);
});
