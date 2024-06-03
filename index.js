#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.magentaBright("=".repeat(55)));
console.log(chalk.italic.greenBright(`\t====🔴WELCOME TO AZAAN CALCULATOR🔴====`));
console.log(chalk.magentaBright("=".repeat(55)));
let condition = true;
while (condition) {
    let permission = await inquirer.prompt([
        { message: chalk.bgBlack("Press Y to start using Calculator or N to stop."),
            type: "confirm",
            name: "starting",
            default: "false",
        },
    ]);
    condition = permission.starting;
    if (condition == false) {
        break;
    }
    const answer = await inquirer.prompt([
        { message: "Enter First Number:", type: "number", name: "FirstNumber" },
        { message: "Enter Second Number:", type: "number", name: "SecondNumber" },
        {
            message: "Select one of the opertaors to perform the operation",
            type: "list",
            name: "operator",
            choices: ["Addition ➕", "Subtraction ➖", "Division ➗", "Multiplication ✖"],
        },
    ]);
    //conditional statements
    if (answer.operator === "Addition ➕") {
        console.log(answer.FirstNumber + answer.SecondNumber);
    }
    else if (answer.operator === "Subtraction ➖") {
        console.log(answer.FirstNumber - answer.SecondNumber);
    }
    else if (answer.operator === "Division ➗") {
        let divAns = answer.FirstNumber / answer.SecondNumber;
        console.log(divAns.toFixed(2));
    }
    else if (answer.operator === "Multiplication ✖") {
        console.log(answer.FirstNumber * answer.SecondNumber);
    }
    else {
        console.log("Plz select valid operator");
    }
}
