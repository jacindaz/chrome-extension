var selected_number;
var result = 'Calculate something!';
var expression = '';


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
        expression += selected_number;
        alert("Adds selected number to expression: " + expression);
        displayResult(result);
    });
})

$("#plus,#minus,#divide,#multiply").bind("click", function() {
    var selected_operator_element = $(this);
    var selected_operator = selected_operator_element.text();

    alert("Operator: " + selected_operator);

    expression += selected_operator;
    alert("Expression: " + expression);
});


$("#equal").click(function() {
    result = eval(expression);
    displayResult(result);
});
