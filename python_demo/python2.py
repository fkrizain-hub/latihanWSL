from datetime import datetime
from python1 import FILE_LOG

def tulis_log(aktivitas):

    waktu_sekarang = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open(FILE_LOG, "a") as file:
        file.write(f"[{waktu_sekarang}] {aktivitas}\n")
