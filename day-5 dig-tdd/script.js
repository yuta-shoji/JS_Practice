'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//warmUp
//1
//以下のコードの誤りを修正してください。

function isHot(temperature) {
    if (temperature > 30) {
        return "It's hot!";
    } else {
        return "It's not hot.";
    }
}

// console.log(isHot(31)); // "It's hot!" を表示
// console.log(isHot(2)); // "It's not hot." を表示
// console.log(isHot(30)); // "It's not hot." を表示

//2
//以下も同様に修正しましょう。

function getTypeOfSchool(age) {
    if (age < 6) {
        return "kindergarten";
    } else if (age < 11) {
        return "elementary school";
    } else if (age < 15) {
        return "junior high school";
    } else if (age < 18) {
        return "high school";
    } else {
        return "after high school";
    }
}

// console.log(getTypeOfSchool(3)); // "kindergarten" を表示
// console.log(getTypeOfSchool(8)); // "elementary school" を表示
// console.log(getTypeOfSchool(13)); // "junior high school" を表示
// console.log(getTypeOfSchool(16)); // "high school" を表示
// console.log(getTypeOfSchool(30)); // "after high school" を表示

//####################################################################################

// function addTen(number) {
//     //
// }

// let actual = addTen(5);
// let expected = 15;

// if (actual === expected) {
//     console.log("Test PASSED!");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }





//####################################################################################
//TDDおさらい

//1
//下記のコードを実行すると結果はどうなるでしょうか？ コンソールで実行して確認してみましょう。

// ファイル全体で使用する TDD 用の変数を宣言する
let expected;
let actual;

// // テストする対象のコード
// function add(a, b) {
//     return a + a;
// }

// expected = 3; // EXPRESSION（式）の期待値
// actual = add(1, 2); // テストを行う EXPRESSION（式）

// if (actual === expected) {
//     console.log("Test PASSED!");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }

//####################################################################################
//基礎演習

function doTest(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED!");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}


//1★
//関数 getFullName を修正してください。

/**
 * @param {string} firstName - 下の名前
 * @param {string} lastName - 苗字
 * @returns {string} 名前と苗字を連結し、間にスペースを入れたもの
 */
// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }

// actual = getFullName("Ken", "Watanabe");
// expected = "Ken Watanabe";
// doTest(actual, expected)

//2★
//関数 simpleGreeting を宣言してください。

/**
 * @param {string} name - 人の名前
 * @param {boolean} isFormal - 敬称をつけるべきかどうか（敬称ありならtrue、なしならfalse）
 * @returns {string} 与えられた人の名前と敬称が入った挨拶文
 */
// function simpleGreeting(name, isFormal) {
//     if (isFormal) {
//         return "Hello, " + name + "-san."
//     } else {
//         return "Hello, " + name + "."
//     }
// }

// actual = simpleGreeting("Amy", true);
// expected = "Hello, Amy-san.";
// doTest(actual, expected)

// actual = simpleGreeting("Matt", false);
// expected = "Hello, Matt.";
// doTest(actual, expected)

//3★
//関数 isGreaterThan を宣言してください。

/**
 * @param {number} ??? - 1 番目の数字
 * @param {number} ??? - 2 番目の数字
 * @returns {boolean} 与えられた 1 番目の数字が 2 番目の数より大きいかどうか
 */
// 関数を宣言しましょう
// function isGreaterThan(num1, num2) {
//     return num1 > num2;
// }

// actual = isGreaterThan(5, 4);
// expected = true;
// doTest(actual, expected)

// actual = isGreaterThan(3, 4);
// expected = false;
// doTest(actual, expected)

//4★
//TDD を使ったテスト を使って書き直してください。

// function add(a, b) {
//     return a + b;
// }

// actual = add(4, 3);
// expected = 7;
// doTest(actual, expected)

// actual = add(100, 42);
// expected = 142;
// doTest(actual, expected)

//5
//関数 operate を宣言してください。

/**
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用する算術演算子を表す文字列
 * @param {number} ??? - 1 番目の被演算子
 * @param {number} ??? - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて実行した結果
 */
// 関数を定義しましょう

// function operate(symbol, num1, num2) {
//     if (symbol === "+") {
//         return num1 + num2;
//     }else if (symbol === "-"){
//         return num1 - num2;
//     }else if (symbol === "*"){
//         return num1 * num2;
//     }
// }

// actual = operate("+", 1, 2);
// expected = 3;
// doTest(actual, expected)

// actual = operate("-", 100, 33);
// expected = 67;
// doTest(actual, expected)

// actual = operate("*", 4, 50);
// expected = 200;
// doTest(actual, expected)

//6
//英語では、虹色は以下の７色で表現されます。これを念頭に次の問題に取り組みましょう。
//red orange yellow green blue indigo violet
//関数 isRainbowColor を宣言してください。

/**
 * @param {string} ??? - チェックしたい色の名前
 * @returns {boolean} 与えられた色が虹色に含まれているかどうか
 */
// 関数を定義しましょう

function isRainbowColor(color) {
    let rainbowList = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    return rainbowList.includes(color);
}

// actual = isRainbowColor("red");
// expected = true;
// doTest(actual, expected)

// actual = isRainbowColor("rEd");
// expected = true;
// doTest(actual, expected)

// actual = isRainbowColor("Brown");
// expected = false;
// doTest(actual, expected)

// actual = isRainbowColor("green");
// expected = false;
// doTest(actual, expected)

//#########################################################################################
//中級演習

//1
//関数 typeOfFriendly を宣言してください。

/**
 * @param {any} ??? - チェックする値
 * @returns {string} 与えられた引数のデータ型を表すわかりやすいメッセージ
 */

// function typeOfFriendly(any) {
//     if (typeof any === "string") {
//         return "与えられた引数は string (文字列) です。";
//     } else if (typeof any === "number") {
//         return "与えられた引数は number (数値) です。";
//     } else if (Array.isArray(any) === true) {
//         return "与えられた引数は array (配列) です。";
//     }
// }

// actual = typeOfFriendly("Hello");
// expected = "与えられた引数は string (文字列) です。";
// doTest(actual, expected)

// actual = typeOfFriendly(5);
// expected = "与えられた引数は number (数値) です。";
// doTest(actual, expected)

// actual = typeOfFriendly([1, 2, 3]);
// expected = "与えられた引数は array (配列) です。";
// doTest(actual, expected)


//2
//関数 compare を宣言してください。

/**
 * @param {"=="|"==="|"<"|"<="|">"|">="} ??? - 使用したい比較演算子
 * @param {number} ??? - 1 番目の被演算子
 * @param {number} ??? - 2 番目の被演算子
 * @returns {number} 与えられた演算子を被演算子と組み合わせて比較した結果
 */

// function compare(operator, num1, num2) {
//     if (operator === "===") {
//         return num1 === num2;
//     } else if (operator === "==") {
//         return num1 == num2;
//     } else if (operator === "<") {
//         return num1 < num2;
//     } else if (operator === "<=") {
//         return num1 <= num2;
//     } else if (operator === ">") {
//         return num1 > num2;
//     } else if (operator === ">=") {
//         return num1 >= num2;
//     }
// }

// actual = compare("===", 1, 1);
// expected = true;
// doTest(actual, expected)

// actual = compare("===", 1, "1");
// expected = false;
// doTest(actual, expected)

// actual = compare("==", 1, "1");
// expected = true;
// doTest(actual, expected)

// actual = compare("<", 1, "1");
// expected = false;
// doTest(actual, expected)

// actual = compare("<=", 1, "1");
// expected = true;
// doTest(actual, expected)

// actual = compare(">", 1, "1");
// expected = false;
// doTest(actual, expected)

// actual = compare(">=", 1, "1");
// expected = true;
// doTest(actual, expected)


//#########################################################################################
//応用演習

//1
//関数 concatenateNumbers を宣言してください。

/**
 * @param {number} num1 - 1 番目の数値
 * @param {number} num2 - 2 番目の数値 (任意)
 * @param {number} num3 - 3 番目の数値 (任意)
 * @returns {string} 与えられた数字を 1 つの文字列に結合したもの
 */

// function concatenateNumbers(num1, num2, num3) {
//     return String(num1) + String(num2) + String(num3);
// }

// actual = concatenateNumbers(7, 3, 4);
// expected = "734";
// doTest(actual, expected)

// actual = concatenateNumbers(2, 9, 6);
// expected = "296";
// doTest(actual, expected)


//2
//関数 halfLife を宣言してください。

/**
 * @param {number} originAmount - 初めの数量
 * @param {number} halfTime - 半減期（数量が半分になるまでの時間）
 * @param {number} progress - 経過時間
 * @returns {number} 与えられた時間が経過したあとに残っている数量
 */

function halfLife(originAmount, halfTime, progress) {
    return originAmount * 1 / 2 ** (progress / halfTime);
}

//全減期            halfTime * 2
//残り時間          halfTime * 2 - progress
//減る数量/秒       originAmount / originAmount * halfTime * 2
//経過時間で減った量 halfTime * 2 * progress
//残った量          originAmount - (originAmount / halfTime * 2 * progress)

actual = halfLife(1, 1, 1);
expected = 1 / 2;
doTest(actual, expected);

actual = halfLife(8, 4, 2);
expected = 4 * Math.SQRT2;
doTest(actual, expected);

actual = halfLife(2, 2, 4);
expected = 1 / 2;
doTest(actual, expected);

// 必要に応じてテストを書きましょう。

//3
//関数 invertCase を宣言してください。

/**
 * @param {string} ??? - 文字列
 * @returns {string} 与えられた文字列の小文字と大文字を逆にした文字列。アルファベット以外は変更しない。
 */

// function invertCase(str) {
//     return str.charAt(0).toLowerCase() + str.slice(1).toUpperCase();
// }

// actual = invertCase("I hope you are having a nice day");
// expected = "i HOPE YOU ARE HAVING A NICE DAY";
// doTest(actual, expected);

// actual = invertCase("My daughter is 5 years old");
// expected = "mY DAUGHTER IS 5 YEARS OLD";
// doTest(actual, expected);

// 必要に応じてテストを書きましょう。

//########################################################################################
//ナイトメア

//1
//関数 isPrime を宣言してください。

/**
 * @param {number} ??? - チェックしたい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */

function isPrime(num) {
    //1 は素数でないので false を返す
    if(num == 1) {
        return false;
    //2 は素数なので true を返す
    } else if(num == 2) {
        return true;
    } else {
        for(i = 2; i < num; i++) {
            //割り切れたら合成数なのでfalse
            if(num % i == 0) {
                return false;
            }
            //割り切れないとき素数なのでtrue
            if(i + 1 == num) {
                return true;
            }
        }
    }
}

actual = isPrime(1);
expected = false;
doTest(actual, expected)

actual = isPrime(2);
expected = true;
doTest(actual, expected)

actual = isPrime(3);
expected = true;
doTest(actual, expected)

actual = isPrime(4);
expected = false;
doTest(actual, expected)

actual = isPrime(5);
expected = true;
doTest(actual, expected)

actual = isPrime(104728);
expected = false;
doTest(actual, expected)

actual = isPrime(104729);
expected = true;
doTest(actual, expected)
