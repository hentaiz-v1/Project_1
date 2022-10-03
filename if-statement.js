var score=75;
var msg;
if(score>=50){
  msg='Coinfratulations!';
  msg+='Proceedto the next round.';
}
var el=document.getElementById('answer');
el.textContent=msg;
