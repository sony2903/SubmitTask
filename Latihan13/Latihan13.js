// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. 
// Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
    // you can only write your code here!
    var strLength = str.length
    var i
    var hitungx = 0
    var hitungo = 0
    for(i = 0; i <= strLength; i++){
       if (str[i] == 'x'){
        hitungx++
       } else if (str[i] == 'o'){
        hitungo++
       } else {

       }
    } if (hitungx === hitungo){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true
