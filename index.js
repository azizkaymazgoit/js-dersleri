



/* const kullanicilar = [
   {
    id: 1,
    ad: "Mehmet",
    soyad: "Yılmaz",
    yas: 30,
    hobileri: ["kod yazmak"],
    favoriDili: "CSS",
    isAdmin: false
  },
   {
    id: 2,
    ad: "Aziz",
    soyad: "Kaymaz",
    yas: 33,
    hobileri: ["kitap okumak", "kod yazmak"],
    favoriDili: "HTML",
    isAdmin: true
  },
  {
  id:3,
   ad: "Ali",
   soyad: "Kaymaz",
   yas: 33,
   hobileri: ["kitap okumak", "kod yazmak"],
   favoriDili: "JS",
   isAdmin: true
 },
 {
  id: 4,
  ad: "Ömer",
  soyad: "Kaymaz",
  yas: 33,
  hobileri: ["kitap okumak", "kod yazmak"],
  favoriDili: "JS",
  isAdmin: true
}
]

function favoriDiliBul(arr, favori) {

  // önce css sevenleri toplayabileceğim array lazım
  const secilenler = [];

  // gelen datayı döngüye sok
  for(const kullanici of arr) {
    // o anki kullanıcının favoriDilini istenilen favori ile kıyasla
    if(kullanici.favoriDili === favori) {
      // eğer istenilen bilgiiyi karşılıyorsa boş diziye aktar
      secilenler.push(kullanici)
    }

  }

  // yeni diziyi dışarı aktar
  return secilenler;

}

console.log(favoriDiliBul(kullanicilar, "JS")) */


/*const posts = [
  {
    id: "1725631789253asdasd",
    image_url: "asjdgasjkd",
    user_id: 1635172
  },
  {
    id: "1725631789253asdasd",
    image_url: "asjdgasjkd",
    user_id: 1635172
  },
  {
    id: "1725631789253asdasd",
    image_url: "asjdgasjkd",
    user_id: 1635172
  },
  {
    id: "1725631789253asdasd",
    image_url: "asjdgasjkd",
    user_id: 1635172
  },
  {
    id: "1725631789253asdasd",
    image_url: "asjdgasjkd",
    user_id: 1635172
  }
];

for(const post of posts) {
  console.log(post.id)
}

const kullanicininBegendigiResimler = []

kullanicininBegendigiResimler.push({
  resim_id: 17253761253,
  resim_url: "http:asdasdas"
},{
  resim_id: 123123,
  resim_url: "http:asdasdas"
},{
  resim_id: 123123,
  resim_url: "http:asdasdas"
})

console.log(kullanicininBegendigiResimler) */

// array []
// object {}



// this
/*const kullanici = {
  id: 1,
  ad: "Mehmet",
  soyad: "Yılmaz",
  yas: 30,
  hobileri: ["kod yazmak"],
  favoriDili: "CSS",
  isAdmin: false,
  yaziYaz() {
    console.log("merhaba")
  },
  hobiEkle(hobi) {
    this.hobileri.push(hobi)
  },
  isimDegistir(isim) {
    this.ad = isim
  }
}

// kullanici.hobiEkle("Kitap okumak");
kullanici.isimDegistir("Aziz")

console.log(kullanici) */


/*const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  changeName(newName) {
    this.name = newName;
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName("New playlist name");

playlist.addTrack("new track 1");
console.log(playlist.getTrackCount());

playlist.updateRating(4);
console.log(playlist); */


// spread operatörü ...
// fonksiyon
// array
// obje

/* function deneme(sayi1, sayi2, ...abc) {
  let toplam = 0;
  for(const a of abc) {
    toplam += a
  }
  return toplam
}

console.log(deneme(1,2,3,4,5,6,7)); */

/*const arr1 = [1,2,3,4]
const arr2 = [10,20,30,40,50]

// const arr3 = arr1.concat(arr2)

const arr3 = [...arr1, 100, ...arr2, 300]

console.log(arr3) */

/* const kisiselBilgiler = {
  ad: "Aziz",
  soyad: "Kaymaz",
  favoriDil: "CSS"
}

const ayarlar = {
  sayfaSayisi: 10,
  tema: "light"
}

const profil = {
  ad: "Mehmet",
  favoriDil: "HTML",
  ...kisiselBilgiler,
  
  ...ayarlar,
  
}

console.log(profil) */



/*const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: true },
];

function getOnlineFriends(allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
}

console.log(getOnlineFriends(friends)); */


/*const taslar = [
  { isim: "Zümrüt", fiyat: 1300, adet: 4 },
  { isim: "Elmas", fiyat: 2700, adet: 3 },
  { isim: "Altın", fiyat: 400, adet: 7 },
  { isim: "Gümüş", fiyat: 200, adet: 2 },
];

const revizeListe = []

for(const tas of taslar) {
	
	const taslarinToplami = tas.fiyat * tas.adet
  let toplam = 0;

revizeListe.push({
    ...tas,
		total: taslarinToplami
	})

  // toplam += taslarinToplami

  // revizeListe.push(toplam)
 
}

console.log(revizeListe); */


// const temps = [18, 14, 12, 21, 17, 29, 24, 31];

// console.log(Math.min(...temps));
//console.log(Math.min(...temps));
//console.log(temps);
