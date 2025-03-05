// Nesneler - Object
// key - value


const kullanici = {
  ad: "Aziz",
  soyad: "Kaymaz",
  color: "red",
  full_name: "Aziz Kaymaz",
  diller: ["html", "css"],
  adres: {
    ilce: "maltepe",
    il: "istanbul"
  },
  yas: 33,
  isAdmin: true,
}

// const anahtarlar = Object.values(kullanici)

const sayilar = {
  sayi1: 100
}

let toplam = 0;

for(const sayi in sayilar) {
  toplam += sayilar[sayi]
}

console.log(toplam)



/**
 * Ekibimizin maaşlarının saklandığı bir merkezimiz var. Tüm maaşları toplamak ve 
 * sonucu sum değişkenine kaydetmek için bir kod yazın.
 * Sonuç 390 olmalıdır. salaries nesnesi boşsa, sonuç 0 olmalıdır.
 */
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

