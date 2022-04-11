'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//########################################################################
//warmUp_1
//isMultipleOfThree という名前の関数を宣言しましょう。
//引数の数字が 3 の倍数かどうかを返してください。

function isMultipleOfThree(num) {
    return num % 3 === 0;
}

// テスト
// console.log(isMultipleOfThree(6)); // => true
// console.log(isMultipleOfThree(10)); // => false

//warmUp_2
//isMultipleOf という名前の関数を宣言しましょう。
//1 つ目の引数が 2 つ目の引数の倍数かどうかを返してください。

function isMultipleOf(num1, num2) {
    return num1 % num2 === 0;
};

// テスト
// console.log(isMultipleOf(6, 3)); // => true
// console.log(isMultipleOf(10, 4)); // => false

//########################################################################
//基礎演習

//1
//次のコードには誤りがあります。正しく動作するように修正してください。
function simplePasswordLock(password) {
    if (password === "password") {
        return "Correct! Welcome.";
    } else {
        return "Incorrect password, please try again.";
    }
}
// console.log(simplePasswordLock("qwerty")); // => "Incorrect password, please try again."
// console.log(simplePasswordLock("password")); // => "Correct! Welcome."

//2
//.length を覚えていますか？　.length プロパティ を使うと、
//文字列の長さを手っ取り早く知ることができます。

// console.log("Hello".length);
// console.log("The length of this string is 31".length);
// console.log(" spaces! ".length);

//3
//isItTooLong という名前の関数を宣言しましょう。
//この関数は文字列の引数を 1 つ取ります。
function isItTooLong (str) {
    return str.length > 10;
}
// console.log(isItTooLong("ありがとうございました"))
// console.log(isItTooLong("ありがとう"))

//4
//どちらの数が大きいかを表示する関数を宣言します。
//テストケースを見て、要件を満たすような関数を作ってください。
function biggerNumber(numOne, numTwo) {
    if (numOne > numTwo){
        return "numOne";
    } else {
        return "numTwo";
    }
}
// console.log(biggerNumber(4, 3)); // 'The first argument is bigger.' を表示
// console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'

//5
function printDataType(data) {
    if (typeof data === "number") {
        return "This is a number.";
    } else if (typeof data === 'string') {
        return "This is a string."
    } else if (typeof data === 'boolean') {
        return "This is a boolean."
    } else if (typeof data === 'undefined') {
        return "This is a This is not a string, boolean, or number."
    }
}
console.log(printDataType(42)); // => "This is a number."
console.log(printDataType("Hello!")); // "This is a string." が表示されるようにする。
console.log(printDataType(true)); // => "This is a boolean."
console.log(printDataType(undefined)); // => "This is not a string, boolean, or number."

//6
//greeting という関数を作りましょう。この関数は名前と言語を表す 2 つの引数を取ります。
//指定された人に対して、指定された言語で挨拶を返す関数にしてください。
function greeting(name, language){
    let greet
    if (language === 'Japanese') {
        greet = 'konnichiwa'
    }else if (language === 'English'){
        greet = 'Hello'
    }else if (language === 'German'){
        greet = 'Gutentag'
    }else if (language === 'Spanish'){
        greet = 'Hola'
    }
    return `${greet}, ${name}!`
}

// console.log(greeting("Harry Potter", "Japanese")); // "Konnichiwa, Harry Potter!" が表示されるようにする。
// console.log(greeting("Harry Potter", "English")); // => "Hello, Harry Potter!"
// console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
// console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"

//7
//isEven という関数を作りましょう。
//与えられた数字が偶数のときに true を返します。
function isEven(num){
    return num % 2 === 0
}

// console.log(isEven(4)); // true が表示されるようにする。
// console.log(isEven(7)); // => false


//########################################################################
//中級演習

//1
//isOdd: 引数が奇数だったら true を 返します。

function isOdd(num) {
    return num % 2 !== 0
}
// console.log(isOdd(4)); // true が表示されるようにする。
// console.log(isOdd(7)); // => false

//2
//isPositive: 引数が正の数だったら true を 返し
//正の数 でなければ false を返します。

function isPositive(num) {
    if (num < 0) {
        return true
    } else if (num > 0) {
        return false
    }
}
// console.log(isPositive(2));
// console.log(isPositive(0));
// console.log(isPositive(-2));

//3
//isNegative: 引数が負の数だったら true を 返し
//負の数 でなければ false を返します。

function isNegative(num) {
    if (num > 0) {
        return true
    } else if (num < 0) {
        return false
    }
}
// console.log(isNegative(2));
// console.log(isNegative(0));
// console.log(isNegative(-2));

//4
//引数がゼロだったら true を 返し 、ゼロ でなければ false を返します。

function isZero(num) {
    return num === 0
}
// console.log(isZero(2));
// console.log(isZero(0)); /
// console.log(isZero(-2));

//ビルトイン1
//randomNumber: この関数は数値型のデータ number を引数として取り、
//0 以上 number（引数の数字） 未満の間のランダムな値を返します。
function randomNumber(number) {
    return Math.floor(Math.random() * number);
}
// console.log(randomNumber(5))
// console.log(randomNumber(10))
// console.log(randomNumber(15))


//ビルトイン2
//guessMyNumber: この関数は数値型のデータ number を引数として取り、
//引数で与えられた数字と 0 以上 5 以下の間のランダムな整数を比較します。
//比較した結果一致すれば "YES!" を、一致しなければ "NO!" を返します。

function guessMyNumber(number) {
    let randomNum = Math.floor(Math.random() * 6);
    // console.log('randomNum: ', randomNum);
    // console.log('number: ', number);
    if (number === randomNum) {
        return "YES!"
    } else {
        return "NO!"
    }
}
// console.log(guessMyNumber(2))

//########################################################################
//応用演習

//1
// /randomStopLight という名前の関数を宣言し、
// 以上 10 以下のランダムな整数を生成します。生成した数字が
// 3 未満であれば "🔴Red" を返し、
//3 以上 6 以下であれば "🟡Yellow" を返し、
//6 より大きければ "🟢Green"を返すようにしてください。

function randomStopLight() {
    let randomNum = Math.floor(Math.random() * 11);
    // console.log('randomNum: ', randomNum);
    if (randomNum < 3){
        return "🔴Red"
    } else if (randomNum >= 3 && randomNum <= 6){
        return "🟡Yellow"
    } else {
        return "🟢Green"
    }
}

// console.log(randomStopLight())