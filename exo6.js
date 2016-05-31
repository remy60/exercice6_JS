function bonjour(){
  var nombre1 = document.getElementById('premier_nombre').value;
  var nombre2 = document.getElementById('deuxieme_nombre').value;
  if(isNaN(nombre1)== true || isNaN(nombre2)== true) {
    alert("Error");
  }
  else{
  nombre1= parseInt(nombre1);
    nombre2= parseInt(nombre2);
    var result= nombre1 % nombre2;
    alert(result);
  }
};
