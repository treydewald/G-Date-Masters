// Get the modal
var modal = document.getElementById("newUserModel");

// Get the button that opens the modal
var btn = document.getElementById("newUserBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
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

function closeModel() {
  modal.style.display = "none";
}

function devOnlyItems() {
  var x = document.getElementsbyClassName("devOnly");
  x.forEach(function(item, index){
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  });
}