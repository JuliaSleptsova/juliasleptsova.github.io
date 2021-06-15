/*
console.log("Hello World!");
console.warn("Hello World!");
console.error("Hello world!");
// alert("Привет, JavaScript!");
let nameFirst;
console.log(nameFirst);
nameFirst = "Julia";
console.log(nameFirst);
let a = prompt("Как тебя зовут?");
alert(`Привет, ${a}!`);
let age = confirm('Тебе больше 18 лет?');
alert(age);

let name = prompt("Какое \"официальное\" название JavaScript?");
if (name === "ECMAScript") {
    alert("Правильно");
} else {
    alert("Не знаете? “ECMAScript”!");
}

let number = prompt("Введите число");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

let condition = (1 > 3) ? "True" : "False";
console.log(condition);
let login = prompt();
let message = (login === 'Сотрудник') ? 'Привет' :
    (login === 'Директор') ? 'Здравствуйте' :
        (login === '') ? 'Нет логина' :
            '';
console.log(message);

let mili = prompt();
let kilometrs = mili * 1.6;
console.log(+kilometrs.toFixed(2));
console.log(kilometrs * "text");
console.log(kilometrs / 0);
console.log(typeof kilometrs);*/

/*let value;
let d = typeof typeof value;
alert(d);*/

/*
let str1 = "Hello";
let str2 = "!";
let rst = str1.length + str2.length;
console.log(rst);

let num = prompt("Введите трехзначное число");
let num1 = +(num / 100).toFixed(0);
let num2 = +((num / 10) % 10).toFixed(0);
let num3 = +(num % 10).toFixed(0);
console.log(num1 + num2 + num3);

switch (+num) {
    case 111 :
        alert(1);
        break;
    case 222 :
        alert(2);
        break;
    default:
        alert(0);
}

let number = +prompt("Enter a number ");
let factorial = 1;
for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log(factorial);
*/

/*
let sum = 0;
while (true) {
    let input = prompt("Enter a number");
    if (input === "=") {
        break;
    }
    sum += +input;
}
console.log(sum);*/

/*
let number = +prompt("Enter a number ");
let sum = 0;
let count = 0;
for (let i = 0; i <= number; i++) {
    if (i % 2 === 1) {
        sum += i;
        count++;
    }
}
let rsl = +(sum / count).toFixed(2);
console.log(sum, count);
console.log(rsl);
*/

/*const auto = {
    model : 'Audi',
    color : "red",
    year : 2020
}
auto.model = 'BMW';
const input = prompt("Enter a property: ");
const value = auto[input];

auto.person = 'man';
delete  auto.color;
if (input in auto){
    console.log(value);
    console.log(auto);
} else {
    console.log("Not found");
}

let auto1 = Object.assign({}, auto);
delete auto1.year;
console.log(auto);
console.log(auto1);*/


/*let person = {
    name : 'Sam',
    years : 25
}
let {name, years: age, height = null } = person;
console.log(name, age, height);*/

/*let user = {
    name : 'John'
}
let input = prompt("Enter a age: ");
user.age = +input;

let admin = Object.assign({}, user);
admin.role = 'admin';

let {name, age, role } = admin;

console.log(user, admin, name, age, role);*/

/*const name = [1, 2, 4, 6, 5];
let input = +prompt("Enter a number");
const index = name.indexOf(input);
if (index > -1) {
    console.log(name[index]);
} else {
    console.log("Not found");
}

name.push(40);
name.unshift(9);
console.log(name);*/

/*let nums = [1,4,6,7,9];
let input = +prompt("Enter a num: ");
let index = nums.indexOf(input);

if (index > -1 ){
    nums.splice(index, 1);
}
console.log(nums);*/

/*
let name = 'Julia Morozova';
let [fName, sName]  = name.split(' ');
console.log(fName);
console.log(sName);*/
/*let olimpics = [12,34];
let [gold=0, , bronze=0] = olimpics;
console.log(gold,bronze);*/

/*let arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
arr.forEach(function (el) {
   sum += el;
});

let newArr = arr.map(function (el) {
   return el * 2;
});
let max = 0;
let min = 0;
arr.forEach(function (el) {
    if (max < el) {
        max = el;
    }
    if (min > el) {
        min = el;
    }
});
console.log(sum, min, max);
console.log(newArr);*/

/*
function calc (number, exp) {
    let res = 1;
    for (let i = 1; i <= exp; i++) {
        res = res * number;
    }
    return res;
}

let res = calc(2,10);
console.log(res);

const fun = function (a) { // анонимная функция

}

const funS = (a) => { //стрелочная функцияб оязательно должна быть куда-то записана, например в переменную

}

const area = (a, b) => {
    if ((a > 0) && (b > 0)) {
        return a * b;
    } else {
        return null;
    }
}

const  result = area(-5,4);
console.log(result);

*/
/*

function outer() {
    let message = 'Hello';
    return function () {
        console.log(message);
    }
}

const value = outer();

const message = 'hi';
value();

function fun() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    }
}

const resl = fun();
resl();
resl();
*/
//асинхронные операции
/*function counter(from, to) {
    let number = from;

    const id = setInterval(() => {
        console.log(number);

        if (number == to) {
            clearInterval(id);
        } else {
            number++;
        }
    }, 1000)
}

counter(4, 8);*/
//коллбэк функции :
/*const request = (cb) => {
    console.log('request');

    cb({ text : 'Error'});

    setTimeout(() => {
        console.log('response');
        const data = { text : 'Hello' };
        cb(null, data);
    }, 3000)
}


request((err, data) => {
    if (!err) {
        console.log('Hello callback!', data);
    } else {
        console.error(err);
    }
});*/

//промис специальная конструкция, которая обрабатывает асинх операции
// new Promise ((resolve, reject) -> {
//асинхронная операция
// });

/*
const request = new Promise((resolve, reject) => {
    console.log('request');

    setTimeout(() => {
        console.log('response');
        reject();
    }, 2000);

});

request.then(() => {
    console.log('resolved')
}, () => {
    console.log('rejected')
});
*/

/*
const person = {
    name: 'Julia',
    sayHi: function () {
        console.log('Hi');
    }
}


const personShort = {
    name: 'Julia',
    sayHi () {
        console.log(`Hi, ${this.name}!`);
    },
    changeName (str) {
        this.name = str;
    }
}
personShort.changeName('Konstantin');
personShort.sayHi();*/

/*
const calc = {
    a: 0,
    b: 0,
    sum: function () {
        console.log(this.a + this.b);
    },
    mul () {
        console.log(this.a * this.b);
    },
    write(a, b) {
        this.a = a;
        this.b = b;
    }
}
calc.write(5,9);
calc.sum();
calc.mul();
console.log(calc);*/

const el = document.querySelector('.last');
el.style.textDecorationLine = 'none';
el.style.color = '#f00';

/*
let today = new Date();
let hourNow = today.getHours();
let greeting;
if (hourNow > 18 ) {
    greeting = 'Добрый вечер!';
} else  if ( hourNow > 12 ) {
    greeting = 'Добрый день!';
} else if (hourNow > 0) {
    greeting = 'Доброе утро!';
} else {
    greeting = 'Приветствую!';
}
console.log(hourNow, greeting);
document.write('<h3>' + greeting + '</h3>');*/


/*let name = 'Frontend developer';
let elName = document.getElementById('name');
elName.textContent = name;*/


const request = (cb) => {
    let name = 'Frontend developer';
    let elName = document.getElementById('name');
    setTimeout(() => {
        elName.textContent = name;
        cb();
    }, 5000)
}


request(() => {
    console.log('Hello callback!');
  /*  alert('Успех!');*/
});

