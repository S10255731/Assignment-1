//adds a scroll transition to its element
//when scrolled to, it will fade in and move upwards
//this transition should only happen once (if the user scrolls back to the element it will not execute the transition again)
function reveal() {
    var reveals = document.getElementsByClassName("reveal"); //get all containers with reveal class, which indicates they want to have the transition applied

    for (var i = 0; i < reveals.length; i++) { //loop through every container
        var ele = reveals[i]
        var wh = window.innerHeight; //get window height
        var y = ele.getBoundingClientRect().top; //get y value of the element
        var elementVisible = 80; //this is the upward travel distance of the transition

        if (y < wh - elementVisible) { //check if user has scrolled to the element 
            ele.classList.add("active");; //apply transition
        }
    }
}

window.addEventListener("scroll", reveal); //call function everytime scrolling happens