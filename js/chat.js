// Main JS chat area
function eventHandleStart(){
	console.log("Showstarter");
}

function eventHandleEnd(){
	console.log("Show ender");
}

$(document).ready(function(){
        var txtMsging = $("#txtMsging"), divBoard  = $("#divBoard"), formAction = $("#formAction");
        txtMsging.keypress(function(e){

            divBoard.html(txtMsging.val());
        });

	// Boards 
	divBoard.addEventListener("touchstart", eventHandleStart, false);
	divBoard.addEventListener("touchend", eventHandleEnd, false);


});