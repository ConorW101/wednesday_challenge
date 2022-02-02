`use strict`
import * as DOM from './dom.js';


DOM.addBtn.onclick = () => addition(DOM.inputOne.value, DOM.inputTwo.value)
DOM.subBtn.onclick = () => subtraction(DOM.inputOne.value, DOM.inputTwo.value)
DOM.multiBtn.onclick = () => multiplication(DOM.inputOne.value, DOM.inputTwo.value)
DOM.divBtn.onclick = () => division(DOM.inputOne.value, DOM.inputTwo.value)
DOM.clearBtn.onclick = () => clearControl()
//DOM.equalsBtn =() => equals()

function addition(num1, num2)
{ 
    let result = 0;
    result = +num1 + +num2;
    addToList(num1 + " + " + num2 + " = " +  result)
}


function subtraction(num1, num2)
{ 
    let result = 0;
    result = +num1 - +num2;
    addToList(num1 + " - " + num2 + " = " +  result)
}

function multiplication(num1, num2)
{ 
    let result = 0;
    result = +num1 * +num2;
    addToList(num1 + " x " + num2 + " = " +  result)
}

function division(num1, num2)
{ 
    let result = 0;
    result = +num1 / +num2;
    addToList(num1 + " / " + num2 + " = " +  result)
}



function addToList(result) {
    let child = document.createElement(`li`);

    child.innerHTML = result;
    DOM.outputLst.appendChild(child);

}


function clearControl() {
    DOM.inputTwo.value = ""
    DOM.inputOne.value = ""
    document.getElementById("list_output").innerHTML = "";
}

//function equals(result){
    
//        let child = document.createElement(`li`);
    
//        child.innerHTML = result;
//        DOM.outputLst.appendChild(child);
    
//    }




