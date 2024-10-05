# real-time-chat
assignment

1.How to run the application:
  Start the server: node server.js
  Start the client: node client.js
2.Architecture:
  The server listens for incoming connections.
  Clients can send and receive messages in real-time.
  Concurrency is handled through Node.js's async/non-blocking architecture.
  3.Assumptions:
  Only a simple text-based interface is needed for the client.
  No authentication or user management.
