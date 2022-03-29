'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//         console.log("Yay! Test PASSED.");
//     } else {
//         console.error("Test FAILED. Keep trying!");
//         console.log("    actual: ", actual);
//         console.log("  expected: ", expected);
//         console.trace();
//     }
// }

//warmUp
//引数に x を取り、関数を返す divide という関数を作成してください。
//内部関数は引数に y をとり、x を y で割った値を返すようにしてください。

/**
 * @param {number} x
 * @returns {(y: number) => number} 引数として y を取り、x を y で割った値を返す関数
 */
function divide(x) {
    return function (y) {
        return x / y;
    }
}

const divide2 = divide(2);

test(divide2(4), 0.5);
test(divide(2)(1), 2);
test(divide(6)(2), 3);


//#########################################################################################################################
//ペア演習
//1

/**
 * @param {number} 底（てい）
 * @param {number} 指数
 * @returns {number} 与えられた底を与えられた指数で累乗した結果
 */
const MIN_BASE = -5;
const MAX_BASE = 5;
const MIN_EXPONENT = -5;
const MAX_EXPONENT = 5;

// 以下のコードでは、一度にたくさんのテストしています。
// （また、浮動小数点数の比較をするためにisNearlyEqualという関数を使っています。）
for (let base = MIN_BASE; base <= MAX_BASE; ++base) {
    for (let exponent = MIN_EXPONENT; exponent <= MAX_EXPONENT; ++exponent) {
        const actual = myMathObject.power(base, exponent);
        const expected = Math.pow(base, exponent);
        if (isNearlyEqual(actual, expected)) {
            console.log("Yay! Test PASSED.");
        } else {
            console.error("Test FAILED. Keep trying!");
            console.log("    actual: ", actual);
            console.log("  expected: ", expected);
            console.trace();
        }
    }
}

// 参照文献： https://floating-point-gui.de/errors/comparison/

function isNearlyEqual(a, b) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    const diff = Math.abs(a - b);

    if (a == b) {
        return true;
    } else if (a == 0 || b == 0 || absA + absB < Number.MIN_VALUE) {
        return diff < Number.EPSILON * Number.MIN_VALUE;
    } else {
        return diff / Math.min(absA + absB, Number.MAX_VALUE) < Number.EPSILON;
    }
}