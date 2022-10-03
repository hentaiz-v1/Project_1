var score1=8;
var score=9;
var pass1=6;
var pass2=7;
var passboth=(score1>=pass1)||(score2>=pass2);
var msg='Both rounds passed:'+!passboth;
var el=document.getElementById('answer');
el.innerHTML=msg;
