


/* CAROUSEL FOR ALL*/
	var slideIndex = 0;
	showSlides();

	function showSlides() {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
  
	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	  }

	  slideIndex++;
	  
	  if (slideIndex > slides.length) {slideIndex = 1}
	  slides[slideIndex-1].style.display = "block";
	  setTimeout(showSlides, 2000); // Change image every 2 seconds
	  }




/* BUTTON CONDITION FOR ADOPT*/
function adoptbuttn{
const button = document.querySelector('adoptbutton');

/* if status is on process & adopted then button.disabled = true
	else button.disabled =false 

	OR
	
	if status == available then button.disabled = false;
	else button.disabled =true */

	if status == available
	button.disabled = false;
	button.disabled = true;
}

