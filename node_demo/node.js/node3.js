function halamanUtama() {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Server WSL Berjalan</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                a { color: #007BFF; text-decoration: none; font-weight: bold; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Halo dari Ubuntu WSL! 🐧</h1>
            <p>Web server lokal ini berhasil menyala.</p>
            <p>Coba klik link ini untuk melihat data JSON: <a href="/api/jadwal">Lihat Data Jadwal</a></p>
            <p>Atau lihat status proyek: <a href="/app">Status Sambung Rasa</a></p>
        </body>
        </html>
    `;
}

module.exports = { halamanUtama };
