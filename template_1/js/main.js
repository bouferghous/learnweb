var myDiv = document.getElementById('show');
myDiv.innerHTML = document.title;

var myImg = document.getElementById('photos');
var i = 0;
for (i; i < document.images.length; i++) {
   document.write("<br><br>" + document.images[i].src);
}