function hideAll(){
	let main = document.getElementById("main");
	main.style.display = "none";
	let tajmahal = document.getElementById("tajmahal");
	tajmahal.style.display = "none";
	let mur = document.getElementById("mur");
	mur.style.display = "none";
	let koloseum = document.getElementById("koloseum");
	koloseum.style.display = "none";
	let pomnik = document.getElementById("pomnik");
	pomnik.style.display = "none";
	let piramidy = document.getElementById("piramidy");
	piramidy.style.display = "none";
	let wieza = document.getElementById("wieza");
	wieza.style.display = "none";
	let partenon = document.getElementById("partenon");
	partenon.style.display = "none";
	let ankieta = document.getElementById("ankieta");
	ankieta.style.display = "none";
    let gallery = document.getElementById("gallery");
	gallery.style.display = "none";
	let menu = document.getElementById("menu");
	menu.style.display = "block";
}

function showTajmahal(){
	let main = document.getElementById("main");
	main.style.display = "block";
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let tajmahal = document.getElementById("tajmahal");
	tajmahal.style.display = "block";
}

function showMur(){
	let main = document.getElementById("main");
	main.style.display = "block";
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let mur = document.getElementById("mur");
	mur.style.display = "block";
}

function showKoloseum(){
	let main = document.getElementById("main");
	main.style.display = "block";
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let koloseum = document.getElementById("koloseum");
	koloseum.style.display = "block";
}

function showPomnik(){
	let main = document.getElementById("main");
	main.style.display = "block";
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let pomnik = document.getElementById("pomnik");
	pomnik.style.display = "block";
} 
function showPiramidy(){
	let main = document.getElementById("main");
	main.style.display = "block";
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let piramidy = document.getElementById("piramidy");
	piramidy.style.display = "block";
} 
function showWieza(){
	let main = document.getElementById("main");
	main.style.display = "block";
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let wieza = document.getElementById("wieza");
	wieza.style.display = "block";
} 
function showPartenon(){
	let main = document.getElementById("main");
	main.style.display = "block";
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let partenon = document.getElementById("partenon");
	partenon.style.display = "block";
} 
function showAnkieta(){
	hideAll();
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let ankieta = document.getElementById("ankieta");
	ankieta.style.display = "block";
} 
function showGallery(){
	hideAll();
	let menu = document.getElementById("menu");
	menu.style.display = "none";
	let ankieta = document.getElementById("gallety");
	gallery.style.display = "block";
}






// OTWIERANIE PODGLĄDU
function openModal() {
  document.getElementById('myModal').style.display = "block";
}

// ZAMYKANIE PODGLĄDU
function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// NASTEPNY/POPRZEDNI
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// ZMIANA ZDJ
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}