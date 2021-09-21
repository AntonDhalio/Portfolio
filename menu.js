var btn1 = document.getElementById("navicon");
btn1.onclick = function slideUp(){
    document.getElementById("menu").style.width= "0rem";
    document.getElementById("menu-icon").style.display = "block";
}
var btn2 = document.getElementById("menu-icon");
btn2.onclick = function slideDown(){
    document.getElementById("menu").style.width= "16rem";
    document.getElementById("menu-icon").style.display = "none";
}



