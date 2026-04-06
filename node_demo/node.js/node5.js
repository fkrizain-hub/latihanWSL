const http = require('http');
const router = require('./node4.js');

const PORT = 3001; // Port localhost yang akan dipakai

const server = http.createServer((req, res) => {
    router.aturRute(req, res);
});

server.listen(PORT, () => {
    console.log("=========================================");
    console.log(`🚀 Server Node.js menyala di WSL!`);
    console.log(`Silakan buka browser dan akses:`);
    console.log(`http://localhost:${PORT}`);
    console.log("Tekan Ctrl + C di terminal untuk mematikan server.");
    console.log("=========================================");
});
