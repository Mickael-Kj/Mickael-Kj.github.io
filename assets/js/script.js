$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

// MODAL SKATE VIDEO

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
let skate = document.getElementById("skate");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
skate.onclick = function() {
  if (modal.style.display == "none"){
  modal.style.display = "block";
  }
  else {
	modal.style.display = "none";
  }
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


// MODAL SKATE VIDEO


// Get the modal
var modalP = document.getElementById("modalP");

// Get the button that opens the modal
let phi = document.getElementById("phi");

// Get the <span> element that closes the modal
var spanP = document.getElementsByClassName("closeP")[0];

// When the user clicks the button, open the modal 
phi.onclick = function() {
if (modalP.style.display == "none"){
	modalP.style.display = "block";
	}
	else {
	  modalP.style.display = "none";
	}
  }
  

// When the user clicks on <span> (x), close the modal
spanP.onclick = function() {
  modalP.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalP) {
    modalP.style.display = "none";
  }
}