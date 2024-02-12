document.addEventListener('DOMContentLoaded', function() {
    const mathParagraph = document.getElementById('Math');

    mathParagraph.addEventListener('click', function() {
        alert('You clicked the math paragraph!');
    });

    function subtraction_function() {
        var Subtraction = 5 - 2;
        document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
    }

    function multiplication() {
        var simple_Math = 6 * 8;
        document.getElementById("Math").innerHTML = "6 x 8 = " + simple_Math;
    }

    function division() {
        var simple_Math = 48 / 6;
        document.getElementById("Math").innerHTML = "48 / 6 = " + simple_Math;
    }

    function more_Math() {
        var simple_Math = (1 + 2) * 10 / 2 - 5;
        document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
    }

    function modulus_Operator() {
        var simple_Math = 25 % 6;
        document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
    }

    function negation_Operator() {
        var x = 10;
        document.getElementById("Math").innerHTML = -x;
    }

    function Time_function() {
        var currentTime = new Date();
        console.log("Current time: " + currentTime);
    }

    var X = 5;
    X++;
    document.write(X);

    var Y = 5.25;
    Y--;
    document.write(Y);

    // Calling the function without the error
    Time_function();
});
