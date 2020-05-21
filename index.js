function leapYear(checkYear){
  if(checkYear % 4 === 0 || checkYear % 100 === 0 || checkYear % 400 ===0){
    return console.log(checkYear + ' is leap year')
  }
  else{
    return console.log(checkYear + ' not is leap year')
  }
}
leapYear(2024);
