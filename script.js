// FUNGSI NILAI RUPIAH
function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
}
// AKHIR FUNGSI NILAI RUPIAH
const rupiah = document.querySelectorAll('input');
for (let i = 0; i < rupiah.length; i++) {
  rupiah[i].addEventListener('keyup', function (e) {
    rupiah[i].value = formatRupiah(this.value, 'Rp. ');
  });
}
// AKHIR UNTUK ANGKA BERSEPARATOR "."

// MENGHITUNG DAN MENAMPILKAN BESARAN 10 20 30 40 KE HTML
const input = document.querySelector('.calculate_1');
input.addEventListener('click', function (e) {
  const hasil = document.querySelector('.input_1').value;
  const uAngka = hasil.replace(/[Rp, .]/g, '');
  const angka = parseInt(uAngka);

  // 10%
  const sepuluh = angka * 0.1;
  const Yesepuluh = String(sepuluh);
  const Usepuluh = formatRupiah(Yesepuluh);
  document.querySelector('.hasil_1').innerHTML = `Rp. ${Usepuluh}`;
  // 20%
  const duapuluh = angka * 0.2;
  const Yeduapuluh = String(duapuluh);
  const Uduapuluh = formatRupiah(Yeduapuluh);
  document.querySelector('.hasil_2').innerHTML = `Rp. ${Uduapuluh}`;
  // 30%
  const tigapuluh = angka * 0.3;
  const Yetigapuluh = String(tigapuluh);
  const Utigapuluh = formatRupiah(Yetigapuluh);
  document.querySelector('.hasil_3').innerHTML = `Rp. ${Utigapuluh}`;
  // 40%
  const empatpuluh = angka * 0.4;
  const Yeempatpuluh = String(empatpuluh);
  const Uempatpuluh = formatRupiah(Yeempatpuluh);
  document.querySelector('.hasil_4').innerHTML = `Rp. ${Uempatpuluh}`;

  const span = document.querySelectorAll('span');
  for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = 'thistle';
    span[i].style.padding = '10px';
    span[i].style.color = 'tomato';
  }
  document.querySelector('.note_1').innerHTML = `Note : Sisihkan sebesar Rp. ${Usepuluh} untuk bersedekah dan kebaikan.`;
  document.querySelector('.note_2').innerHTML = `Note : Sisihkan sebesar Rp. ${Uduapuluh} untuk tabungan masa depanmu.`;
  document.querySelector('.note_3').innerHTML = `Note : Sisihkan sebesar Rp. ${Utigapuluh} untuk bayar hutang atau cicilanmu.`;
  document.querySelector('.note_4').innerHTML = `Note : Sisishkan sebesar Rp. ${Uempatpuluh} untuk biaya kehidupanmu selama sebulan.`;
});
// AKHIR MENGHITUNG DAN MENAMPILKAN BESARAN 10 20 30 40 KE HTML

// MENGHITUNG DAN MENAMPILKAN BESARAN 10 10 30 50 KE HTML
const input_2 = document.querySelector('.calculate_2');
input_2.addEventListener('click', function (e) {
  const hasil_2 = document.querySelector('.input_2').value;
  const uAngka_2 = hasil_2.replace(/[Rp, .]/g, '');
  const angka_2 = parseInt(uAngka_2);

  // 10%
  const sepuluh_2 = angka_2 * 0.1;
  const Yesepuluh_2 = String(sepuluh_2);
  const Usepuluh_2 = formatRupiah(Yesepuluh_2);
  document.querySelector('.hasil_1_2').innerHTML = `Rp. ${Usepuluh_2}`;
  // 10%
  const sepuluh_2_2 = angka_2 * 0.1;
  const Yesepuluh_2_2 = String(sepuluh_2_2);
  const Usepuluh_2_2 = formatRupiah(Yesepuluh_2_2);
  document.querySelector('.hasil_2_2').innerHTML = `Rp. ${Usepuluh_2_2}`;
  // 30%
  const tigapuluh_2 = angka_2 * 0.3;
  const Yetigapuluh_2 = String(tigapuluh_2);
  const Utigapuluh_2 = formatRupiah(Yetigapuluh_2);
  document.querySelector('.hasil_3_2').innerHTML = `Rp. ${Utigapuluh_2}`;
  // 50%
  const limapuluh_2 = angka_2 * 0.5;
  const Yelimapuluh_2 = String(limapuluh_2);
  const Ulimapuluh_2 = formatRupiah(Yelimapuluh_2);
  document.querySelector('.hasil_4_2').innerHTML = `Rp. ${Ulimapuluh_2}`;

  const span = document.querySelectorAll('span');
  for (let i = 0; i < span.length; i++) {
    span[i].style.backgroundColor = 'thistle';
    span[i].style.padding = '10px';
    span[i].style.color = 'tomato';
  }
  document.querySelector('.note_1_2').innerHTML = `Note : Sisihkan sebesar Rp. ${Usepuluh_2} untuk bersedekah dan kebaikan.`;
  document.querySelector('.note_2_2').innerHTML = `Note : Sisihkan sebesar Rp. ${Usepuluh_2_2} untuk tabungan masa depanmu.`;
  document.querySelector('.note_3_2').innerHTML = `Note : Sisihkan sebesar Rp. ${Utigapuluh_2} untuk bayar hutang atau cicilanmu.`;
  document.querySelector('.note_4_2').innerHTML = `Note : Sisishkan sebesar Rp. ${Ulimapuluh_2} untuk biaya kehidupanmu selama sebulan.`;
});
// AKHIR MENGHITUNG DAN MENAMPILKAN BESARAN 10 10 30 50 KE HTML

// TANGGAL
var months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum&#39;at', 'Sabtu'];
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var thisDay = date.getDay(),
  thisDay = myDays[thisDay];
var yy = date.getYear();
var year = yy < 1000 ? yy + 1900 : yy;
var today = thisDay + ', ' + day + ' ' + months[month] + ' ' + year;
var hari_ini = document.querySelector('.lead');
hari_ini.innerHTML = today;
// AKHIR TANGGAL
