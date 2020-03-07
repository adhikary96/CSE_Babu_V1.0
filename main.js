/*function to open the sidepanel*/
function openNav(){
    if(document.getElementById("menu").style.width == "180px") {
        document.getElementById("menu").style.width = null;
    } else {
        document.getElementById("menu").style.width = "180px";
    }
}
/*function to close the sidepanel*/
function closeNav(){
    document.getElementById("menu").style.width = null;
}
function showNext() {
    console.log(document.getElementById("card1").classList);
    if(document.getElementById("card1").classList.contains("active")){
        document.getElementById("card1").classList.remove("active");
        document.getElementById("card2").classList.add("active");
    } else {
        document.getElementById("card1").classList.add("active");
        document.getElementById("card2").classList.remove("active");
    }
}
