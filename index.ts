import inquirer from "inquirer";

while (true) {
  const answer = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter the first number: ",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter the second number: ",
    },
    {
      type: "list",
      name: "operator",
      message: "Select the operation from the below choices:",
      choices: [
        "Addition",
        "Subtraction",
        "Multiplication",
        "Division",
        "Modulus",
      ],
    },
  ]);

  switch (answer.operator) {
    case "Addition":
      console.log("The sum of two numbers: " + (answer.num1 + answer.num2));
      break;

    case "Subtraction":
      console.log(
        "The difference of two numbers: " + (answer.num1 - answer.num2)
      );
      break;

    case "Multiplication":
      console.log("The product of two numbers: " + answer.num1 * answer.num2);
      break;

    case "Division":
      console.log("The quotient of two numbers: " + answer.num1 / answer.num2);
      break;

    case "Remainder":
      console.log(
        "The remainder of two numbers is: " + (answer.num1 % answer.num2)
      );
      break;
  }

  let option = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "Do you want to again use the calculator?",
      choices: ["Yes", "No"],
    },
  ]);

  if (option.choice == "No") 
    break;
}
