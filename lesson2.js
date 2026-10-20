var prince = 50;
var itemName = "cup";
var messageToPrint = "the price of your "+itemName+" is "+prince;

console.log(messageToPrint);

var anotherMessageToPrint = `the price of your ${itemName} is ${prince}`;
console.log(anotherMessageToPrint);