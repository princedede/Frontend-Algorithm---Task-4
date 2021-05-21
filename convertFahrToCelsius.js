function convertFahrToCelsius(F){
   let cTemperature = [];
}
var F = window.prompt("Enter your number: "); 

  if(isNaN(F)){
  console.log(`${F} is not a valid number but a/an ${F}.`);
  }
  
  else {
  cTemperature = (F - 32) * 5/9;
  console.log(cTemperature.toFixed(4));
}
