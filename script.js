console.log("Завдання 1");
let numbersArray = [1, 2, 3];
numbersArray[1] = 10;
console.log(numbersArray);

console.log("Завдання 2");
let array = ["one", "two", "three"];
array.push("four");
console.log(array);

console.log("Завдання 3");
console.log("-");

console.log("Завдання 4");
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i+= 1) {
  console.log(numbers[i]);
}

console.log("Завдання 5");
let arr = ["gfghik", "jhy", "afdsag", "dfsd", "asdwefe"];
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 5) {
    console.log(arr[i]);
  }
}

console.log("Завдання 6");
const numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNumber = numbersList[0];
for (let i = 1; i < numbersList.length; i++) {
  if (numbersList[i] > maxNumber) {
    maxNumber = numbersList[i];
}
}

console.log(maxNumber); 


console.log("Завдання 7");
let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < sum.length; i++) {
  if (sum[i] % 2 === 0) {
    console.log(sum[i]);
  }
}

