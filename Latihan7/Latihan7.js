// 1. Menyusun Barisan Bintang
var rows1 = 5 // input the number of rows
for(var a = 1; a <= rows1; a++) {
    console.log('*')
}

//2 Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 5 //jumlah bintang mengikuti jumlah rows2
var str = ''
for(var b = 1; b <= rows2; b++){
    for(var b2 = 1; b2 <= rows2; b2++){
        str += '*'
    }
    console.log(str)
    str = ''
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3 = 5 // jumlah rows
var str_2 = ''
for (var c = 1; c <= rows3; c++){
    for(var c2 = 1; c2 <= c; c2++){
        str_2 += '*'
    }
    console.log(str_2)
    str_2 = ''
}
