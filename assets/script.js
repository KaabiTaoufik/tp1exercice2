"use strict";
var text = document.getElementById("h1");
document.getElementById("number").value = 20;
text.style.fontSize = "20px";
console.log(text);
function getcolor() {
  var col = document.getElementById("color").value;
  text.style.color = col;
}
function getpolice() {
  var obj = document.getElementById("Police");
  text.style.fontFamily = obj.options[obj.selectedIndex].text;
}
function getinput() {
  var t = document.getElementById("text").value;
  console.log(t);
}
function getnumber() {
  var a = document.getElementById("number").value;
  console.log(a);
  text.style.fontSize = a + "px";
}
