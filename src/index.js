module.exports = function check(str, bracketsConfig) {
  let leftSc = 0;
  let rightSc = 0;
  let leftKv = 0;
  let rightKv = 0;
  let vertical = 0;
  for(let i = 0; i < str.length; i++) {
  	if(str[i] == '(') {
  		leftSc++;
  	} else if(str[i] == ')') {
  		rightSc++;
  	} else if(str[i] == '[') {
  		leftKv++;
  	} else if (str[i] == ']') {
  		rightKv++;
  	} else if (str[i] == '|') {
  		vertical++;
  	}
  }

  let verticalResult = vertical % 2;

  if((leftSc == rightSc) && (leftKv == rightKv) && verticalResult == 0) {
  	return true;
  } else {
  	return false;
  }
}
