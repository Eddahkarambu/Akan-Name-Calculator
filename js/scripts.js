function validateInput(){
  var dateOfBirth = document.getElementById('dob').value;

  if (dateOfBirth<1 || dateOfBirth>31){
    alert(" please enter the correct date of birth!")
  }
  var month =document.getElementById('month').value;
  if (month <1 || month> 12){
    alert("please enter the correct month")
  }
  var year = document.getElementById('year').value;

  if(year>2021){
    alert("kindly enter the correct year")
  }
  var gender= document.querySelector('input[name = gender]:checked');
  if(!gender){
    alert("please select your gender")
  }
  gender= gender.value;
  determineAkanName(parseInt(dateOfBirth),parseInt(month),year,gender);
}

function determineAkanName(day,month,year,gender){
  var century = parseInt(year.slice(0,2));
  var centure = parseInt(year.slice(2,4));

  var dayOfTheWeek= (((century/4)-2*century-1)+((5*centure/4) )+((26*(month+1)/10))+day)%7;
  var akanDay=(parseInt(dayOfTheWeek));

}
