function catatAktivitas(req) {
    const waktu = new Date().toLocaleTimeString();
    console.log(`[${waktu}] Ada request masuk ke URL: ${req.url} (Metode: ${req.method})`);
}

module.exports = { catatAktivitas };console.log('Halo dari WSL Node.js');
