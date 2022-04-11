'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual
let expected

function doTest() {
    if (actual === expected) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
    }
}

//wormUp
//####################################################################################
//関数: compareTwoNumbers を宣言してください。

/**
 * @param {number} X - 1 番目の数字
 * @param {number} Y - 2 番目の数字
 * @returns {"X は Y と等しい" | "X は Y より小さい" | "X は Y より大きい"} 与えられた 2 つの数字の比較結果
 */
// ここに関数を定義しましょう

function compareTwoNumbers(X, Y) {
    if (X === Y) {
        return `${X} は ${Y} と等しい`;
    } else if (X < Y) {
        return `${X} は ${Y} より小さい`;
    } else {
        return `${X} は ${Y} より大きい`;
    }
}

// let actual = compareTwoNumbers(1, 1);
// let expected = "1 は 1 と等しい";
// doTest(actual, expected)

// actual = compareTwoNumbers(3, 4);
// expected = "3 は 4 より小さい";
// doTest(actual, expected)

// actual = compareTwoNumbers(6, 2);
// expected = "6 は 2 より大きい";
// doTest(actual, expected)

// "X は Y より大きい" というテストを書いてみましょう

//####################################################################################
//基礎演習


//1
//関数 isTeenager を宣言してください。

/**
 * @param {number} ??? - 年齢
 * @returns {boolean} 与えられた年齢がティーンエイジャー（13 歳から 19 歳までの間：「thirTEEN」から「nineTEEN」）かどうか
 */
function isTeenager(age) {
    if (typeof age === 'number') {
        return age >= 13 && age <= 19;
    } else {
        return "無効です！与えられた年齢は数字ではありません！";
    }
}

// actual = isTeenager(3);
// expected = false;
// doTest(actual, expected)

// actual = isTeenager(14);
// expected = true;
// doTest(actual, expected)

// actual = isTeenager(20);
// expected = true;
// doTest(actual, expected)

// actual = isTeenager("Hello!");
// expected = "無効です！与えられた年齢は数字ではありません！";
// doTest(actual, expected)

//3
//関数 anotherGreeting を宣言してください。

/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章

 */

function anotherGreeting(name, polite, greet) {
    if (polite && greet) {
        return `Hello, ${name}-san.`;
    } else if (polite && !greet) {
        return `Goodbye, ${name}-san.`;
    } else if (!polite && greet) {
        return `Hello, ${name}!`;
    } else if (!polite && !greet) {
        return `Goodbye, ${name}!`;
    }
}

// actual = anotherGreeting("Mary", true, true);
// expected = "Hello, Mary-san.";
// doTest(actual, expected)

// actual = anotherGreeting("Mary", false, true);
// expected = "Hello, Mary!";
// doTest(actual, expected)

// actual = anotherGreeting("Felix", true, false);
// expected = "Goodbye, Felix-san.";
// doTest(actual, expected)

//##############################################################################################
//中級演習

//1
//anotherGreetingに型チェックを追加

function newAnotherGreeting(name, polite, greet) {
    if (typeof name === "string" && typeof polite === "boolean" && typeof greet === "boolean") {
        if (polite && greet) {
            return `Hello, ${name}-san.`;
        } else if (polite && !greet) {
            return `Goodbye, ${name}-san.`;
        } else if (!polite && greet) {
            return `Hello, ${name}!`;
        } else if (!polite && !greet) {
            return `Goodbye, ${name}!`;
        }
    }
}

// actual = newAnotherGreeting(true, true, true);
// expected = "Hello, Mary-san.";
// doTest(actual, expected)

// actual = newAnotherGreeting("Mary", false, 0);
// expected = "Hello, Mary!";
// doTest(actual, expected)

// actual = newAnotherGreeting("Felix", true, false);
// expected = "Goodbye, Felix-san.";
// doTest(actual, expected)

//2
function getLetterGrade(num) {
    if (num >= 90 && num <= 100) {
        return "A";
    } else if (num >= 80 && num <= 89) {
        return "B";
    } else if (num >= 70 && num <= 79) {
        return "C";
    } else if (num >= 60 && num <= 69) {
        return "D";
    } else if (num <= 59) {
        return "F";
    }
}

// actual = getLetterGrade(95);
// expected = "A"
// doTest(actual, expected)

// actual = getLetterGrade(67);
// expected = "D"
// doTest(actual, expected)

// actual = getLetterGrade(25);
// expected = "F"
// doTest(actual, expected)

//3
//getLetterGradeをレンジチェック

function NewGetLetterGrade(num) {
    if (!(num < 0) && !(num > 100)) {
        if (num >= 90 && num <= 100) {
            return "A";
        } else if (num >= 80 && num <= 89) {
            return "B";
        } else if (num >= 70 && num <= 79) {
            return "C";
        } else if (num >= 60 && num <= 69) {
            return "D";
        } else if (num <= 59) {
            return "F";
        }
    } else {
        return "無効な点数です。"
    }
}

// actual = NewGetLetterGrade(-2);
// expected = "無効な点数です。"
// doTest(actual, expected)

// actual = NewGetLetterGrade(67);
// expected = "D"
// doTest(actual, expected)

// actual = NewGetLetterGrade(101);
// expected = "無効な点数です。"
// doTest(actual, expected)

//4
//GetLetterGradeの逆

function getBestNumericalGrade(grades) {
    if (grades === "A") {
        return 100;
    } else if (grades === "B") {
        return 90
    } else if (grades === "C") {
        return 80
    } else if (grades === "D") {
        return 70
    } else if (grades === "E") {
        return 60
    }
}

// actual = getBestNumericalGrade("A");
// expected = 100
// doTest(actual, expected)

// actual = getBestNumericalGrade("C");
// expected = 80
// doTest(actual, expected)

// actual = getBestNumericalGrade("E");
// expected = 60
// doTest(actual, expected)

//5
//getBestNumericalGradeのスペルチェック

// function NewGetBestNumericalGrade(grades) {
//     if (typeof grades === "string"){
//         if (grades === "A") {
//             return 100;
//         } else if (grades === "B") {
//             return 90
//         } else if (grades === "C") {
//             return 80
//         } else if (grades === "D") {
//             return 70
//         } else if (grades === "E") {
//             return 60
//         }
//     } else {
//         return  "無効な点数です。"
//     }
// }

// actual = NewGetBestNumericalGrade("A");
// expected = 100
// doTest(actual, expected)

// actual = NewGetBestNumericalGrade(20);
// expected =  "無効な点数です。"
// doTest(actual, expected)

// actual = NewGetBestNumericalGrade(true);
// expected =  "無効な点数です。"
// doTest(actual, expected)

//#####################################################################################3
//応用

//1
// 論理演算子||を使わない
function or(any1, any2) {
    if (any1) {
        return any1;
    } else {
        return any2;
    }
}

function or3(any1, any2) {
    return any1 || any2;
}

actual = or(true, true);
expected =  true
doTest()
actual = or(true, false);
expected =  true
doTest()
actual = or(false, false);
expected =  false
doTest()
actual = or("Banana", false);
expected =  "Banana"
doTest()
actual = or("", "Banana");
expected =  "Banana"
doTest()
actual = or(null, false);
expected = false
doTest()
actual = or(false, null);
expected = null
doTest()
actual = or(false, 0);
expected = 0
doTest()

console.log("=======================");

actual = or3(true, true);
expected =  true
doTest()
actual = or3(true, false);
expected =  true
doTest()
actual = or3(false, false);
expected =  false
doTest()
actual = or3("Banana", false);
expected =  "Banana"
doTest()
actual = or3("", "Banana");
expected =  "Banana"
doTest()
actual = or3(null, false);
expected = false
doTest()
actual = or3(false, null);
expected = null
doTest()
actual = or3(false, 0);
expected = 0
doTest()

//2
// 論理演算子&&を使わない
function and(any1, any2) {
    if (any1) {
        if (any2) {
            return any1;
        } else {
            return any2
        }
    } else {
        if (any2) {
            return any1;
        } else {
            return any2;
        }
    }
}

// actual = and(true, true);
// expected =  true
// doTest()

// actual = and(true, false);
// expected =  false
// doTest()

// actual = and(false, false);
// expected =  false
// doTest()

// actual = and("Banana", false);
// expected = false
// doTest()

// actual = and("", "Banana");
// expected =  ""
// doTest()






















/**
 * @param {number} ??? - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
// ここにコードを書きましょう

// function getRegularConvexPolygonName(num) {
//     let arr = ["triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"];
//     return arr[num - 3]
// }
// actual = getRegularConvexPolygonName(3);
// expected = "triangle";

// if (actual === expected) {
//     console.log("Yay! Test PASSED.");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }
