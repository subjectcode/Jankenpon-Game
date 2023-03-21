// Untuk mendapatkan DOM elements

const gameKontainer = document.querySelector(".container"),
userHasil = document.querySelector(".user_result img"),
cpuHasil = document.querySelector(".cpu_result img"),
hasil = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// console.log(gameKontainer, userHasil, cpuHasil, hasil, optionImages);


// Untuk Logo memberi jangkauan pada setingan gambar
optionImages.forEach((image,index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");

        // untuk membuat tangan kembali menjadi menggegam tangan saat ingin mulai
        userHasil.src = cpuHasil.src = "img/batu.png";
        hasil.textContent = "Tunggu Sebentar...";

        // loop ketika suatu yang di klik pada gambar 
        optionImages.forEach((image2,index2) => {
            // console.log(index, index2);

            // menghilangkan "active" pada element yang ada di option images saat tombol di klik di bagian lain
            index !== index2 && image2.classList.remove("active");
        });

        gameKontainer.classList.add("start");
        
        // Memberi sebuah waktu habis pada delay hasil yang di hitungkan
        let waktu = setTimeout(() => {
        gameKontainer.classList.remove("start");

         // Mengambil hasil dari yang di klik di bagian option imgaes
         let imageSrc = e.target.querySelector("img").src;

         // untuk memberi user/pengguna mengganti image setiap yang mereka klik sesuai dengan setingan pada image
         userHasil.src = imageSrc;
         // console.log(imageSrc);

         // menghasilkan sebuah nomor acak antara 0 dan 2
         let randomNomor = Math.floor(Math.random() * 3);
         // console.log(randomNomor);

         // Membuat sebuah array pada Musuh/CPU setingan image
         let cpuImages = ["img/batu.png","img/kertas.png","img/gunting.png"];
         // Membuat CPU/Musuh gambar menjadi random dalam penyetingan dari array yang diberikan
         cpuHasil.src = cpuImages[randomNomor];

         // Menetapkan surat nilai pada Musuh/CPU setingan (B untuk Batu, K untuk kertas, G untuk gunting)
         let cpuValue = ["B","K","G"][randomNomor]
         // Menetapkan sebuah surat nilai pada saat klik pengaturan (dalam index)
         let userValue = ["B","K","G"][index];

         // Membuat sebuah object dengan sepua kemungkinan yang akan dikeluarkan
         let outcomes = {
             BB: "Seri",
             BK: "Lawan",
             BG: "Kamu",
             KK: "Seri",
             KG: "Lawan",
             KB: "Kamu",
             GG: "Seri",
             GB: "Lawan",
             GK: "Kamu",
     };

         // Melihat atas yang akan dikeluarkan nilai yang ada pada user/pemain dan CPU/Musuh dalam Setingan
         let outComesValue = outcomes[userValue + cpuValue];

         // Tampilan Untuk Hasil Menang atau Kalah
         hasil.textContent = userValue === cpuValue ? "Pertandingan Seri" : `${outComesValue} Menang!!`; 
         // console.log(outComesValue);
        },2500);

           
    });
});