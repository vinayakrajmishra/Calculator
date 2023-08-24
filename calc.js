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
        input = eval(input);
      } catch (error) {
        // Handle any errors in the expression
        input = 'Error';
      }
    } else {
      // Append the button value to the input
      input += buttonValue;
    }
    
    // Update the result area with the current input value
    resultArea.textContent = input;
    
  });
}
