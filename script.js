function createButtons (){
    const Allbuttons = document.querySelector(".buttons");
    const numericButtons = document.createElement("div");
    numericButtons.classList.add("allNumbers");
    for(let i=9; i > 0; i--){
        const numberButton = document.createElement("button");
        numberButton.classList.add("number", i);
        numberButton.textContent = i;
        numberButton.addEventListener("click", function giveBackNumber(){
            number = numberButton.textContent;
            displayNumber(number);
            curentArray.push(number);
        })
        numericButtons.appendChild(numberButton);
    }
    const dot = document.createElement("button");
    dot.classList.add("dot");
    dot.textContent = ".";
    dot.addEventListener("click", function giveBackNumber(){
        number = dot.textContent;
        displayNumber(number);
        curentArray.push(number);
    })
    numericButtons.appendChild(dot)
    const zero = document.createElement("button");
    zero.classList.add("zero");
    zero.textContent = 0;
    zero.addEventListener("click", function giveBackNumber(){
        number = zero.textContent;
        displayNumber(number);
        curentArray.push(number);
    })
    numericButtons.appendChild(zero)

    const otherButtons = document.createElement("div");
    otherButtons.classList.add("allOthers");

    const plus = document.createElement("button");
    plus.classList.add("other", "plus");
    plus.textContent = "+";
    plus.addEventListener("click", function clearAndMerge(){
        const display = document.querySelector(".display");
        oneNumber = display.textContent;
        display.textContent = "";
        realNumber = oneNumber.concat();
        finalArray.push(realNumber);
        operation = "+";
    })
    otherButtons.appendChild(plus)
    const minus = document.createElement("button");
    minus.classList.add("other", "minus");
    minus.textContent = "-";
    minus.addEventListener("click", function clearAndMerge(){
        const display = document.querySelector(".display");
        oneNumber = display.textContent;
        display.textContent = "";
        realNumber = oneNumber.concat();
        finalArray.push(realNumber);
        operation = "-";
    })
    otherButtons.appendChild(minus)
    const divide = document.createElement("button");
    divide.classList.add("other", "divide");
    divide.textContent = "/";
    divide.addEventListener("click", function clearAndMerge(){
        const display = document.querySelector(".display");
        oneNumber = display.textContent;
        display.textContent = "";
        realNumber = oneNumber.concat();
        finalArray.push(realNumber);
        operation = "/";
    })
    otherButtons.appendChild(divide)
    const multiply = document.createElement("button");
    multiply.classList.add("other", "multiply");
    multiply.textContent = "*";
    multiply.addEventListener("click", function clearAndMerge(){
        const display = document.querySelector(".display");
        oneNumber = display.textContent;
        display.textContent = "";
        realNumber = oneNumber.concat();
        finalArray.push(realNumber);
        operation = "*";
    })
    otherButtons.appendChild(multiply)
    const enter = document.createElement("button");
    enter.classList.add("other", "enter");
    enter.textContent = "ENTER";
    enter.addEventListener("click", function clearAndEnd(){
        const display = document.querySelector(".display");
        oneNumber = display.textContent
        display.textContent = ""
        realNumber = oneNumber.concat();
        finalArray.push(realNumber);
        result = hitEnter();
        display.textContent = result
        curentArray = []
        finalArray = []
        operation = "";
    })
    otherButtons.appendChild(enter)
    const clear = document.createElement("button");
    clear.classList.add("other", "clear");
    clear.textContent = "CLEAR";
    clear.addEventListener("click", function clearAndClean(){
        const display = document.querySelector(".display");
        oneNumber = display.textContent
        display.textContent = ""
        curentArray = []
        finalArray=[];
        operation="";
    })
    otherButtons.appendChild(clear)

    Allbuttons.appendChild(numericButtons)
    Allbuttons.appendChild(otherButtons)

}

function displayNumber(number){
    const display = document.querySelector(".display");
    current = display.textContent
    display.textContent = current+number
}

createButtons();

var curentArray = [];
var finalArray = [];
var operation;

function hitEnter(){
    number1 = +finalArray[0]
    number2 = +finalArray[1]
    if (operation == "+"){
        return number1+number2
    }else if(operation == "-"){
        return number1-number2
    }else if(operation == "/"){
        if(number2 == 0){
            return "HA!HA!"
        }else{
            return number1/number2
        }
    }else if(operation == "*"){
        return number1*number2
    }else{
        return "ERORR"
    }
}
