#!/usr/bin/env node
async function main() {
    const inquirer = await import("inquirer");
    let user = await inquirer.default.prompt([
        {
            type: "string",
            name: "cardholdername",
            message: "Welcome Shahbaz Ali",
        },
        {
            type: "number",
            name: "pinCode",
            message: "Enter your 4 digit pinCode",
        },
        {
            type: "list",
            name: "accountType",
            message: "Select your account type",
            choices: ["Current", "Saving"],
        },
        {
            type: "list",
            name: "transitionType",
            message: "Select your transition type",
            choices: ["cash", "withdrawal"],
        },
        {
            type: "list",
            name: "amount",
            message: "Select your amount",
            choices: [1000, 2000, 5000, 10000],
            when(user) {
                return user.transitionType === "cash";
            }
        },
        {
            type: "number",
            name: "amount",
            message: "Enter your amount",
            when(user) {
                return user.transitionType === "withdrawal";
            }
        }
    ]);
    // Final Slip
    if (user.pinCode) {
        const balance = Math.floor(Math.random() * 10000 + 1);
        console.log(balance);
        const enteramount = user.account;
        if (enteramount <= balance) {
            const remaining = balance - enteramount;
            console.log(`you have withdrawal rupees ${enteramount} and you have remaining balance ${remaining}`);
        }
    }
}
main(); // Call the asynchronous function to start the program
export {};
