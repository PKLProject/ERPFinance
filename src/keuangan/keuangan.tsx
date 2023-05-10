import { Component, createEffect, createSignal, onCleanup } from "solid-js";
import './keuangan.css'
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import AgGridSolid from "ag-grid-solid";
export interface KeuanganProps {children?:HTMLElement}

const Keuangan : Component<KeuanganProps> = () =>{

  const [isOpen, setIsOpen] = createSignal(false);

  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  let modal: HTMLElement;

  createEffect(() => {
    if (isOpen()) {
      const originalFocusedElement = document.activeElement as HTMLElement;
      const modalFocusableElements = modal.querySelectorAll(focusableElements);
      const firstFocusableElement = modalFocusableElements?.[0] as HTMLElement;
      const lastFocusableElement = modalFocusableElements?.[
        modalFocusableElements.length - 1
      ] as HTMLElement;
      const focusTrap = function (e: KeyboardEvent) {
        const { key, code, shiftKey } = e;
        const isTabPressed = (key || code) === 'Tab';
        const isEscapePressed = (key || code) === 'Escape';
        if (!isTabPressed && !isEscapePressed) return;
        if (isEscapePressed) return setIsOpen(false);
        if (shiftKey) {
          // if shift key pressed for shift + tab combination
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement?.focus(); // add focus for the last focusable element
            e.preventDefault();
          }
          // if tab key is pressed
        } else if (document.activeElement === lastFocusableElement) {
          // if focused has reached to last focusable element then focus first focusable element after pressing tab
          firstFocusableElement?.focus(); // add focus for the first focusable element
          e.preventDefault();
        }
      };
      firstFocusableElement?.focus();
      document.addEventListener('keydown', focusTrap);
      onCleanup(() => {
        document.removeEventListener('keydown', focusTrap);
        originalFocusedElement?.focus();
      });
    }
  });

  const columnDefs = [
    { field: 'ID' },
    { field: 'Jumlah' },
    { field: 'Tanggal' },
    { field: 'Transaksi' },
    { field: 'Quantity' },
    { field: 'Satuan' },
    { field: 'Pemasukkan' },
    { field: 'Kategori' },
    { field: 'Kurs' },
    { field: 'Saldo' },
  ];

  const rowData = [
    { ID: '53A24', Jumlah: '65.000.000', Tanggal: '11 April 2023', Transaksi: 'Pendapatan Usaha', Quantity: '-', Satuan: 'Jasa', Pemasukkan: 'Klien', Kategori: 'Piutang', Kurs: 'IDR', Saldo: '65.000.000'},
    { ID: '11A24', Jumlah: '30.000.000', Tanggal: '13 April 2023', Transaksi: 'Penerimaan Piutang', Quantity: '-', Satuan: '-', Pemasukkan: 'Perusahaan', Kategori: 'Petty Cash', Kurs: 'IDR', Saldo: '30.000.000'},
    { ID: '25T89', Jumlah: '40.000.000', Tanggal: '13 April 2023', Transaksi: 'Penerimaan Hutang', Quantity: '5', Satuan: '-', Pemasukkan: 'Klien', Kategori: 'Hutang', Kurs: 'IDR', Saldo: '40.000.000'},
    { ID: '21B54', Jumlah: '20.000.000', Tanggal: '22 April 2023', Transaksi: 'Pendapatan NonOperasional', Quantity: '-', Satuan: '-', Pemasukkan: 'Bank', Kategori: 'Kredit', Kurs: 'IDR', Saldo: '20.000.000'},
  ];

    return (
      <div class="body">
        {isOpen() && (
          <div class="kotak-tambahData" id="box">
          <div class="header">
            <h2>Tambah Data - Pengeluaran</h2>
          </div>
          <div class="bodyer">
            <div class="isi">
            <p>ID</p>
            <input type="text"/>
            </div>
            <div class="isi">
            <p>Jumlah</p>
            <input type="text"/>
            </div>
            <div class="isi">
            <p>Tanggal</p>
            <input type="text"/>
            </div>
            <div class="isi">
            <p>Jenis</p>
            <input type="text"/>
            </div>
            <div class="isi">
            <p>Quantity</p>
            <input type="text"/>
            </div>
            <div class="isi">
            <p>Satuan</p>
            <input type="text"/>
            </div>
            <div class="isi">
            <p>Asal</p>
            <input type="text"/>
            </div>
            <div class="isi">
            <p>Kategori</p>
            <input type="text"/>
            </div>
          </div>
          <div class="footer">
            <label class="close-btn" onClick={() => setIsOpen(false)}
          onKeyPress={(e) =>
            (e.key || e.code) === 'Escape' ? setIsOpen(false) : null
          }>Close</label>
            <label class="add-btn">Tambah Data</label>
          </div>
        </div>
        )}
        <nav>
          <div class="wrapper">
            <div class="menu">
              <ul>
              <li><img src="../src/assets/img/ERP-Finance.png"/></li>
              <li><p>Dashboard</p></li>
              <li><p>Laporan</p></li>
              <li><p>Rencana Bisnis</p></li>
              <li><div class="mnj"><p>Manajemen Keuangan</p></div></li>
              </ul>
            </div>
            <div class="orang">
            <img src="../src/assets/img/Unsplash-Avatars_0004s_0007_nathan-dumlao-Ju--S80ezyU-unsplash.png"/>
              <p>Hi,</p>
              <p style="padding: 0 0.5vw; color:orange;">Marcus L.</p>
            </div>
          </div>
        </nav>
        <div class="bottom-navbar">
        <div class="tools">
              <img src="../src/assets/img/Frame-12.png" onClick={() => setIsOpen(true)} style="width: 1.75vw; cursor: pointer;" />
              <img src="../src/assets/img/Combined-Shape.png" style="width: 1.5vw; padding: 0 1vw;" />
            </div>
            <div class="preview">
              <h2>Total Pengeluaran : 90.0000.000</h2>
            </div>
        </div>
        <div class="ag-theme-alpine">
      <AgGridSolid
        columnDefs={columnDefs}
        rowData={rowData}
      />
    </div>
    </div>
    );
}

export default Keuangan