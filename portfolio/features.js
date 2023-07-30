var tablink = document.getElementsByClassName("tab-link");
var tabcontent = document.getElementsByClassName("tab-content");
function OpenTab(tabname){
    for(tablinks of tablink){
        tablinks.classList.remove("active-link")
    }
    for(tabcontents of tabcontent){
        tabcontents.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

var menuitems = document.getElementById("menuitems");

function menuopen(){
    menuitems.style.right = "0";
}
function menuclose(){
    menuitems.style.right = "-200";
}

var LM = document.getElementById("learnMore");
var bt = document.getElementById("bt")
function Learn(){
    LM.classList.toggle("hide");
    if(LM.classList.contains("hide"))
    {
        bt.innerHTML = "Less";
    }
    else
    {
        bt.innerHTML = "Learn More";
    }
}

var LM2 = document.getElementById("learnMore2");
var bt2 = document.getElementById("bt2")
function Learn2(){
    LM2.classList.toggle("hide");
    if(LM2.classList.contains("hide"))
    {
        bt2.innerHTML = "Less";
    }
    else
    {
        bt2.innerHTML = "Learn More";
    }
}

var LM3 = document.getElementById("learnMore3");
var bt3 = document.getElementById("bt3")
function Learn3(){
    LM3.classList.toggle("hide");
    if(LM3.classList.contains("hide"))
    {
        bt3.innerHTML = "Less";
    }
    else
    {
        bt3.innerHTML = "Learn More";
    }
}

function back(){
    window.location.href = 'Home_portofolio.html'
}

function insta(){
    window.location.href = "https://www.instagram.com/thatwebdev.ke/"
}
function linkedin(){
    window.location.href = "https://www.linkedin.com/in/stephen-n-765706285/"
}