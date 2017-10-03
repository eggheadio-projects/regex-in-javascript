'use strict';

const output = (str, regex, target) => {
  target.innerHTML =
    str.replace(regex, str => `<span>${str}</span>`);
}

var str = `Is this This?`;

//var regex = new RegExp("is", "g");
var regex = /is/gi;

output(str, regex, document.querySelector('pre'))

// console.log(regex.test(str)) || displayInPreview(regex.test(str));
// console.log(regex.exec(str)) || displayInPreview(regex.exec(str));
// console.log(regex.exec(str)) || displayInPreview(regex.exec(str));
// console.log(regex.exec(str)) || displayInPreview(regex.exec(str));
// console.log(regex.exec(str)) || displayInPreview(regex.exec(str));
// console.log(str.match(regex)) || displayInPreview(sr.match(regex));
// console.log(str.replace(regex, str => "XX")) || displayInPreview(regex, str => "XX");
// console.log(str.search(regex)) || displayInPreview(str.search(regex));



// display in plunker preview
function displayInPreview(string) {
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(string); 
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv)
}