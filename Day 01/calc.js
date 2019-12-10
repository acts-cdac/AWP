function cleardisplay() {
  var calcInputField = document.getElementById("cdisplay");
  calcInputField.value = "";
}

function deletedisplay() {
  var calcInputField = document.getElementById("cdisplay");
  var name = calcInputField.value;
  name = name.substring(0, name.length - 1);
  calcInputField.value = name;
}

function add() {
  var calcInputField = document.getElementById("cdisplay");
  var name = calcInputField.value;
  name = name + "+";
  calcInputField.value = name;
}
function subtract() {
  var calcInputField = document.getElementById("cdisplay");
  var name = calcInputField.value;
  name = name + "-";
  calcInputField.value = name;
}
function multiply() {
  var calcInputField = document.getElementById("cdisplay");
  var name = calcInputField.value;
  name = name + "*";
  calcInputField.value = name;
}
function divide() {
  var calcInputField = document.getElementById("cdisplay");
  var name = calcInputField.value;
  name = name + "/";
  calcInputField.value = name;
}

function calculate() {
  var calcInputField = document.getElementById("cdisplay");
  var name = calcInputField.value;
  var result = eval(name);
  console.log(name);
  calcInputField.value = result;
}

function displaynumber(elem_id) {
  var calcInputField = document.getElementById("cdisplay");
  var name = calcInputField.value;
  name = name + elem_id;
  calcInputField.value = name;
}
