'use strict'
// 1行目に記載している 'use strict' は削除しないでください

const instructors = ["Kimiko", "Yan", "Dustin", "Dylan"];

let actual
let expected

function doTest() {
    if (actual === expected) {
        console.log("Test Passed!!");
    } else {
        console.error("error!!");
        console.group("Result:");
        console.log(' actual : ', actual);
        console.log('expected: ', expected);
        console.groupEnd();
    }
}

function doTestArray(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test Passed!!");
    } else {
        console.error("error!!");
        console.group("Result:");
        console.log(' actual : ', actual);
        console.log('expected: ', expected);
        console.groupEnd();
    }
}


// console.log(instructors[3]);
// console.log(instructors[instructors.length - 1]);


// 今回はハードコーディングではなく、以下のようなコードを考えてください。

// ```js
// console.log(/* どんな場合も配列の最後の要素が得られる式 */);

//2

const numbers = [1, 2, 3];

// console.log(numbers[2]); // 3
// console.log(numbers[0]); // 1
// console.log(numbers[numbers.length - 1]); // 3

// 次で使用しているメソッドやプロパティ（pop(), shift(), length, push()）は何をしているのか、ドキュメント（MDN）で調べてみましょう！

// console.log(numbers.pop() + numbers.pop()); // 5

numbers.unshift(4, 5, 6);
// console.log(numbers); // [4,5,6,1]

// console.log(numbers.shift()); // [5,6,1]

// console.log(numbers.length); // 3

numbers.push(5); //4
numbers.push(6); //3

// console.log(numbers.pop() * numbers.pop()); // 30
// console.log(numbers[0]); // 5

//3

const numbers2 = [
    [0, 1, 2, 3],
    ["zero", "one", "two", "three"],
    ["rei", "ichi", "ni", "san"],
];
//   console.log(numbers2[2]); // ["rei", "ichi", "ni", "san"]
//   console.log(numbers2[1][1]); // "one"
//   console.log(numbers2[0][2]); // 2
//   console.log(numbers2[numbers2.length - 1][0]); // ???
//   console.log(numbers2[2].length); // ???
//   console.log(numbers2.pop()); // ???
//   console.log(numbers2[0].push(4)); // ???
//   console.log(numbers2.length); // ???

//4

//基礎演習

//1

function numberOfPeople(arrayOfPeople) {
    return arrayOfPeople.length;
}

// actual = numberOfPeople(["Alex", "Beau", "Carlos", "Dustin"]);
// expected = 4;
// doTest()

//2
const students = ["Alex", "Beau", "Carlos", "Dustin", "Elen"];

// actual = numberOfPeople(students);
// expected = 5;
// doTest()

//3

// students.push("Fox", "Grande", "Hide")

// actual = numberOfPeople(students);
// expected = 8;
// doTest()

//4

function last(arr) {
    return arr[arr.length - 1];
}

// actual = last(students);
// expected = "Elen";
// doTest()

//5

let array = [1, 2, 3, 4];

function push(arr, value) {
    array[arr.length] = value;
    return array.length;
}

// actual = push(array, 5);
// expected = 5;
// doTest()

// actual = array;
// expected = [1, 2, 3, 4, 5];
// doTestArray()


//################################################################################################
//中級演習

//0
function hiInTheMiddle(arr) {
    if (arr.length % 2 !== 0) {
        arr[(1 + (arr.length)) / 2 - 1] = "hi";
        return arr;
    } else {
        return arr;
    }
}

// actual = hiInTheMiddle([1, 2, 3, 4, 5]);
// expected = [1, 2, "hi", 4, 5];
// doTestArray()

// actual = hiInTheMiddle([1, 2, 3, 4, 5, 6]);
// expected = [1, 2, 3, 4, 5, 6];
// doTestArray()

//1
//最後の要素を削除、削除した要素を返す

function pop(arr) {
    let lastThings = arr[arr.length - 1];
    arr.splice(arr.length - 1);
    return lastThings;
}

// actual = pop(array);
// expected = 4;
// doTest()

// actual = array;
// expected = [1, 2, 3];
// doTestArray()

//2
//先頭に要素を追加、追加後の要素数を返す

function unshift(arr, things) {
    arr.splice(0, 0, things)
    return arr.length;
}

// actual = unshift(array, 5);
// expected = 5;
// doTest()

// actual = array;
// expected = [5, 1, 2, 3, 4];
// doTestArray()

//3
//先頭の要素を削除、削除した要素を返す

function shift(arr) {
    let lastThings = arr[0];
    arr.splice(0, 1)
    return lastThings;
}

// actual = shift(array);
// expected = 1;
// doTest()

// actual = array;
// expected = [2, 3, 4];
// doTestArray()

//################################################################################################
//応用演習

//1
// /ビルトインの .length プロパティを使わないで
//関数 numberOfPeople を書き直してください。

function numberOfPeople3(arr) {
    let elemCount = 0;
    arr.forEach(element => elemCount++);
    return elemCount
}

// let arrays = [1, 2, 3, 4, 5, 6, 7, 8]

// actual = numberOfPeople3(arrays);
// expected = 8;
// doTest()

//2
//2 つの配列が互いに逆順かどうかをチェックする関数 areReverses を宣言してください。
//これを機に、配列は、どのようなビルトイン・メソッドが利用できるのか調べてみましょう。
//この問題を解くのにぴったりなメソッドが見つかる かも しれませんよ😉

/**
 * @param {Array<any>} ??? - 1 番目の配列
 * @param {Array<any>} ??? - 2 番目の配列
 * @returns {boolean} 2 つの配列が互いに逆順かどうか
 */
// ここにコードを書きましょう

function areReverses(arr1, arr2) {
    let len = arr2.length;
    let order = false
    for (let step = 0; step < len; step++) {
        if (arr1[step - 1] !== arr2[- step - 1]) {
            return order = true;
        }
    }
}

let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

// actual = areReverses(array1, array2);
// expected = true;
// doTest()

// actual = array1;
// expected = [1, 2, 3, 4];
// doTestArray()

//3
//関数 concat を宣言してください。
//ビルトインの .concat を使ってはいけません。

/**
 * @param {Array<any>} ??? - 1 番目の配列
 * @param {Array<any>} ??? - 2 番目の配列
 * @returns {Array<any>} 与えられた 2 つの配列を連結した新しい 1 つの配列を返す
 */
// ここにコードを書きましょう

function concat(array1, array2) {
    let array3 = array1.slice(0, array1.length);
    for (const arr of array2) {
        array3[array3.length] = arr;
    }
    return array3;
}

// actual = concat(array1, array2);
// expected = [1, 2, 3, 4, 4, 3, 2, 1];
// doTestArray()

// 元の配列が変更されていないことを確認する
// actual = array1;
// expected = [1, 2, 3, 4];
// doTestArray()

// actual = array2;
// expected = [4, 3, 2, 1];
// doTestArray()

//#######################################################################################
//ビルドインメソッドにコールバック関数を渡す

//1
let array3 = [1, 2, 3, 4, 5];

// function each(arr) {
//     arr.forEach(value => {
//         console.log(value);
//     })
// }
// each(array3)

//2

// function each2(arr) {
//     arr.forEach(value => {
//         console.log(value * 2);
//     })
// }
// each2(array3)

//#######################################################################################
//ナイトメア

//関数 sort を宣言してください。ビルトインの sort メソッドを使ってはいけません。

/**
 * @param {Array<number>} ??? - 数字の配列
 * @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
 */
function sort(arr) {
    let len = arr.length;
    const newArray = [];
    for (let i = 0; i < len; i++ ) {
        let min = Math.min(...arr);
        arr.splice(arr.indexOf(min), 1);
        newArray.push(min);
    }
    return newArray;
}

let arrayToSort = [5, 4, 3, 2, 1];
let arrayToSort2 = [3, 5, 6, 1, 2, 7, 4];

doTestArray(sort(arrayToSort), [1, 2, 3, 4, 5])
doTestArray(sort(arrayToSort2), [1, 2, 3, 4, 5, 6, 7])
