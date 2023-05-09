
//use std::io;
//use text_io::read;
fn main() {
   /* // perbedaan print dan println
    println!("ini println 1");
    println!("ini println 2");
    
    print!("ini print");
    println!("ini println");

    // operator
    println!("2 kali 2 = {}", 2 * 2);

    // variable
    let bahasa: &str = "Rust";
    println!("Bahasa pemrograman dengan{}", bahasa);

    // integer
    let tahun: i32 = 2023;
    println!("Sekarang tahun {}", tahun);

    // input 
    println!("Berapa tahun umur Anda ? ");
    let umur:i32 = read!();
    println!("Umur Anda adalah {} tahun", umur);

    // inputan luas persegi panjang
    println!("Berapa Panjang persegi panjang?");
    let panjang: i32 = read!();
    println!("Berapa Lebar persegi panjang?");
    let lebar: i32 = read!();

    println!("Jadi Luas persegi panjang adalah {}", panjang * lebar);

    // inputan persegi
    println!("Berapa sisi persegi ?");
    let sisi: i32 = read!();

    println!("Jadi Luas persegi  adalah {}", sisi * sisi);

    for i in 1 .. 11 {
        println!("cek{}", i);
    }

    for i in 1 .. 11{
        if i % 2 != 0 {
            println!("perulangan ke  {}, sisa bagi 2 adalah = 1", i);
        }
    }

    let mut total_harga = 0; // Inisialisasi total harga awal

    loop {
        // Input harga barang
        println!("Masukkan harga belanja:");
        let mut input = String::new();
        io::stdin().read_line(&mut input).unwrap();
        let harga: u32 = input.trim().parse().unwrap();

        // Tambahkan harga barang ke total harga
        total_harga += harga;

        // Tanya apakah ada lagi item yang dibeli
        println!("Ada lagi? (y/t)");
        let mut input = String::new();
        io::stdin().read_line(&mut input).unwrap();
        let jawaban = input.trim();

        if jawaban != "y" {
            break; // Keluar dari loop jika pengguna tidak ingin menambah item lagi
        }
    }

    // Output total harga
    println!("Total Harga Belanja: {}", total_harga);

    println!("Masukkan umur Anda:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let umur: u32 = input.trim().parse().unwrap();

    // Kelompokkan umur berdasarkan rentang usia
    let kelompok = if umur < 5 {
        "Balita"
    } else if umur < 13 {
        "Anak-anak"
    } else if umur < 18 {
        "Remaja"
    } else if umur < 55 {
        "Dewasa"
    } else {
        "Tua"
    };

    // Output kelompok umur
    println!("Anda termasuk dalam kelompok {}.", kelompok);


    // Program menampilkan identitas
    println!("masukan nama anda: ");
    let nama: String = read!();
    println!("masukan tahun lahir: ");
    let tahun_lahir: i32 = read!();
    println!("masukan nomor hp: ");
    let no_hp: String = read!();

    print!("Nama saya adalah {}", nama);
    println!(" lahir pada tahun {}", tahun_lahir);
    println!("Nomor HP: {}", no_hp);

    // Program membutuhkan menit
    println!("Masukkan jumlah menit:");
    let total_minutes: i32 = read!();
    let hours = total_minutes / 60;
    let minutes = total_minutes % 60;
    println!("Total waktu adalah {} jam {} menit", hours, minutes);


    // Program mini calculator
    println!("Selamat datang di mini kalkulator!");


    println!("Masukkan bilangan pertama:");
    let num1: f32 = read!();
    println!("Masukkan bilangan kedua:");
    let num2: f32 = read!();

    println!("Pilih operasi matematika yang diinginkan:");
    println!("1. Tambah (+)");
    println!("2. Kurang (-)");
    println!("3. Kali (*)");
    println!("4. Bagi (/)");

    let choice: i32 = read!();
    let result = match choice {
        1 => num1 + num2,
        2 => num1 - num2,
        3 => num1 * num2,
        4 => num1 / num2,
        _ => {
            println!("Operasi yang dipilih tidak valid!");
            return;
        }
    };
    println!("Hasil dari operasi matematika adalah: {}", result);


    // Program menghitung siswa yang lulus
    print!("Masukkan jumlah siswa: ");
     let n: i32 = read!();
 
     let mut count_lulus = 0; // Menghitung jumlah siswa yang lulus
 
     // Meminta input nilai dari masing-masing siswa dan menghitung siswa yang lulus
     for i in 1..=n {
         print!("Masukkan nilai siswa {} : ", i);
         let nilai: f32 = read!();
 
         if nilai >= 6.0 {
             count_lulus += 1;
         }
     }
 
     // Menampilkan jumlah siswa yang lulus
     println!("Mas guru dari total 5 siswa, yang lulus ada {}", count_lulus);
     println!("perlu di evaluasi nih, ada 1 siswa yang tidak lulus");
*/
}