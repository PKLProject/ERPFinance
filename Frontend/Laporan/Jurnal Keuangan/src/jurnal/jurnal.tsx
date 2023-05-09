import { createSignal, type Component } from "solid-js";
import "./jurnal.css";
import imageSrc from "../assets/marcus.png";
import imageeSrc from "../assets/ERP Finance.png";

const App: Component = () => {
  const [imageUrl, setImageUrl] = createSignal("setImage");
  const [image, setImage] = createSignal(imageSrc);
  const [imagee, setImagee] = createSignal(imageeSrc);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full tbl ">
          <thead>
            <tr>
              <th></th>
              <th>No. COA</th>
              <th>Tanggal</th>
              <th>Tujuan Transaksi</th>
              <th>Jenis Transaksi</th>
              <th>Debit</th>
              <th>Sisa Saldo</th>
              <th>Kredit</th>
              <th>Jenis Saldo</th>
              <th>Kurs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>001</th>
              <td>005</td>
              <td>11 April 2023</td>
              <td>Pengeluaran</td>
              <td>Pembelian Aset</td>
              <td>10.000.000</td>
              <td>50.000.000</td>
              <td>-</td>
              <td>Petty Cash</td>
              <td>IDR</td>
            </tr>

            <tr>
              <th>002</th>
              <td>002</td>
              <td>11 April 2023</td>
              <td>Pengeluaran</td>
              <td>Pembayaran Hutang</td>
              <td>15.000.000</td>
              <td>15.000.000</td>
              <td>-</td>
              <td>Hutang</td>
              <td>IDR</td>
            </tr>

            <tr>
              <th>003</th>
              <td>004</td>
              <td>11 April 2023</td>
              <td>Pemasukkan</td>
              <td>Pendapatan Non-Operasinal</td>
              <td>-</td>
              <td>20.000.000</td>
              <td>20.000.000</td>
              <td>Kredit</td>
              <td>IDR</td>
            </tr>

            <tr>
              <th>004</th>
              <td>004</td>
              <td>13 April 2023</td>
              <td>Pemasukkan</td>
              <td>Pendapatan Usaha</td>
              <td>-</td>
              <td>50.000.000</td>
              <td>25.000.000</td>
              <td>Kredit</td>
              <td>IDR</td>
            </tr>

            <tr>
              <th>005</th>
              <td>001</td>
              <td>13 April 2023</td>
              <td>Pemasukkan</td>
              <td>Penerimaan Piutang</td>
              <td>-</td>
              <td>65.000.000</td>
              <td>30.000.000</td>
              <td>Piutang</td>
              <td>IDR</td>
            </tr>

            <tr>
              <th>006</th>
              <td>002</td>
              <td>21 April 2023</td>
              <td>Pengeluaran</td>
              <td>Pembayaran Hutang</td>
              <td>35.000.000</td>
              <td>35.000.000</td>
              <td>15.000.000</td>
              <td>Hutang</td>
              <td>IDR</td>
            </tr>

            <tr>
              <th>007</th>
              <td>002</td>
              <td>22 April 2023</td>
              <td>Pemasukkan</td>
              <td>Penerimaan Hutang</td>
              <td>-</td>
              <td>40.000.000</td>
              <td>10.000.000</td>
              <td>Hutang</td>
              <td>IDR</td>
            </tr>

            <tr>
              <th>008</th>
              <td>005</td>
              <td>22 April 2023</td>
              <td>Pengeluaran</td>
              <td>Pembelian Aset</td>
              <td>45.000.000</td>
              <td>45.000.000</td>
              <td>-</td>
              <td>Petty Cash</td>
              <td>IDR</td>
            </tr>
          </tbody>
        </table>
      </div>

      <img
        src={imagee()}
        alt="Alternative Text"
        class="logo"
        elementtiming={""}
        fetchpriority={"high"}
      />

      <div></div>

      <button class="btn btn-ghost plus">[+]</button>

      <div class="navbar bg-base-100">
        <div></div>
        <div class="flex-none nav">
          <ul class="menu menu-horizontal px-1">
            <li>
              <a>Dashboard</a>
            </li>
            <li tabindex="0">
              <a>
                Laporan
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100 tol">
                <li>
                  <a>Jurnal</a>
                </li>
                <li>
                  <a>Neraca Keuangan </a>
                </li>
                <li>
                  <a>Arus Kas</a>
                </li>
                <li>
                  <a>Pajak</a>
                </li>
                <li>
                  <a>Laba Rugi</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Rencana Bisnis</a>
            </li>
            <li>
              <a>Rencana Keuangan</a>
            </li>
            <div class="avatar">
                <div class="w-12 rounded-full">
                  <img src={image()} alt="Alternative Text" class="logoo" elementtiming={''} fetchpriority={'high'} />
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

            {/* <img src={image()} alt="Alternative Text" class="logoo" elementtiming={''} fetchpriority={'high'} /> */}
            {/* <li tabindex="0">
              <a>
                Laporan
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-base-100 tol">
                <li>
                  <a>Jurnal</a>
                </li>
                <li>
                  <a>Neraca Keuangan </a>
                </li>
                <li>
                  <a>Arus Kas</a>
                </li>
                <li>
                  <a>Pajak</a>
                </li>
                <li>
                  <a>Laba Rugi</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
      <div>
        <div class="form-control src">
          <div class="input-group">
            <button>
              <svg
                xmlns="https://www.xnxx.church/"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <input type="text" placeholder="Search…" />
          </div>

          <div class="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 7h3l-4-4l-4 4h3v14h2M5 7c0 1.1.9 2 2 2s2-.9 2-2s-.9-2-2-2s-2 .9-2 2m2-4c2.21 0 4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4m0 10c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4Z"
              />
            </svg>
          </div>
        </div>

        <div>
          <select class="select w-full max-w-xs select">
            <option disabled selected>
              Periode
            </option>
            <option>......</option>
            <option>......</option>
            <option>......</option>
            <option>......</option>
            <option>......</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default App;
