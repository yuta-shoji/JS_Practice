function consoler() {
    return console.log("わけわかめ");
}

const events = document.getElementsByClassName("target")[0];
events.addEventListener("click", consoler)