var prnArray = [];
var nameArray = [];
var percentArray = [];

function addToList() {
  var prnInputField = document.getElementById("prn");
  var nameInputField = document.getElementById("name");
  var percentInputField = document.getElementById("percent");

  var prn = prnInputField.value;
  var name = nameInputField.value;
  var percent = percentInputField.value;

  prnArray.push(prn);
  nameArray.push(name);
  percentArray.push(percent);

  var contents =
    "<table class=''><tr><th>PRN</th><th>NAME</th><th>PERCENT</th></tr>";
  var i = 0;
  for (i = 0; i < nameArray.length; i++) {
    contents =
      contents +
      "<tr><td>" +
      prnArray[i] +
      "</td><td>" +
      nameArray[i] +
      "</td><td>" +
      percentArray[i] +
      "</td></tr>";
  }
  contents = contents + "</table>";

  var studentsList = document.getElementById("students");
  students.innerHTML = contents;
}
