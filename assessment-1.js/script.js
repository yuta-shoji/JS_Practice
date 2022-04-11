'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let actual
let expected

function doTest() {
    if (actual === expected) {
        console.log("Pass!!");
    } else {
        console.error("error!!");
        console.group("error↓");
        console.log('actual: ', actual);
        console.log('expected: ', expected);
        console.groupEnd();
    }
}

//################################################################################################
//1

function greeting(name) {
    return `Hello, ${name}!`;
}

actual = greeting("Kana");
expected = "Hello, Kana!";
doTest()

actual = greeting("Kimiko");
expected = "Hello, Kimiko!";
doTest()

console.log(greeting("Kana")); // => "Hello, Kana!"
console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

//################################################################################################
//2

function average(num1, num2) {
    return (num1 + num2) / 2;
}

actual = average(3, 5);
expected = 4;
doTest();

actual = average(7, 16);
expected = 11.5;
doTest();

actual = average(-2, 5);
expected = 1.5;
doTest();

console.log(average(3, 5)); // => 4
console.log(average(7, 16)); // => 11.5
console.log(average(-2, 5)); // => 1.5

//################################################################################################
//3

/**
* @param {"Spring"|"Summer"|"Fall"|"Winter"} ??? - 現在の季節
* @param {"warm"|"hot"|"cool"|"cold"} ??? - 現在の気温
* @returns {"The temperature is normal for the season."|"The temperature is unusual for the season."} 季節や気温に応じて変わる、気候に関する説明
*/

function describeTheWeather(season, temperature) {
    let seasonDict = {"Spring": "warm", "Summer": "hot", "Fall": "cool", "Winter": "cold"};
    if (seasonDict[season] === temperature ) {
        return "The temperature is normal for the season.";
    } else {
        return "The temperature is unusual for the season.";
    }
}

actual = describeTheWeather("Spring", "warm");
expected = "The temperature is normal for the season.";
doTest();

actual = describeTheWeather("Spring", "cold");
expected = "The temperature is unusual for the season.";
doTest();

  // さらにテストを書いて、コードが正しいことを確認してください
actual = describeTheWeather("Fall", "cool");
expected = "The temperature is normal for the season.";
doTest();

actual = describeTheWeather("Winter", "warm");
expected = "The temperature is unusual for the season.";
doTest();

console.log(describeTheWeather("Spring", "warm")); // => "The temperature is normal for the season.";
console.log(describeTheWeather("Spring", "cold")); // => "The temperature is unusual for the season.";
console.log(describeTheWeather("Fall", "cool")); // => "The temperature is unusual for the season.";
console.log(describeTheWeather("Winter", "warm")); // => "The temperature is normal for the season.";
