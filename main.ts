#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let myPin = 1234; // Dollar

let exit = false;
while (!exit){

let pinAnswer = await inquirer.prompt(
    [
       {
name : "pin",
message : "enter your pin",
type : "number"
       }
    ]
)

if (pinAnswer.pin === myPin) {
console.log("correct pin code!!!");
}
else {
    console.log("incorrect pin number");
    break;
}

let operationAnswer = await inquirer.prompt(
{
name : "operation",
message : "please select option",
type : "list",
choices: ["withdraw", "check balance", "exit"]

}
);
console.log(operationAnswer);


 
if (operationAnswer.operation === "withdraw") {
    let amountAns = await inquirer.prompt([
{
name : "amount",
message : "enter your amount",
type : "number"
} 
]);
          
   if (myBalance >= amountAns.amount){
   myBalance -= amountAns.amount;
   console.log(`Your current balance is: ${myBalance}`);
   }else
    {console.log("Insufficient Balance")
    };

    } else if (operationAnswer.operation === "check balance") {
        console.log(`Your current balance is: ${myBalance}`)}
    else if (operationAnswer.operation === "exit"){
        break;
        
      }
      
        
    
}  

