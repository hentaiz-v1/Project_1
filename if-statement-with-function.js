var score=75;
var msg='';
function Congratulate(){
  msg+='Congratulations!';
}
if (score>=50){
  congratulate();
  msg+='Proceed to the next round';
}
var el=document.getElementById('answer');
el.innerHTML=msg;
