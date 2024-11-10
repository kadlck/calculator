function createButtons (){
    const Allbuttons = document.querySelector(".buttons");
    const numericButtons = document.createElement("div");
    numericButtons.classList.add("allNumbers");
    for(let i=9; i >= 0; i--){
        const numberButton = document.createElement("button");
        numberButton.classList.add("number", i);
        numberButton.textContent = i;
        numericButtons.appendChild(numberButton);
    }
    Allbuttons.appendChild(numericButtons)
}

createButtons()

