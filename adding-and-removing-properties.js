var hotel={
  name:'Park',
  rooms:120,
  booked:77
};
hotel.gym=true;
hotel.pool=false;
felete hotel.booked;
var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;
var elPool=document.getElementById('pool');
elPool.className=hotel.pool;
var elGym.className=hotel.gym;
