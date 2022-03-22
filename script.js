'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function runTest(actual, expected) {
    // 現時点では、配列の比較には JSON.stringify を使う必要があると覚えておいてください。
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
    }
}

//warmUp

//関数: getOddNumbers を宣言してください。
/**
 * @param {Array<number>} ??? - 数値型の要素を持つ配列

 * @returns {Array<number>} 与えられた配列の中の奇数だけが入った配列
 */
function getOddNumbers(array) {
    const newArray = []
    for (const arr of array) {
        if (arr % 2 !== 0 && arr > 0) {
            newArray.push(arr);
        }
    }
    return newArray;
}

// runTest(getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]), [1, 3, 5, 7])
// runTest(getOddNumbers([2, 4, 6, 8]), [])

//###################################################################################33
//ペア演習

//1
//次のコードで何が表示されるでしょう。考えたら、デベロッパーコンソールで実行してみましょう。

const place = "Zoom";
const lesson = {
    instructors: ["Eriko", "Misa", "Tamaroh"],
    coding: true,
    place: "Zoom",
};
// console.log(lesson["place"]); // ???
// console.log(lesson.place); // ???
// console.log(lesson[place]); // ???
// console.log(lesson["cod" + "ing"]); // ???
// console.log(lesson[2]); // ???
// console.log(lesson.instructors[2]); // ???
// console.log(lesson.length); // ???
// console.log(lesson.instructors.length); // ???
// console.log(typeof lesson.instructors); // ???

//2
//次のコードを実行すると何が出力されるでしょう。結果を考えたら、実行してみましょう。

const object = {
    a: "hello",
    b: "bye",
    c: 1000,
};

// console.log(object["a"]); // ???
// console.log(object.b); // ???
// object["b"] = "goodbye";
// console.log(object["b"]); // ???

// // これは少しトリッキーです 😉
// console.log(object[a]); // ???

//3
//ペアと一緒に考えましょう: 配列の中に配列を入れ子にできたのと同様に、
//配列とオブジェクトを入れ子にすることもできます。
//次のコードがどんな構造になっているか、ペア相手と話してみましょう

const pokemons = [
    {
        Number: "001",
        Name: "Bulbasaur",
        Generation: "Generation I",
        About:
            "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
        Types: ["Grass", "Poison"],
    },
    {
        Number: "025",
        Name: "Pikachu",
        Generation: "Generation I",
        About:
            "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
        Types: ["Electric"],
    },
    {
        Number: "019",
        Name: "Rattata",
        Generation: "Generation I",
        About:
            "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
        Types: ["Normal"],
    },
];

// console.log(pokemons[0]); //
// {
//     Number: "001",
//     Name: "Bulbasaur",
//     Generation: "Generation I",
//     About:
//         "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
//     Types: ["Grass", "Poison"],
// },

// console.log(pokemons[1].Name); // "Pikachu"

// console.log(pokemons[0]["Name"]); // "Bulbasaur"

// console.log(pokemons[2]["About"]); //"Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere."

// console.log(pokemons[2].Types[0]); // "Normal"


//############################################################################################
//基礎演習
//1

let myInfo = { name: "chiba", age: 32, location: "Aichi", isCoder: true };


// console.log(myInfo["name"]); // => "true"
// console.log(myInfo["age"]); // => "true"
// console.log(myInfo["location"]); // => "true"
// console.log(myInfo["isCoder"]); // => "true"

//2

const tar = ["-", ".-", ".-."];

// ここにコードを書きましょう
let morseCode = { t: "-", a: ".-", r: ".-." };


// runTest(morseCode["t"], "-");
// runTest(morseCode["a"], ".-");
// runTest(morseCode["r"], ".-.");

//3

/**
 * @param {string} ??? - モールス信号に変換する文字
 * @returns {string} 与えられた文字に対応するモールス信号
 */
function morseCodeArt(str) {
    let morseCode = { t: "-", a: ".-", r: ".-." };
    let length = str.length;
    let result = "";
    for (let i = 0; i < length; i++) {
        result = result + morseCode[str.charAt(i)] + " ";
    }
    return result.trim();
}

//4
//関数 select を宣言してください。

/**
 * @param {object} ??? - オブジェクト
 * @param {Array<string>} ??? - 文字列の入った配列
 * @returns {object} 与えられた配列の要素をキーにして、それに対応する値は第1引数のオブジェクトから抽出して作られた新しいオブジェクト
 */
// ここにコードを書きましょう.
function select(object, array) {
    const obj = {};
    for (const arr of array) {
        obj[arr] = object[arr]
    }
    return obj;
}

// runTest(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
// runTest(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
// runTest(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
// runTest(select({ a: 1, b: 2, c: 3 }, []), {});

//5
//関数 countCharacters を宣言してください。
/**
 * @param {string} ???
 * @returns {{ [character: string]: number }} 与えられた文字列の中の各アルファベットをキーに、その登場回数を値にしたオブジェクト
 */
// ここにコードを書きましょう.
function countCharacters(string) {
    const obj = {};
    for (const str of string) {
        if (obj[str] !== undefined) {
            obj[str] = obj[str] + 1;
        } else {
            obj[str] = 1;
        }
    }
    return obj;
}

// runTest(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
// runTest(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });


//###################################################################################
//###################################################################################
//スコープ

//基礎演習
//1
// /以下のコードを実行すると、コンソールに何が表示されるでしょうか？

let greeting = "Konnichiwa";

function sayHello(name) {
    let greeting = "Hi";
    return greeting + " " + name;
}

//2
//テストに通るようにコードを修正しましょう。
//各変数の スコープ がどうなっているかを意識してください。
let sum = 0;

function sumArray(arrayOfNumbers) {
    for (const number of arrayOfNumbers) {
        sum += number;
    }
}

// 関数は何度呼び出しても期待どおりに動作しなければいけません。
// runTest(sumArray([1, 2, 3]), 6);
// runTest(sumArray([10, 20, 30]), 60);
// runTest(sumArray([100, 200, 300]), 600);

//##############################################################################################
//中級演習
//1
//カウンターが壊れてしまいました！
//ちゃんと カウントアップ するよう、コードを修正してください。
// /ヒント: 修正箇所 はたった 1 行だけです。新しいコードを 追加 する必要はありません。

let count = 0;

function counter(x) {
    count = count + x;
    return count;
}

// runTest(counter(3), 3);
// runTest(counter(4), 7);
// runTest(counter(5), 12);

//#####################################################################################################
//ポケモンタイム！

//1
//関数 getNames を宣言してください

/**
 * @param {Array<object>} ??? - ポケモンオブジェクトが入った配列
 * @returns {Array<string>} 各オブジェクトの `Names` を要素に持つ配列
 */
// ここにコードを書きましょう.

function getNames(pokemon) {
    const result = [];
    for (const obj of pokemon) {
        result.push(obj.Name);
    }
    return result;
}

// 'pokemons' の配列は、以下のコードより上に書かれていなければいけません。

// runTest(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);

//2
//関数 findPokemon を宣言してください。
//今回は == を使うべき数少ないチャンスです。
//注意 : ペア演習3で使用した配列には ポケモンオブジェクトが 3 つしかないため、
//第二引数で渡す number は 1、25、19 しか渡すことができません。

/**
 * @param {Array<object>} ??? - ポケモンが入った配列
 * @param {number} ??? - 取り出したいポケモンの 'number'
 * @returns {object|null} 与えられた数字を 'number' に持つポケモン。もし対応するポケモンが存在しなければ、null を返す。
 */
// ここにコードを書きましょう.
function findPokemon(object, num) {
    for (const obj of object) {
        if (obj.Number == num) {
            return obj;
        }
    }
    return null;
}

// runTest(findPokemon(pokemons, 1), pokemons[0]);
// runTest(findPokemon(pokemons, 19), pokemons[2]);
// runTest(findPokemon(pokemons, 25), pokemons[1]);
// runTest(findPokemon(pokemons, 1337), null);

//#####################################################################################################
//応用演習

//1
//関数 removeOddValues を宣言してください。
//ヒント : typeof を使う必要があるかもしれません。

/**
 * @param {object} ??? - オブジェクト
 * @returns {object} 与えられたオブジェクトのキー/値のペアのうち、値が奇数のものを除いた新たなオブジェクト。

 */
// ここにコードを書きましょう.
function removeOddValues(object) {
    const result = {};
    Object.keys(object).forEach(function (key) {
        if (typeof object[key] === "number" && object[key] % 2 === 0) {
            result[key] = object[key];
        } else if (typeof object[key] === "string") {
            result[key] = object[key];
        }
    });
    return result;
}

runTest(removeOddValues({ a: 1, b: 2, c: 3 }), { b: 2 });
runTest(removeOddValues({ a: 1, b: 2, c: "3" }), { b: 2, c: "3" });
runTest(removeOddValues({ a: "1", b: "2", c: "3" }), {
    a: "1",
    b: "2",
    c: "3",
});
// 1 行が非常に長くなる場合は、キー/値のペアを改行して書くこともできます。

//#####################################################################################################
//ナマケモノタイム

const bucketOfSloths = [
    { name: { first: "Furry", middle: "Danger", last: "Assassin" }, age: 2 },
    { name: { first: "Slow", last: "Pumpkin" }, age: 3 },
    { name: { first: "Bullet", middle: "Proof", last: "Sloth" }, age: 4 },
    { name: { first: "Boos", middle: "Boos", last: "Bun" }, age: 5 },
    { name: { first: "Jungle", last: "Fuzz" }, age: 2 },
];

//1
//関数 longestName を宣言してください。

/**
 * @param {Array<object>} ??? - ナマケモノに入った配列
 * @returns {object} 名前・ミドルネーム・苗字を合わせた名前が一番長いナマケモノのオブジェクト
 */
// ここにコードを書きましょう.
function longestName() {
    const result = {};
    Object.keys(object).forEach(function (key) {
        
    });
    return result;
}

test(longestName(bucketOfSloths), bucketOfSloths[0]);
test(longestName(bucketOfSloths.slice(1)), bucketOfSloths[2]);
test(longestName(), undefined);