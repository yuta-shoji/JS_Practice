'use strict'

//自己評価：5

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("TEST Passed!!");
    } else {
        console.error("missed...");
        console.group("result");
        console.log("   actual : ", actual);
        console.log(" expected : ", expected);
        console.groupEnd();
    }
}

//####################################################################################################################
//1
function evenOrOdd(array, bool) {
    const isEven = num => {
        return num % 2 === 0;
    }
    const isOdd = num => {
        return num % 2 !== 0;
    }
    return bool ? array.filter(isEven) : array.filter(isOdd);
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);
test(evenOrOdd([0.2, 1.5, 4.7, 6.0, -2.2, 23.4], true), [6]); //追加テスト

//####################################################################################################################
//2
function findKeys(object, target) {
    return Object.keys(object).filter(key => object[key] === target);
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);
test(findKeys({ A: true, B: false, C: undefined, D: null, E: true }, true), ["A", "E"]); //追加テスト

//####################################################################################################################
//3
function buildObject(array1, array2) {
    const result = {};
    array1.forEach((elem, index) => result[elem] = array2[index]);
    return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3}); // {"a": 1, "b": 2, "c": 3}
test(buildObject(["cat", "dog", "duck"], ["meow", "woof", "quack"]), {"cat": "meow", "dog": "woof", "duck": "quack"}); // {"cat": "meow", "dog": "woof", "duck": "quack"}
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN}); // {"cat": null, "dog": 0, "duck": NaN}
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//####################################################################################################################
//4
function add(num) {
    return x => x + num;
}

const addTwo = add(2);
test(addTwo(3), 5); // 5
test(addTwo(70), 72); // 72

const addOneHundred = add(100);
test(addOneHundred(3), 103); // 103

// 追加テスト
const addNegativeTwenty = add(-20);
test(addNegativeTwenty(35), 15);
test(addNegativeTwenty(4), -16);

//####################################################################################################################
//5
function simpleHello() {
    console.log("Hello");
}

function anotherGreeting(name) {
    return "Hello, " + name;
}

const foo = simpleHello();
const bar = anotherGreeting("JavaScript");

console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください

// 回答
//  "Hello" ⇨ undefined ⇨ "Hello, JavaScript"

//説明
//const foo = simpleHello(); で関数simpleHelloが実行され、コンソール上に"Hello"が出力される。返り値 undefined が変数 foo に格納される
//const bar = anotherGreeting("JavaScript"); 関数anotherGreetingが実行され、返り値 "Hello, JavaScript" が変数 bar に格納される
//console.log(foo); でundefinedがコンソール上に出力される
//console.log(bar); で "Hello, JavaScript" がコンソール上に出力される

//####################################################################################################################
//7

function addOne(num) {
    return num + 1;
}

function map(collection, func) {
    const result = [];
    if (Array.isArray(collection)) {
        for (const arr of collection) {
            result.push(func(arr));
        }
    } else {
        for (const key in collection) {
            result.push(func(collection[key]));
        }
    }
    return result;
}

test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4]
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4]
test(map([0, -3, -9], addOne), [1, -2, -8]); // 追加テスト
test(map({ a: 0, b: -3, c: -9 }, addOne), [1, -2, -8]); // 追加テスト

//####################################################################################################################
//8
function changeMiddle(sentence, str) {
    const array = sentence.split(" ");
    array[1] = str;
    return array.join(" ");
}

test(changeMiddle("I like cats", "love"), "I love cats"); // "I love cats"
test(changeMiddle("red green blue", "yellow"), "red yellow blue"); // "red yellow blue"

//####################################################################################################################
//9
function countSomething(array) {
    const result = { "STRING": 0, "NUMBER": 0, "BOOLEAN": 0 };
    let maxValue = 0;
    let maxKey = "";
    array.forEach(elem => {
        result[(typeof elem).toUpperCase()] += 1;
    });
    for (const key in result) {
        if (maxValue < result[key]) {
            maxValue = result[key];
            maxKey = key;
        }
    }
    if (maxKey === "BOOLEAN") {
        return "BOOL COUNT: " + maxValue;
    } else {
        return `${maxKey} COUNT: ${maxValue}`
    }
}


test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"

//####################################################################################################################
//10
function each(collection, func) {
    if (Array.isArray(collection)) {
        for (const arr of collection) {
            func(arr);
        }
    } else {
        for (const key in collection) {
            func(collection[key]);
        }
    }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

//####################################################################################################################
//11
function compose(func1, func2) {
    return x => func2(func1(x));
}

function multiplyTwo(x) {
    return x * 2;
}

function addOne(x) {
    return x + 1;
}

const hoge = compose(multiplyTwo, addOne);
test(hoge(5), 11); // 11
test(hoge(100), 201); // 201
//追加テスト
test(hoge(0), 1); // 1
test(hoge(-30), -59); // -59
