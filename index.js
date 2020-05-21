function leapYear(checkYear){
  if(checkYear % 100 === 0){
    return console.log(checkYear % 400 === 0)
  }
  else{
    return console.log(checkYear % 4 === 0)
  }
}
leapYear(100);
