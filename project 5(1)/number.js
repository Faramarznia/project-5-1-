const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(number);

let sum = 0;
for (let t = 0; t < number.length; t = t + 1) {
  console.log((sum = number[t] + sum));
}
