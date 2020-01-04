// Buat sebuah fungsi untuk memeriksa kata palindrom atau tidak dengan ketentuan sebagai berikut :
// - Ketika kata tersebut palindrom akan tetapi memiliki Sebuah Huruf KAPITAL maka dianggap palindrom Kapital
// - Ketika kata tersebut palindrom akan tetapi memiliki Sebuah Huruf Kecil maka dianggap palindrom Kecil
// - Ketika kata tersebut palindrom akan tetapi memiliki Huruf kapital dan huruf kecil lebih dari satu maka dianggap palindrom mix
// - Ketika Kata tersebut palindrom memiliki keseluruhan Huruf Kapital atau kecil maka dianggap palindrom murni

// Catatan:
// Jika inputan memiliki angka/simbol maka angka/simbol tersebut tidak dibaca!

// Input
// palindrom('Malam890')
// Output
// "Palindrom Kapital"

// Input
// palindrom('M77ALAm')
// Output
// "Palindrom Kecil"

// Input
// palindrom('MalaM')
// Output
// "Palindrom Mix"

// Input
// palindrom('mal55_am')
// Output
// "Palindrom murni"

// Input
// palindrom('MALAM')
// Output
// "Palindrom murni"

// Input
// palindrom('MALAAM')
// Output
// "Bukan Kata palindrom"

function something(str) {
    var temp = ''
    var tamp = ''
    var simbol = 'abcdefghijklmnopqrstuvwxyz'

    for (var i = 0; i < str.length; i++) {
        console.log(str[i])
        for (var j = 0; j < simbol.length; j++) {
            // console.log(simbol[j])
            if (str[i] === simbol[j].toUpperCase() || str[i] === simbol[j]) {
                temp += str[i]
            }
        }
    }
    

    for (var i = 0; i < Math.floor(temp.length / 2); i++){ 
        
      if (temp[i] !== temp[temp.length - i - 1]){
        
            return 'Bukan Palindrome'
      
    }
}

    return 'Palindrome Murni'
}

console.log(something('Malam890'))
console.log(something('M77ALAm'))
console.log(something('MalaM'))
console.log(something('mal55_am'))
console.log(something('MALAM'))
console.log(something('MALAAM'))