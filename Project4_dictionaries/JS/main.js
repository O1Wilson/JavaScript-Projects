var myDictionary = {
    key1: "Value 1",
    key2: "Value 2",
    key3: "Value 3",
};
delete myDictionary.key3

function displayDictionaryValue() {
    var keyToDisplay = "key2"; 

    var valueToDisplay = myDictionary[keyToDisplay];

    document.getElementById("Dictionary").innerHTML = "The value for " + keyToDisplay + " is: " + valueToDisplay;
	document.getElementById("Dictionary").innerHTML = myDictionary.key3
}
