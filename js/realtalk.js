function putChar(position, char)
{
	var currentText = $("#text").val();
	var newText = currentText.substr(0,position) + char + currentText.substr(position + 1);
	$("#text").val(newText);
}

/* Zero-Based Index */
function removeChar(position)
{
	var currentText = $("#text").val();
	var newText = currentText.substr(0,position) + currentText.substr(position + 1);
	$("#text").val(newText);

}
/* This was taken from a stackoverflow post @ http://stackoverflow.com/questions/2897155/get-cursor-position-in-characters-within-a-text-input-field */

function getCaretPosition (oField) {

  // Initialize
  var caretPos = 0;

  // IE Support
  if (document.selection) {

    // Set focus on the element
    oField.focus ();

    // To get cursor position, get empty selection range
    var oSel = document.selection.createRange ();

    // Move selection start to 0 position
    oSel.moveStart ('character', -oField.value.length);

    // The caret position is selection length
    caretPos = oSel.text.length;
  }

  // Firefox support
  else if (oField.selectionStart || oField.selectionStart == '0')
    caretPos = oField.selectionStart;

  // Return results
  return (caretPos);
}




function getCarotPosition()
{


}
