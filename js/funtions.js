/*********************************************************
 *      js functions for Premier League website
 *      author: Antonio González Mayorga
 *      version: 1.0
 *      date December 2023
 *      comment: functions for Premier League website
 * *******************************************************/


/******************** funtion topnav responsive  */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
} 

/***************** card *****************/
document.addEventListener('DOMContentLoaded', function () {
var largeImageModal = document.getElementById('largeImageModal');
var largeImageModalImg = document.getElementById('largeImageModalImg');

// Función para abrir el modal con la imagen especificada
window.openLargeImageModal = function (imgSrc) {
  largeImageModal.style.display = 'block';
  largeImageModalImg.src = imgSrc;
}

// Función para cerrar el modal
window.closeLargeImageModal = function () {
  largeImageModal.style.display = 'none';
}

// Cierra el modal al hacer clic fuera de la imagen
window.addEventListener('click', function (event) {
  if (event.target == largeImageModal) {
    closeLargeImageModal();
  }
});
});



/***************** código del modal del footer *****************/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
}
} 
