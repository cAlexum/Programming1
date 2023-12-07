let counter = 0;

let buttons = document.querySelectorAll("button");
let value = document.getElementById("number");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.innerText == "Decrease") {
            counter--;
        }
        else if (button.innerText == "Increase") {
            counter++;
        }
        else {
            counter = 0;
        }

        if (counter >0) {
            value.style.color = "green"
        }
        else if (counter == 0) {
            value.style.color = "black"
        }
        else {value.style.color = "red"}
        value.innerText = counter;
    })
})