interface SetoranKeluar {
  tabungan_keluar: Number;
  tanggal_setoran_keluar: string;
}

export interface NasabahColType {
  nama: string;
  total_tabungan: number;
  setoran_keluar: SetoranKeluar[];
}
