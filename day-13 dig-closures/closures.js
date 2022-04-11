"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("actual   : ", actual);
        console.log("expected : ", expected);
        console.trace();
        console.groupEnd();
    }
}

//ペア演習
//1
//次の関数は、どこが間違っているでしょう。コードを修正してください。

// →仮引数が数字になっている。returnが１になっている

function addOne(num) {
    return num + 1;
}

// test(addOne(5), 6);
// test(addOne(50), 51);

//2
//次のコードは、A と B どちらのテストが正しいでしょうか。
// => Bが正しい

// function doSomething(value, action) {
//     return action(value);
// }

// function greeting(name) {
//     return `Hello ${name}`;
// }

// test(doSomething("Alex", greeting()), "Hello Alex"); // A
// test(doSomething("Alex", greeting), "Hello Alex"); // B

//3
//何がコンソールに表示されるでしょうか。なぜ、その値が表示されるのでしょう。

// => Outside xが出力

// let x = "Outside x";
// function bar() {
//     let x = "Inside x";
//     return "This is bar!";
// }

// bar();
// console.log(x);

//4
//プライベート変数とは何ですか。

// => 関数内でのみ使える変数。

//########################################################################################################
//基礎演習
//1
//下にクロージャが作られています。クロージャのスコープ内にあるのは、どの変数でしょうか。
//しっかりとコードを読んだら、関数宣言の下にあるコメントを 1 行ずつ外して、コンソールの表示を確認してください。
//各行のコードが何をしているか分かりますか。疑問があるときは、必ず質問してください。🙋

function createPasswordProtectedAccount(userChosenPassword) {
    const savedPassword = userChosenPassword;

    function checkPassword(passwordEntered) {
        if (savedPassword === passwordEntered) {
            console.log("正しいパスワードです。アクセスを許可します。");
        } else {
            console.log("パスワードが間違っています。アクセスできません。");
        }
    }

    return checkPassword;
}

// const account = createPasswordProtectedAccount("Test1234"); // 引数に初期パスワードを入れる。
// account("8skwob"); // 引数に間違ったパスワードを入れる => "パスワードが間違っています。アクセスできません。"
// account("Test1234"); // 引数に正しいパスワードを入れる => "正しいパスワードです。アクセスを許可します。"

//2
//さあ、あなたの番です！以下のクロージャ を見てみましょう。
//関数 createDonationAccount を呼び出し、返り値を変数に代入しましょう。
//正しく書けていれば、“寄付受付口座が作成されました。” とコンソールに表示されるはずです。

//次に、変数に代入された関数を 3 回呼び出してみましょう。
//正しくできていれば、3 回目の実行で、コンソールに 2 と表示されるはずです。
function createDonationAccount() {
    let donations = 0;

    function addDonation() {
        console.log(donations);
        donations += 1;
    }
    console.log("寄付受付口座が作成されました。");
    return addDonation;
}

// const donation = createDonationAccount();
// donation();
// donation();
// donation();

//3
//講義の中で勉強したコードですが、何も見ずに自分で書いてみましょう。
//関数 add を宣言し、引数は x とします。add は、引数 y を受け取る関数を返します。内部関数は、x と y の和を返します。

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数 y をとり、y に x を足した値を返す関数
 */
// コードを書き始めましょう
function add(x) {
    return function (y) {
        return x + y;
    }
}

// const addFive = add(5);
// test(addFive(1), 6);
// const addTen = add(10);
// test(addTen(4), 14);

//4
//次の関数は動作しますが、大きな問題があります。それは何でしょうか？

// => [let counter = 0;]これが関数makeCounterの外にあるから、新しいカウンターを作ってもリセットされず影響を受けてしまう。
//    関数makeCounterの中で変数counterを宣言すればいい。

let counter = 0;
function makeCounter() {
    return function () {
        counter += 1;
        return counter;
    };
}

// const counterA = makeCounter();
// test(counterA(), 1);
// test(counterA(), 2);

// const counterB = makeCounter(); // 新しいカウンターを作りたい。
// test(counterB(), 1);
// test(counterB(), 2);

//#########################################################################################################################
//中級演習
//1
//自分でクロージャを作りましょう。以下のようなシナリオを考えます。

//あなたは、13 歳未満の子どもはアクセスできない機能のある Web サイトを作成しています。

//引数に age をとる関数 createWebsiteAccount を宣言してください。
//呼び出されるたびに、age を 1 つ加算し、また、age が 13 歳以上なら true を返し、13 歳未満なら false を返す内部関数を作ります。
/**
 * @param {number} 年齢
 * @returns {() => boolean} 実行されるたびに age に 1 を足し、 age が 13 以上かどうかを返す関数
 */

function createWebsiteAccount(age) {
    return function () {
        age++
        return age >= 13;
    }
}

// const childAccount = createWebsiteAccount(10);
// test(childAccount(), false); // => false
// test(childAccount(), false); // => false
// test(childAccount(), true); // => true (今、子供は 13 歳です！)

// const adultAccount = createWebsiteAccount(33);
// test(adultAccount(), true); // => true (何回呼び出すかに関わらず、いつも true を返す)

//2
//引数に x を取り、関数を返す product という関数を作成してください。内部関数は引数に y をとり、x と y の積を返します。

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y をとり、x に y を掛け合わせた値を返す関数
 */

function product(x) {
    return function (y) {
        return x * y;
    }
}

const product3 = product(3);

// test(product3(4), 12);
// test(product(4)(5), 20);
// test(product(6)(7), 42);

//3
//引数に x を取り、関数を返す subtract という関数を作成してください。内部関数は引数に y をとり、x から y を引いた値を返します。

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y をとり、x から y を引いた値を返す関数
 */
function subtract(x) {
    return function (y) {
        return x - y;
    }
}

const subtract5 = subtract(5);

// test(subtract5(4), 1);
// test(subtract(10)(8), 2);
// test(subtract(15)(-5), 20);

//######################################################################################################################
//ナイトメア
//関数 addCurry を宣言してください。これを解くには、おそらく カリー化（currying） と呼ばれる技術を使用する必要があるでしょう。

/**
 * @param {number} ???
 * @returns {Function} 呼び出しが連鎖でき、value メソッドで値を取り出せる関数
 */

let result = 0;

function addCurry(num) {
    result += num;
    addCurry.value = () => {
        let sum = result;
        result = 0;
        return sum;
    }
    return addCurry;
}

// 関数を一度呼び出すだけでも、value() で値を得られます。
test(addCurry(1).value(), 1);

// 関数呼び出しを連鎖させて、累計を出すことができます。
test(addCurry(1)(2).value(), 3);
test(addCurry(1)(2)(3)(4)(5)(6).value(), 21);
test(addCurry(1)(2)(3)(4)(5)(6)(7)(8)(9)(10).value(), 55);

