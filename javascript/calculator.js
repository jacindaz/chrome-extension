var selected_number;
var result = 'Calculate something!';


function displayResult(result) {
    $("#calculator-results").replaceWith('<p id="calculator-results">' + result + '</p>');
}

function calculateSomething() {

}

$("#clear-button").click(function() {
    result = "Calculate something!";
    displayResult(result);
})



$(document).ready(function() {
    $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#0").bind("click", function() {
        var selected_element = $(this);
        selected_number = selected_element.text();
        if (result === 'Calculate something!') {
          result = selected_number;
        }
        displayResult(result);
    });
})
