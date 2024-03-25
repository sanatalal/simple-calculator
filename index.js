#! /usr/bin/env node
import inquirer from "inquirer";
const result = await inquirer.prompt([
    { message: "Please enter your 1st Nunmber", type: "number", name: "firstNumber" },
    {
        message: "Please enter your 2nd Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Please select your desire operator to perform action",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
        ],
    },
]);
console.log(result);
// conditional Statement
//Addition condition
if (result.operator === "Addition") {
    console.log(result.firstNumber + result.secondNumber);
}
// Subtraction condition
else if (result.operator === "Subtraction") {
    console.log(result.firstNumber - result.secondNumber);
}
// Multiplication condition
else if (result.operator === "Multiplication") {
    console.log(result.firstNumber * result.secondNumber);
}
// Division Condition
else if (result.operator === "Division") {
    console.log(result.firstNumber / result.secondNumber);
}
console.log("Thankyou to perform some action.");
