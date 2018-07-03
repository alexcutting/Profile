 function binaryConvert() {
  var num = x;
  var num = parseInt(x);
   
  if (num != Math.floor(num)) {
    console.log("Please enter an number");
    
  } else if (num < 0) {
    console.log(Error);
    console.log("Please enter a positive number");
  
  } else if (num > 255) {
    console.log(Error);
    console.log("Please enter a number less than 256")
    
  } else {
    var binary = parseInt(num, 10);
    console.log(binary.toString(2));
    
  }
}
  binaryConvert(x = '');