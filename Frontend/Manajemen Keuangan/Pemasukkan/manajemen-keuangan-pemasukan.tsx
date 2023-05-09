import { Component, createSignal } from 'solid-js';
import imageeSrc from '../assets/logoo.png'
import imageSrc from '../assets/profil.png'


const App: Component = () => {
  const [image, setImage] = createSignal(imageeSrc);
  const [imagee, setimage] = createSignal(imageSrc);
  return (
    <div class="masok">
      <div class="nab">
        <div class="navbar bg-base-100 ppp">
          <div class="flex-1">
            <img src={image()} alt="Alternative Text" class="logoo" elementtiming={''} fetchpriority={'high'} />
          </div>

          <div class="flex-none">
            <ul class="menu menu-horizontal px-1 ets">
              <li><a>Dashboard</a></li>
              <li tabindex="0">
                <a>
                  Laporan Keuangan
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul class="p-2 bg-base-100 p">
                  <li><a>Jurnal</a></li>
                  <li><a>Neraca Keuangan</a></li>
                  <li><a>Arus Kas</a></li>
                  <li><a>Pajak</a></li>
                  <li><a>Laba Rugi</a></li>
                </ul>
              </li>
              <li><a>Rencana Keuangan</a></li>
              <li class="tes"><a>Manajemen Keuangan</a></li>
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img src={imagee()} alt="Alternative Text" class="profil" elementtiming={''} fetchpriority={'high'} />
                </div>
              </div>
              <li tabindex="0">
                <a>
                <p>Hi,</p> <p class = "pge"> Marcus L </p>
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul class="p-2 bg-base-100 p">
                  <li><a>Profile</a></li>
                  <li><a>Settings</a></li>
                  <li><a>Log out</a></li>
                </ul>
              </li>
            </ul>
            <ul>
            </ul>
          </div>
        </div>
      </div>



      <div>
        <div class="search">
        <div class="form-control he">
          <div class="input-group he">
            <input type="text" placeholder= "Search…" class="input tee" />
          </div>
          </div>
        </div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" class="sort" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h3l-4-4l-4 4h3v14h2M5 7c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2s-2 .9-2 2m2-4c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4Z " /></svg></div>
        <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class = "sortt" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg></div>
        <select class="select w-full max-w-xs select">
          <option disabled selected class = "sp">PERIODE</option>
          <option>BULANAN </option>
          <option>TAHUNAN</option>
        </select>
        <h1 class="hh">Total Pemasukan Rp.10.000.000</h1>

        <div class="table">
          <div class="overflow-x-auto w-full">
            <table class="table w-full">
              <thead>
                <tr>

                  <th>ID</th>
                  <th>Jumlah</th>
                  <th>Tanggal</th>
                  <th>Jenis Transaksi</th>
                  <th>Quantity</th>
                  <th>Satuan</th>
                  <th>Asal Pemasukan</th>
                  <th>Kategori Saldo</th>
                  <th>Kurs</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>53A25</td>
                  <td>20.000.000</td>
                  <td>11 April 2023</td>
                  <td>Pendapatan NonOperasional</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Perusahaan</td>
                  <td>Petty Cash</td>
                  <td>IDR</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">edit</button>
                  </th>
                </tr>
                <tr>
                  <td>11A24</td>
                  <td>30.000.000</td>
                  <td>13 April 2023</td>
                  <td>Pendapatan Usaha</td>
                  <td>5</td>
                  <td>Jasa</td>
                  <td>Klien</td>
                  <td>Kredit</td>
                  <td>IDR</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">edit</button>
                  </th>
                </tr>
                <tr>
                  <td>25T89</td>
                  <td>65.000.000</td>
                  <td>13 April 2023</td>
                  <td>Penerimaan Piutang</td>
                  <td>-</td>
                  <td>-</td>
                  <td>klien</td>
                  <td>piutang</td>
                  <td>IDR</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">edit</button>
                  </th>
                </tr>
                <tr>
                  <td>21B54</td>
                  <td>40.000.000</td>
                  <td>22 April 2023</td>
                  <td>Penerimaan Hutang</td>
                  <td>-</td>
                  <td>-</td>
                  <td>Bank</td>
                  <td>Hutang</td>
                  <td>IDR</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">edit</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
