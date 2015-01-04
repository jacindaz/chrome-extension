// represents most recent # clicked
var selected_number;

// represents entire # (several digits possible)
var result = 'Calculate something!';

// represents entire expression to evaluate
var expression = [];


function displayResult(result) {
    $("#calculator-results").replaceWith('<p id="calculator-results">' + result + '</p>');
}

$("#clear-button").on('click', function() {
    result = "Calculate something!";
    expression = [];
    displayResult(result);
})


$(document).ready(function() {
    $("#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#decimal").on("click", function() {
        var selected_element = $(this);
        selected_number = selected_element.text();
        if (result === 'Calculate something!' || result == '') {
          result = selected_number;
          expression.push(result);
        } else if (result != '' || selected_number == '.') {
          result += selected_number;
          expression[expression.length - 1] = result;
        }
        console.log('Expression: ' + expression);
        console.log('Result: ' + result);

        var expression_string = array_to_string(expression);
        displayResult(expression_string);
    });
})

$("#plus,#minus,#divide,#multiply").on("click", function() {
    result = ''
    var selected_operator_element = $(this);
    var selected_operator = selected_operator_element.text();

    expression.push(selected_operator);
    selected_operator = '';
    var expression_string = array_to_string(expression);
    displayResult(expression_string);

    console.log('Expression: ' + expression);
    console.log('Result: ' + result);
});

$("#decimal").on('click', function() {
  console.log('Clicked on decimal');

});


$("#equal").on('click', function() {
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

function array_to_string(array) {
  var final_string = '';
  for (var i = 0; i < array.length; i++) {
    // console.log(array[i]);
    final_string += array[i];
    final_string += ' ';
  }
  return final_string;
}
