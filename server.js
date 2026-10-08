// Minimal PeerJS signaling server (replaces the free 0.peerjs.com)
const { PeerServer } = require('peer');
const port = Number(process.env.PORT) || 9000;
PeerServer({ port, path: '/', proxied: true, allow_discovery: false, corsOptions: { origin: true } });
console.log('PeerJS signaling server listening on', port);
