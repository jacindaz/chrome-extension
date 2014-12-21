var selected_number;
var result = 0;


// if a particular number is selected

// if a particular operator is selected

// do that operation with the selected number
// on the current result

// return the result
// by appending to #calculator-results id


function displayResult(result) {
    $("#calculator-results").replaceWith('<p id="calculator-results">' + result + '</p>');
}

function calculateSomething() {

}

$("#clear-button").click(function() {
    result = "Calculate something!";
    displayResult(result);
})

$("#7").click(function() {
    selected_number = "7";
    if (result === 0) {
      result = selected_number;
      console.log("Result: ", result);
    }
    displayResult(result);
});
