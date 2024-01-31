let originalString = 'Hello'
let rotationAmount = 2;
let rotatedString = originalString.slice(rotationAmount) + originalString.slice(0, rotationAmount);

console.log(rotatedString);