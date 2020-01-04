// Diketahui salah satu kode warna di komputer menggunakan Hex Code, yaitu 3/6 digit yang diawali pagar “#” dan merupakan kombinasi dari angka 0-9 dan/atau huruf A-F. Buatlah fungsi/method untuk memvalidasi input parameter yang diberikan merupakan kode hex yang valid atau tidak. Tidak boleh menggunakan regex!

// Contoh:
// Input: validateColor(“#FFF”)
// Output: Format Hex Code benar!

// Input: validateColor(“#e3e3e3”)
// Output: Format Hex Code benar!

// Input: validateColor(“#ata910”)
// Output: Format Hex Code salah!

function something(pass) {
    var abjd = 'ghijklmnopqrstu'
    var angka = '0123456789'
    var tamp = ''
    if (pass.length === 4 || pass.length === 7) {
        tamp += 'format Hex code benar'
    }
    for (var i = 0; i < pass.length; i++) {
        for (var j = 0; j < angka.length; j++) {
            for (var k = 0; k < abjd.length; k++) {
                if (pass[i] === abjd[k]) {
                    return ' Format Hex code salah'
                }
            }

        }
    }
    
    return tamp

}
console.log(something('#FFF'))
console.log(something('#e3e3e3'))
console.log(something('#ata910'))
