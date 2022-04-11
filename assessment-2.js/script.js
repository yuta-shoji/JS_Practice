//自己評価：5

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

//################################################################################################
//1
/**
 * @param {Array<string>} ??? - 友達の名前が入った配列
 * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
 */
function sayHelloToFriends(array) {
    const result = [];
    for (const name of array) {
        result.push(`Hello, ${name}!`);
    }
    return result;
}

const friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);
const friends2 = ["Mario", "Luigi", "Wario"];
test(sayHelloToFriends(friends2), ["Hello, Mario!", "Hello, Luigi!", "Hello, Wario!"]);

//################################################################################################
//2
const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };
const obj5 = { a: "A", b: 2, c: "C", d: true, e: undefined};

/**
 * @param {object} オブジェクト
 * @returns {{ [key: string]: string }} 与えられたオブジェクトによく似たオブジェクト。ただし値が文字列である場合のみ、そのキー・値のペアを持つ。
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

test(filterObjectForStrings(obj1), obj1); // 変化なし
test(filterObjectForStrings(obj2), obj1); // キーが "b" のペアは含まれていない
test(filterObjectForStrings(obj3), obj4); // キーが "b" または "d" のペアは含まれていない
test(filterObjectForStrings(obj5), obj4); // キーが "b" または "d" , "e"のペアは含まれていない

//################################################################################################
//3
/**
 * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
 * @returns {Array<{ [key: string]: string }>} 与えられたオブジェクトを要素に持つ配列。ただし値が文字列である場合のみ、各オブジェクトはそのキー・値のペアを持つ。
 */
function filterArrayForStrings(arrayOfObjects) {
    const result = [];
    for (const object of arrayOfObjects) {
        result.push(filterObjectForStrings(object));
    }
    return result;
}

test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// 2 番目の要素からキー が "b" のペアは除くこと
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);
test(filterArrayForStrings([obj3, obj2, obj1, obj5]), [obj4, obj1, obj1, obj4]);

//################################################################################################
//4

//まず外側のfor文で4回ループ処理が回る
//真ん中のfor文で配列namesの要素数分の回数がfor文が回る
//内側のfor文で2回ループ処理が回るので、結果は

//ichi
//ichi
//ni
//ni
//san
//san
//yon
//yon
//ichi
//ichi
//ni
//ni
//san
//san
//yon
//yon
//ichi
//ichi
//ni
//ni
//san
//san
//yon
//yon
//ichi
//ichi
//ni
//ni
//san
//san
//yon
//yon

//################################################################################################
//5

//予想
//a: 0
//b: 0
//c: 0
//c: 1
//b: 1
//c: 0
//c: 1
//a: 1
//b: 0
//c: 0
//c: 1
//b: 1
//c: 0
//c: 1

//結果の説明

for (let i = 0; i < 2; i++) {
    console.log("a: " + i);
    for (let i = 0; i < 2; i++) {
        console.log("b: " + i);
        for (let i = 0; i < 2; i++) {
            console.log("c: " + i);
        }
    }
}

//予想と同じだった。
//入れ子になったfor文で同じ変数を使う場合、
//今回のケースだとそれぞれletでiを宣言しているので
//そこを通過する度にiが0にリセットされ、このような結果になる。
//仮に変数をi,j,kなどで変数を分けたとしても結果は同じになる。

for (let i = 0; i < 2; i++) {
    console.log("a: " + i);
    for (let j = 0; j < 2; j++) {
        console.log("b: " + j);
        for (let k = 0; k < 2; k++) {
            console.log("c: " + k);
        }
    }
}