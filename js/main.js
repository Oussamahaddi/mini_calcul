
let firstInp = document.querySelector("#number_one");
let secondInp = document.querySelector("#number_two");
let operator = document.querySelector("#operator");
let calcBtn = document.querySelector("button");

let result = document.querySelector(".result");
let calc;

let prevent = ["e", "-", "+", "E"];

function eviter(e) {
    if (prevent.includes(e.key)) {
        e.preventDefault();
    }
}

firstInp.addEventListener("keydown", e => {
    eviter(e);
});
secondInp.addEventListener("keydown", e => {
    eviter(e);
});


calcBtn.addEventListener("click", _ => {

    let a = parseInt(firstInp.value);
    let b = parseInt(secondInp.value);

    switch (operator.value) {
        case "+" :
            if (typeof a === "string" && typeof b === "string") {
                result.innerHTML = "NaN"
            } else {
                result.textContent = `= ${a + b}`;
            }
            break;
        case "-" :
            if (typeof a === "string" && typeof b === "string") {
                result.innerHTML = "NaN"
            } else {
                result.textContent = `= ${a - b}`;
            }
            break;
        case "*" : 
            if (typeof a === "string" && typeof b === "string") {
                result.innerHTML = "NaN"
            } else {
                result.textContent = `= ${a * b}`;
            }
            break;
        case "/" :
            if (b === 0) {
                result.textContent = "Impossible";
            } else {
                result.textContent = `= ${a / b}`;
            }
            break;
        default :
            result.innerHTML = "NaN";
    }
});
