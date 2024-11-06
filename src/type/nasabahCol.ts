interface SetoranKeluar {
  tabungan_keluar: Number;
  tanggal_setoran_keluar: string;
}

export interface NasabahColType {
  nama: string;
  total_tabungan: number;
  total_setoran: number;
  setoran_keluar: SetoranKeluar[];
}

export interface NasabahColTypeAggregate {
  nama: string;
  total_setoran: number;
  total_tabungan: number;
}
