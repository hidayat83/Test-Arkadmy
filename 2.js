// Pada sebuah form, terdapat 2 buah field yaitu: Email dan Password. Buatlah method/function untuk memvalidasi field-field tersebut, dengan requirement sebagai berikut:
// ●   	Disarankan menggunakan REGEX
// Format Email:  Email sesuai standar dan harus diawali angka
// ●   	Format Password: merupakan 9 digit karakter dengan kombinasi 2 simbol, 2 angka dan 5 huruf.
// Clue:
// Peserta hanya diminta membuat function validasi, tidak boleh membuat form HTML.
// Examples:
// -       emailValidity(“3dara@gmail.com”)
// 	return true
// -       passwordValidity(“#words99!”)
// 	return true

function email(str) {
    var num = '0123456789'
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < num.length; j++) {
            if (str[i] === num[j]) {
                return true
            }

        }
    }
    return false
}
console.log(email('3dara@gmail.com'))

function pass(str) {
    var simbol = '!@#$%^&*()'
    var angka = '1234567890'
    var huruf = 'abcdefghijklmnopqrstuvwxyz'
    var count = 0
    var count2 = 0
    var count3 = 0
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < simbol.length; j++) {

            if (str[i] === simbol[j])
                count++
        }
    }
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < angka.length; j++) {

            if (str[i] === angka[j])
                count2++
        }
    }
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < huruf.length; j++) {

            if (str[i] === huruf[j])
                count3++
        }
    }
    if(count===2  && count2===2 && count3===5){
        return true
    }
    return false
}
console.log(pass('#words99!'))