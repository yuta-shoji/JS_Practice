'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function bmi(height, weight) {
    return weight / (height ** 2);
}

// console.log(bmi(1.7, 59));



// console.log(1100 !== 99) // => true を表示させる。

// console.log(1 === 21) // => false

// console.log(62 !== 63) // => true

// console.log("5" === 5) // => false

// console.log("6" !== "six") // => true

// console.log(2 * 3 * 10 > 50);

// function isEqual(valueOne, valueTwo) {
//     return valueOne == valueTwo;
// }

// console.log(isEqual("5", 5));

// function isGreaterThan(valueOne, valueTwo) {
//     return valueOne > valueTwo
// }
// console.log(isGreaterThan(4, 5))

// function isOfAge(age) {
//     return console.log(age >= 20)
// }
// console.log(isOfAge(21))

//％ 演算子を使用しないで isEven 関数を書き換えてください。

// function isEven(n){
//     if(Number.isInteger(n / 2) === true){
//         return true;
//     }else{
//         return false
//     }
// }
// console.log(isEven(3))

//2 つの引数のうち大きい数字を返す getGreaterValue という名前の関数を作成してください。

// function getGreaterValue(num1, num2){
//     return Math.max(num1, num2)
// }

// console.log(getGreaterValue(20, 15)); // 15 を表示
// console.log(getGreaterValue(15, 10)); // 15 を表示

//2 つの引数のうち大きい数字を返す getGreaterValue という名前の関数を作成してください。

// function getGreatestValue(...num){
//     return Math.max(...num)
// }

// console.log(getGreatestValue(10, 15)); // 15 を表示
// console.log(getGreatestValue(15, 10)); // 15 を表示
// console.log(getGreatestValue(1, 2, 3, 4, 5)); // 5 を表示
// console.log(getGreatestValue(1, 10, 3, 4, 5)); // 10 を表示

//#####################################################################################################
//ナイトメア

//flatten という名前の関数を作成しましょう。引数に、
//入れ子になった配列を与えると、平坦化した配列を返すようにしてください。
//もともと JavaScript に組み込まれている
//Array.prototype.flatというメソッドを使ってはいけません。

// function flatten(lists) {
    //     let numberList = []
    //     for (let elem of lists) {
        //         if (Array.isArray(elem) === true) {
            //             elem.map(n => numberList.push(n));
            //         } else {
//             numberList.push(elem)
//         }
//     };
//     return numberList
// }

function flatten(lists) {
    let numberList = [].concat.apply([], lists);
    return numberList
}

// console.log(
//     flatten([
//         [1, 2, 3],
//         [4, 5, 6],
//     ])
// ); // [1, 2, 3, 4, 5, 6]
// console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
// console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]

// console.log("========================");

//#####################################################################################################
//beyond nightmare(3/11)
//与えられる引数の数は一つ以上の配列
//入れ子になった配列を与えると、平坦にした配列し、一つの配列にまとめて返すようにしてください。
function superFlatten(num1, ...lists){
    let resultList = [].concat.apply([], [num1, lists]);
    return resultList = [].concat.apply([], resultList);
}
// console.log(superFlatten([1, [2, 3]],[4, 5, 6]));
// console.log(superFlatten([1, 2, 3, [4, 5, 6]]));
// console.log(superFlatten([1], [2], [3], [4, 5, 6]));


//与えられる引数の数は一つ以上の配列あるいは数値
//入れ子になった数値あるいは配列を与えると、平坦にした配列し、一つの配列にまとめて返すようにしてください。
// function ultraFlatten(num1, ...lists){
//     let resultList = []
//     let numberList = [num1];
//     numberList.push(lists);
//     for (let elem of numberList) {
//         if (Array.isArray(elem) === true) {
//             for (let e of elem) {
//                 if (Array.isArray(e) === true) {
//                     e.map(n => resultList.push(n));
//                 } else {
//                     resultList.push(e);
//                 };
//             };
//         } else {
//             resultList.push(elem);
//         };
//     }
//     return resultList;
// }
function ultraFlatten(num1, ...lists){
    console.log('num1: ', num1);
    console.log('lists: ', lists);
    let resultList = [].concat.apply([], [num1, lists]);
    console.log('resultList: ', resultList);
    return resultList = [].concat.apply([], resultList);
}

function superFlatten2(num1,num2, ...theArgs){
    console.log('num1: ', num1);
    console.log('num2: ', num2);
    console.log('theArgs: ', theArgs);
    let flattenArray = [].concat.apply([], [num1,num2, ...theArgs]);
    console.log('flattenArray: ', flattenArray);
    return [].concat.apply([], flattenArray);
}
console.log(ultraFlatten([1, [2, 3]],[4, 5, 6]));
console.log(superFlatten2([1, [2, 3]],[4, 5, 6]));
console.log("=============================================")
console.log(ultraFlatten([1], [2], [3], [4, 5, 6]));
console.log(superFlatten2([1], [2], [3], [4, 5, 6]));
console.log("=============================================")
console.log(ultraFlatten([1, 2, 3, [4, 5, 6]]));
console.log(superFlatten2([1, 2, 3, [4, 5, 6]]));
