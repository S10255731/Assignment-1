function showLevel(evt, c) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all tab-content elements and hide them. If their second class matches the filter parameter, show
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        var ele = tabcontent[i];
        ele.style.display = "none"; //hide
        if (ele.className.split(" ")[1] == c){
            ele.style.display = "block"; //show
        }

    }

    if (evt != "load"){ //do not bother setting actives when called onLoad
        //get all buttons
        row = document.getElementById("level-row");
        tablinks = row.getElementsByTagName("button");
        //remove active from all buttons
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("active", "");
        }
    
        //add an "active" class to the button that opened the tab
        evt.currentTarget.className += "active";
    }
  }