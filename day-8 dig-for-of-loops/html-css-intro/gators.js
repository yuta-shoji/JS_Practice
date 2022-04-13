function gators() {
    let num = document.getElementById("number").value;
    for (let i = 0; i < num; i++) {
        sea.innerText += "🐊";
    }
}

const sea = document.getElementById("sea");
const btn = document.getElementById("btn");
btn.addEventListener("click", gators);