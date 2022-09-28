var today =new Date();
var diem =25;
var greeting;
if (diem>18&diem<20){
  greeting='xin chuc mung';
}
else if (diem>24&diem<26){
  greeting ='ban lam tot lam';
}
else if (diem>26){
  greeting='ban lam rat tot';
}
else {
  greeting='Welcome!';
}
document.write('<h3>' + greeting + '</h3>');
