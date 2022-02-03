`use strict`
import * as DOM from './dom.js';


let calculation = {

}


DOM.addBtn.onclick = () => addition(DOM.inputOne.value, DOM.inputTwo.value)
DOM.subBtn.onclick = () => subtraction(DOM.inputOne.value, DOM.inputTwo.value)
DOM.multiBtn.onclick = () => multiplication(DOM.inputOne.value, DOM.inputTwo.value)
DOM.divBtn.onclick = () => division(DOM.inputOne.value, DOM.inputTwo.value)
DOM.clearBtn.onclick = () => clearControl()
DOM.equalsBtn.onclick = () => addToList(calculation.inputOne, calculation.inputTwo, calculation.type, calculation.result)



function addition(num1, num2)
{ 
    calculation.inputOne = num1;
    calculation.inputTwo = num2;
    calculation.result = +num1 + +num2;
    calculation.type = '+';
}


function subtraction(num1, num2)
{ 
    calculation.inputOne = num1;
    calculation.inputTwo = num2;
    calculation.result = +num1 - +num2;
    calculation.type = '-';
}

function multiplication(num1, num2)
{ 
    calculation.inputOne = num1;
    calculation.inputTwo = num2;
    calculation.result = +num1 * +num2;
    calculation.type = '*';
}

function division(num1, num2)
{ 
    calculation.inputOne = num1;
    calculation.inputTwo = num2;
    calculation.result = +num1 / +num2;
    calculation.type = '/';
}



function addToList(num1, num2, op, result) {
    let child = document.createElement(`li`);
    child.innerHTML = num1 + "" + op + "" + num2 + " = " + result;
    child.classList.add(`list-group-item`)
    DOM.outputLst.appendChild(child);

}


function clearControl() {
    DOM.inputTwo.value = ""
    DOM.inputOne.value = ""
    document.getElementById("list_output").innerHTML = "";
}


   
