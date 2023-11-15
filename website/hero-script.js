
//when button clicked, hide all elements, if tag matches the secondary class, show
function filterSelection(c) {
  var items = document.getElementsByClassName("heroes");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (var i = 0; i < items.length; i++) {
    var ele = items[i]
    ele.className = ele.className.replace(" show-heroes","") //hides element
    if (ele.className.indexOf(c) > -1){ //if elements have a class that matches the filter, show element
      ele.className += " " + "show-heroes"; //apply the show-heroes class which makes them visible
    }
  }
}

 //things to run when page loads
function load(){
  filterSelection("all") //display all heroes
  var btnContainer = document.getElementById("attribute-button-area");
  var btns = btnContainer.getElementsByClassName("attribute-button");
  //setup event listeners to give buttons an active effect
  //when button clicked, search for active button, remove active class and give it to the button clicked
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = btnContainer.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }

}


