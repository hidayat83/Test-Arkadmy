// Buatlah fungsi/method untuk menghitung berapa banyak karakter di parameter ke 2 dari string di parameter pertama. Fungsi juga dapat mencari angka/simbol.

// countChar(“arkademy”, “a”)
// output: 2
// countChar(“javascript”, “x”)
// output: “Not found!”	
// countChar(“peace!”, “!”)
// output: 1
function something(str,str2){
    var count=0
    for(var i=0;i<str.length;i++){
        for(var j=0;j<str2.length;j++){
            console.log(str2[j])
            if(str[i]===str2[j]){
            count++
            }
        }
    }
    if(count===0){
        return 'Not Found!'
    }else{
    return count
    }
}
console.log(something('arkademy', 'a'))
console.log(something('javascript', 'x'))
console.log(something('peace!', '!'))
