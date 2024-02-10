var X = 10;
function Add_numbers_1() {
	document.write(20 + X + "<br>");
}
function Add_numbers_2() {
	document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

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

function Age_Function() {
	Age = document.getElementById("Age").value;
	if (Age >= 18) {
		Vote = "You are old enough to vote!";
	}
	else {
		Vote = "You are not old enough to vote!";
	}
	document.getElementById("How_old_are_you?").innerHTML = Vote;
}