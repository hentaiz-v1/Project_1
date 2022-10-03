var newItemlast=document.createElement('Li');
var newTextlast=document.createTextNode('cream');
newItemlast.appendChild(newTextlast);
list.appendChild(newItemlast);
var newItemFirst=document.createElement('Li');
var newTextFirst=document.createTextNode('Kale');
newItemlast.appendChild(newTextlast);
list.insertBefore(newTextFirst,list.firstChild);
var listItems=document.querySelectorAll('Li');
var i;
for(i=0;i<listItems.length;i++){
  listItems[i].className='cool';
}
var heading=document.querySelector('h2');
var headingText=heading.firstChild.nodeValue;
var totalLItems=listItems.length;
var newHeading=headingText+'<span>'+totalLItems+'</span>';
heading.innerHTML=newHeading;

