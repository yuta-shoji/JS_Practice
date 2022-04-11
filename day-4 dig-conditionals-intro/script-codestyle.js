'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//########################################################################
//基礎演習(ペアワーク)

//1
// ファイル全体で使用するtdd変数を宣言します
let expected;
let actual;

function getAverage(x, y) {
    actual = (x + y) / 2
    if (actual === expected) {
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.log("Test PASSED!");
    } else {
        console.error("Test1 FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

// expected = 1; // 期待するテスト結果
// getAverage(1, 3); // テストする式

// expected = 1.5; // 期待するテスト結果
// getAverage(1, 2); // テストする式

// expected = 2.5;
// getAverage(2, 3);

// expected = 3;
// getAverage(2, 4);


//2
function isPositive(thing) {
    if (thing < 0) {
        return false;
    } else if (thing > 0) {
        return true;
    } else if (thing === 0) {
        return false;
    }
}

// expected = true; // 期待するテスト結果
// actual = isPositive(-2); // テストする式

// if (actual === expected) {
//     console.log("Test PASSED!");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }

//3
function AreaOfTriangle(base, height) {
    return base * height / 2;
}

// expected = 7.5; // 期待するテスト結果
// actual = AreaOfTriangle(3, 5); // テストする式

// if (actual === expected) {
//     console.log("Test PASSED!");
// } else {
//     console.error("Test FAILED. Keep trying!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.groupEnd();
// }

//4
function MultipleOfSeven(num) {
    const givenNumber = num % 7 === 0;

    if (givenNumber === true) {
        return true;
    } else {
        return false;
    }
}

// console.log(MultipleOfSeven(15))

//5
function isThisZero(number) {
    if (number < 0) {
        return 0 - number;
    }
    return number;
}
// console.log(isThisZero(-3))

//########################################################################
//中級演習

//1
function isWithInRange(input, lower, upper) {
    if (input >= lower && input <= upper) {
        return true;
    } else {
        return false;
    }
}
// console.log(isWithInRange(11, 5, 10))

//2
function getRemainder(op1, op2) {
    const thing = op2 * Math.floor(op1 / op2);
    console.log('thing: ', thing);
    return op1 - thing;
}

// console.log(getRemainder(14, 8))

//3
function getExclusiveOr(a, a2) {
    var isOr = a || a2;
    var isAnd = a && a2;
    var isXor = isOr && !isAnd;
    console.log('isOr: ', isOr);
    console.log('isAnd: ', isAnd);
    console.log('isXor: ', isXor);
    return isXor;
}

// console.log(getExclusiveOr(1, 0));

//4
function isAscendingOrder(first, second, third, last) {
    const isFirstLessThanSecond = first < second;
    const isSecondLessThanThird = second < third;
    const isThirdLessThanLast = third < last;
    if (isFirstLessThanSecond) {
        if (isSecondLessThanThird) {
            if (isThirdLessThanLast) {
                return true;
            } else {
                return false
            };
        } else {
            return false
        };
    } else {
        return false
    };
}
console.log(isAscendingOrder(1,2,3,3));


//########################################################################
//応用演習


function howLongIsThisLine(x1, y1, x2, y2) {
    const diffOfXCoorDinates = x2-x1;
    var squareofdiffofxcoordinates = diffofxcoordinates * diffofxcoordinates;
    let diffofycoordinates = y2-y1;
    let squareofdiffofycoordinates = Math.pow(diffofycoordinates,2);
    var sumofsquaresofdiffsofcoordinates = squareofdiffofxcoordinates + squareofdiffofycoordinates;
    const squarerootofsumofsquaresofdiffsofcoordinates = sumofsquaresofdiffsofcoordinates ** .5;
    return squarerootofsumofsquaresofdiffsofcoordinates;
}
