'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual2
let expected2

function doTest() {
    if (actual2 === expected2) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual2: ", actual2);
        console.log("  expected2: ", expected2);
    }
}

//##########################################################################################################3
//ナイトメア

/**
 * @param {number} ??? - 数値。その名前がアルファベットの形で返ることになる
 * @returns {number} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう





function getNumberName(num) {
    const ty = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const underTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const thousand = String(num).charAt(String(num).length - 4);
    const hundred = String(num).charAt(String(num).length - 3);
    const tenth = String(num).charAt(String(num).length - 2);
    const first = String(num).charAt(String(num).length - 1);
    let result = "";
    if (String(num).length >= 4) {
        result += `${underTen[thousand]} thousand `;
        if (String(num) % 1000 === 0) {
            return result.trim();
        }
    }
    if (String(num).length >= 3 && Number(hundred) !== 0) {
        result += `${underTen[hundred]} hundred `;
        if (String(num) % 100 === 0) {
            return result.trim();
        }
    }
    if (String(num).length >= 2) {
        if (String(num) % 10 === 0) {
            result += `${ty[tenth - 1]}`;
            return result;
        } else if (tenth + first > 10 && tenth + first < 20) {
            result += `${teen[first - 1]}`;
            return result;
        } else if (tenth + first >= 20) {
            result += `${ty[tenth - 1]} `;
        }
    }
    return result += `${underTen[first]}`;
}

actual2 = getNumberName(0);
expected2 = "zero";
doTest()

actual2 = getNumberName(12);
expected2 = "twelve";
doTest()

actual2 = getNumberName(22);
expected2 = "twenty two";
doTest()

actual2 = getNumberName(100);
expected2 = "one hundred";
doTest()

actual2 = getNumberName(101);
expected2 = "one hundred one";
doTest()

actual2 = getNumberName(110);
expected2 = "one hundred ten";
doTest()

actual2 = getNumberName(111);
expected2 = "one hundred eleven";
doTest()

actual2 = getNumberName(135);
expected2 = "one hundred thirty five";
doTest()

actual2 = getNumberName(150);
expected2 = "one hundred fifty";
doTest()

actual2 = getNumberName(1111);
expected2 = "one thousand one hundred eleven";
doTest()

actual2 = getNumberName(1110);
expected2 = "one thousand one hundred ten";
doTest()

actual2 = getNumberName(1101);
expected2 = "one thousand one hundred one";
doTest()

actual2 = getNumberName(1100);
expected2 = "one thousand one hundred";
doTest()

actual2 = getNumberName(1011);
expected2 = "one thousand eleven";
doTest()

actual2 = getNumberName(1010);
expected2 = "one thousand ten";
doTest()

actual2 = getNumberName(1001);
expected2 = "one thousand one";
doTest()

actual2 = getNumberName(1000);
expected2 = "one thousand";
doTest()

actual2 = getNumberName(1200);
expected2 = "one thousand two hundred";
doTest()

actual2 = getNumberName(1020);
expected2 = "one thousand twenty";
doTest()

actual2 = getNumberName(1345);
expected2 = "one thousand three hundred forty five";
doTest()
