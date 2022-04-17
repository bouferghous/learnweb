/*Assigner un objet dans une div :

myDiv = document.getElementById('myId').innerHTML = 'Hello Word!'; or 
var myDiv = document.getElementById('myId');
myDiv.innerHTML = 'Hello Word!';
*/

//**************************************************

// Creat Element and its content :
 
// var myDiv = document.createElement('div'),

// divText = document.createTextNode('I Creat DIV');

// myDiv.appendChild(divText);

// document.body.appendChild(myDiv);

//**************************************************

var creatP = document.createElement('p');
var textP = document.createTextNode('I Create Paragraph');
creatP.appendChild(textP);
document.body.appendChild(creatP);