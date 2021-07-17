
var generateBtn = document.querySelector("#generate");

// Write password to the #password inputfunction generatePass(pLength){

  function generateBtn()
  {
  
  
  var uppercase = document.getElementById("uppercase").checked === true ? true : false;
  var lowercase = document.getElementById("lowercase").checked === true ? true : false;
  var numbers = document.getElementById("numbers").checked === true ? true : false;
  var symbols = document.getElementById("symbols").checked === true ? true : false;
  var len = document.getElementById("len").value;
  
  
  var str= [ ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."]];
  var str_user;
  uppercase===true ? str_user=str[0] :0;
  lowercase===true ? str_user+=str[1] :0;
  numbers===true ? str_user+=str[2] :0;
  symbols===true ? str_user+=str[3] :0;
  if(str_user){
    var v= Math.floor(Math.random() * str_user.length);
    var password = str_user[v];
  
    for (let i = 0 ; i<len ; i++ )
    { 
      v= Math.floor(Math.random() * str_user.length);
      console.log(v);
      password += str_user[v];
    }
    console.log(password);
    document.getElementById("password").value =password;
  }else{
   
    alert('Minmum check mark 1 option for generation password');
  
  }
  }

console.log( generateBtn() );
generateBtn.addEventListener("click", writePassword);
