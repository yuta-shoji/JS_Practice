"use strict";
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}

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
    };
}

const divide2 = divide(2);

// test(divide2(4), 0.5);
// test(divide(2)(1), 2);
// test(divide(6)(2), 3);

//#########################################################################################################################
//基礎演習

const myMathObject = {
    sum: function (...args) {
        let result = 0;
        args.map((num) => (result += num));
        return result;
    },
    product: function (...args) {
        let result = 1;
        args.map((num) => (result *= num));
        return result;
    },
    isEven: function (num) {
        return num % 2 === 0;
    },
    getNumbers: function (...args) {
        const result = [];
        for (const arr of args) {
        if (typeof arr === "number") {
            result.push(arr);
        }
        }
        return result;
    },
    abs: function (num) {
        if (num < 0) {
        return num * -1;
        } else {
        return num;
        }
    },
    power: function (base, exponent) {
        let result = 1;
        if (exponent < 0) {
            if (base === 0) {
                return Infinity;
            } else {
                for (let i = 1; i <= exponent * -1; i++) {
                    result /= base
                }
            }
        } else if (exponent > 0) {
            for (let i = 1; i <= exponent; i++) {
                result *= base
            }
        } else {
            return 1;
        }
        return result;
    },
    ceil: function(num) {
        return (num | 0) + 1
    },
    floor: function(num) {
        return num | 0
    },
    round: function (num) {
        if (num - (num | 0) < 0.5) {
            return myMathObject.floor(num);
        } else {
            return myMathObject.ceil(num);
        }
    },
    primeFactorization: function (num) {
        let result = {};
        if (num === 1) {
            return {"1": 1};
        }
        let init = 2;
        while (num !== 1) {
            let i = init;
            while (i < Number.MAX_SAFE_INTEGER) {
                if (num % i === 0) {
                    num /= i;
                    if (!(result[i] > 0)) {
                        result[i] = 0;
                    }
                    result[i]++;
                    break;
                }
                i++;
            }
            init = i;
        }
        return result;
    }
};

//1
//オブジェクト myMathObject のメソッドを作成してみましょう。

// これらはテストのサンプルです。下の問題は自分でテストを考えましょう。

//・sum は全ての引数の合計を返します
//・product は全ての引数の 積 を返します。
//・isEven は引数に数値を取り、それが偶数の場合は true を返し、奇数の場合は false を返します。

// test(myMathObject.sum(1), 1);
// test(myMathObject.sum(1, 2, 3), 6);
// test(myMathObject.product(1), 1);
// test(myMathObject.product(1, 2, 3, 4), 24);
// test(myMathObject.isEven(1), false);
// test(myMathObject.isEven(2), true);

//2
//作成したメソッドを使って、次の問題を解きましょう。

//①19283, 18475, 199999 の合計値を求めてください。
// test(myMathObject.sum(19283, 18475, 199999), 237757);
//②19283, 18475, 199999 の積を求めてください。
// test(myMathObject.product(19283, 18475, 199999), 71250328746575);
//③19 が偶数か奇数かを求めてください。
// test(myMathObject.isEven(19), false);

//3
//myMathObject に getNumbers メソッドを追加してください。

/**
 * @param {...any} ??? - 任意の数の引数
 * @returns {Array<number>} 引数のうち、数値型のものだけを要素に持つ配列。要素の順番は引数で与えられた順番にする。
 */
// test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
// test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);

//#########################################################################################################################
//中級演習

//1
//myMathObject に abs メソッドを追加してください。Math のビルトイン・メソッドを 使用してはいけません 。

/**
 * @param {number} ???
 * @returns {number} 与えられた数字の絶対値
 */

// test(myMathObject.abs(1), 1);
// test(myMathObject.abs(-1), 1);
// test(myMathObject.abs(435678.745389), 435678.745389);
// test(myMathObject.abs(-675843.753489), 675843.753489);

//3
//myMathObject に power メソッドを追加してください。
//テスト以外では Math.pow() メソッドや ** べき乗演算子を 使用してはいけません 。

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
// for (let base = MIN_BASE; base <= MAX_BASE; ++base) {
//     for (let exponent = MIN_EXPONENT; exponent <= MAX_EXPONENT; ++exponent) {
//         const actual = myMathObject.power(base, exponent);
//         const expected = Math.pow(base, exponent);
//         if (isNearlyEqual(actual, expected)) {
//             console.log("Yay! Test PASSED.");
//             // console.log("    actual: ", actual);
//             // console.log("  expected: ", expected);
//             // console.log("      base: ", base);
//             // console.log("  exponent: ", exponent);
//         } else {
//             console.error("Test FAILED. Keep trying!");
//             console.log("    actual: ", actual);
//             console.log("  expected: ", expected);
//             console.log("      base: ", base);
//             console.log("  exponent: ", exponent);
//             console.trace();
//         }
//     }
// }

// // 参照文献： https://floating-point-gui.de/errors/comparison/

// function isNearlyEqual(a, b) {
//     const absA = Math.abs(a);
//     const absB = Math.abs(b);
//     const diff = Math.abs(a - b);

//     if (a == b) {
//         return true;
//     } else if (a == 0 || b == 0 || absA + absB < Number.MIN_VALUE) {
//         return diff < Number.EPSILON * Number.MIN_VALUE;
//     } else {
//         return diff / Math.min(absA + absB, Number.MAX_VALUE) < Number.EPSILON;
//     }
// }

//##########################################################################################################
//応用演習

//1
//myMathObject に ceil メソッドを追加してください。Math のビルトイン・メソッドを 使用してはいけません 。

/**
 * @param {number} ???
 * @returns {number} 与えられた数字を切り上げた整数
 */
// test(myMathObject.ceil(1.1), 2);
// test(myMathObject.ceil(2.2), 3);
// test(myMathObject.ceil(3.3), 4);
// test(myMathObject.ceil(4.4), 5);
// test(myMathObject.ceil(5.5), 6);

//2
// myMathObject に floor メソッドを追加してください。Math のビルトインメソッドを 使用してはいけません 。

/**
 * @param {number} ???
 * @returns {number} 与えられた数字を切り下げた整数
 */
// test(myMathObject.floor(1.1), 1);
// test(myMathObject.floor(2.2), 2);
// test(myMathObject.floor(3.3), 3);
// test(myMathObject.floor(4.4), 4);
// test(myMathObject.floor(5.5), 5);

//3
// myMathObject に round メソッドを追加してください。Math のビルトインメソッドを 使用してはいけません 。

/**
 * @param {number} ???
 * @returns {number} 与えられた数字を四捨五入した整数
 */
// test(myMathObject.round(1.1), 1);
// test(myMathObject.round(2.2), 2);
// test(myMathObject.round(3.3), 3);
// test(myMathObject.round(4.4), 4);
// test(myMathObject.round(5.5), 6);
// test(myMathObject.round(6.6), 7);
// test(myMathObject.round(7.7), 8);

//4
// myMathObject に primeFactorization メソッドを追加してください。

/**
 * @param {number} ???
 * @returns {{ [primeFactor: number]: number }} 引数の数値を素因数分解し、キーを _素因数_ 、値を対応する _指数_ にしたオブジェクト
 */
// test(myMathObject.primeFactorization(2), { 2: 1 });
// test(myMathObject.primeFactorization(3), { 3: 1 });
// test(myMathObject.primeFactorization(4), { 2: 2 });
// test(myMathObject.primeFactorization(5), { 5: 1 });
// test(myMathObject.primeFactorization(6), { 2: 1, 3: 1 });
// test(myMathObject.primeFactorization(200560490130), {
//     2: 1,
//     3: 1,
//     5: 1,
//     7: 1,
//     11: 1,
//     13: 1,
//     17: 1,
//     19: 1,
//     23: 1,
//     29: 1,
//     31: 1,
// });
// test(myMathObject.primeFactorization(900719925474099), {
//     3: 1,
//     53: 1,
//     157: 1,
//     1613: 1,
//     2731: 1,
//     8191: 1,
// });
