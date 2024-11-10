function createButtons (){
    const Allbuttons = document.querySelector(".buttons");
    const numericButtons = document.createElement("div");
    numericButtons.classList.add("allNumbers");
    for(let i=9; i > 0; i--){
        const numberButton = document.createElement("button");
        numberButton.classList.add("number", i);
        numberButton.textContent = i;
        numericButtons.appendChild(numberButton);
    }
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.textContent = ",";
    numericButtons.appendChild(dot)
    const zero = document.createElement("button");
    zero.classList.add("zero");
    zero.textContent = 0;
    numericButtons.appendChild(zero)

    const otherButtons = document.createElement("div");
    otherButtons.classList.add("allOthers");
    const plus = document.createElement("button");
    plus.classList.add("other", "plus");
    plus.textContent = "+";
    otherButtons.appendChild(plus)
    const minus = document.createElement("button");
    minus.classList.add("other", "minus");
    minus.textContent = "-";
    otherButtons.appendChild(minus)
    const divide = document.createElement("button");
    divide.classList.add("other", "divide");
    divide.textContent = "/";
    otherButtons.appendChild(divide)
    const multiply = document.createElement("button");
    multiply.classList.add("other", "multiply");
    multiply.textContent = "*";
    otherButtons.appendChild(multiply)
    const enter = document.createElement("button");
    enter.classList.add("other", "enter");
    enter.textContent = "ENTER";
    otherButtons.appendChild(enter)
    const clear = document.createElement("button");
    clear.classList.add("other", "clear");
    clear.textContent = "CLEAR";
    otherButtons.appendChild(clear)

    Allbuttons.appendChild(numericButtons)
    Allbuttons.appendChild(otherButtons)

}

createButtons()

