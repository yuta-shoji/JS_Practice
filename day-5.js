//day-5 ナイトメア

let actual
let expected

function doTest(actual, expected) {
    if (actual === expected) {
        console.log("Test PASSED!");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }
}

/**
 * @param {number} ??? - チェックしたい数字
 * @returns {boolean} 与えられた数字が素数かどうか
 */

function isPrime(num) {
    //1 は素数でないので false を返す
    if(num == 1) {
        return false;
    //2 は素数なので true を返す
    } else if(num == 2) {
        return true;
    } else {
        for(i = 2; i < num; i++) {
            //割り切れたら合成数なのでfalse
            if(num % i == 0) {
                return false;
            }
            //割り切れないとき素数なのでtrue
            if(i + 1 == num) {
                return true;
            }
        }
    }
}

actual = isPrime(1);
expected = false;
doTest(actual, expected)

actual = isPrime(2);
expected = true;
doTest(actual, expected)

actual = isPrime(3);
expected = true;
doTest(actual, expected)

actual = isPrime(4);
expected = false;
doTest(actual, expected)

actual = isPrime(5);
expected = true;
doTest(actual, expected)

actual = isPrime(104728);
expected = false;
doTest(actual, expected)

actual = isPrime(104729);
expected = true;
doTest(actual, expected)
