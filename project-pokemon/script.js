'use strict'
// Please don't delete the 'use strict' line above

// console.log(allPokemon);

// console.log(allPokemon.length)

// console.log(allPokemon[0])

//#######################################################################################3
//基礎演習

//1
//データ中のすべてのポケモンの名前を要素に持つ配列を返す、関数 getNames を宣言してください。
/**
 * @returns {Array<string>} データ中のすべてのポケモンの名前を要素に持つ配列
 */
function getNames() {
    return allPokemon.map(pokemon => pokemon.Name)
}

// test(getNames(), getNamesExpected);

//2
//  与えられた名前を持つポケモンのオブジェクトを返す、関数 getPokemonByName を宣言してください。

/**
 * @param {string} ??? - ポケモンの名前
 * @returns {object} 与えられた名前を持つポケモンのオブジェクト
 */

function getPokemonByName(name) {
    for (const pokemon of allPokemon) {
        if (pokemon.Name === name) {
            return pokemon;
        }
    }
}

// test(getPokemonByName("Pikachu"), getPokemonByNameExpected);

//3
// 全ポケモンの最大 CP (戦闘力) の平均値を返す、関数 getAvgMaxCP を宣言してください。

/**
  * @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
  */
function getAvgMaxCP() {
    let sum = 0;
    for (const pokemon of allPokemon) {
        sum += pokemon.MaxCP;
    }
    return sum / allPokemon.length;
}

 // このテストの値はおおよそ答と近ければ合格です。少し違っても問題ありません。
 // 少しだけ違う場合は、テストをコメントアウトしてください
 // それにしても、なぜ違ってもよいかわかりますか？🤔
// test(getAvgMaxCP(), getAvgMaxCPExpected);

//4
// 引数に文字列で attack（技）を取る getResistantPokemon という関数を宣言してください。
//この関数は、与えられた attack に耐性のあるすべてのポケモンのオブジェクトを要素に持つ配列を返します。

/**
 * @param {string} attack（技）
 * @returns {Array<object>} 与えられた技に耐性がある、すべてのポケモンのオブジェクトが入った配列
 */
function getResistantPokemon(attack) {
    const result = [];
    for (const pokemon of allPokemon) {
        if (pokemon.Resistant.includes(attack)) {
            result.push(pokemon);
        }
    }
    return result;
}

// test(getResistantPokemon("Fire"), getResistantPokemonExpected);

//5
// 引数に文字列 attack （技）を取る関数 getResistantPokemonNames を宣言してください。
//この関数は与えられた attack に耐性のあるすべてのポケモンの名前が入った配列を返します。 ヒント： 上記で作成した getResistentPokemon を活用できるかも。

/**
 * @param {string} attack（技）
 * @returns {Array<string>} 与えられた技に耐性がある、すべてのポケモンの名前が入った配列
 */
function getResistantPokemonNames(attack) {
    return getResistantPokemon(attack).map(pokemon => pokemon.Name);
}

// test(getResistantPokemonNames("Ice"), getResistantPokemonNamesExpected);

//6
// weakness（弱点）をキー、その弱点を持つポケモンの数を値とするオブジェクトを返す、関数 getWeaknessCounts を宣言してください。

/**
 * @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケモンの数の組み合わせをキー/値のペアで表現したオブジェクト
 */
function getWeaknessCounts() {
    const result = {};
    for (const pokemon of allPokemon) {
        for (const weak of pokemon.Weaknesses) {
            if (result[weak]) {
                result[weak] += 1
            } else {
                result[weak] = 1
            }
        }
    }
    return result;
}

// test(getWeaknessCounts(), getWeaknessCountsExpected);

//##############################################################################################
// 中級演習

//1
// 配列にもともと組み込まれているビルトインのメソッドがあるのを知っていますか。例えば for loop の代わりに利用できる
//.forEach という便利なメソッドがあります。 .forEach については MDNの説明 を参照してください。
// この .forEach を使用して、関数 getNames を書き換えてください。MDN の例を見て、.forEach の使用方法を理解しましょう。

function getNamesForEach() {
    const result = [];
    allPokemon.forEach(pokemon => result.push(pokemon.Name))
    return result;
}

// test(getNamesForEach(), getNamesExpected);


//2
// for loop の代わりに .forEach を使って、上の演習で作った関数を書き直してみましょう。

function getPokemonByNameForEach(name) {
    return allPokemon.filter(pokemon => pokemon.Name === name)[0];
}
// test(getPokemonByNameForEach("Pikachu"), getPokemonByNameExpected);

/**
  * @returns {number} 全ポケモンの最大CP（戦闘力）の平均値
  */
function getAvgMaxCP2() {
    let initialValue = 0
    return allPokemon.reduce((x,y) => x + y.MaxCP, initialValue) / allPokemon.length;
}
// test(getAvgMaxCP2(), getAvgMaxCPExpected);

/**
 * @param {string} attack（技）
 * @returns {Array<object>} 与えられた技に耐性がある、すべてのポケモンのオブジェクトが入った配列
 */
function getResistantPokemon2(attack) {
    return allPokemon.filter(pokemon => pokemon.Resistant.includes(attack))
}
// test(getResistantPokemon2("Fire"), getResistantPokemonExpected);

/**
 * @returns {{ [weakness: string]: number }} 弱点とその弱点を持つポケモンの数の組み合わせをキー/値のペアで表現したオブジェクト
 */
function getWeaknessCounts2() {
    const result = {};
    allPokemon.forEach(pokemon => {
        pokemon.Weaknesses.forEach(weak => {
            if (result[weak]) {
                result[weak] += 1;
            } else {
                result[weak] = 1;
            }
        })
    })
    return result;
}
// test(getWeaknessCounts2(), getWeaknessCountsExpected);


//##################################################################################
// 応用演習

//1
// 配列で利用可能なネイティブメソッド（関数）の詳細について、MDNの説明 を参照してください。

//2
// 様々な配列メソッドを使用して、コードをリファクタリングしてください。特に .map, .filter, .forEach, .reduce は非常に便利です！ 資料を読んで、しっかり勉強しておきましょう。

