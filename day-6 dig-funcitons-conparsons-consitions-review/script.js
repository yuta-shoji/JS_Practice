'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual
let expected

function doTest() {
    if (actual === expected) {
        console.log("Yay! Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
    }
}

//基礎演習

//1
//関数 isLongerThan を宣言してください。

/**
 * @param {string} ??? - テストの対象となる文字列
 * @param {number} ??? - 閾値
 * @returns {any} 与えられた文字列の長さが指定された閾値より長いかどうか
 */


function isLongerThan(str, maxLength) {
    if (typeof str === "string") {
        return str.length > maxLength
    } else {
        return "Invalid input.";
    }
}

// actual = isLongerThan("three", 3);
// expected = true;
// doTest()

// actual = isLongerThan("three", 5);
// expected = false;
// doTest()

// actual = isLongerThan(3, 5);
// expected = "Invalid input.";
// doTest()

//2
/**
 * @param {number} ??? - テストの対象となる数値
 * @returns {boolean} 与えられた数値が奇数かどうかを表すブーリアン
 */
// ここにコードを書きましょう

function isOddWithoutIf(num) {
    return num % 2 !== 0 && typeof num === "number";
}

// actual = isOddWithoutIf(3);
// expected = true;
// doTest()

// actual = isOddWithoutIf(4);
// expected = false;
// doTest()

//3

/**
 * @param {number} ??? - 数値（0-10）。その名前がアルファベットの形で返ることになる
 * @returns {"zero"|"one"|"two"|"three"|"four"|"five"|"six"|"seven"|"eight"|"nine"|"ten"} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう

function getSimpleNumberName(num) {
    let numberList = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"]
    return numberList[num];
}

// actual = getSimpleNumberName(0);
// expected = "zero";
// doTest()

// actual = getSimpleNumberName(4);
// expected = "four";
// doTest()

// actual = getSimpleNumberName(10);
// expected = "ten";
// doTest()

// さらにテストを書いて、コードが正しいことを確認してください

//4

/**
 * @param {number} ??? - 正多角形の辺の数 (3-8)
 * @returns {"triangle"|"square"|"pentagon"|"hexagon"|"heptagon"|"octagon"} 与えられた数の辺を持つ凸多角形の英語名
 */
// ここにコードを書きましょう

function getRegularConvexPolygonName(num) {
    let shapes = ["triangle", "square", "pentagon", "hexagon", "heptagon", "octagon"]
    return shapes[num - 3];
}

// actual = getRegularConvexPolygonName(3);
// expected = "triangle";
// doTest()

// actual = getRegularConvexPolygonName(5);
// expected = "pentagon";
// doTest()

// actual = getRegularConvexPolygonName(7);
// expected = "heptagon";
// doTest()

//##########################################################################################################3
//中級演習

//1

/**
 * @param {1|2|3|4|5|6|7|8|9|10|11|12} ??? - 時 (12時間制)
 * @param {number} ??? - 分
 * @param {"AM"|"PM"} ??? - "AM" または "PM"
 * @returns {"morning"|"afternoon"|"evening"|"night"} 大まかな「時間帯」
 */
// ここにコードを書きましょう

function getTimeOfDay(hour, minute, aboutTime) {
    // const tmieDict = {}
    // let time
    // if (aboutTime === "AM") {
    //     time = new Date(`${hour}:${minute}:00`)
    // } else {
    //     time = new Date(`${hour + 12}:${minute}:00`)
    // }
    if (hour >= 4 && hour < 12 && aboutTime === "AM") {
        return "morning";
    } else if ((hour === 12 || (hour >= 1 && hour < 5)) && aboutTime === "PM") {
        return "afternoon";
    } else if (((hour >= 5 && hour < 8) || (hour === 8 && minute < 30)) && aboutTime === "PM") {
        return "evening";
    } else {
        return "night";
    }
}

// actual = getTimeOfDay(4, 0, "AM");
// expected = "morning";
// doTest()

// actual = getTimeOfDay(3, 59, "AM");
// expected = "night";
// doTest()

// actual = getTimeOfDay(7, 59, "PM");
// expected = "evening";
// doTest()

// actual = getTimeOfDay(8, 15, "PM");
// expected = "evening";
// doTest()

//##########################################################################################################3
//上級演習

//1

/**
 * @param {number} ??? - 半径
 * @returns {number} 与えられた半径の円の面積
 */
// ここにコードを書きましょう

function getAreaOfCircle(num) {
    return Math.PI * (num ** 2);
}

// actual = getAreaOfCircle(15);
// expected = 706.8583470577034;
// doTest()

//##########################################################################################################3
//ナイトメア

/**
 * @param {number} ??? - 数値。その名前がアルファベットの形で返ることになる
 * @returns {number} 与えられた数値をアルファベットで記した時の名前
 */
// ここにコードを書きましょう





function getNumberName(num) {
    const ty = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const teen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const underTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const len = String(num).length;
    let thousand = String(num).charAt(len - 4);
    let hundred = String(num).charAt(len - 3);
    let tenth = String(num).charAt(len - 2);
    let first = String(num).charAt(len - 1);

    if (len === 1) {
        return underTen[num];
    } else if (len === 2 && num < 20) {
        return teen[num - 10];
    } else if (num < 100) {
        if (first === "0") {
            return ty[tenth - 2];
        } else {
            return `${ty[tenth - 2]} ${underTen[first]}`;
        }
    } else if (num < 1000) {
        if (tenth === "0" && first === "0") { //100
            return `${underTen[hundred]} hundred`;
        } else if (tenth === "1" && first === "0") { //110
            return `${underTen[hundred]} hundred ${teen[first]}`;
        } else if (tenth !== "0" && first === "0") { //120
            return `${underTen[hundred]} hundred ${ty[tenth - 2]}`;
        } else if (tenth === "0" && first !== "0") { //101
            return `${underTen[hundred]} hundred ${underTen[first]}`;
        } else if (tenth === "1" && first !== "0") { //111
            return `${underTen[hundred]} hundred ${teen[first]}`;
        } else if (tenth !== "0" && first !== "0") { //121
            return `${underTen[hundred]} hundred ${ty[tenth - 2]} ${underTen[first]}`;
        }
    } else if (num < 10000) {
        if (hundred !== "0" && tenth === "1" && first !== "0") { //1111
            return `${underTen[thousand]} thousand ${underTen[hundred]} hundred ${teen[first]}`;
        } else if (hundred !== "0" && tenth !== "0" && first !== "0") { //1121
            return `${underTen[thousand]} thousand ${underTen[hundred]} hundred ${ty[tenth - 2]} ${underTen[first]}`;
        } else if (hundred !== "0" && tenth === "1" && first === "0") { //1110
            return `${underTen[thousand]} thousand ${underTen[hundred]} hundred ${teen[first]}`;
        } else if (hundred !== "0" && tenth !== "0" && first === "0") { //1120
            return `${underTen[thousand]} thousand ${underTen[hundred]} hundred ${ty[tenth - 2]}`;
        } else if (hundred !== "0" && tenth === "0" && first !== "0") { //1101
            return `${underTen[thousand]} thousand ${underTen[hundred]} hundred ${underTen[first]}`;
        } else if (hundred !== "0" && tenth === "0" && first === "0") { //1100
            return `${underTen[thousand]} thousand ${underTen[hundred]} hundred`;
        } else if (hundred === "0" && tenth === "1" && first !== "0") { //1011
            return `${underTen[thousand]} thousand ${teen[first]}`;
        } else if (hundred === "0" && tenth !== "0" && first !== "0") { //1021
            return `${underTen[thousand]} thousand ${ty[tenth - 2]} ${underTen[first]}`;
        } else if (hundred === "0" && tenth === "1" && first === "0") { //1010
            return `${underTen[thousand]} thousand ${teen[first]}`;
        } else if (hundred === "0" && tenth !== "0" && first === "0") { //1020
            return `${underTen[thousand]} thousand ${ty[tenth - 2]}`;
        } else if (hundred === "0" && tenth === "0" && first !== "0") { //1001
            return `${underTen[thousand]} thousand ${underTen[first]}`;
        } else if (hundred === "0" && tenth === "0" && first === "0") { //1000
            return `${underTen[thousand]} thousand`;
        }
    }
}

// actual = getNumberName(0);
// expected = "zero";
// doTest()

// actual = getNumberName(12);
// expected = "twelve";
// doTest()

// actual = getNumberName(22);
// expected = "twenty two";
// doTest()

// actual = getNumberName(100);
// expected = "one hundred";
// doTest()

// actual = getNumberName(101);
// expected = "one hundred one";
// doTest()

// actual = getNumberName(110);
// expected = "one hundred ten";
// doTest()

// actual = getNumberName(111);
// expected = "one hundred eleven";
// doTest()

// actual = getNumberName(135);
// expected = "one hundred thirty five";
// doTest()

// actual = getNumberName(150);
// expected = "one hundred fifty";
// doTest()

// actual = getNumberName(1111);
// expected = "one thousand one hundred eleven";
// doTest()

// actual = getNumberName(1110);
// expected = "one thousand one hundred ten";
// doTest()

// actual = getNumberName(1101);
// expected = "one thousand one hundred one";
// doTest()

// actual = getNumberName(1100);
// expected = "one thousand one hundred";
// doTest()

// actual = getNumberName(1011);
// expected = "one thousand eleven";
// doTest()

// actual = getNumberName(1010);
// expected = "one thousand ten";
// doTest()

// actual = getNumberName(1001);
// expected = "one thousand one";
// doTest()

// actual = getNumberName(1000);
// expected = "one thousand";
// doTest()

// actual = getNumberName(1200);
// expected = "one thousand two hundred";
// doTest()

// actual = getNumberName(1020);
// expected = "one thousand twenty";
// doTest()

// actual = getNumberName(1345);
// expected = "one thousand three hundred forty five";
// doTest()
