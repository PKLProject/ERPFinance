

use sqlx::{Pool,Postgres};
use be_erp::{login_account, update_account, tambah_akun};
use tide::{Server};

pub fn path(app: &mut Server<Pool<Postgres>>){
app.at("register").post(tambah_akun);
app.at("update").put(update_account);
app.at("login").post(login_account);
}


