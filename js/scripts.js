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
  console.log(year)
  if(year>2021){
    alert("kindly enter the correct year")
  }
}
