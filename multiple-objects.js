function Hotel(name,rooms,booked){


  this.rooms=rooms;
  this.booked=booked;
  this.checkAvailability=function () {
    return this.rooms - this, booked;
  };
}
var quayHotel=new Hotel('Quay',40,25);
var parkHotel=new Hotel('Park',120,77);
var derails1=quayHotel.name+'rooms:';
derails1+=quayHotel.checkAvailability();
var elHotel1=document.getElementById('hotel1');
elHotel1.textContent=derails1;
var derails2=parkHotel.name+'rooms:';
derails2+=parkHotel.checkAvailability();
var elHotel2=document.getElementById('hotel2');
elHotel2.textContent=derails2;
