let age = window.prompt("Enter your current age: ");
let maxAge = window.prompt("Enter your maxiumum age: ");
let numPerDay = window.prompt("How many will you eat/drink a day?: ");
var totalRequired = (numPerDay * 365) * (maxAge - age);

document.write("You will need ${totalRequired} to last you until the ripe old age of ${maxAge});