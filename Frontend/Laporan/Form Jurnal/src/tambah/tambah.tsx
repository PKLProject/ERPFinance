import { createSignal, type Component } from 'solid-js';



const App: Component = () => {
    return (
  <div>
    <div class = "bg"></div>
    <div class = "kotak"></div>
    <div><select class="select select-bordered select-sm w-full max-w-xs pc">
  <option disabled selected>Pilih ID COA </option>
  <option>001</option>
  <option>002</option>
  <option>003</option>
  <option>004</option>
  <option>005</option>
</select></div>
<span class = "mem">Tambah Data</span>
<span class = "lol">ID COA</span>
<div><select class="select select-bordered select-sm w-full max-w-xs mek">
  <option disabled selected>Pilih ID Faktur  </option>
  <option>001.14.355000, 001.34.72544, 001.42.887672.</option>
  <option>002.14.355000, 002.34.72544, 002.42.887672.</option>
  <option>003.14.355000, 003.34.72544, 003.42.887672.</option>
  <option>004.14.355000, 004.34.72544, 004.42.887672.</option>
  <option>005.14.355000, 005.34.72544, 005.42.887672.</option>
</select></div>
<span class = "oh">ID Faktur</span>
<div><select class="select select-bordered select-sm w-full max-w-xs heh">
  <option disabled selected>Pilih Tujuan Transaksi</option>
  <option>Pemasukan</option>
  <option>Pengeluaran</option>
</select></div>
<span class = "ih">Tujuan Transaksi</span>
<input type="text" placeholder="Isi Pemasukan" class="input input-bordered w-full max-w-xs loh" />
<input type="text" placeholder="Isi Pengeluaran" class="input input-bordered w-full max-w-xs hmm" />
<span class = "pe">Pemasukan</span>
<span class = "em">Pengeluaran</span>
<span class = "woi">Tanda Tangan</span>
<div class = "waw"></div>
<button class="btn btn-sm mzm">Kembali</button>
<button class="btn btn-sm cot">selanjutnya</button>
<span class = "now">Upload tanda tangan</span>

  </div>
    );
};

export default App;