function notloadData() {

 document.getElementById("lv").style.display ="none";
 document.getElementById("vlist").removeAttribute("required");
}
function loadData() {
	

document.getElementById("lv").style.display ="inline";
document.getElementById("vlist").setAttribute("required", "required");
 
}

function  displayMessage() {
alert("Thank You :)");
}