"use strict";
// 1行目に記載している 'use strict' は削除しないでください

//wormUp
//ペアワークする中で良かった人推薦
//seidaさん
//ナビゲーターの時、丁寧に進めてくれる。進行しながら便利ツールを教えてくれる。
//ドライバーの時、フォローしてくれる。

//domの世界

//機能が多い！！
// 1.関数の名前から何をしているのか汲み取る
// 2.実行して仮説を確かめる。
// 3.ドキュメントも調べて確かめる。

//##########################################################################################################
//研究問題
//1
// console.log(document.getElementsByTagName("p"));

// console.log(document.getElementsByClassName("inner-paragraph"));

// console.log(document.getElementById("main-header"));

//###########################################################################################################
//ペア演習
// eloquentjavascript.net をブラウザで開いてください。
// デベロッパコンソールを開いてください。
// コンソール上で JavaScript を使って <h2> 要素を作成してください。
// const elem = document.createElement("h2");
// パートナーとあなたの名前を、その要素内のテキストに記述してください。
// elem.innerText = "Yuta_Shoji";
// 作成した <h2> 要素を、ページ内の 1 つ目の <h1> 要素に追加（append）してみましょう。
// document.getElementsByTagName("h1")[0].append(elem);

//###########################################################################################################
//演習
//1

// function strUpper(str) {
//   for (const node of document.getElementsByClassName(str)) {
//     let str = node.innerText.toUpperCase()
//     node.innerText = str;
//   }
// }

// strUpper("inner-paragraph");

//中級

// const element = document.getElementById("main-header");
// element.setAttribute("style", "color : red");

//応用
// element.addEventListener("click", () => window.alert("Hello!"));
