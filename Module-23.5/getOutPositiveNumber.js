let numbers = [1, 56, 1, 90, 23, 67, 47, 90, 200, -9];
let getInNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
        getInNumbers.push(numbers[i]);
    }
    else {
        break;
    }
}

console.log(getInNumbers);