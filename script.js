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

//1.Write a JavaScript program that displays the largest integer among two integers.
//www.w3resource.com/javascript-exercises

const largestInteger = (numero1, numero2) => {
  return numero1 > numero2
    ? `El ${numero1} es mayor que ${numero2}`
    : numero1 === numero2
    ? `El ${numero1} es igual que ${numero2}`
    : `El ${numero1} es menor que ${numero2}`;
};
console.log(largestInteger(20, 10));
console.log(largestInteger(10, 10));
console.log(largestInteger(10, 20));

//2. Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
//Sample numbers : 3, -7, 2
//Output : The sign is -
const findSignOfTheProduct = (numero1, numero2, numero3) => {
  const result = numero1 * numero2 * numero3;
  if (result > 0) {
    alert("The sign is +");
  } else if (result < 0) {
    alert("The sign is -");
  } else {
    alert("The sign is 0");
  }
};
findSignOfTheProduct(3, -7, 2);
//3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the results.
//Sample numbers : 0, -1, 4
//Output : 4, 0, -1
const sortNumbers = (numero1, numero2, numero3) => {
  const result = [];
  if (numero1 > numero2 && numero1 > numero3) {
    if (numero2 > numero3) {
      result.push(numero1, numero2, numero3);
    } else result.push(numero1, numero3, numero2);
  } else if (numero2 > numero1 && numero2 > numero3) {
    if (numero1 > numero3) {
      result.push(numero2, numero1, numero3);
    } else result.push(numero2, numero3, numero1);
  } else if (numero3 > numero1 && numero3 > numero2) {
    if (numero1 > numero2) {
      result.push(numero3, numero1, numero2);
    } else result.push(numero3, numero2, numero1);
  }
  return result;
};
alert(sortNumbers(0, -1, 4));

//Se puede hacer sin condicionales más fácil, con el método sort
const sortNumbers2 = (numero1, numero2, numero3) => {
  const numbers = [numero1, numero2, numero3];
  numbers.sort((a, b) => b - a); // Ordena de mayor a menor
  return numbers;
};

console.log(sortNumbers2(0, -1, 4).join(", "));
