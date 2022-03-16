'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function doTest(actual, expected) {
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

let actual
let expected

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

actual = isTeenager(3);
expected = false;
doTest(actual, expected)

actual = isTeenager(14);
expected = true;
doTest(actual, expected)

actual = isTeenager(20);
expected = true;
doTest(actual, expected)

actual = isTeenager("Hello!");
expected = "無効です！与えられた年齢は数字ではありません！";
doTest(actual, expected)

//3
//関数 anotherGreeting を宣言してください。

/**
 * @param {string} ??? - 人の名前
 * @param {boolean} ??? - 丁寧な挨拶にするかどうかを表すブーリアン
 * @param {boolean} ??? - "Hello" なら true を、"Goodbye" なら false
 * @returns {string} 与えられた引数に応じた適切な挨拶の文章

 */

function anotherGreeting(name, polite, greet) {
    if (polite)
    return
}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}



















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
