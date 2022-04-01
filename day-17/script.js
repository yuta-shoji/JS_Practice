'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//map
//講義問題
function doubleArrays(array) {
    const result = [];
    for (const arr of array) {
        result.push(arr * 2);
    }
    return result;
}

// test(doubleArrays([2, 3, 4, 5, 6]), [4, 6, 8, 10, 12])

function giveMeABetterName(array) {
    const result = [];
    for (const arr of array) {
        result.push(arr ** 2);
    }
    return result;
}

// test(giveMeABetterName([2, 3, 4, 5, 6]), [4, 9, 16, 25, 36])

function double(num) {
    return num ** 2
}

// test([2, 3, 4, 5, 6].map(double), [4, 9, 16, 25, 36])

//2
/**
 * @param {number} ???
 * @returns {number} 与えられた引数の絶対値
 */
// ここにコードを書きましょう
function abs(num) {
    return Math.abs(num);
}

// test([1, 2, 3].map(abs), [1, 2, 3]);
// test([-1, -2, -3].map(abs), [1, 2, 3]);
// test([-1, 2, -3].map(abs), [1, 2, 3]);

//中級演習


/**
 * @param {Array<number|string>} ???
 * @returns {Array<number|string>} 与えられた配列の各要素が数値型なら文字列型に、文字列型なら数値型に変換したものが入った、新しい配列
 */
// ここにコードを書きましょう

function getSwitched(str) {
    return str.map(function (result) {
        if (typeof result === "number") {
            return String(result);
        } else {
            return Number(result);
        }
    })
}

test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);