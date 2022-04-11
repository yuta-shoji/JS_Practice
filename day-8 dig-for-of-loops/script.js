'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//wormUp
// 変数
// 文字列型
// 数値型
// Boolean型
// 関数
// 引数
// 仮引数
// return
// 返り値
// 条件分岐
// 複数条件分岐
// テスト
// 配列
// ビルドインメソッド
// リファクタリング
//インポスター症候群
//EdgeCase


//##########################################################################
//講義

// const colors = ["red", "green", "blue"];
// console.log('colors: ', colors);

// for (const color of colors) {
//     console.log('color: ', color);
// }

//##########################################################################
//基礎演習

let actual;
let expected;

function runTest() {
    if (actual === expected) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

function runTestArray(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

function runTestArrayKeep(after, before) {
    // 元の配列が変更されていないことを確認する。
    if (JSON.stringify(after) === JSON.stringify(before)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", after);
        console.log("expected:", before);
        console.groupEnd();
    }
}


//1
//関数 sumArray を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {number} 与えられた配列のすべての数字の合計
 */
function sumArray() {
    // ここにコードを書きましょう。
}

// actual = sumArray([1, 2, 3, 4]);
// expected = 10;
// runTest()

//2
//関数 productArray を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {number} 与えられた配列のすべての数字をかけあわせた答え
 */
function productArray(array) {
    let result = 1;
    for (const arr of array) {
        result = result * arr;
    }
    return result;
}

// actual = productArray([1, 2, 3, 4]);
// expected = 24;
// runTest()

// actual = productArray([1, 2, 3, 4, 5]);
// expected = 120;
// runTest()

//3
//関数 hasFun を宣言してください。

/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列に "fun" という文字列が入っているかどうかを表すブーリアン
 */
function hasFun(array) {
    for (const arr of array) {
        if (arr === "fun") {
            return true;
        }
    }
    return false;
}

// actual = hasFun(["whatever", 2, false, "fun", "hello"]);
// expected = true;
// runTest()

// actual = hasFun(["whatever", 2, false, "run", "hello"]);
// expected = false;
// runTest()

//4
//関数 containsOnlyBooleans を宣言してください。

/**
 * @param {Array<any>} ???
 * @returns {boolean} 与えられた配列の要素がすべてブーリアンかどうかを表すブーリアン
 */
function containsOnlyBooleans(array) {
    for (const arr of array) {
        if (typeof arr !== "boolean") {
            return false;
        }
    }
    return true;
}

// actual = containsOnlyBooleans([true, false, true, false, false]);
// expected = true;
// runTestArray()

// actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
// expected = false;
// runTestArray()

//5
//関数 concatenate を宣言してください。
//ビルトインの concat メソッドは使わないでください。

/**
 * @param {Array<any>} ??? - 1番目の配列
 * @param {Array<any>} ??? - 2番目の配列
 * @returns {Array<any>} 与えられた2つの配列を連結させた配列
 */
function concatenate(array1, array2) {
    for (const arr of array2) {
        array1[array1.length] = arr;
    }
    return array1;
}

// actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
// expected = ["eeny", "meeny", "miny", "moe"];
// runTestArray();

//6
//関数 getEvenNumbers を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {Array<number>} 与えられた配列の中の偶数だけを入れた配列
 */
function getEvenNumbers(array) {
    let result = [];
    for (const arr of array) {
        if (arr % 2 === 0) {
            result.push(arr);
        }
    }
    return result;
}

// actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
// expected = [2, 4, 6, 8];
// runTestArray();

//7
//関数 getMultipliedArray を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @param {number} ??? - 配列の中の数字にかける数字
 * @returns {Array<number>} 配列の中の数字に第2引数をかけた結果が入った新しい配列
 */
function getMultipliedArray(array, num) {
    let result = [];
    for (const arr of array) {
        result.push(arr * 6);
    }
    return result;
}

// actual = getMultipliedArray([1, 2, 3], 6);
// expected = [6, 12, 18];
// runTestArray();

//###################################################################################3################################
//中級演習

//1
//関数 isSorted を宣言してください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {boolean} 与えられた配列が昇順になっているかを表すブーリアン
 */
function isSorted(array) {
    let cnt = 1;
    for (const arr of array) {
        if (arr > array[cnt]) {
            return false;
        }
        cnt++;
    }
    return true;
}

// runTestArray(isSorted([1, 2, 3]), true);
// runTestArray(isSorted([3, 2, 3]), false);

//2
//関数 countOccurrences を宣言してください。

/**
 * @param {Array<any>} ??? - 配列
 * @param {string|number|boolean} ??? - 出現回数をカウントしたい値（値のデータ型は `string`、`number`、`boolean` のいずれかとする。）
 * @returns {number} その値が配列内で出てきた回数
 */
function countOccurrences(array, target) {
    let countTarget = 0;
    for (const arr of array) {
        if (arr === target) {
            countTarget += 1;
        }
    }
    return countTarget;
}

// runTestArray(countOccurrences([1, 2, 3], 2), 1);
// runTestArray(countOccurrences([1, 2, 2], 2), 2);
// runTestArray(countOccurrences([1, 2, 4, 6, 2, 3, 2], 2), 3);
// runTestArray(countOccurrences([1, 2, 2], 0), 0);

//3
//関数 reverse を宣言してください。ビルトイン・メソッドの reverse は使わないでください。

/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の要素が逆の順番に入っている配列
 */
function reverse(array) {
    const newArray = [];
    for (const arr of array) {
        newArray.unshift(arr);
    }
    return newArray;
}

const arrayToReverse = ["eeny", "meeny", "miny", "moe"];

actual = reverse(arrayToReverse);
expected = ["moe", "miny", "meeny", "eeny"];
actual = arrayToReverse;
expected = ["eeny", "meeny", "miny", "moe"];

// runTestArray(reverse(arrayToReverse), ["moe", "miny", "meeny", "eeny"]);
// runTestArray(arrayToReverse, ["eeny", "meeny", "miny", "moe"]);

//4
//関数 getOperatedArray を宣言してください。

/**
 * @param {Array<number>} ???
 * @param {"+"|"-"|"*"|"/"|"**"|"%"} ??? - 使用したい算術演算子を表す文字列
 * @param {number} ??? - 使用したい被演算子
 * @returns {Array<any>} 与えられた配列の各要素に、引数の算術演算子と被演算子を適用した結果が入った新たな配列
 */
function getOperatedArray(array, operator, num) {
    const newArray = [];
    for (const arr of array) {
        if (operator === "+") {
            newArray.push(arr + num);
        } else if (operator === "-") {
            newArray.push(arr - num);
        } else if (operator === "*") {
            newArray.push(arr * num);
        } else if (operator === "/") {
            newArray.push(arr / num);
        }
    }
    return newArray;
}

// runTestArray(getOperatedArray([1, 2, 3], "+", 5), [6, 7, 8]);
// runTestArray(getOperatedArray([9, 6, 3], "/", 3), [3, 2, 1]);

//###################################################################################3################################
//応用演習

//1
//関数 callADoctor を宣言してください。単数形 と 複数形 では名詞と動詞の関係が変化することに注意してください。
//例えば My head hurts! は動詞に s が必要ですが、 My shoulders hurt! には必要ありません。

/**
 * @param {Array<string>} ??? - 「痛む場所」が入った配列
 * @returns {string} お医者さんに診てもらうときに言うセリフ
 */
function callADoctor(array) {
    let text = "Doctor, doctor! My";
    const someWhat = array[0].slice(-1) === "s";
    if (array.length === 1 && someWhat === true) {
        text += ` ${array[0]} hurt`;
    } else if (array.length === 1 && someWhat === false) {
        text += ` ${array[0]} hurts`;
    } else {
        let count = 1;
        for (const arr of array) {
            if (count === 1) {
                text += ` %{arr}`;
            } else if (count % 3 === 0) {
                text += `, and %{arr}`;
            } else {
                text += `, %{arr}`;
            }
            count++;
        }
        text += " hurt"
    }
    return text += "!";
}

// runTestArray(callADoctor(["head"]), "Doctor, doctor! My head hurts!");
// runTestArray(callADoctor(["shoulders"]), "Doctor, doctor! My shoulders hurt!");
// runTestArray(callADoctor(["head", "shoulders", "knees", "toes"]), "Doctor, doctor! My head, shoulders, knees, and toes hurt!");

//2
//関数 deepCount を宣言してください。

/**
 * @param {Array<any>} ???
 * @returns {number} 与えられた配列の「要素」の数。このとき、入れ子になった配列がある場合は、配列内の各要素も一つ一つカウントすること。
 */
function deepCount(array) {
    return (array.flat(Infinity)).length;
}

// runTestArray(deepCount([1]), 1)
// runTestArray(deepCount([1, 3]), 2)
// runTestArray(deepCount([1, 3, [2, 4]]), 4)
// runTestArray(deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]), 6)

//###########################################################################################################
//ナイトメア

//1
//関数 sort を宣言してください。ビルトインの sort メソッドは使わないでください。

/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {Array<number>} 与えられた配列の数字が昇順に並び替えられた配列
 */
function sort(array) {
    const size = array.length;
    for (let i = 0; i < size; i++ ) {
        for (let j = 0; j < (size - 1 - i); j++ ) {
            if (array[j + 1] < array[j]) {
                let value = array[j + 1];
                array[j + 1] = array[j];
                array[j] = value;
            }
        }
    }
    return array;
}
let arrayToSort = [5, 4, 3, 2, 1];
let arrayToSort2 = [3, 1, 4, 2, 5];
let arrayToSort3 = [1, 4, 3, 5, 2];
let arrayToSort4 = [3, 5, 1, 2, 4];


runTestArray(sort(arrayToSort), [1, 2, 3, 4, 5])
runTestArrayKeep(arrayToSort, [5, 4, 3, 2, 1])

runTestArray(sort(arrayToSort2), [1, 2, 3, 4, 5])
runTestArrayKeep(arrayToSort2, [3, 1, 4, 2, 5])

runTestArray(sort(arrayToSort3), [1, 2, 3, 4, 5])
runTestArrayKeep(arrayToSort3, [1, 4, 3, 5, 2])

runTestArray(sort(arrayToSort4), [1, 2, 3, 4, 5])
runTestArrayKeep(arrayToSort4, [3, 5, 1, 2, 4])



//2
//関数 flattenDeep を宣言してください。配列の配列（何段階も入れ子になっている場合もある）を引数として受け取り、
//平坦化された、つまり、入れ子のない配列（＝一次元配列）を返しましょう。

/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列を一次元配列に平坦化した配列
 */

function flattenDeep(array) {
    return array.flat(Infinity);
}

// expected = [1, 2, 3, 4, 5, 6];
// actual = flattenDeep([1, 2, 3, [4, 5, 6]]);
// runTestArray(actual, expected)

// expected = [1, 2, 3, 4, 5, 6];
// actual = flattenDeep([
//     [1, 2, 3],
//     [4, 5, 6],
// ]);
// runTestArray(actual, expected)

// expected = [1, 2, 3, 4, 5, 6];
// actual = flattenDeep([[1], [2], [3], [4, 5, 6]]);
// runTestArray(actual, expected)

// expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// actual = flattenDeep([[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]]);
// runTestArray(actual, expected)

