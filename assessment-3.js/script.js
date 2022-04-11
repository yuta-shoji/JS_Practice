//自己評価：5

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED!!");
    } else {
        console.error("Keep trying...");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}

//################################################################################################
//1
function doTheThing(array) {
    return array.filter(num => num ** 2 <= 25).map(num => num ** 2);
}

test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);
test(doTheThing([1, 2, 3, 3.5, 4, 4.5, 5, 6, 7, 8]), [1, 4, 9, 12.25, 16, 20.25, 25]);

//################################################################################################
//2
let refrigerator = [];

function putItemInRefrigerator(drink) {
    return refrigerator.push(drink);
}

function removeItemFromRefrigerator(drink) {
    return refrigerator = refrigerator.filter(elem => elem !== drink);
}

function getItemsInRefrigerator() {
    return refrigerator;
}

test(getItemsInRefrigerator(), []);

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);

putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

putItemInRefrigerator("Beer");
test(getItemsInRefrigerator(), ["juice", "Beer"]);

putItemInRefrigerator("Tee");
test(getItemsInRefrigerator(), ["juice", "Beer", "Tee"]);

removeItemFromRefrigerator("Tee");
test(getItemsInRefrigerator(), ["juice", "Beer"]);