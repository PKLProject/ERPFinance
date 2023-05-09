use sqlx::{Pool,Postgres};
use be_erp::{  tambah_akun, table_asal, table_jenis, table_kategori, table_satuan, };
use tide::{Server};

pub fn path(app: &mut Server<Pool<Postgres>>){


app.at("daftar").post(tambah_akun);
app.at("asal").get(table_asal);
app.at("jenis").get(table_jenis);
app.at("kategori").get(table_kategori);
app.at("satuan").get(table_satuan);

}
