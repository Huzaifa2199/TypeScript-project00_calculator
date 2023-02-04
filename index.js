#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first number"
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your second number"
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"],
        message: "Kindly select operator"
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    else if (operator === "*") {
        result = numberOne * numberTwo;
    }
    else if (operator === "/") {
        result = numberOne / numberTwo;
    }
    console.log("your result is :", result);
}
else {
    console.log("Kindly enter valid input");
}
