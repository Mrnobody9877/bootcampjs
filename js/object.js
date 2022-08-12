
                                   //object


// var car = {
//     brand : "ford",
//     name : "moostang",
//     color : "black",
//     model : 1969,
//     yearold : function(){
//         return (2021 - this.model);
//         document.write(2021 - this.model);
//     }
// }

// var x = car.model;

// console.log(x);
// console.log(car.color);

// console.log(car.yearold());
// console.log(1400 - car.yearold());


// // car.yearold();


                                       //constructor



var date = Date();

function persons(fname, lname, age){
    this.fname = fname;
    this.lname = lname;
    this.age = age;
    this.birthday = bornyear;
    this.name = fullname;
}

function bornyear(){
    return (date.getFullYear() - this.age);
}
function fullname(){
    return (this.fname + " " + this.lname);
}

var person1 = new persons("ali","hasannejad",24);
var person2 = new persons("prin","amiri",21);

// document.write(person1.fname + "<br>");
// document.write(person1.lname + "<br>");
// // document.write(person2.age);
// document.write(person1.birthday() + "<br>");
// document.write(person1.name());

console.log(person1.birthday());