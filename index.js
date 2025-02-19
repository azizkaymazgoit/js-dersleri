// if - else if - else



/* function adminMi(rol) {
    if (rol === "admin") {
        return "evet";
    }else {
        return "hayir";
    }
}

console.log(adminMi("admin")) */



// kısa if - ternary - üçlü if

// koşul ? true : false

/* if (koşul) {
    true
}else {
    else
} */

/* sfunction adminMi(rol) {
    if (checked === "check") {
        return veritabanınaKaydet() 
    }else {
        return sozlesmeOnaylanmadi()
    }
}



adminMi("user") ? console.log("Admin") : console.log("User"); */




// scope

/* const isim = "aziz";
let sonuc = "";

if(isim === "aziz") {
    const herhangi = "asdas";
    sonuc = "evet"
}else {
    sonuc = "hayır"
}

console.log(sonuc) */

/**
 * Şubelendirme

 * - If ifadesi
 * - If...else ifadesi
 * - Blok else...if
 * - Üçlü operatör
 */

/* console.log("Before");

if (5 > 30) {
  console.log("x > y");
} else {
  console.log("x < y");
}

console.log("After");

const points = 5000;

if (points <= 500) {
  console.log("Level 1");
} else if (points > 500) {
  console.log("Level 2");
} else if (points > 1500) {
  console.log("Level 3");
} else {
  console.log("Level 4");
}

const balance = 1000;
const message = balance >= 0 ? "Positive" : "Negative";
console.log(message); */

/*
 * Değişkenlerin Blok Kapsamı
 */

/* const c = 15;

if (true) {
    const a = 5;
    console.log(a);
    console.log(c);
}

if (true) {
  const b = 10;
  console.log(b);
  console.log(c);
}

console.log(c); */

/**
 * Tarayıcı konsolunda saat ve dakikaları şu şekilde görüntülemek için bir komut dosyası yazın
 * "14 saat 26 dakika" biçiminde bir satır. Minutes değişkeninin değeri 0 ise,
 * sonra dakikalar olmadan "14 saat" dizesini yazdırır.
 */

/* const hours = 14;
const minutes = 10;
// let timestring;

/* if (minutes > 0) {
  timestring = `${hours} saat. ${minutes} dk.`;
} else {
  timestring = `${hours} saat.`;
} */

/* const timestring = minutes > 0 ? `${hours} saat. ${minutes} dk.` : `${hours} saat.`

console.log(timestring); */

/**
 * Projenin son teslim tarihini görüntülemek için bir kod yazın. if...else kullanın.
 *
 * Son teslim tarihine 0 gün kalmışsa, "Today" satırını yazdırın
 * Son teslim tarihine 1 gün kalmışsa, "Tomorrow" satırını yazdırın
 * Son teslim tarihine 2 gün kalmışsa, "Overmorrow" satırını yazdırın
 * Son teslim tarihine 3+ gün kalmışsa, "Date in the future" satırını yazdırın
 */

/*const daysUntilDeadline = 0;

if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("Overmorrow");
} else {
  console.log("Date in the future");
} */


// switch - case

/* const gun = 3;

switch (gun) {
    case 1:
        console.log("Pazartesi");
        break;

    case 2:
        console.log("Salı");
        break;
    
    default:
        console.log("Gün yok")
        break;
} */

/**
 * Switch operatörü
 */

/* const username = "Polyssadas";

switch (username) {
  case "Mango":
    console.log("case 1");
    break;
  case "Poly":
    console.log("case 2");
    break;
  default:
    console.log("Default case");
} */

/**
 * Switch kullanarak görev kodunu yeniden düzenleyin.
 *
 * Son teslim tarihine 0 gün kalmışsa, "Today" satırını yazdırın
 * Son teslim tarihine 1 gün kalmışsa, "Tomorrow" satırını yazdırın
 * Son teslim tarihine 2 gün kalmışsa, "Overmorrow" satırını yazdırın
 * Son teslim tarihine 3+ gün kalmışsa, "Date in the future" satırını yazdırın
 */

// const daysUntilDeadline = 0;

/* if (daysUntilDeadline === 0) {
  console.log("Today");
} else if (daysUntilDeadline === 1) {
  console.log("Tomorrow");
} else if (daysUntilDeadline === 2) {
  console.log("Overmorrow");
} else {
  console.log("Date in the future");
} */

/* switch(daysUntilDeadline) {
    case 0:
        console.log("Today");
        break;
    default:
        console.log("Date in the future"); 
}*/


/* const option = 1526;
let message = "";

switch (option) {
  case 1:
    message = "Ürünleri yarın saat 12:00'den itibaren ofisimizden teslim alabileceksiniz";
    break;

  case 2:
    message = "Kurye siparişi yarın 9:00 - 18:00 saatleri arasında teslim edecek";
    break;

  case 3:
    message = "Paket bugün gönderilecek";
    break;

  default:
    message = "Bir yönetici sizi geri arayacak";
}

console.log(message); */




// Mantıksal Operatörler
// ve && --kessin sonuç olamlı hepsi // true - true dışında false
// veya || -- herhangi bir koşul true olması yeterli // false - false dışında true döner
// ! olumsuz hali

/* const username = "azizkaymaz";
const password = "123123"

let isLogin = "";


if(username === "azizkaymazz" || password === "123123") {
    isLogin = "Kullanıcı Doğru";
}else {
    isLogin = "Kullanıcı Yanlış"
}

console.log(isLogin) */

// ve oeratöründe false görene işlem devam eder
// console.log("Ahmet" && "Mehmet" && 0 && "Aziz" && 20)

// veya operatörü ilk yakaladığı true değerini basar
// or yada || veya
// console.log(0 || "Aziz" || "Mehmet" && null)

// ve false görene kadar
// veya true görene kadar 

// number 0
// boolean false
// string ""
// null
// undefined
// NaN



/**
 * Mantıksal operatörler
 *
 * - Tip dönüştürme: mantıksal
 * - && operatörü
 * - Operatör ||
 * - Operatör !
 */

console.log(Boolean(true)); // true
console.log(Boolean(false)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(0)); // false
console.log(Boolean(3.14)); // true
console.log(Boolean(-10)); // true
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean("false")); // true

