function telephoneCheck(str) {
  let numDashes = /^[0-9]()-*$/gm;
  let numOnly =  /\D/g;
  let dashesSpaces = /[\s -]+/g
  let spec = /[!@#$%^&*(),.?":{}|<>]/g;
  let letters = /[a-z]/ig;
  let parenthesis = /[()]/g;
  let newStr = str.split('');
  // console.log(newStr);
  let holdStr;
  let strArr;
  let strTrim;
  let theAnswer;
  let lengthArr = [10, 12, 14, 15, 16];
  /*This is to filter for unwanted characters
  This would be letters and anything thats not parenthesis/dashes/and spaces*/
  for(let i = 0; i < str.length; i++){
    if(newStr[i].match(letters)){
      return false;
    }
  }
  let option1 = /^\d{3}-\d{3}-\d{4}$/gm;
  let option2 = /^[(]\d{3}[)]\d{3}-\d{4}$/gm;
  let option3 = /^[(]\d{3}[)] \d{3}-\d{4}$/gm;
  let option4 = /^\d{3} \d{3} \d{4}$/gm;
  let option5 = /^\d{10}$/gm;
  let option6 = /^1 \d{3} \d{3} \d{4}$/gm;
  let option7 = /^1 \d{3}-\d{3}-\d{4}$/gm;
  let option8 = /^1 [(]\d{3}[)] \d{3}-\d{4}$/gm;
  let option9 = /^1[(]\d{3}[)]\d{3}-\d{4}$/gm;
  // console.log(option2.test(str))

  if((option1.test(str) == true) || (option2.test(str) == true) || (option3.test(str) == true) || (option4.test(str) == true) || (option5.test(str) == true) || (option6.test(str) == true) || (option7.test(str) == true) || (option8.test(str) == true) || (option9.test(str) == true)){
    return true;
  }else{
    return false;
  }
}
telephoneCheck("(555)555-5555");
