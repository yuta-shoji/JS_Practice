'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//ペア演習
//1
//次の関数は、どこが間違っているでしょう。コードを修正してください。

function addOne(1) {
    return 1;
}

test(addOne(5), 6);
test(addOne(50), 51);

//2
//次のコードは、A と B どちらのテストが正しいでしょうか。

function doSomething(value, action) {
    return action(value);
}

function greeting(name) {
    return `Hello ${name}`;
}

test(doSomething("Alex", greeting()), "Hello Alex"); // A
test(doSomething("Alex", greeting), "Hello Alex"); // B

//3
//何がコンソールに表示されるでしょうか。なぜ、その値が表示されるのでしょう。

let x = "Outside x";
function bar() {
    let x = "Inside x";
    return "This is bar!";
}

bar();
console.log(x);

//4
//プライベート変数とは何ですか。

//########################################################################################################
//基礎演習
//1
//下にクロージャが作られています。クロージャのスコープ内にあるのは、どの変数でしょうか。
//しっかりとコードを読んだら、関数宣言の下にあるコメントを 1 行ずつ外して、コンソールの表示を確認してください。
//各行のコードが何をしているか分かりますか。疑問があるときは、必ず質問してください。🙋

function createPasswordProtectedAccount(userChosenPassword) {
    const savedPassword = userChosenPassword;

    function checkPassword(passwordEntered) {
        if (savedPassword === passwordEntered) {
            console.log("正しいパスワードです。アクセスを許可します。");
        } else {
            console.log("パスワードが間違っています。アクセスできません。");
        }
    }

    return checkPassword;
}

const account = createPasswordProtectedAccount("Test1234"); // 引数に初期パスワードを入れる。
account("8skwob"); // 引数に間違ったパスワードを入れる => "パスワードが間違っています。アクセスできません。"
account("Test1234"); // 引数に正しいパスワードを入れる => "正しいパスワードです。アクセスを許可します。"

//2
//さあ、あなたの番です！以下のクロージャ を見てみましょう。