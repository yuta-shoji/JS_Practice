'use strict'
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
//関数 pluck を宣言してください。

/**
 * @param {Array<object>} ??? - オブジェクトの入った配列
 * @param {string} キー
 * @returns {Array<any>} 各オブジェクトの中から、与えられたキーに等しいキーに対応する値だけを拾って（＝ pluck して）、配列に入れたもの
 */
// ここにコードを書きましょう。

function pluck(objs, str) {
    const result = [];
    for (const arr of objs) {
        if (arr[str] !== undefined) {
            result.push(arr[str]);
        }
    }
    return result;
}

const arrayOfObjects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
];

pluck(arrayOfObjects, "a")

// test(pluck(arrayOfObjects, "a"), [1, 4, 7]);
// test(pluck(arrayOfObjects, "b"), [2, 5, 8]);
// test(pluck(arrayOfObjects, "c"), [3, 6, 9]);
// test(pluck(arrayOfObjects, "d"), []);

//########################################################################################################
//基礎演習

const hellos = {
    English: "Hello",
    Japanese: "Konnichiwa",
    German: "Hallo",
    Spanish: "Hola",
    Arabic: "Ahlan wa sahlan",
    Chinese: "Nihao",
};

//1
//関数 sayHellos を宣言してください
//関数を実行するとあらゆる言語で挨拶が返ってくるようにしましょう。

/**
 * @returns {undefined} この関数は色々な言語で"Hello" を表示するだけで、返り値は必要ありません。
 */
// ここにコードを書きましょう
function sayHellos(message) {
    for (const key in message) {
        console.log(message[key]);
    }
}

// console.log の表示は、返り値ではないため、テストするのは困難です。
// 今回は、コンソールの表示を確認することで、テストとしてください。

// sayHellos(hellos);
// "Hello"
// "Konnichiwa"
// "Hallo"
// "Hola"
// ...

//2
//関数 getKeys を宣言してください。

/**
 * @param {object} ???
 * @returns {Array<string>} 与えられたオブジェクトのすべてのキーが入った配列
 */
// ここにコードを書きましょう
function getKeys(obj) {
    let result = [];
    for (const key in obj) {
        result.push(key)
    }
    return result;
}

const object1 = { a: 1, b: 2, c: "hello" };
const object2 = { 1: "a", 2: "b", hello: "c" };

// test(getKeys(object1), ["a", "b", "c"]);
// test(getKeys(object2), ["1", "2", "hello"]);


//3
//関数 getValues を宣言してください。

/**
 * @param {object} ???
 * @returns {Array<any>} 与えられたオブジェクトのすべての値が入った配列
 */
// ここにコードを書きましょう
function getValues(obj) {
    let result = [];
    for (const key in obj) {
        result.push(obj[key]);
    }
    return result;
}

// test(getValues(object1), [1, 2, "hello"]);
// test(getValues(object2), ["a", "b", "c"]);

//4
//printAll は、与えられたオブジェクトのすべての値を表示する関数です。
//しかし、以下のコードではうまくいきません。
//何が問題なのでしょうか。正しく動くように修正してください。

const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
function printAll(object) {
    for (const key in object) {
        console.log(object[key]);
    }
}
// printAll(myObj);

//5
//関数 swapPairs を宣言してください。

/**
 * @param {object} ??? - オブジェクト。ただし値はすべて異なるものとする。
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた、新しいオブジェクト
 */
// ここにコードを書きましょう
function swapPairs(obj) {
    const result = {};
    for (const key in obj) {
        result[obj[key]] = key;
    }
    return result;
}

const object3 = { a: 1, b: 2, c: 3, d: 4 };
const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

// test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
// test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

//6
//配列で for ... in ループを使用することはできるでしょうか。
// const testArray = [1, 2, 3];
// for (const arr in testArray) {
//     console.log(testArray[arr]);
// }
// answer : 配列をfor inで回すとインデックス番号が回ってくる。
//          配列[index]とすれば使えなくはないけど、何のためにあるの？

//7
//オブジェクトで for ... of ループを使用することはできるでしょうか。🤔

// const testObject = {a : 1, b : 2, c : 3};
// for (const obj of testObject) {
//     console.log(obj);
// }
// answer : できない


//#######################################################################################
//復習
//1
//関数 getFirstObjectValues を宣言してください。

/**
 * @param {Array<object>} ??? - オブジェクトを要素に持つ配列
 * @returns {Array<any>} 与えられた配列の最初のオブジェクトのすべての値が入った配列
 */
// ここにコードを書きましょう。
function getFirstObjectValues(arrayObjects) {
    const result = [];
    for (const key in arrayObjects[0]) {
        result.push(arrayObjects[0][key]);
    }
    return result;
}

const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

// test(getFirstObjectValues(collection), [1, 2]);
// test(getFirstObjectValues(collection.slice(1)), [3, 3]);

//2
//関数 getAllValues を宣言してください。
//for in と for of 、両方の for ループを使用する必要があるかもしれません！

/**
 * @param {Array<object>} ???
 * @returns {Array<any>} すべてのオブジェクトのすべての値が入った配列
 */
// ここにコードを書きましょう
function getAllValues(arrayObjects) {
    const result = [];
    for (const obj of arrayObjects) {
        for (const key in obj) {
            result.push(obj[key]);
        }
    }
    return result;
}

// test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
// test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);

//3
//関数 selectAllValues を宣言してください。

/**
 * @param {Array<object>} ???
 * @param {string} ??? - 取り出したいキーの名前
 * @returns {Array<any>} すべてのオブジェクトにおいて第二引数のキーに対応する値が入った配列
 */
// ここにコードを書きましょう
function selectAllValues(arrayObjects, str) {
    const result = [];
    for (const obj of arrayObjects) {
        if (obj[str] !== undefined) {
            result.push(obj[str]);
        }
    }
    return result;
}

// test(selectAllValues(collection, "a"), [1, 3, 100]);
// test(selectAllValues(collection, "b"), [2, 3, 4]);

//######################################################################################################
//中級演習

//1
//関数 swapPairs2 を宣言してください。

/**
 * @param {object} ???
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。重複する値がある場合は、最初のキー/値のペアのみを使用し、その後のペアは無視すること。
 */
// ここにコードを書きましょう
function swapPairs2(obj) {
    const result = {};
    for (const key in obj) {
        if (result[obj[key]] === undefined) {
            result[obj[key]] = key;
        }
    }
    return result;
}

const object5 = { a: 1, b: 2, c: 3, d: 1 };
const object6 = { a: 1, b: 1, c: 1, d: 1 };

// // 1 はすでに使われているので、d:1 は無視される
// test(swapPairs2(object5), { 1: "a", 2: "b", 3: "c" });
// // この場合も 1  はすでに使われているので、二回目以降、1 が値になるキー/値のペアは無視される。
// test(swapPairs2(object6), { 1: "a" });

//2
//関数 getAllValues2 を宣言してください。

/**
 * @param {Array<object>} ???
 * @returns {Array<any>} 与えられた配列内のすべてのオブジェクトのすべての値が入った配列
 */
// ここにコードを書きましょう
function getAllValues2(arrayObjects) {
    const result = [];
    for (const obj of arrayObjects) {
        for (const key in obj) {
            result.push(obj[key]);
        }
    }
    return result;
}

const collection2 = [{ a: 1, b: 2 }, { c: "uno", d: "dos" }, { e: "ichi" }];

// test(getAllValues2(collection2), [1, 2, "uno", "dos", "ichi"]);
// test(getAllValues2(collection2.slice(1)), ["uno", "dos", "ichi"]);

//3
//関数 getRandomHello を宣言してください。
//ヒント： Math オブジェクトの .random メソッドが使えるかもしれません。

/**
 * @returns {string} 基礎演習 1 で使った `hellos` オブジェクトの中の任意の言葉
 */
// ここにコードを書きましょう
function getRandomHello() {
    const array = [];
    const len = Object.keys(hellos).length;
    for (const key in hellos) {
        array.push(hellos[key]);
    }
    return array[Math.floor(Math.random() * len)]
}


// ランダムな出力をする関数をテストすることは困難です。
// ここでは、コンソールの表示を見て、テストとしましょう。
// console.log(getRandomHello()); // "konnichiawa"、"hola"、等、実行する度にランダムな言葉が表示されるはずです。

//########################################################################################################
//応用演習

//1
//関数 swapPairs3 を宣言してください。

/**
 * @param {object} ???
 * @returns {object} 与えられたオブジェクトのキーと値を入れ替えた新しいオブジェクト。重複する値がある場合は、それらのキーを配列に入れること。
 */
// ここにコードを書きましょう。
function swapPairs3(obj) {
    const result = {};
    for (const key in obj) {
        if (result[obj[key]] === undefined) {
            result[obj[key]] = key;
        } else if (!(Array.isArray(result[obj[key]]))) {
            result[obj[key]] = [result[obj[key]], key];
        } else {
            result[obj[key]].push(key);
        }
    }
    return result;
}

const object10 = { a: 1, b: 2, c: 3, d: 1 };
const object11 = { a: 1, b: 1, c: 1, d: 1 };

// test(swapPairs3(object10), { 1: ["a", "d"], 2: "b", 3: "c" });
// test(swapPairs3(object11), { 1: ["a", "b", "c", "d"] });

//2
//関数 noDuplicateValues を宣言してください。
//この問題はめちゃくちゃトリッキーです!!!😲 2 つのループを使用する必要があるかもしれません。

/**
 * @param {object} ???
 * @returns {object} 引数のオブジェクトとほぼ同じ形のオブジェクトだが、同じ値を持つキー/値のペアは除外する。
 */
// ここにコードを書きましょう
function noDuplicateValues(obj) {
    const result = {};
    let expectFlg;
    for (const keys in obj) {
        for (const key in obj) {
            if (keys !== key && obj[keys] === obj[key]) {
                expectFlg = true;
            }
        }
        if (!expectFlg) {
            result[keys] = obj[keys];
        }
        expectFlg = false;
    }
    return result;
}

// test(noDuplicateValues(object3), object3);
// test(noDuplicateValues(object5), { b: 2, c: 3 });
// test(noDuplicateValues(object6), {});

//########################################################################################################
//ナイトメア

/**
 * @param {object} ???
 * @returns {number} 引数のオブジェクトの深さ（レイヤーの数）を返す。入れ子になったオブジェクトはそれぞれひとつのレイヤーとして計算してください。入れ子になったオブジェクトが複数ある場合は、一番深いレイヤーの数を返してください。
 */
// ここにコードを書きましょう
function getDepth(objects) {
    var level = 1;
    for (const key in objects) {
        if (!objects.hasOwnProperty(key)) {
            continue;
        } else if (typeof objects[key] === "object") {
            var depth = getDepth(objects[key]) + 1;
            level = Math.max(depth, level);
        }
    }
    return level;
}

const rabbitHole1 = { a: "A" };
const rabbitHole2 = { a: "A", b: { c: "C" } };
const rabbitHole3 = { a: "A", b: { c: "C" }, d: { e: { f: "F" } } };
const rabbitHoleZ = {
    z: {
        y: {
            x: {
                w: {
                    v: {
                        u: {
                            t: {
                                s: {
                                    r: {
                                        q: {
                                            p: {
                                                o: {
                                                    n: {
                                                        m: {
                                                            l: {
                                                                k: {
                                                                    j: {
                                                                        i: {
                                                                            h: {
                                                                                g: {
                                                                                    f: {
                                                                                        e: "E",
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                },
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};

// // rabbitHole1.a までの深さは 1 です
// test(getDepth(rabbitHole1), 1);

// // rabbitHole2.b.c までの深さは 2 です
// test(getDepth(rabbitHole2), 2);

// // rabbitHole3.d.e.f までの深さは 3 です
// test(getDepth(rabbitHole3), 3);

// z y x w v u t s r q p o n m l k j i h g f e
test(getDepth(rabbitHoleZ), 22);

//#################################################################################################
//#################################################################################################
//参照渡しと値渡し
//基礎演習
//1

let theLoneliestNumber = 1;

let aFriend = theLoneliestNumber;

// console.log(theLoneliestNumber); // 1
// console.log(aFriend); // 1
// console.log(theLoneliestNumber === aFriend); // true

//2
const kermit = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
];
const missPiggy = kermit.slice();

// console.log(kermit);
// [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "indigo",
//     "violet",
// ];

// console.log(missPiggy);
// [
//     "red",
//     "orange",
//     "yellow",
//     "green",
//     "blue",
//     "indigo",
//     "violet",
// ];

// console.log(kermit === missPiggy); // true

//3
let mamas = "Monday";

let papas = mamas;

papas += ", so good to me.";

// console.log(mamas); // "Monday"
// console.log(papas); // "Monday, so good to me."
// console.log(mamas === papas); // false