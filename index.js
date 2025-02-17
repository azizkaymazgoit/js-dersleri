// string, number, boolean
// `` string template
// length, replace
// kapalı dönüştürme
// açık dönüştürme


/* const sayi1 = Number(40);
const sayi2 = Number("50");


console.log(sayi1 + sayi2)

console.log("10" + 20) */



/**
 * Tip Dönüşümleri: Sayılar
 *
 * - Açık Tip Dönüşümü
 * - Örtük Tip Dönüşümü


console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("Aziz")); // NaN
console.log(Number("25px")); // NaN
console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4 */


// Karşılaştırma Operatörleri
// ==, ===, !=, !==, <, >, <=, >=
// true, false

/* const username = "azizkaymaz"
const sayi1 = 20
const sayi2 = 30

// == içindeki değere bakar
// === içindeki değer ve veri tipine bakar

console.log(4 >= 4) */

// int
// float

/* const cssDeger = "5.5px";

console.log(Number.parseFloat(cssDeger)) */

// ceil : yukarı yuvarlar
// floor : aşağı yuvarlama
// round : aşağı veya yukarı


// console.log(((0.1 * 10) + (0.2 * 10)) / 10)

// console.log((0.1 + 0.2).toFixed(2))


/**
 * Aritmetik Fonksiyonlar
 *
 * - Number.parseInt
 * - Number.parseFloat
 * - Math
 */

/*let elementWidth = "50px";
elementWidth = Number.parseInt(elementWidth);
console.log("elementWidth: ", elementWidth);

let elementHeight = "200.74px";
elementHeight = Number.parseFloat(elementHeight);
console.log("elementHeight: ", elementHeight);

/**
 * Yukarı veya aşağı yuvarlanmış değişken value'ni
 * konsola yazdıran bir betik yazın. Math.floor(), Math.ceil()
 * ve Math.round() metodlarını kullanın. 27.3 ve 27.9 değerleri için konsolda ne olacağını kontrol edin.
 */

/* const value = 27.5;
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.round(value)); */


/* function topla(sayi1, sayi2) {
    return Number(sayi1) + sayi2
}

const sonuc = topla(10, 50);

console.log(sonuc * 100); */

/*function kucukIsim(isim) {
    return String(isim).toLowerCase();
}

console.log(kucukIsim("MERHABA"))
console.log(kucukIsim("BU YAZI Büyük")) */

/*
 * Özellikler
 *
 * - Bir fonksiyon bildirme ve çağırma
 * - Parametreler ve argümanlar
 * - Bir değer döndürme
 */

/**
 * İndeksi hesaplayan ve döndüren bir calcBMI(ağırlık, boy) işlevi yazın
 * Bir kişinin vücut kütlesinin. Bunu yapmak için, ağırlığı
 * yüksekliğin karesi.
 *
 * Ağırlık ve boy bilerek string olarak aktarılacaktır. Tamsayı olmayan sayılar
 * 24.7 veya 24.7 şeklinde, yani kesirli sayıların ayırıcısı olarak verilebilir.
 * kısmı virgül olabilir.
 *
 * Vücut kitle indeksi bir ondalık basamağa yuvarlanmalıdır.
 */

function calcBMI(ulke, weight, height) {
    const deger = Number(weight) + Number(height)
    return `asdjasdyga asdgas ${ulke} ajshdfakfdaksd ${deger}`
}

const bmi = calcBMI("88,3", "1.75");

console.log((Math.PI).toFixed(2))