// 'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// let num = 12345
// let result = String(num).slice( -1 )

// console.log(result)

//beyond nightmare(3/11)
//与えられる引数の数は一つ以上の配列
//入れ子になった配列を与えると、平坦にした配列し、一つの配列にまとめて返すようにしてください。
function superFlatten(num1, ...lists){
    let resultList = []
    let numberList = [num1];
    numberList.push(lists);
    for (let elem of numberList) {
        for (let e of elem) {
            if (Array.isArray(e) === true) {
                e.map(n => resultList.push(n));
            } else {
                resultList.push(e);
            };
        };
    }
    return resultList;
}
console.log(superFlatten([1, [2, 3]],[4, 5, 6]));
console.log(superFlatten([1, 2, 3, [4, 5, 6]]));
console.log(superFlatten([1], [2], [3], [4, 5, 6]));


//与えられる引数の数は一つ以上の配列あるいは数値
//入れ子になった数値あるいは配列を与えると、平坦にした配列し、一つの配列にまとめて返すようにしてください。
function ultraFlatten(num1, ...lists){
    let resultList = []
    let numberList = [num1];
    numberList.push(lists);
    for (let elem of numberList) {
        if (Array.isArray(elem) === true) {
            for (let e of elem) {
                if (Array.isArray(e) === true) {
                    e.map(n => resultList.push(n));
                } else {
                    resultList.push(e);
                };
            };
        } else {
            resultList.push(elem);
        };
    }
    return resultList;
}
console.log(ultraFlatten([1, [2, 3]],[4, 5, 6]));
console.log(ultraFlatten([1, 2, 3, [4, 5, 6]]));
console.log(ultraFlatten([1], [2], [3], [4, 5, 6]));