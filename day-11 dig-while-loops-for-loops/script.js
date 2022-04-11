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

//warmUp

const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

//1
//関数 filterObjectForStrings を宣言してください。
/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし、値が文字列のキー/値ペアだけを持つ。
 */
function filterObjectForStrings(object) {
    const result = {};
    for (const key in object) {
        if (typeof object[key] === "string") {
            result[key] = object[key];
        }
    }
    return result;
}

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // キーが "b" や "d" のペアは含まれていない

//2
//関数 filterArrayForStrings を宣言してください。 1 問目で作った関数 を使ってください。

/**
 * @param {Array<object>} arrayOfObjects - オブジェクトの入った配列
 * @returns {Array<{ [key: string]: string }>} 与えられたすべてのオブジェクトの入った配列だが、各オブジェクトには、値が文字列であるキー/値ペアだけが含まれる。
 */
function filterArrayForStrings(arrayOfObjects) {
    const result = [];
    for (const obj of arrayOfObjects) {
        result.push(filterObjectForStrings(obj));
    }
    return result;
}

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素からキー が "b" のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

//############################################################################################################
//ペア演習

//1
//for ループを使って、以下のコードを書き換えてください。

// let index = 0;

// while (index <= 4) {
//     console.log("hello!");
//     index++;
// }

// for (let index = 0; index <= 4; index++) {
//     console.log("hello!");
// }



//2
//次のコードの間違いを直してください。

// const array = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < array.length; i++) {
//     console.log("Value:" + array[i], "Index" + i);
// }

//直すと下のように表示されるはずです。]

// Value: a Index: 0
// Value: b Index: 1
// Value: c Index: 2
// Value: d Index: 3
// Value: e Index: 4

//3
//関数 sayFourHellos を宣言してください。
//for ループを使って、"Hello!" を 4 回表示するようにしてください。

function sayFourHellos() {
    for (let i = 0; i < 4; i++) {
        console.log("Hello!")
    }
}

// テストケース:

// sayFourHellos();
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

//4
//関数 countDown を宣言してください。start の数値をを引数にとり、
//start から 0 までの数値をカウントダウンさせて表示しましょう。
//for ループを使ってください。

function countDown(num) {
    for (let i = num; i >= 0; i--) {
        console.log(i);
    }
}
// countDown(10);
//##########################################################################################
//基礎演習

//1
//関数 sayHellos を宣言してください。引数に数字 n をとり、
//for ループを使って "Hello!" を n 回表示させましょう。

//テストケース:
function sayHellos(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello!");
    }
}

// sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

//2
//関数 countToTen を宣言してください。1 から 10 までの数字を
//毎行 1 だけ増えていくように表示させてください。

//ヒント : for ループのブロックの中で、添え字（index）を console.log してみましょう。

function countToTen() {
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

// テストケース:

// countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

//3
//関数 counter 内の while ループを for ループに書き直してください。
//書き直しても結果が変わらないようにしましょう。

// function counter(num) {
//     let i = 0;
//     while (i < num) {
//         console.log(i);
//         i++;
//     }
// }
function counter(num) {
    for (let i = 0; i < num; i++) {
        console.log(i);
    }
}

// counter(12)

//3-1
//関数 printArray を宣言してください。配列を 1 つ引数にとり、
//そのすべての要素を 1 つずつコンソールに表示させてください。
//テストの際には、配列に少なくとも 5 つの要素を入れて、関数がうまく動くか確認しましょう。

function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
// printArray([1, 2, 3, 4, 5, 6, 7, 8])

//3-2
//配列の代わりに文字列を引数に設定して printArray を呼び出すと、どのように表示されるでしょうか？
function printString(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
// printString("YutaShoji")



//3-3
//関数 addOne を宣言してください。

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の要素にそれぞれ 1 を加えた数字を要素として持つ配列
// ここにコードを書きましょう
*/

function addOne(array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 1);
    }
    return result;
}

const array1 = [1, 2, 3, 4];

// // function が動作するかテストする
// test(addOne(array1), [2, 3, 4, 5]);
// // 元の配列が変更されていないことを確認する
// test(array1, [1, 2, 3, 4]);

//###################################################################################################################
//中級演習

//1
//関数 createRange を宣言してください。

/**
 * @param {number} start
 * @param {number} end
 * @returns {Array<number>} start 以上 end 以下のすべての整数を含む配列
 */
// ここにコードを書きましょう
function createRange(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

// test(createRange(4, 6), [4, 5, 6]);
// test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);

//2
//関数 printCars 内の while ループを for ループに書き換えてください。
//書き直しても結果が変わらないようにしましょう。

// function printCars() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     let i = 0;
//     while (i < cars.length) {
//         console.log(cars[i]);
//         i++;
//     }
// }

// function printCars() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
//     for (let i = 0; i < cars.length; i++) {
//         console.log(cars[i]);
//     }
// }
// printCars();

//3
//以下の for ループを while ループに書き換えてください。
//なぜインデックスの初期値は list.length - 1 なのでしょうか。
//わからない場合は、「配列の最後のインデックス」と「配列の長さ」の違いについて考えてみましょう。

//ヒント：　テストケースで文字列が表示される順序に注目してください。
//コンソール上でこれと同じ順序で表示されるようにしてください。

const commands = ["Print me last", "Print me second", "Print me first"];

// function decrement(list) {
//     for (let i = list.length - 1; i >= 0; i--) {
//         console.log(list[i]);
//     }
// }

// function decrement(list) {
//     let i = list.length - 1;
//     while (i >= 0) {
//         console.log(list[i]);
//         i--;
//     }
// }

// テストケース:

// decrement(commands);
// "Print me first"
// "Print me second"
// "Print me last"

//4
//関数 createRangeBySteps を宣言してください。

/**
 * @param {number} start
 * @param {number} end
 * @param {number} step
 * @returns {Array<number>} start 以上 end 以下の整数を、 step の刻みで入れた配列。
 */
// ここにコードを書きましょう
function createRangeBySteps(start, end, step) {
    const result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

// test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
// test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);

//5
//関数 addTogether を宣言してください。引数として 同じ長さの 数字の配列を 2 つとります。

/**
 * @param {Array<number>} ???
 * @param {Array<number>} ???
 * @returns {Array<number>} それぞれの配列の対応する要素の和からなる配列
 */
// ここにコードを書きましょう
function addTogether(array1, array2) {
    const result = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i] + array2[i]);
    }
    return result;
}

// test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);

//6
//関数 addTogether の引数の配列が異なる長さであっても動くよう、関数を修正してください。
function addTogetherRemake(array1, array2) {
    const result = [];
    const len = Math.max(array1.length, array2.length);
    for (let i = 0; i < len; i++) {
        result.push([array1[i], array2[i]].filter(Boolean).reduce((sum, num) => sum + num, 0));
    }
    return result;
}


// test(addTogetherRemake([1], [4, 5, 6]), [5, 5, 6]);
// test(addTogetherRemake([1, 2], [3, 4, 5, 6, 7]), [4, 6, 5, 6, 7]);

//###################################################################################################################
//応用演習

//1
//関数 unique を宣言してください。引数として配列を 1 つとり、
//重複していない値のみが入った配列を返してください。

/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 重複していない値のみが入った配列
 */
// ここにコードを書きましょう
function unique(array) {
    const duplicateArray = Array.from(new Set(array.filter((x, i, s) => s.indexOf(x) !== s.lastIndexOf(x))));
    return array.filter((v) => !duplicateArray.includes(v));
}

// test(unique([1, 1, 1, 1, 1]), []);
// test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);

//2
//関数 sum を宣言してください。不特定の数の引数を取り、すべての引数の合計を返してください。
//ヒント：　この問題を解くには、スプレッド構文 (spread syntax) について調べる必要があるかもしれません。

/**
 * @param {...number} ???
 * @returns {number} 引数の合計値
 */
// ここにコードを書きましょう
function sum2(num1, ...array) {
    let result = 0;
    const flatArray = [num1, array].flat(Infinity);
    for (let i = 0; i < flatArray.length; i++) {
        result += Number(flatArray[i]);
    }
    return result;
}

// test(sum2(1), 1);
// test(sum2(1, 1, 1, 1, 1), 5);
// test(sum2(1, 2, 3, 4, 5), 15);

//3
//関数 zip を宣言してください。不特定の数の配列を引数として取り、各配列の値が全部入った配列を返してください。

/**
 * @param {...<Array<any>} ???
 * @returns {Array<any>} 与えられた配列内のすべての値を持つ配列
 */
// ここにコードを書きましょう
function zip(array, ...arrays) {
    return [array,arrays].flat(Infinity);
}

// test(zip([1], [2], [3], [4]), [1, 2, 3, 4]);
// test(zip([1, 2, 3], [4, 5], [1], [4]), [1, 2, 3, 4, 5, 1, 4]);

//#####################################################################################################################
//ナイトメア

//1
//パーティに n 人のゲストが来ています。各ゲストには番号が割り当てられます。到着したすべてのゲストに新しいゲストを紹介する関数、 getIntroductions を宣言してください。

/**
 * @param {number} ??? - ゲストの数
 * @returns {Array<string>} 到着するゲストへの挨拶
 */
// ここにコードを書きましょう
function getIntroductions(n) {
    const result = [];
    let str = "";
    if (n === 0) {
        return "noGuests..."
    } else {
        for (let i = 1; i <= n; i++) {
            str += `welcome ${i}`;
            if (i > 1) {
                str += `, meet 1`;
            }
            if (i > 2) {
                for (let j = 2; j <= i - 2; j++) {
                    str += `, ${j}`;
                }
                str += ` and ${i - 1}`;
            }
            result.push(str);
            str = ""
        }
        return result;
    }
}

// test(getIntroductions(1), ["welcome 1"]);
// test(getIntroductions(2), ["welcome 1", "welcome 2, meet 1"]);
// test(getIntroductions(5), [
//     "welcome 1",
//     "welcome 2, meet 1",
//     "welcome 3, meet 1 and 2",
//     "welcome 4, meet 1, 2 and 3",
//     "welcome 5, meet 1, 2, 3 and 4",
// ]);

//2
//クリスマスツリーを表示する関数 christmasTree を宣言してください。

/**
 * @param {string} ??? - 任意の 1 文字
 * @param {number} ??? - ツリーの高さ
 * @returns {string} 与えられた文字と高さを使用して、クリスマスツリーを文字列で作る。
 */

// ここにコードを書きましょう
function christmasTree(str, height) {
    let result = "";
    for (let i = 1; i <= height; i++) {
        if (i > 1) {
            result += "\n";
        }
        for (let j = 1; j < height - i; j++) {
            result += " ";
        }
        for (let k = 1; k <= i; k++) {
            if (i === height && k ===1) {
                result += str;
            } else {
                result += " " + str;
            }
        }
    }
    return result;
}

const expected1 = "T";
test(christmasTree("T", 1), expected1);
const expected2 = " +\n+ +";
test(christmasTree("+", 2), expected2);
const expected4 = "   #\n  # #\n # # #\n# # # #";
test(christmasTree("#", 4), expected4);
console.log(christmasTree("*", 20));

// \n は改行を意味するコードです。実際に文字列をconsole.logすると、ツリーがこんな風に表示されますよ。

/*
      T
     T T
    T T T
   T T T T
  T T T T T
*/
