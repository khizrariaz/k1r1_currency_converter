#! /usr/bin/env node
import inquirer from "inquirer";

let c_value : {[key: string]: number} = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
}
let answer = await inquirer.prompt([{
        type: "list",
        name: "from",
        choices: ["PKR", "UAE", "USD"],
        message: "Converting from: "
},
{
        type: "list",
        name: "to",
        choices: ["PKR", "UAE", "USD"],
        message: "Converting to: "
},
{
        type: "number",
        name: "amount",
        message: "Enter your convertion amount:"
}]);

console.log(c_value [answer.to] / c_value [answer.from] * answer.amount);
