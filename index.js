// Array Metodları

// callback

/*function selamVer() {
    console.log(`Merhaba aziz`);
}

function selamVer2(x) {
  console.log(`Merhaba ${x}`);
}

function calistir(isim, callback) {
  callback(isim);
}


calistir("Aziz", selamVer2) */

/*function topla(a, b) {
  return a + b;
}

function carp(a, b) {
  return a * b;
}

function hesapla(sayi1, sayi2, callback) {
  console.log(callback(sayi1, sayi2));
}


hesapla(30, 30, function(a, b) {
  return a * b;
}) */

/*const dil = "en";

function dilBelirle() {
  if(dil === "tr") {
    return "HoşGeldin"
  }else {
    return "Welcome";
  }
}


function selamla(isim, callback) {
  const karsilamaMesaji = callback();
  console.log(`${karsilamaMesaji} ${isim}`)
}

selamla("Aziz", dilBelirle) */

/*const arr = [1,2,3,4,6,7,8]

function carp(sayi) {
  console.log(sayi * 100)
}

function topla(sayi) {
  console.log(sayi + 100)
}

function dongu(dizim, callback) {
  for(const d of dizim) {
    callback(d)
  }
}

dongu(arr, topla); */

// arrow function

/* function deneme(...rest) {
  console.log(rest)
} */
// deneme(10,203,40123)

/* const deneme2 = (...rest) => {
  console.log(rest)
} */
// deneme2(10,20);

/* const merhaba = (isim) => {
  return isim
} */

/* const merhaba = isim => isim.toUpperCase() */

// const cikar = a => a * 20;

// console.log(cikar(20,10))

// forEach

/* yeniDizim.forEach(function(value, index, array){
  console.log("value", value)
  console.log("index", index)
  console.log("array", array)
}) */

/*const callbackFunc = function(v, i, a){
  console.log("value", v)
  console.log("index", i)
  console.log("array", a)
}
yeniDizim.forEach(callbackFunc) */

/* yeniDizim.forEach((value, index, array) => {
  console.log("value", value)
  console.log("index", index)
  console.log("array", array)
}) */

/* const sayilar = [1,2,3,4,5,6,7,10,11,12]
let toplam = 0;

sayilar.forEach((value) => {
  toplam += value
})

console.log(toplam) */

// map
// yeni bir dizi oluşturuyo,
// oluşturduğu dizinin elemanlarını mevcut elemanları return ederek yeni değer veriyor

/*  */

// const sayilar = [1,2,3,4,5,6,7,10,11,12];

/* const yeniDizi = sayilar.map((value) => {
  return value * 100
})

console.log(yeniDizi) */

/* const yeniDizi = [];

sayilar.forEach((value) => {
  yeniDizi.push(value * 100)
})

console.log(yeniDizi) */





// saf (pure) - yan etkili (side effect)

// forEach, map, filter, find, every, some, reduce, toSorted


// const sayilar = [1,2,3,4,5]

/* const yeniSayilar = sayilar.filter((val) => {
  if(val % 2 === 0) {
    return true;
  }
}); */

// const yeniSayilar = sayilar.filter(val => val % 2 === 0);




/* const kullanicilar = [
  {
    username: "aziz",
    password: "123"
  },
  {
    username: "mehmet",
    password: "1234"
  },
  {
    username: "aziz",
    password: "123"
  }
] */

// kullanicilar.push({username: "ali", password: "12"})


// filter bulduğu her elemanı veriyor
// find ilk karşılaştığı tek elemanı veriyor

/* const dogruKullanici = kullanicilar.find((kullanici) => {
  if(kullanici.username === "aziz" && kullanici.password === "1234") {
    return true;
  }
});

console.log(dogruKullanici) */

// every - some

// every : bütün elemanların true karşılamak zorunda -- ve
// some: sadece 1 elemanın true dönmesi benim için yeterli -- or

// const sayilar = [1,3,5,7,2]

/* const hondaListes = allCars.every(araba => {
  if(araba.make === "Honda") {
    return true;
  }
});

console.log(hondaListes) */


// - reduce
// const sayilar = [1,2,3,4,5,6,7]

// accumulator - toplayıcı - stroge 

/* const toplam = sayilar.reduce((accumulator, value, index, array) => {
  console.log("accumulator", accumulator)
  console.log("value", value)
  console.log("index", index)
  console.log("array", array)
  console.log("acc", accumulator)
  return accumulator + value
}, 0);

console.log(toplam) */

/* const salary = {
  mango: 100,
  poly: 50,
  ajax: 150
};

const dizim = Object.values(salary);

const totalSalary = dizim.reduce((total, value) => total + value, 0);
console.log(totalSalary); */


// toSorted

// const dizim = ["Aziz", "Mehmet", "Büşra", "Ali"];

/* const sayilar = [3, 5 ,10, 51, 21, 1, 2]
console.log("orjinal : ",sayilar)

console.log("normal siralama: ",sayilar.toSorted())

const siraliDizim = sayilar.toSorted((current, next) => {
  return next - current
})

console.log("sirali: ",siraliDizim) */





const arabalar = [
  {
      make: 'Honda',
      model: 'CR-V',
      type: 'suv',
      amount: 14,
      price: 24045,
      onSale: true
  },
  {
      make: 'Honda',
      model: 'Accord',
      type: 'sedan',
      amount: 2,
      price: 22455,
      onSale: true
  },
  {
      make: 'Mazda',
      model: 'Mazda 6',
      type: 'sedan',
      amount: 8,
      price: 24195,
      onSale: false
  },
  {
      make: 'Mazda',
      model: 'CX-9',
      type: 'suv',
      amount: 7,
      price: 31520,
      onSale: true
  },
  {
      make: 'Toyota',
      model: '4Runner',
      type: 'suv',
      amount: 19,
      price: 34210,
      onSale: false
  },
  {
      make: 'Toyota',
      model: 'Sequoia',
      type: 'suv',
      amount: 16,
      price: 45560,
      onSale: false
  },
  {
      make: 'Toyota',
      model: 'Tacoma',
      type: 'truck',
      amount: 4,
      price: 24320,
      onSale: true
  },
  {
      make: 'Ford',
      model: 'F-150',
      type: 'truck',
      amount: 11,
      price: 27110,
      onSale: true
  },
  {
      make: 'Ford',
      model: 'Fusion',
      type: 'sedan',
      amount: 13,
      price: 22120,
      onSale: true
  },
  {
      make: 'Ford',
      model: 'Explorer',
      type: 'suv',
      amount: 6,
      price: 31660,
      onSale: false
  }
];





// önce listeyi ekrana basmam lazım
function ekranaBas(arabalar) {
  // html tarafındaki listeye erişmem lazım
  const arabaListesi = document.getElementById("araba-listesi");
  // listemi sayfa yüklendiğinde boşaltmam gerekiyor.
  arabaListesi.innerHTML = "";

  // gelen arabalar datasını ekrana listele
  // arabalar listemi döngüye sok
  arabalar.forEach(araba => {
    // ul için bir li elemanı oluştur
    const listeItem = document.createElement("li")
    // li elemanının içini doldur
    listeItem.textContent = `${araba.make} - ${araba.model} - ${araba.type} - ${araba.price}`;
    // ul listeme herbir elemanı bas
    arabaListesi.appendChild(listeItem)
  });

}


ekranaBas(arabalar);



// daha sonra buttona tıklama görevi vermem gerekiyor
const buttonum = document.getElementById("ford-listele");

buttonum.addEventListener('click', () => {
  // daha sonra buttona tıklayınca Ford arabaları listeden filtrelemem gerekiyor
  const fordArabalar = arabalar.filter(araba => {
    if(araba.make === "Ford") {
      return true;
    }
  })
  ekranaBas(fordArabalar)
});


// en son yeni listeyi ekrana basmam gerekiyor