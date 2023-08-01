// get the values from the Page
// start or controller function
function getValues() {
    // get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;


    // parse into integers, validates inputs
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // call generateNums
        let numbers = generateNums(startValue, endValue);
        // call displayNums
        displayNums(numbers);
    } else {
        alert("Integers (1, 2, 3, ...) Only");
    }
}

// generate numbers from startValue to endValue
// logic function(s)
function generateNums(startVal, endVal) {
    let numbers = [];

    // we want to get all numbers from start to end
    for (let index = startVal; index <= endVal; index++) {
        // this will execute in a loop until index = endVal
        numbers.push(index);
    }

    return numbers;
}

// display the numbers and mark the even numbers in bold
// display or view functions
function displayNums(numbers) {
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even";
        let number = numbers[index];

        if (number % 2 == 0) {
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}