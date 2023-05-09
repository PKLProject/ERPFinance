use serde::Deserialize;
//use serde_json::json;
use sqlx::PgPool;
use tide::StatusCode;
use tide::{Request, Response, Body, http};
use crate::ws_response;






#[derive(serde::Serialize, Debug ,Deserialize)]
struct Test {
    nama : Option<String>,
    id_asal : i32,
}

#[derive(serde::Serialize, Debug ,Deserialize)]
struct Jenis{
    nama : Option<String>,
    id_jenis : i32,
}

#[derive(serde::Serialize, Debug ,Deserialize)]
struct Kategori{
    nama : Option<String>,
    id_kategori : i32,
}

#[derive(serde::Serialize, Debug ,Deserialize)]
struct Satuan{
    nama : Option<String>,
    id_satuan : i32,
}


#[derive(serde::Serialize, Debug ,Deserialize)]
struct Pemasukan {
    jumlah :String,
    tanggal :String,
    id_jenis_transaksi :i32,
    quantity :String,
    id_satuan :i32,
    id_asal:i32,
    id_kategori :i32,
    kurs : String,
    
}





pub async fn table_asal(req : Request<PgPool>) -> tide::Result<Response>{
    let pool = req.state();
    let nama :Vec<Test> = sqlx::query_as!(
Test,"SELECT id_asal, nama  from asal;")
.fetch_all(pool).await?;
println!("table : {:#?} ", nama);

let response = Response::builder(200)
            .body(Body::from_json(&nama)? ).build();
        Ok(response)
}



pub async fn table_jenis(req : Request<PgPool>) -> tide::Result<Response>{
    let pool = req.state();
    let nama :Vec<Jenis> = sqlx::query_as!(
Jenis,"SELECT id_jenis, nama from jenis_transaksi;")
.fetch_all(pool).await?;
println!("table : {:#?} ", nama);

let response = Response::builder(200)
            .body(Body::from_json(&nama)? ).build();
        Ok(response)
}



pub async fn table_kategori(req : Request<PgPool>) -> tide::Result<Response>{
    let pool = req.state();
    let nama :Vec<Kategori> = sqlx::query_as!(
Kategori,"SELECT id_kategori, nama from kategori;")
.fetch_all(pool).await?;
println!("table : {:#?} ", nama);

let response = Response::builder(200)
            .body(Body::from_json(&nama)? ).build();
        Ok(response)
}


pub async fn table_satuan(req : Request<PgPool>) -> tide::Result<Response>{
    let pool = req.state();
    let nama :Vec<Satuan> = sqlx::query_as!(
Satuan,"SELECT id_satuan, nama from satuan;")
.fetch_all(pool).await?;
println!("table : {:#?} ", nama);

let response = Response::builder(200)
            .body(Body::from_json(&nama)? ).build();
        Ok(response)
}


pub async fn tambah_akun (mut req : Request<PgPool>) -> tide::Result<Response> {
    let param : Pemasukan = req.body_json().await?;
    let pool = req.state();
     
     match
     sqlx::query("INSERT INTO manajement_keuangan (jumlah, tanggal, id_jenis_transaksi, quantity, id_satuan, id_asal, id_kategori, kurs) VALUES ($1,$2,$3,$4,$5,$6,$7,$8);")
     .bind(param.jumlah)
     .bind(param.tanggal)
     .bind(param.id_jenis_transaksi)
     .bind(param.quantity)
     .bind(param.id_satuan)
     .bind(param.id_asal)
     .bind(param.id_kategori)
     .bind(param.kurs)
     
     .execute(pool).await
     {
        Ok(_x) => {ws_response("OK", "Berhasil input pemasukan")},
        Err(e) => {
            println!("error insert : {:?}",e);
            ws_response("Error", "Gagal Input pemasukan")
        }

     }

}








