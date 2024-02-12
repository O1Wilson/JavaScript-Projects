document.addEventListener("DOMContentLoaded", function() {

function countdown() {
	var seconds = document.getElementById("seconds").value;
	
	function tick() {
		seconds = seconds - 1;
		timer.innerHTML = seconds;
		var time = setTimeout(tick, 1000);
		if (seconds == -1) {
			alert("Time's up!");
			clearTimeout(time);
			timer.innerHTML = "";
		}
	}
	tick();
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

showSlides(1);

document.querySelector(".prev").addEventListener("click", function () {
    plusSlides(-1);
  });

  document.querySelector(".next").addEventListener("click", function () {
    plusSlides(1);
  });

  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function () {
      currentSlide(i + 1);
    });
  }
});