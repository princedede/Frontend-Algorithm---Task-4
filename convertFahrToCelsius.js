function convertFahrToCelsius(F){
   let cTemp = [];
}
var F = window.prompt("Enter your number: "); 

  if(isNaN(F)){
  console.log(`${F} is not a valid number but a/an ${F}.`);
  }
  
  else {
  cTemp = (F - 32) * 5/9;
  //console.log(cTemp);
  console.log(cTemp.toFixed(4));
}
