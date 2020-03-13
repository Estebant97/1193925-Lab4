let registry = "";
let op = [];
let pointer = 0;

document.getElementsByClassName("resetButton")[0].addEventListener("click", (event) => {
    //prevents page from reloading
    event.preventDefault();
    document.getElementsByClassName("inputNumber")[0].value = "";
    document.getElementById("resultValue").value = "";
});

document.getElementsByClassName("equalButton")[0].addEventListener("click", (event) => {
    //prevents page from reloading
    event.preventDefault();
    // took the idea from an app made for iOS development course using regex with Swift
    if (/[0-9]*[.]?[0-9]+/.test(Number(document.getElementsByClassName("inputNumber")[0].value))
            && document.getElementsByClassName("inputNumber")[0].value != "") {
        op[pointer] = document.getElementsByClassName("inputNumber")[0].value;
        op = op.join(" ");
        registry = `${op} = ${eval(op)}`;
        document.getElementById("resultValue").value = eval(op);
        document.getElementById("logInformation").value += `${registry}\n`
        pointer = 0;
        op = [];    
    } else {
        alert("Provide a valid number");
    }
    document.getElementsByClassName("inputNumber")[0].value = "";
});

document.getElementById("addButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.getElementById("substractButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.getElementById("multiplicationButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.getElementById("divisionButton").addEventListener("click", (event) => {
    handleOpClick(event);
});

document.addEventListener("keydown", (event) => {
    // took the idea from an app made for iOS development course using regex with Swift
    if (/[0-9]/.test(event.key) || event.key == ".") {
        if (event.key == "." && document.getElementsByClassName("inputNumber")[0].value == "") {
            document.getElementsByClassName("inputNumber")[0].value += "0";
        }
        document.getElementsByClassName("inputNumber")[0].value += event.key;
    }
    //operator control with keys
    if (event.key == "=" || event.key == "Enter") {
        document.getElementsByClassName("equalButton")[0].click();
    }
    if (event.key == "+") {
        document.getElementById("addButton").click();
    }
    if (event.key == "-") {
        document.getElementById("substractButton").click();
    }
    if (event.key == "*") {
        document.getElementById("multiplicationButton").click();
    }
    if (event.key == "/") {
        document.getElementById("divisionButton").click();
    }
    if (event.key == "Backspace") {
        if (document.getElementsByClassName("inputNumber")[0].value != "") {
            const newStr = document.getElementsByClassName("inputNumber")[0].value.slice(0, -1);
            document.getElementsByClassName("inputNumber")[0].value = newStr;
        }
    }
});

function handleOpClick(event) {
    //prevents page from reloading
    event.preventDefault();
    // took the idea from an app made for iOS development course using regex with Swift
    if (/[0-9]*[.]?[0-9]+/.test(Number(document.getElementsByClassName("inputNumber")[0].value))
    && document.getElementsByClassName("inputNumber")[0].value != "") {
        op[pointer++] = document.getElementsByClassName("inputNumber")[0].value;
        op[pointer++] = event.target.innerText;
    } else {
        alert("Enter a valid number");
    }
    document.getElementsByClassName("inputNumber")[0].value = "";
}