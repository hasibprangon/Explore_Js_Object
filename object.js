// create object using object litrrals (we will use it)

const player = {};
player.name = 'Red';
player.speciality = 'batsman';
player.bat = function () {
    console.log('hello');
}
// console.log(player);
// player.bat();

// 
const student = {
    name: 'hasib',
    job: 'student',
    aim: function(){
        console.log('learning wd');
    },
    salary: 10000
}; 
// object constructor
const person = new Object();
// console.log(person);

// object create method
const item = Object.create(null);
// console.log(item);

const newStudent = Object.create(student);
// console.log(newStudent.name);

// class(we will use it too)
class person1 {
    name = 'Prangon';
    adress= 'khoksa';
    constructor(age){
        this.age = age;
    }
}
const p2 = new person1(24)
// console.log(p2);

// using function 
function car (model , price){
    this.model= model;
    this.price = price;
}
const tesla = new car('E10', 5000);
console.log(tesla);