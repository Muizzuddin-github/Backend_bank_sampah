export interface RegisterAdmin {
  username: string;
  password: string;
}

export interface LoginAdmin {
  username: string;
  password: string;
}

export interface RegisterNasabah {
  nama: string;
}

export interface SetoranMasukType {
  tanggal_setoran: string;
  jenis_sampah: string;
  jumlah_setoran: number;
  harga_satuan?: number;
}
