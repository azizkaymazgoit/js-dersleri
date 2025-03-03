


/* function deneme() {

  // sözde dizi - arguments
  // console.log(arguments)

  const data = Array.from(arguments)

  console.log(arguments)
  console.log("----------------------")
  console.log(data)

  /* for(let aasdasdrf of data) {
    console.log(aasdasdrf)
  } 

} */

/* deneme("Aziz", "Kaymaz", 30, 123123, "asdasd", 123132, "asdasdasdasd") */


/* function topla() {

  const sayilar = Array.from(arguments);
  let toplam = 0;

  for(let sayi of sayilar) {
    toplam *= sayi
  }

  return toplam;
 
}

console.log(topla(1,2,3,4,5,6,7)) */


/*function enUzunKelime() {

  const data = Array.from(arguments);
  let ilkKelime = data[0];

  for(let eleman of data) {
    if(eleman.length > ilkKelime.length) {
      ilkKelime = eleman
    }
  }

  return ilkKelime

}

console.log(enUzunKelime("aaa", "bbbbbb", "ccc", "asjagsdljkagsld")) */


// default parametre değeri
/* function deneme(isim = "kullanıcı") {
  console.log("Merhaba " + isim)
}

deneme("aziz"); */


// hoisting


/* deneme()

function deneme() {
  console.log("merhaba")
} */


/* const benimFonksiyonum = function() {
  console.log("merhaba 2")
}

benimFonksiyonum() */

/*const isim = "aziz";

function fonk1() {
  fonk1()
  console.log("fonksiyon 1 başladı");
}

function fonk2() {
  console.log("fonksiyon 2 başladı");
  fonk1()
  console.log("fonksiyon 2 bitti")
}
*/


// scope 

/*const altMudur = "aziz";

  {
    const altMudur = "asdasd";
    console.log(altMudur)
  }
*/


/**
 * Herhangi bir sayıda argüman alan ve bunların ortalama değerini 
 * döndüren bir calAverage() fonksiyonu yazın. 
 * Tüm argümanlar sadece sayı olacaktır.
 */
/*function calAverage() {

  const sayilar = Array.from(arguments);
  let toplam = 0;

  for(let sayi of sayilar) {
    toplam += sayi
  }

  return toplam / sayilar.length;

}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2 */


/*function formatTime(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const doubleDigitHours = String(hours).padStart(2, 0);
  const doubleDigitMinutes = String(minutes).padStart(2, 0);
  return (`${doubleDigitHours}:${doubleDigitMinutes}`);
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01" */

console.log("1123".padStart(11, 1))