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





/* const arabalar = [
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
}); */


// en son yeni listeyi ekrana basmam gerekiyor


// use strict


/* "use strict"

const isim = "aziz";
console.log(isim) */



// this

// "use strict"

// console.log(this)

/* function deneme() {
  console.log("func-->", this);
}

deneme(); */


/* const kisi = {
  isim: "Aziz",
  soyisim: "Kaymaz",
  isimBul() {
    console.log("this---> ", this)
  }
} */


/* function foo() {
  console.log('foo -> this', this);
}
foo(); */

/* const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
  }
};

user.showTag(); */

/* function showTag() {
  console.log('showTag -> this', this);
  console.log('showTag -> this.tag', this.tag);
}


// this = global = window
showTag();


const mango = {
  tag: 'Mango' 
};


mango.showUserTag = showTag;

// this = obje
mango.showUserTag(); */


/* const poly = {
  tag: 'Poly',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  }
};

console.log("1.adım")
poly.showTag();


// const outerShowTag = poly.showTag;

function outerShowTag() {
  console.log('showTag -> this', this);
   console.log('showTag -> this.tag', this.tag);
}

console.log("2.adım")
outerShowTag(); */

/* const book = {
  title: 'React for beginners',
  showThis() {
    console.log('showThis -> this', this);
  },
  showTitle() {
    console.log('showTitle -> this.title', this.title);
  }
};

book.showTitle();

const outerShowThis = book.showThis;

function showThis() {
  console.log('showThis -> this', this);
}
outerShowThis();

const outerShowTitle = book.showTitle;
outerShowTitle(); */

/* function deneme(par1, par2) {
  console.log("par1: ",par1)
  console.log("par2: ",par2)
  console.log("func this---> ", this)
}

const kisi = {
  isim: "Aziz",
  soyisim: "Kaymaz"
}


// call - apply - bind
// tam olarak bu noktada this artık kisi objesini temsil edecek
//deneme.call(kisi)
// deneme.call(kisi);
deneme.call(kisi, "aziz", "devam")
deneme.apply(kisi, ["aziz", "devam"])

const yenifunc = deneme.bind(kisi)
yenifunc("par111", "par222"); */


// "use strict"

/* function normalFunc() {
  console.log("normal--> ", this)
}
normalFunc(); */


/* const arrowFunc = () => {
  console.log("arrow--> ", this)
}

const kisi = {
  isim: "Aziz",
  soyisim: "Kaymaz"
}

arrowFunc.call(kisi) */

/*const changeColor = function (color) {
  this.color = color;
  console.log('changeColor -> this', this);
};


const hat = {
  color: 'black'
};

changeColor.call(hat, 'orange');
console.log(hat);
const sweater = { color: 'green' };
changeColor.apply(sweater, ['blue']);
console.log(sweater);
*/


// Prototipler

/* const canlilar = {
  hayat: "oksijen"
}

const insan = Object.create(canlilar)
insan.bacak = 2;
insan.kol = 2;

const kisi = Object.create(insan);
kisi.adi = "Aziz";
kisi.yas = 30;


console.log(kisi.deneme)
console.log(kisi)

// isPrototypeOf
console.log(insan.isPrototypeOf(kisi))

// hasOwnProperty
console.log(insan.hasOwnProperty("bacak")) */


/* const objC = { c: 'objC prop' };
const objB = Object.create(objC);
objB.b = 'objB prop';
const objA = Object.create(objB);
objA.a = 'objA prop';



console.log("objA",objA);

console.log(objB);
console.log(objC);

console.log(objA.hasOwnProperty('a'));
console.log(objA.a);
console.log(objA.hasOwnProperty('b'));
console.log(objA.b);
console.log(objA.hasOwnProperty('c'));
console.log(objA.c);
console.log(objA.hasOwnProperty('x'));
console.log(objA.x); */

// class

const kisi1 = {
  name: "Aziz",
  lastname: "Kaymaz"
}

const kisi2 = {
  name: "Aziz",
  lastname: "Kaymaz"
}

// console.log(kisi1)
// console.log(kisi2)


// şablon - arayüz
// instance
// contructor - objeyi create ederken ne yapayım ?
// get - set
// get - bir dataya erişip onun çıktısını alıyoruz
// set - objem içerisindeki bir datayı revize ediyoruz - müdahale ediyoruz
// field
// private
// static
// inheritance


// const {isim, soyisim, yas} = gelenData2;

// console.log(isim);
// console.log(soyisim);
// console.log(yas);

/* let globalId = 1;

class User {

  static aciklama = "Merhaba bu User Class'ına ait."
  
  #id;
  isim;
  soyisim;
  yas; 
  

  constructor({ad, soyisim, yas}) {
    this.#id = globalId++;
    this.isim = ad
    this.soyisim = soyisim
    this.yas = yas
  }

  kullaniciyiYazdir() {
    return `Merhaba, ${this.#id} ${this.isim} ${this.soyisim} hoşgeldin..`;
  }

}


const gelenData1 = {
  yas: 30,
  ad: "Aziz",
  soyisim: "Kaymaz"
}

const kullanici1 = new User(gelenData1);
console.log(kullanici1)
console.log(kullanici1.kullaniciyiYazdir())

const kullanici2 = new User(gelenData1);
console.log(kullanici2.kullaniciyiYazdir())

console.log(User.aciklama)
console.log(Math.PI) */

// user (username, password, email)

/* class User {
  username;
  password;

  constructor(username, password) {
    this.username = username;
    this.password = password
  }

}

class NormalKullanici extends User {

}

class Admin extends User {
  title;

  constructor(username, password) {
    super(username, password);
    this.title = "Admin"
  }

}

const kullanici = new Admin("azizkaymaz", "1234");
console.log(kullanici); */


class Blogger {
  constructor({ email, age, numberOfPosts, topics }) {
    this.email = email;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts`;
  }

  updatePostCount(value) {
    this.numberOfPosts += value;
  }
}

const poly = new Blogger({
  email: 'poly@mail.com',
  age: 19,
  numberOfPosts: 17,
  topics: ['sports', 'gaming', 'health']
});

console.log(poly.getInfo());

poly.updatePostCount(4);
console.log(poly.getInfo());