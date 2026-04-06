import json
import os
from python1 import FILE_DATABASE

def muat_data():
    if not os.path.exists(FILE_DATABASE):
        return []
    with open(FILE_DATABASE, "r") as file:
        return json.load(file)

def simpan_data(data):
      with open(FILE_DATABASE, "w") as file:
        json.dump(data, file, indent=4)
