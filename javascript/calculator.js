var selected_number;
var result = 'Calculate something!';
var expression = [];


function displayResult(result) {
    $("#calculator-results").replaceWith('<p id="calculator-results">' + result + '</p>');
}

function calculateSomething() {

}

$("#clear-button").click(function() {
    result = "Calculate something!";
    expression = [];
    displayResult(result);
})



$(document).ready(function() {
    $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#0").bind("click", function() {
        var selected_element = $(this);
        selected_number = selected_element.text();
        if (result === 'Calculate something!') {
          result = selected_number;
        }
        expression.push(selected_number);
        displayResult(result);
    });
})

$("#plus,#minus,#divide,#multiply").bind("click", function() {
    var selected_operator_element = $(this);
    var selected_operator = selected_operator_element.text();
    expression.push(selected_operator);
});


$("#equal").click(function() {
    result = evaluate_expression(expression);
    displayResult(result);
});

function evaluate_expression(expression) {
  var result = 0;
  for (var i = 0; i < expression.length; i++) {

    switch(expression[i]) {
      case '+':
        result += parseFloat(expression[i+1])
        return result
      case '-':
        result -= parseFloat(expression[i+1])
        return result
      case '/':
        result /= parseFloat(expression[i+1])
        return result
      case 'x':

        result *= parseFloat(expression[i+1])
        return result
      default:
        result = parseFloat(expression[i])
    }
  }
}
