'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//WarmUp（Finish!）

const variableString = "I am a string";
console.log(typeof variableString); // "string"と表示されましたか？

// ここにコードを書いて、"boolean"と表示されるようにしてください。
const variableBoolean = true
console.log(typeof variableBoolean);

//ここにコードを書いて、"undefined"と表示されるようにしてください。
let variableUndefined;
console.log(typeof variableUndefined);

//2 つの number の 平均 を計算して変数に格納しましょう。
const numberA = 30;
const numberB = 45;

const average = (numberA + numberB) / 2;
console.log(average); // numberA と numberB の平均が表示される。

console.log(addTen(20))
function addTen(number){
    return number + 10;
}

console.log(6 + 6);

function add(numOne, numTwo) {
    return numOne + numTwo;
}

console.log(add(4, 3)); // 7 を表示

console.log(add(100));
console.log(add(1, 4, 5));

function average2(num1, num2){
    return (num1 + num2) / 2;
}

console.log(average2(20, 30))
function Square(monkey) {
    return monkey * monkey ;
}

console.log(Square(5))

function cube(x) {
    return x ** 3
}

console.log(cube(3))

function createGreeting(greetingPhrase, instructorName) {
    return greetingPhrase + ", " + instructorName + "!";
}

const morningGreeting = createGreeting("Good morning", "Mike");
const dayGreeting = createGreeting("Hello", "Beau");
const eveningGreeting = createGreeting("Good evening", "Alex");

  console.log(morningGreeting); //"Good morning, Mike!" を表示
  console.log(dayGreeting); // "Hello, Beau!" を表示
  console.log(eveningGreeting); // "Good evening, Alex!" を表示

function circleArea(r){
    return r ** 2 * Math.PI
}
console.log(circleArea(3));

function pyramid(l, w, h){
    return l * w * h / 3
}


