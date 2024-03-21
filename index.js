// Get the button element
var buttons = document.getElementsById("buttons");

// Add a mouseover event listener
buttons.addEventListener('mouseover', () => {
  // Change the button's background color
  button.style.backgroundColor = '#2883b8';
});

// Add a mouseout event listener
buttons.addEventListener('mouseout', () => {
  // Change the button's background color back to its original color
  button.style.backgroundColor = '#77ACCA';
});