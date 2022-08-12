// for (var i = 1; i <= 10; i++){
//     console.log(" hello world ");
// }

// var i = 1;

// for (; i <=10; i+=2){
//     console.log("hello world");
// }

// var i = 1;
// while(i <= 10){
//     console.log("hello");
//     i++;
// }


// while (true){
//     var fname = prompt(" please enter your name: ");
//     if (fname == "mehdi"){
//         document.write("wlecome back mehdi");
//         break;
//     }
//     else{
//         alert("your input is wrong nplease try again");
//     }
// }

// var i ;
// while(i = prompt("enter your name: ")){
//     if(i == "mojtaba"){
//         console.log(i);
//         break;
//     }
// }

// var i = 11;

// do{
//     console.log("hello world");
//     i++
// }
// while(i <= 10);

// for (var i = 1; i <=10; i++){

//     if (i == 5){
//         break;
//     }
//     console.log(i);
// }
// for (var i = 1; i <=30; i++){

//     if (i %2 == 0){
//         continue;
//     }
//     console.log(i);
// }

// var a = 15;
// for (var i = 2; i < a; i++){
//     if (a % i !== 0){
//         continue;
//     }
//     console.log(i);
// }


// for (var i = 1; i <= 10; i++){
//     for (var j = 1; j <= 10; j++){
//         for (var k =1; k <= 10; k++){
//         console.log("hello world");
//         }
//     }
// }

// for (var e = 1; e <= 1000; e++){
//     console.log("hello");
// }

// for (var i = 1; i <= 10; i++){
//     for (var j =1; j <= 5; j++){
//         var m = i * j;
//         document.write(i + "*" + j + "=" + m + "<br>");
//     }
// }

for (var i = 1; i <= 10; i++){
    for (var j = 1; j <= i; j++){
        document.write("*");
    }
    document.write("</br>");
}