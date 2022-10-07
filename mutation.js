var elList,addLink,newEL,newText,couter,ListItems;
elList=document.getElementById('List');
addLink=document.querySelector('a');
couter=document.getElementById('counter');
function allItem(e){
  e.preventDefault();
  newEL=document.createElement('Li');
  newText=document.createTextNode('New list item');
  newEL.appendChild(newText);
  elList.appendChild(newEL);
}
function updateCount(){
  listItems=elList.getElementsByClassName('li').length;
  couter.innerHTML=listItems;
}
addLink.addEventListener('click',addItem,false);
elList.addEventListener('DOMNodeInserted'.updateCount,false);
