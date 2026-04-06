from python3 import muat_data, simpan_data
from python2 import tulis_log

def tambah_makanan(nama_makanan, jumlah_porsi):
    data_saat_ini = muat_data()
    item_baru = {
        "makanan": nama_makanan,
        "porsi": int(jumlah_porsi),
        "status": "Tersedia"
    }
    data_saat_ini.append(item_baru)
    simpan_data(data_saat_ini)
    tulis_log(f"Menambahkan stok: {nama_makanan} ({jumlah_porsi} porsi)")
    print(f"✅ Berhasil menyimpan {jumlah_porsi} porsi {nama_makanan} ke sistem!")

def tampilkan_semua_data():
    data = muat_data()
    print("\n=== Data Makanan Terselamatkan ===")
    if not data:
        print("Data masih kosong. Belum ada donasi.")
    for indeks, item in enumerate(data, 1):
        print(f"{indeks}. {item['makanan']} - {item['porsi']} porsi [{item['status']}]")
    print("==================================\n")
    tulis_log("User melihat daftar makanan.")
