//1. Melakukan Looping Menggunakan While
var text1 = '- I Love Coding'
var text2 = '- I will become fullstack developer'
var i=2
console.log('LOOPING PERTAMA')
while(i<=20){
    console.log(`${i} ${text1}`)
    i+=2
}
console.log()

i = 20
console.log('LOOPING KEDUA')
while(i>=2){
    console.log(`${i} ${text2}`)
    i-=2
}
console.log()

//2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA')
for(i=1 ; i<21 ; i++){
    console.log(`${i} ${text1}`)
}
console.log()

console.log('LOOPING KEDUA')
for(i=20 ; i>0 ; i--){
    console.log(`${i} ${text2}`)
}
console.log()

//3. Angka Ganjil dan Genap
console.log('Ganjil Genap')
for(var i=1; i<101; i++){
    var genap = i % 2
    if(genap == 0){
        console.log(`GENAP`)
    } else {
        console.log(`GANJIl`)
    }
}
console.log()

// console.log('Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9')

// //pertambahan counter 2

for (var j = 1; j < 101; j+=2){
    var kelipatan3 = j % 3
    if(kelipatan3 == 0){
        console.log(`${j} Kelipatan 3`)
    } else { console.log('""')
    }
}
console.log()

//pertambahan counter 5

for (var j = 1; j < 101; j+=5){
    var kelipatan6 = j % 6
    if(kelipatan6 == 0){
        console.log(`${j} Kelipatan 6`)
    } else { console.log('""')
    }
}
console.log()

//pertambahan counter 5

for (var j = 1; j < 101; j+=9){
    var kelipatan10 = j % 10
    if(kelipatan10 == 0){
        console.log(`${j} Kelipatan 10`)
    } else { console.log('""')
    }
}