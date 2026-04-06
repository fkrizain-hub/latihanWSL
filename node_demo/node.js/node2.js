const daftarKegiatan = [
    { id: 1, kegiatan: "Latihan Randai", lokasi: "Pendopo Kampus" },
    { id: 2, kegiatan: "Rapat Pengurus", lokasi: "Kamar Kosan" },
    { id: 3, kegiatan: "Belajar Sistem Operasi", lokasi: "Lab Komputer" }
];

function ambilData() {
    return JSON.stringify(daftarKegiatan);
}

module.exports = { ambilData };
