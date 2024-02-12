var myVariable = 42;
document.write("The data type of myVariable is: " + typeof myVariable);

document.write("Infinity:" + (2E310) + "<br>");
document.write("Negative Infinity: " + (-3E310) + "<br>");
document.write("Comparison result (10 < 2): " + (10 < 2) + "<br>");
X = 10;
Y = "10";
document.write("Variable comparison (X == Y):" + (X == Y) + "<br>");
document.write("Strict variable comparison (X === Y): " + (X === Y) + "<br>"); // Added === for strict comparison
console.log("Console log: " +(2 + 2));
document.write("Logical AND (10 > 5 && 10 < 15:" + (10 > 5 && 10 < 15) + "<br>");
document.write("Logical OR (2 > 10 || 10 > 2:" + (2 > 10 || 10 > 2) + "<br>");

document.write("Negation of true (Logical NOT): " + !true + "<br>"); // Added logical NOT (!)

var myString = "Hello";
var myInt = 5;
document.write("Combining string and int: " + (myString + myInt) + "<br>"); // Combining string with int