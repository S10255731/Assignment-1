
//when button clicked, hide all elements, if tag matches the secondary class, show

//initalise global variables
var f1 = "" //filter 1 (attribute)
var f2 = "" //filter 2 (search bar)
var f3 = [] //filter 3 (roles)



//removes a specified element from an array
function remove(arr, value) {
 
  return arr.filter(function (x) {
      return x != value
  });

}

//the main logic of the filter
//show the heroes that matches all 3 filters
function filterSelection(){
  var area = document.getElementById("heroes-area");
  var items = area.getElementsByClassName('heroes');
  for (var i = 0; i < items.length; i++) {
    var ele = items[i]
    var name = ele.getElementsByTagName("label")[0].innerText; //get name of hero
    var roles = ele.className.split(" ").slice(2) //get roles of hero
    var found = f3.every(x => roles.includes(x)) //check if all selected roles are a subset of the hero's roles
    if (f3.length == 0){ //if no roles are selected, invalidate the role check
      found = true
    }
    ele.style.display = "none"; //hides element
    //checks if the hero matches all 3 conditions
    //condition 1: if the hero matches the attribute
    //condition 2: if search bar input is a substring of the hero's name 
    //condition 3: if the hero's roles include the selected ones
    if (ele.className.indexOf(f1) > -1 && name.toLowerCase().indexOf(f2) > -1 && found){ 
      ele.style.display = "flex" //show element
    }
  }
}

function attributeFilter(c) {
  //set first filter and call filter
  f1 = c
  filterSelection()
}

function search() {
  // Get search bar input, set it to second filter and call filter
  var searchBar = document.getElementById('search-bar')
  var input = searchBar.value.toLowerCase();
  f2 = input
  filterSelection()
}

//this function deals with the filtering of roles
//if role is selected -> remove role from filter and make button non-active
//if role is not selected -> add role to filter and set button to active
function roleFilter(c) {
  var btn = document.getElementById(c)
  if (f3.includes(c)){
    //deselect and remove filter
    btn.className = btn.className.replace(" active", "") //make button unactive
    f3 = remove(f3, c)
  }else{
    btn.className += " active" //make button active
    f3.push(c)
  }
  //call filter
  filterSelection()
}




 //things to run when page loads
function load(){
  var abtnContainer = document.getElementById("attribute-button-area")
  var abtns = abtnContainer.getElementsByClassName("attribute-button")
  filterSelection()
  //setup event listeners to give buttons an active effect
  //when button clicked, search for active button, remove active class and give it to the button clicked
  for (var i = 0; i < abtns.length; i++) {
    abtns[i].addEventListener("click", function() {
      var acurrent = abtnContainer.getElementsByClassName("active")
      acurrent[0].className = acurrent[0].className.replace(" active", "")
      this.className += " active"
    })
  }




}


