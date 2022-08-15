// class car {
//     constructor(name, brand, hp){
//         this.name = name;
//         this.brand = brand;
//         this.hp = hp;
//     }
// }


// const car1 = new car("ford", "moostang", 600);
// const car2 = new car("pride", "saipa", 50);

// console.log(car1.name);





// class rectangle {
//     constructor (height, width){
//         this.height = height;
//         this.width = width;
//     }
//     get area() {
//         return (this.calcArea());
//     }
//     calcArea(){
//         return (this.height * this.width);
//     }

//     static around(a,b){
//         const ax = a.height - b.height;
//         const bx = a.width - b.width;

//         return (Math.sin(ax, bx));
//     }
// }

// const p1 = new rectangle(5,8);
// const p2 = new rectangle(8,5);

// console.log(rectangle.around(p1,p2));

// const sq = new rectangle (5,5);
// console.log(sq.area);




// var square = class rectangle {
//     constructor (height, width){
//         this.height = height;
//         this.width = width;
//     }
// }


// let square = class rectangle {
//     constructor (height, width){
//         this.height = height;
//         this.width = width;
//     }
// }





class animal {
    constructor (name){
        this.name = name;
    }
    speak(){
        console.log(this.name + "make a noise");
    }
}


class dog extends animal {
    speak(){
        console.log(this.name + "woff");
    }
}

let dog = new dog("rex");
 
dog.speak();