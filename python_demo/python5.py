import os
from python4 import tambah_makanan, tampilkan_semua_data
from python1 import NAMA_APLIKASI

def bersihkan_layar_terminal():
    os.system('clear')

def mulai_program():
    bersihkan_layar_terminal()
    while True:
        print(f"🌟 Selamat datang di {NAMA_APLIKASI} 🌟")
        print("1. Tambah Data Penyelamatan Makanan")
        print("2. Lihat Daftar Makanan")
        print("3. Keluar Program")
        pilihan = input("Pilih angka menu (1/2/3): ")
        if pilihan == '1':
            nama = input("Masukkan nama makanan: ")
            porsi = input("Masukkan jumlah porsi: ")
            tambah_makanan(nama, porsi)
        elif pilihan == '2':
            tampilkan_semua_data()
        elif pilihan == '3':
            print("Keluar dari program. Sampai jumpa!")
            break
        else:
            print("❌ Pilihan tidak valid, coba lagi.")
        input("\nTekan Enter untuk kembali ke menu utama...")
        bersihkan_layar_terminal()

if __name__ == "__main__":
    mulai_program()
