"use strict";
// 1行目に記載している 'use strict' は削除しないでください

//講義演習
function evenArray(array) {
  const result = [];
  for (const num of array) {
    if (num % 2 === 0) {
      result.push(num);
    }
  }
  return result;
}
// test(evenArray([2, 3, 4, 5, 6]), [2, 4, 6]);

function giveMeABetterName(array) {
  const result = [];
  for (const num of array) {
    if (num > 3) {
      result.push(num);
    }
  }
  return result;
}
// test(giveMeABetterName([2, 3, 4, 5, 6]), [4, 5, 6]);

//#########################################################################################

//warmUp
//1
//コードを追加して、テストをパスしましょう。関数は 5 行以下のコードになるよう実装してみましょう。

const arrayOfObjects = [
  { name: "alice", favoriteColor: "green" },
  { name: "bob", favoriteColor: "blue" },
];

function getNames(arrayOfObjects) {
  return arrayOfObjects.map((obj) => obj["name"]);
  // return arrayOfObjects.map(function (obj) {
  //     return obj["name"];
  // });
}
function getFavoriteColors(arrayOfObjects) {
  return arrayOfObjects.map((obj) => obj["favoriteColor"]);
  // return arrayOfObjects.map(function (obj) {
  //     return obj["favoriteColor"];
  // });
}

// test(getNames(arrayOfObjects), ["alice", "bob"]);
// test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);

//###########################################################################################################
//基礎演習
//これからみなさんに書いてもらう関数は、特段新しいものばかりではありません。
//注目してほしいのは、Array.filter の使い方です。演習を通して .filter を使いこなせるようになりましょう。

//1
//関数 isMultipleOfTen を宣言してください。この関数は .filter メソッドに実行されているという点に注目してください。
//なお、関数内で .filter メソッドを使用しては いけません。ここでは おそらく アロー関数を使う必要はないでしょう。

/**
 * @param {number} ???
 * @returns {boolean} 与えられた数値が 10 の倍数かどうか
 */
// ここにコードを書きましょう
function isMultipleOfTen(num) {
  return num % 10 === 0;
}

const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

// test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
// test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);

//2
//関数 hasAVowel を宣言してください。この関数は .filter メソッドに実行されているという点に注目してください。
//なお、関数内で .filter メソッドを使用しては いけません。ここでは おそらく アロー関数を使う必要はないでしょう。

/**
 * @param {string} ???
 * @returns {boolean} 与えられた文字列に母音 (a, e, i, o, u) が1つ以上含まれているか
 */
// ここにコードを書きましょう
function hasAVowel(str) {
  return (
    string.includes("a") ||
    string.includes("e") ||
    string.includes("i") ||
    string.includes("o") ||
    string.includes("u")
  );
}

const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

// test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
// test(arrayOfStrings2.filter(hasAVowel), ["waa"]);

//3
//関数 getPositiveNumbers を宣言してください。この関数自体は .filter メソッドを 使用してください 。
//アロー関数も 使用してください 。アロー関数は getPositiveNumbers 関数の 内部 で使用されます。

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中にある正の数のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getPositiveNumbers(number) {
  return number.filter((num) => num > 0);
}

// test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
// test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
// test(getPositiveNumbers([-2, -4]), []);

//4
//関数 getQuestions を宣言してください。この関数は .filter メソッドを 使用してください 。
//アロー関数も 使用してください 。アロー関数は getQuestions 関数の 内部 で使用されます。。

/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、大文字で始まり、疑問符で終わる文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getQuestions(array) {
  return array.filter(
    (str) => str[0].match(/^[A-Z]+$/) && str[str.length - 1] === "?"
  );
}

const arrayOfStrings3 = [
  "Hi, there.",
  "What in the world?",
  "My name is JavaScript",
  "Do you want to know a secret?",
  "how are you?",
];

// test(getQuestions(arrayOfStrings3), [
//     "What in the world?",
//     "Do you want to know a secret?",
// ]);
// test(getQuestions(arrayOfStrings3.slice(2)), [
//     "Do you want to know a secret?",
// ]);

//####################################################################################################################
//中級演習

//1
//関数 getOddLengthCapitalWords を宣言してください。

/**
 * @param {Array<string>} ???
 * @returns {Array<string>} 与えられた配列の中にある、長さが奇数で、文字がすべて大文字の文字列のみを要素として持つ配列
 */
// ここにコードを書きましょう
function getOddLengthCapitalWords(stringArray) {
return stringArray.filter(
    (elem) => elem.length % 2 === 1 && elem.toUpperCase() === elem
);
}

const arrayOfStrings4 = ["SNAKE", "APPLES", "Peaches", "PUMPKINPIES"];

// test(getOddLengthCapitalWords(arrayOfStrings4), ["SNAKE", "PUMPKINPIES"]);
// test(getOddLengthCapitalWords(arrayOfStrings4.slice(1)), ["PUMPKINPIES"]);

//2
//関数 intersection を宣言してください。ここでは Lodash のメソッドを 使用しないで 実装しましょう。

/**
 * @param {Array<any>} ???
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列の両方に存在する要素だけが入った配列
 */
// ここにコードを書きましょう
function intersection(array1, array2) {
  return array1.filter((num) => array2.includes(num));
}

// test(intersection([1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection([1, 2, 3], [2, 3, 4]), [2, 3]);
// test(intersection([1, 2, 3], [3, 4, 5]), [3]);
// test(intersection([1, 2, 3], [4, 5, 6]), []);

//#######################################################################################################################
//1
//関数 intersection を 任意の数の引数 を取るように変更してください。

/**
 * @param {...Array<any>} ??? - 任意の数の配列
 * @returns {Array<any>} 与えられた配列のすべてに共通する要素だけが入った配列
 */
// ここにコードを書きましょう
function intersection2(...args) {
  console.log("args: ", args);
  return args[0].filter((target) => {
    let count = 1;
    args
      .slice(1)
      .flat(Infinity)
      .forEach((num) => {
        if (target === num) {
          count++;
        }
      });
    return args.length === count;
  });
}

//allPokemon.reduce((x,y) => x + y.MaxCP, initialValue) / allPokemon.length;

// test(intersection2([1, 2, 3], [1, 2, 3], [1, 2, 3]), [1, 2, 3]);
// test(intersection2([1, 2, 3], [2, 3, 4], [3, 4, 5]), [3]);
// test(intersection2([1, 2, 3], [3, 4, 5], [6]), []);
// test(
//     intersection2([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [4, 5, 6]),
//     []
// );

//2
// 関数 loneRangers を宣言してください。ここでは Lodash のメソッドを 使用しないで 実装しましょう。
//この問題は想像よりも難しいかもしれません。🤔

/**
 * @param {...Array<any>} ???
 * @returns {Array<any>} 与えられた配列の 1 つにしか存在しない要素だけが入った配列
 */
function loneRangers(...args) {
  return args.flat(Infinity).filter((elem, index) => {
    let newArray = JSON.parse(JSON.stringify(args.flat(Infinity)));
    newArray.splice(index, 0);
    return !newArray.includes(elem);
  });
}

test(loneRangers([1, 2, 3]), [1, 2, 3]);
test(loneRangers([1, 2, 3], [1, 2, 3]), []);
test(loneRangers([1, 2, 3], [1, 2, 3], [1, 2, 3, 4]), [4]);
test(loneRangers([1, 2, 3], [1, 2, 3], [1, 2, 3, 4], [5], [6]), [4, 5, 6]);

//#######################################################################################################################
//ナイトメア
//1
//関数 shuffle を宣言してください。ここでは Lodash のメソッドを
//使用しないで 実装しましょう。

/**
 * @param {Array<any>} ???
 * @returns {Array<any>} 与えられた配列をランダムな順番に並び替えた配列
 */
// ここにコードを書きましょう
const AllArray = [];

function shuffle(array) {
    const result = [];
    const checkArray = [];
    let random = Math.floor(Math.random() * array.length);
    for (let i = 0; i < array.length; i++) {
        while (checkArray.includes(random)) {
            random = Math.floor(Math.random() * array.length);
        }
        result.push(array[random]);
        checkArray.push(random);
    }
    AllArray.push(result);
    return result;
}

function randomTest() {
    let existFlg = true;
    let randomFlg = true;
    originArray.forEach(num => AllArray.forEach(array => {
      //元の配列の要素が含まれているかのテスト
      if (!(array.includes(num))) {
          existFlg = false;
          return;
      }
      //ランダムに生成された配列全てが被っていないかのテスト
      AllArray.forEach(array2 => {
        if (JSON.parse(JSON.stringify(array)) === JSON.parse(JSON.stringify(array2))) {
          randomFlg = false;
          return;
        }
      })
    }));
    if(existFlg && randomFlg) {
        return "it's random!!!"
    } else {
        return "it's Not random..."
    }
}

// この種の関数をテストするのは簡単ではありません
// たくさん console.log を使って、結果がランダムで表示されるかどうかを
// *確認* してください。

const NUM_TRIALS = 10;
const originArray = [1, 2, 3, 4];

// for (let i = 0; i < NUM_TRIALS; ++i) {
//     console.log(shuffle(originArray));
// }
// console.log(randomTest());

// チャレンジ精神が旺盛な方は、配列の順番が本当にランダムかどうかを
//自動でテストする方法を考えてみましょう。


//2
//関数 sort を宣言してください。ここでは Lodash のメソッドを 使用しないでください。
//ビルトインの .sort メソッドも 使用しないでください（テストを除く）。
//この問題で重要なのは、速く 並び替えられる処理にすることです。
//実装のしかたによっては、処理に 長い時間 がかかります。
//開発中は NUM_ELEMENTS の値を小さくしておくのがいいかもしれません。

/**
 * @param {Array<number>} ???
 * @returns {Array<number>} 与えられた配列の中の数字がソートされて入っている配列
 */
// ここにコードを書きましょう
function sort (arr) {
  const result = [];
  const newArray = JSON.parse(JSON.stringify(arr));
  for (let i = 0; i < arr.length; ++i) {
    let min = Math.min(...newArray);
    newArray.splice(newArray.indexOf(min), 1);
    result.push(min);
  }
  return result;
}

const array = [];

const NUM_ELEMENTS = 10000;

for (let i = 0; i < NUM_ELEMENTS; ++i) {
    array.push(Math.random());
}

console.log(array);

console.time("sort");
const startTime = Date.now();
const sortedArray = sort(array);
const endTime = Date.now();
console.timeEnd("sort");

// // ソートできますか。
// test(
//     sortedArray,
//     array.slice().sort((a, b) => a - b)
// );
// // 1 秒以内に処理が終わりますか。
// test(endTime - startTime < 1000, true);
