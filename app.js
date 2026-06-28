//TASK : 1

// for (let a = 1; a <=20; a++){
//   document.write(a + '<br>')
// } 

// TASK : 2
// for (let a = 20; a >=1; a--){
//    document.write(a + '<br>')
// } 

// TASK : 3
// for (let c = 2; c <= 50; c++ ){
//     if(c % 2 == 0){
//         document.write(c);  
//     };
// }

// TASK : 4
// for (let c = 1; c <= 50; c++ ){
//     if(c % 2 !== 0){
//         document.write(c);  
//     };
// }

// TASK : 5
// for (let a = 1; a <=15; a++){
//   document.write(a + '<br>')
// } 

// TASK : 6
// for (let a = 15; a >=1; a--){
//   document.write(a + '<br>')
// } 

// TASK : 7
// let user=prompt('Give me number of table')

// for(let num = 1 ;num <= 10;num ++){
//          document.write(user + "x"+ num + "=" + user * num + '</br>')
// }

// TASK : 8
// for (let c = 10; c >= 1; c--) {
//    document.write(c + '<br>')
// }
// document.write("Blast Off 🚀");

// TASK : 9
// let user=prompt('Give me number')
// for(let a = 1; a <=user; a++)
//     console.log(a);

// TASK : 10
let StartNum =prompt("Enter Start Number:");
let EndNum = prompt("Enter End Number:");

if (StartNum <= EndNum) {
    for (let c = StartNum; c <= EndNum; c++) {
        document.write(c +'<br>');
    }
}
