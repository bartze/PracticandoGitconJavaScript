function checkEqual(a, b) {
  return a == b ? `${a} is equal to ${b}` : `${a} is not equal to ${b}`;
}
console.log(checkEqual(1, 2));
console.log(checkEqual(3, 3));

function checkSign(num) {
  return num === 0 ? "zero" : num > 0 ? "positive" : "negative";
}
checkSign(10);
console.log(checkSign(10));
console.log(checkSign(0));
console.log(checkSign(-2));
