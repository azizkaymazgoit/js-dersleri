// diziler


/* const isim = "Aziz";
const soyisim = "Kaymaz";


const dersler = ["HTML", "CSS", "JavaScript", "React"];

const ilkEleman = dersler[0];
const sonEleman = dersler[dersler.length - 1]

console.log(dersler) */



/* let isim1 = "Aziz";
let isim2 = isim1;
isim2 = "Mehmet"
// console.log(isim1 + " " + isim2)

// referans değer
const dizi1 = ["ahmet", "mehmet", "can"]
const dizi2 = dizi1

dizi2[0] = "ömer"

console.log(dizi1)
console.log(dizi2) */


// karşılaştırma false
/*const dizi1 = ["ahmet"]
const dizi2 = ["ahmet"] */


// Boolean dönüş değeri
/* const dataArray = []

if(dataArray.length > 0) {
  console.log("true")
}else {
  console.log("false")
}

console.log(Boolean(dizi1)) */

/* const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
console.table(courses);
console.log([0]);
console.log([1]);
console.log([2]);
console.log([3]);

courses[1] = "Node.js";
courses[3] = "Next.js";
console.table(courses);

console.log(courses.length);

const lastIndex = courses.length - 1;
console.log(lastIndex); */

/* const a = [1, 2, 3];
const b = a;


console.log(a === b); // ?

console.log([] === []);
console.log([1, 2, 3] === [1, 2, 3]); */


// dizi metodları

// join 
// split
// slice
// concat
// indexOf
// includes

// pop - push // son
// shift - unshift // baş

// push - unshift // ekleme
// pop - shift // çıkarma


// const kurslar = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// const yeniKurslar = ["C++", "C#", "NextJS"]
// const sayilar = [1,2,3]

// const yeniDeger = etiketler.join();
// const degerim = "HTML,CSS,JavaScript,React,PostgreSQL,assda-asdas"
/* console.log(etiketler.slice())
console.log(etiketler.slice(2))
console.log(etiketler.slice(2, 4)) */

// const yeniDizi = kurslar.concat(yeniKurslar, sayilar);

// kurslar.push("C++")
// const deger = kurslar.pop()

// kurslar.shift()

// console.log(kurslar)


// diziler - döngüler
// const kurslar = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

/* for(let i = 0; i < kurslar.length; i++) {
  console.log((i + 1) + " " + kurslar[i].toUpperCase())
} */


// for...of
/* for(let degerimYXAsdasd of kurslar) {
  console.log(degerimYXAsdasd)
} */

  /* const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
  
  for (let friend of friends) {
    console.log(friend);
    // console.log(friends);
  } */

    /**
 * Bir dizideki tüm çift sayıların toplamını hesaplayan bir kod yazın.
 */

/* const numbers = [1, 2, 3, 4];
let total = 0;

for (const number of numbers) {
  total += number;
}

console.log("Total: ", total); */

/**
 * Konsolda kullanıcının adını ve telefon numarasını görüntüleyen bir kod yazın.
 * names ve phones değişkenleri virgülle ayrılmış isim ve telefon numarası dizelerini saklar. 
 * Dizelerdeki adların ve telefon numaralarının sıra numarası bir eşleşmeyi gösterir.
 * İsimlerin ve telefon numaralarının sayısının aynı olması garanti edilir.
 */

/*const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

const yeniIsimler = names.split(",")
const yeniNumaralar = phones.split(",")

for(let i = 0; i < yeniIsimler.length; i++) {
  console.log(`isim: ${yeniIsimler[i]} - ${yeniNumaralar[i]} nosuna sahip.`)
}
*/

/**
 * Bir dizenin ilk ve son sözcükleri hariç tüm sözcüklerini konsola yazdıran bir kod yazın. 
 * Ortaya çıkan dize bir boşluk karakteriyle başlamamalı veya bitmemelidir.
 * Komut dosyası herhangi bir dize için çalışmalıdır.
 */

/* const string = "Welcome to the future asas";

const yeniDizi = string.split(" ");

console.log(yeniDizi.slice(1, -1).join(" ")) */


/**
 * Bir dizideki en küçük sayıyı bulmak için bir kod yazın. 
 * Kod herhangi bir sayı dizisi için çalışmalıdır. Problemi çözmek için bir döngü kullanın.
 */

/* const values = [20, 17, 94, 3, 23, 37];
let min = values[0];

for (let val of values) {
  if (val < min) {
    min = val;
  }
}

console.log(min); */

