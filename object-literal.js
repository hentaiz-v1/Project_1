var hotel={
  name:'Quay',
  rooms:40,
  booked:25,
  checkAvailability:function (){
    return-this.booked;
  }
};
var elName=document.getElementById('hotelName');
elName.textContent=hotel.name;
var elRooms=document.getElementById('roonms');
elRooms.textContent=hotel.checkAvailability();
