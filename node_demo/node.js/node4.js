const logger = require('./node1.js');
const tampilan = require('./node3.js');
const api = require('./node2.js');

function aturRute(req, res) {
    // Panggil fungsi logger
    logger.catatAktivitas(req);

    // Cek URL yang diminta
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(tampilan.halamanUtama());
    } 
    else if (req.url === '/api/jadwal') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(api.ambilData());
    } 
    else if (req.url === '/app') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Sistem Backend untuk aplikasi Sambung Rasa sedang dalam tahap pengembangan...");
    } 
    else {
        // Jika URL tidak dikenali
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Error 404: Halaman tidak ditemukan!");
    }
}

module.exports = { aturRute };
