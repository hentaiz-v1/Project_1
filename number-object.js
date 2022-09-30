var originalMumber=10.23456;
var msg='<h2>original number</h2><p>'+originalNumber+'</p>';
msgmsg +='<ch2>3 decimal places</h2><p>'+ originalNumber.toFixed(3)+'</p>';
msg+='<ch2>3 digits</ch2><p>' + originalMumber.toPrecision(3)+'</p>';
var el=document.getElementById('info');
el.innerHTML=msg;
