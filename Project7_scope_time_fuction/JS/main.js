var X = 10;

function Add_numbers_1() {
	var Y = 20;
	document.write(40 + Y + "<br>");
}

function Add_numbers_2() {
	var Y = 10;
	document.write(Y + 100);
}

Add_numbers_1();
Add_numbers_2();

function getCurrentTime() {
    var now = new Date();
    return now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
}

function Time_function() {
	console.log("This is a time function");
	console.log("Current time: " + getCurrentTime());  // Intentional error
}

Time_function();

function Age_Function() {
	var Age = document.getElementById("Age").value;
	var Vote;

	if (Age >= 18) {
		Vote = "You are old enough to vote!";
	} else {
		Vote = "You are not old enough to vote!";
	}

	document.getElementById("How_old_are_you?").innerHTML = Vote;
}
