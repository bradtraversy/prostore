import WebSocket from 'ws';

const socket = new WebSocket('ws://localhost:6432/');

// Handle WebSocket connection opening
socket.onopen = () => {
    console.log('Connected to the WebSocket server.');
    // Send a message to the server
    socket.send('Hello Server!');
};

// Handle incoming messages
socket.onmessage = (event: MessageEvent) => {
    console.log('Message from server:', event.data);
};

// Handle errors
socket.onerror = (error: Event) => {
    console.error('WebSocket error occurred:', error);
};

// Handle WebSocket closure
socket.onclose = (event: CloseEvent) => {
    console.log(`WebSocket connection closed. Code: ${event.code}, Reason: ${event.reason}`);
};
