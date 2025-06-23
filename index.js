// Write your code here!
// Remove the 'main' element
const main = document.getElementById("main");
main.remove();

// Create a new h1 element
const newHeader = document.createElement("h1");

// Set its id to 'victory'
newHeader.id = "victory";

// Set its text content
newHeader.textContent = "Alexia is the champion";

// Append it to the body (so it shows up in the DOM)
document.body.append(newHeader);