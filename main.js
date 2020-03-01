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