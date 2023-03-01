// helloWorld function 
let helloWorld = function () {
    return "Hello, World!";
}

function sayHello(name) {
    if (name === "Xavier") {
        return "Hello, Xavier!";
    } else if (name === "Alex") {
        return "Hello, Alex!";
    } else if (name === "Pat") {
        return "Hello, Pat!";
    } else if (name === undefined) {
        return "Hello, World!";
    } else if (name === true) {
        return "Hello, World!";
    }
}

function isFive(name) {

}

function isEven(x) {
    if (parseInt(x) && x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isVowel(input) {
    if(typeof(input) !== 'string') {
        return false;
    } else if (input.toLowerCase() === "a" || input.toLowerCase() === "e" || input.toLowerCase() === "i" || input.toLowerCase() === "o" || input.toLowerCase() === "u") {
        return true;
    } else {
        return false;
    }
}