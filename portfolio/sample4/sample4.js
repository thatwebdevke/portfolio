var menuitems = document.getElementById("menuitems");
            
function menuOpen(){
    menuitems.style.right = "0";
}
function menuClose(){
    menuitems.style.right = "-22vw";
}
function menuCrash(){
    menuitems.style.right = "-100%";
}

var tablink = document.getElementsByClassName("tab");
var tabcontent = document.getElementsByClassName("container-bruv");
function openTab(tabname){
    for(tablinks of tablink){
        tablinks.classList.remove("active")
        tablinks.style.background = "transparent";
    }
    for(tabcontents of tabcontent){
        tabcontents.classList.remove("active")
    }
    event.currentTarget.classList.add("active")
    event.currentTarget.style.background = "#ff3636";
    document.getElementById(tabname).classList.add("active")
}