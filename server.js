// server.js
const app = require('./src/app'); // Root lookup: look into src/app
const db = require('./src/config/db'); // Root lookup: look into src/config/db
require('dotenv').config();

const PORT = process.env.PORT || 3000;

async function bootstrapSystem() {
    try {
        
        // Diagnostic Step: Confirm database socket connectivity before opening port to internet traffic
        await db.query('SELECT 1');
        console.log(' DATABASE: MySQL Connection Pool Hooked and Active.');

        // Trigger OS system calls to allocate and monitor network sockets
        app.listen(PORT, () => {
            console.log(` RUNTIME : Engine Online. Listening on: http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error(' CRITICAL: Hardware/Database bootstrap handshakes failed.');
        console.error(error.message);
        process.exit(1); // Force terminate node engine process due to core structural failures
    }
}

bootstrapSystem();