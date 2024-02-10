var userString = prompt("Enter a custom string:");

if (userString !== null && userString !== "") {
  var Sent1 = "This is the beginning of the string";
  var Sent2 = " and this is the end of the string";

  var concatenatedString = Sent1 + userString + Sent2;

  window.alert("Concatenated String: " + concatenatedString);

  var paragraph = document.createElement("p");
  paragraph.textContent = "Concatenated String: " + concatenatedString;
  document.body.appendChild(paragraph);

  var button = document.createElement("button");
  button.textContent = "Concatenate Again";
  button.addEventListener("click", function() {
    var newUserString = prompt("Enter a new custom string:");

    if (newUserString !== null && newUserString !== "") {

      var newConcatenatedString = Sent1 + newUserString + Sent2;

      window.alert("New Concatenated String: " + newConcatenatedString);

      paragraph.textContent = "New Concatenated String: " + newConcatenatedString;
    }
  });

  // Append the button to the body
  document.body.appendChild(button);
} else {
  // If the user cancels the prompt or enters an empty string, display a message
  window.alert("No custom string entered. Run the script again and enter a valid string.");
}
