#! /usr/bin/env node
import inquirer from "inquirer";

let converstion = {
"PKR": {
    "USD": 0.0044,
    "GBP": 0.0037,
    "PKR": 1
},
"GBP": {
    "USD": 1.21,
    "PKR" : 271.79,
    "GBP": 1
},
"USD": {
    "PKR": 225.50,
    "GBP": 0.83,
    "USD": 1
}
}

const answer: {
    from: "PKR"|"GBP" | "USD",
    to: "PKR"|"GBP" | "USD",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your currency:"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "Select your convertion currency:"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your convertion amount:"
    }
]);

const { from, to, amount } = answer;
if (from && to && amount) { 
   let result = converstion[from][to] * amount;
   console.log(`Your convertion from ${from} to ${to} is ${result}`);
}else {
    console.log(" Invalid inputs");
}
