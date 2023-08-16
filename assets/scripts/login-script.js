/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script */ 
/** 
 * membuat variabel loginFormElement untuk tampilan form.
 * @constant {HTMLElement} 
*/ 
const loginFormElement = document.querySelector('#loginForm');

/** 
 * membuat variabel inputEmailElement untuk input email.
 * @constant {HTMLElement} 
*/ 
const inputEmailElement = document.querySelector('#inputEmail');

/** 
 * membuat variabel inputPasswordElement untuk input password.
 * @constant {HTMLElement} 
*/ 
const inputPasswordElement = document.querySelector('#inputPassword');

/** 
 * membuat variabel expectedEmail untuk menyimpan email yang diminta.
 * @constant {string} 
*/ 
const expectedEmail = 'admin@dicoding.com';

/** 
 * membuat variabel expectedPassword untuk menyimpan password yang diminta.
 * @constant {string} 
*/ 
const expectedPassword = 'superpassword';

/* Comment : Menambahkan aksi ketika tombol submit ditekan */ 
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    /* Comment : TODO 1 : Mendapatkan input email dan password pengguna dari form. */
    /** 
     * membuat variabel email untuk menyimpan email yang di-inputkan pengguna.
     * @constant {string} 
    */ 
    const email = inputEmailElement.value;

    /** 
     * membuat variabel password untuk menyimpan password yang di-inputkan pengguna.
     * @constant {string} 
    */ 
    const password = inputPasswordElement.value;

    /* Comment : TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    if (email===expectedEmail&&password===expectedPassword) goToHome();
    showPopUp();
});
