import PromptSync from "prompt-sync";
import Stack from "./Stack.js";

const prompt = PromptSync();
const stack = new Stack();

let exit = false;
while (!exit) {
  const userChoice = prompt(`Please select one of the below choices
        1. Press 1 to add a new domain
        2. Press 2 to see the current domain
        3. Press 3 to go back
        4. Press 4 exit
        `);

  const userChoiceNumber = parseInt(userChoice);
  console.log(userChoiceNumber);

  switch (userChoiceNumber) {
    case 1:
      const domainName = prompt("Please provide the new domain: ");
      stack.push(domainName);
      console.log(domainName + " is now open");
      break;
    case 2:
      const currentDomain = stack.peek();
      console.log("Current domain is", currentDomain);
      break;
    case 3:
      stack.pop();
      console.log("Went back to domain", stack.peek());
      break;
    case 4:
      exit = true;
      break;
  }
}
