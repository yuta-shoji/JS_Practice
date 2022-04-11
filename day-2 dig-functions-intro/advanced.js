// console.log("hello advanced.js!");

//下記に guessMyNumber と randomNumber というコードがあります。これらのコードを読んで、コンソールで関数のテストを行いましょう。
//guess は推測する、あてるという意味です。

const upperBound = 5
const x = randomNumber(upperBound)
console.log(x)

function guessMyNumber(n) {
    console.log(n)
    if (n > upperBound) {
        return "Please try a number between 0 and 6.";
    } else if (n === x) {
        return "You guessed my number!";
    } else {
        return "違います！正しい数は:" + x + "でした！";
    }
}

function randomNumber(n) {
    return Math.floor(Math.random() * (n + 1));
}

console.log(guessMyNumber(3))

function test(x, y) {
    return x + y
}

console.log(test(1, 2, 3))