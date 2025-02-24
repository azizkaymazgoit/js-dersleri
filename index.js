// slice - X ve Y karakterleri

/* function tcGizle(tcKimlik) {
  const gizlenmisTC = `${tcKimlik.slice(0,2)}****${tcKimlik.slice(6)}`;
  return gizlenmisTC;
}

console.log(tcGizle("123456789")) */

// includes
/* const isim = "Aziz Kaymaz fare";
console.log(isim.includes("Fare")) */

// startsWith - endsWtih
/* const isim = "Aziz Kaymaz fare";
console.log(isim.endsWith("e")) */

/*function tcKontrol(tcKimlik) {
  let sonuc = "";

  if(tcKimlik.startsWith("1")) {
    sonuc = "TC Kimlik 1 ile başlıyor";
  }else if(tcKimlik.startsWith("2")) {
    sonuc = "TC Kimlik 2 ile başlıyor";
  }else {
    sonuc = "Geçersiz TC Kimlik No";
  }

  return sonuc;

}

console.log(tcKontrol("326351273")) */

// indexOf
// değeri bulursa index sayısını veriyor
// bulamazsa -1 değeri dönüyor
/*const dosyaIsmim = "index.css";

console.log(dosyaIsmim.indexOf(".css"))
console.log(dosyaIsmim.includes(".css"))
console.log(dosyaIsmim.slice(dosyaIsmim.indexOf(".css"))) */

// trim
/* const isim = "   Aziz Kaymaz asasdasd asdhasdhjagfsd   ";
console.log(isim.trim());
console.log(isim) */

/*let link = "https://my-site.com/about";
if (link.includes("my-site") && !link.endsWith("/")) {
  link += "/";
}
console.log(link); */

/* const blacklistedWord1 = "spam";
const blacklistedWord2 = "sale";

const string1 =
  "Hello, I'm Prince Abdul, this is not spam, I'm offering you a million!";
const string2 = "Biggest SALE this week, don't miss out!";
const string3 = "#fatlivesmatter advertising campaign";

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2)); */

// while döngüsü
/* function dosyaYukle(dosyam) {
  let yuklemeYuzdesi = 0;
  console.log("Dosya Yükleme Başlatıldı");
  while(yuklemeYuzdesi <= 100) {
    console.log("%" + yuklemeYuzdesi + " yükleniyor..");
    yuklemeYuzdesi++;
  }
  console.log(dosyam + " Dosyası Yükleme Başarılı");
}

dosyaYukle("denem.pdf"); */

// do while
/*let sayi = 200;
do {
  console.log("Merhaba" + sayi)
  sayi++;
} while(sayi <= 100) */

// for
/*

initialization = başlatmak
condition = koşul
post-expression = sonraki kısım

*/

/*const meyveler = "elma, armut, karpuz"

for(let i = 0; i <= meyveler.length; i++) {
  console.log("merhaba" + i)
} */

// contiune - devamını yazma döngüyü baştan başlat
// break - tamam bitti döngüyü bitir

const baslangic = 0;
const bitis = 50;

for (let i = baslangic; i <= bitis; i += 1) {
  if (i % 2 === 0) {
    console.log("Çift: ", i);
    continue;
  }

  console.log("Tek: ", i);
}
