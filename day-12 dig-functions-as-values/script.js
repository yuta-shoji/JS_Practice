'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.trace();
        console.groupEnd();
    }
}


//ペア演習
//以下の関数は、a）返り値を持つ、b）副作用を持つ、c）両方持つ、のどれに当たりますか。

// #1
function greeting() {
    console.log("Hello!");
}
//b

// #2
let triple = function (x) {
    return 3 * x;
};
//a

// #3
let double = function (x) {
    console.log(2 * x);
};
//b

// #4
const cache = [];

function average(array) {
    let result = 0;
    for (const number of array) {
        result = result + number;
    }
    result = result / array.length;

    cache.push(result);
    return result;
}
//c

// #5
function sayHello(friend) {
    const languages = ["Hello", "Konnichiwa", "Hola", "Nihao"];
    const randomIndex = Math.round(Math.random() * languages.length - 1);
    const randomGreeting = languages[randomIndex];
    console.log(randomGreeting + " " + friend + "!");
}
//b

//2
//次のコードを実行すると、デベロッパーコンソールに何が表示されますか。その動作を、一行ずつ、説明してみましょう。

function greeting() {
    console.log("Hello!");
}

function runSomething(func) {
    func();
}

// runSomething(greeting);

// Answer
    //関数runSomethingが、引数greetingを持って呼び出される
    //関数runSomethingが呼ばれ、仮引数funcとして関数greetingを格納する
    //func()で、関数greetingが呼び出される
    //関数greetingがコンソールに"Hello!"を出力する
    //返り値はない。

//3
//以下のコードが動かないのはなぜでしょう。

// runSomething(greeting());
//   ヒント：　関数 greeting は何を返しますか。

// Answer
    //関数runSomethingが、引数greetingを持つが、この時点で関数greetingが実行される
    //関数greetingが実行され、コンソールに"Hello!"を出力する
    //関数greetingは返り値がundefinedなので、undefinedを引数として関数runSomethingが実行される
    //関数runSomethingが呼ばれ、仮引数funcとしてundefinedを格納する
    //func()で、funcを実行しようとするが、funcはundefinedなので
    //「func is not a function at runSomething（funcは関数じゃないよ）」というエラーがでる


//######################################################################################################################
//基礎演習
//returnAll という関数を考えます。

// function returnAll(value) {
//     return value;
// }

//1
//関数宣言はなく、関数式で returnAll を書いてみましょう。

const returnAll = function(value) {
    return value;
}


//2
//returnAll を呼び出した結果の typeof を表示させてみましょう。それぞれ、なんと表示されるでしょう。

// 例えば、、、
// console.log(typeof returnAll(false)); // boolean

// console.log(typeof returnAll(5)); // number
// console.log(typeof returnAll("5")); // string
// console.log(typeof returnAll([])); // object
// console.log(typeof returnAll({ a: 1 })); // object

// function foo() {
//     return "hi";
// }

// console.log(typeof returnAll(foo)); // function
// console.log(typeof returnAll(foo())); // string

//3
// console.log(returnAll(foo)) と console.log(returnAll(foo())) の違いは何でしょう。🤔
//foo → 関数丸ごと
//foo() → "hi"

//#######################################################################################################################
//中級演習

//1
//関数 doSomething を宣言してください。

/**
 * @param {Function} ???
 * @param {any} ??? - 与えられた関数に渡す引数
 * @returns {any} 与えられた引数を、与えられた関数に渡したときの返り値
 */
// ここにコードを書きましょう
function doSomething(action, number) {
    return action(number);
}

function addTen(number) {
    return number + 10;
}

test(doSomething(addTen, 6), 16);
test(doSomething(addTen, -100), -90);

//2
//ここまでの授業で扱った関数は outer、addTen、doSomething のようにすべて名前がついていて、
//上の演習でもdoSomething に名前のある関数を渡しました。しかし、名前のない関数、つまり、
//無名関数を doSomething に渡すこともできます。以下のコードでも関数 doSomething はきちんと動作します。

// test(
//     doSomething(function (num) {
//         return num * 4;
//     }, 2),
//     8
// );
//   慣れないと読みづらいかもしれませんが、上のコードは次のコードと同じ挙動をします。

function multiplyFour(num) {
    return num * 4;
}
// test(doSomething(multiplyFour, 2), 8);

//####################################################################################################################
//解説
//1
//次のコードをじっくりと見てください。

const outer = function () {
    return function () {
        return 5;
    };
};

//2
//関数 outer の 返り値 は何ですか。typeof の結果は何になりますか。

// console.log(outer());
//function () {
//     return 5;
// };

// console.log(typeof outer()); // function

//3
//関数 outer を呼び出したものを変数に代入するとどうなるでしょう。

const inner = outer();
// console.log(inner);
// console.log(typeof inner);
//   inner の値とは？ inner の typeof 何になるでしょうか。

//4
//どうすれば 5 という返り値が得られるでしょう。

//5
//以下のコードを実行する前に結果を予測してみましょう。foo をコンソールに表示すると、何が表示されると思いますか。

const add = function (x) {
    return function (y) {
        return x + y;
    };
};

const addFive = add(5);
let foo = addFive(3);
console.log(foo); // ???

//6
//addFive を typeof で評価した結果は何になりますか。

//function