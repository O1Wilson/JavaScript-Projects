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
	var Time = new Date().getHours();
	var Reply;
	if (Time <12 == Time > 0) {
		Reply = 'It is morning time!';
	}
	else if (Time >= 12 == Time <18) {
		Reply = "It is afternoon.";
	}
	else {
		Reply = "It is evening time.";
	}
	document.getElementById('Time_of_day').innerHTML = Reply;
}
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