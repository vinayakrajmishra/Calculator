// Get the result area element
var resultArea = document.getElementById('resultarea');

// Get all calculator buttons
var buttons = document.getElementsByClassName('ele');

// Initialize the calculator input
var input = '';

// Add click event listener to each button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    var buttonValue = this.innerHTML;

    // Handle button clicks
    if (buttonValue === 'C') {
      // Clear the input
      input = '';
    } else if (buttonValue === '⇐') {
      // Remove the last character from the input
      input = input.slice(0, -1);
    } else if (buttonValue === '=') {
      // Evaluate the input expression
      try {
        input = evaluateExpression(input);
      } catch (error) {
        // Handle any errors in the expression
        input = 'Error';
      }
    } else {
      // Append the button value to the input
      input = handleSpecialCases(input, buttonValue);
    }

    // Update the result area with the current input value
    resultArea.textContent = input;

  });
}

function handleSpecialCases(currentInput, buttonValue) {
  // Handle special cases
  if (/[\+\*\/-]$/.test(currentInput) && /[\+\*\/-]/.test(buttonValue)) {
    // Replace the last operator with the new one
    return currentInput.slice(0, -1) + buttonValue;
  } else if (currentInput.endsWith('//') || currentInput.endsWith('**')) {
    // Replace '//' with '/' and '**' with '*'
    return currentInput.slice(0, -1) + buttonValue;
  }

  return currentInput + buttonValue;
}

function evaluateExpression(expression) {
  // Replace '//' with '/' and '**' with '*'
  expression = expression.replace('//', '/');
  expression = expression.replace('**', '*');

  return eval(expression);
}
