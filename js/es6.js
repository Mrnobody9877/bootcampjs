// var a = 15; 



// let b = 16;
// const c = 17;


// function tester(){
//     var x = 1;
//     if (true){
//         var x = 2;
//         console.log(x);
//     }
//     console.log(x);
//     var x = 15;
//     console.log(x);
// }
// tester();


// function tester2(){
//     let x = 1;
//     if (true){
//         let x = 2;
//         console.log(x);
//     }
//     console.log(x);
// }
// tester2();


// for (let i = 1; i <= 15; i++){
//     console.log(i);
// }



const pi = 3.14;


// let name = prompt("enter name: ");

// // let msg = "welcomne" + name;
// let msg = `welcome ${name}`;

// console.log(msg);


// for (let i = 1; i <= 5; i++){
//     for (let j = 1; j <5; j++){
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }



// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }

// for (let k in obj){
//     console.log(k);
// }


// let arr = [1,2,3,4,5,6];

// for (let h of arr){
//     console.log(h);
// }


// for (let ch of "ali"){
//     console.log(ch);
// }


// function add(a, b){
//     var sum = a + b;
//     console.log(a + "+" + b + "=" + sum);
// }

// const add = (a, b) => {
//     console.log(`${a} + ${b} = ${a + b}`);
// }
// add(5,6);


// const msg = x => `welcome ${x}`;
// console.log(msg("ali"));




// var arr = [2,3,4,5,6];

// arr.forEach(function(el){
//     console.log(el * 2)
// });

                //    ya

// for (var i = 0; i <= arr.length; i++){
//     console.log(arr[i] * 2);
// }

            //  ya



// const arr = [2,3,4,5,6,7];

// arr.forEach(v => {
//     console.log(v * 2);
// })


// const test = (a, b = 3, c = 5) =>{
//     return (a + b + c);
// }

// console.log(test(4));


// let car = {
//     name : "ford",
//     color : "red",
//     age : 1969,
//     yearborn() {
//         return (Date() - this.age);
//     }
// }


// let brand = "ford";
// let name = "moostang";
// let color = "black";
// let model = 1969;

// let car = {brand, name, color, model}

// console.log(car.brand);


// let prop = "name";
// let id = "1234";
// let mobile = "+989116732232";

// let user = {
//     [prop] : "ali",
//     [`user_${id}`] : `${mobile}`,

// };

// console.log(user.name);
// console.log(user.user_1234);



// let person = {
//     name : "ali",
//     age : 24,
//     eye_color: "black"
// };

// let student = {
//     name : "prin",
//     age : 21,
//     xp : "6"
// };


// let newstudent = Object.assign ({}, person, student);


// console.log(newstudent.name);
// console.log(newstudent.age);
// console.log(newstudent.xp);
// console.log(newstudent.eye_color);



// // let newperson = person;
// let newperson = Object.assign({}, person, {name : "dave", age : 17});

// // newperson.name = "dave";

// console.log(person.name);
// console.log(newperson.name);
// console.log(newperson.age);


// let obj1 = {
//     a : 1,
//     b : 2,
//     c : 3
// };

// let obj2 = Object.assign ({c : 5, d : 6}, obj1);

// console.log(obj2.c, obj2.d);


// let arr_a = ["1", "2", "3", "4"];
// let [one, two, three, four] = arr_a

// console.log(one);
// console.log(two);


// let aa = () => {return [1,2,3,4]};
// let [one, , three, four] = aa();

// console.log(three);


// let x, y, z = 6, w = 12;

// [x , y] = [5 , 9];

// [z , w] = [w , z]

// console.log(x);
// console.log(y);
// console.log(z);
// console.log(w);


// function testy(arr){
//     for (let k = 1; k < arguments.length; k++){
//         let num = arguments[k];
//         if (arr.indexOf(num) === -1){
//             return (false);
//         }
//     }
//     return (true);
// }

// let x = [1,2,3,4,5,6];

// console.log(testy(x,2,3,4));



// function testy(arr, ...nums){
//     for (let num of nums){
//         if (arr.indexOf(num) === -1){
//             return (false);
//         }
//     }
//     return (true);
// }

// let x = [1,2,3,4,5,6];
// console.log(testy(x,2,3,5));



// function myfunc(x,y,z,w){
//     console.log(x + y + z + w);
// }

// var args = [1,2,3];

// myfunc.apply(null,args.concat(4));



const myfunc = (w,x,y,z) => {
    console.log(w + x + y +z);
}

let args = [1,2,3];
myfunc(...args,4);