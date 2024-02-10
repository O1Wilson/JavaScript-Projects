document.addEventListener('DOMContentLoaded', function() {
	
	var buttonElement = document.getElementById('myButton');
	
	buttonElement.addEventListener('click', function() {
		
		paragraphElement.textContent = 'Button clicked!';
		
		function myFunction() {
			var sentence = "I am learning";
			sentence += a lot from this book!";
			document.getElementById("Concatenate").innerHTML = sentence;
		}
  });
});