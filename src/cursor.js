// Select elements
var cursor = document.querySelector(".cursor"); // Adjust the selector based on your HTML
var circle = document.querySelector(".circle"); // Adjust the selector based on your HTML
var a_link = document.querySelectorAll(".a-link");

// Handle mouse over/out event on links
a_link.forEach(e => e.addEventListener('mouseenter', handleMouseEnter));
a_link.forEach(e => e.addEventListener('mouseleave', handleMouseLeave));

// Handle mouse move event
window.addEventListener('mousemove', handleMouseMove);

// Move the cursor in DOM/window
function handleMouseMove(event) {
  var cursor_top = event.pageY - (cursor.clientHeight / 2);
  var cursor_left = event.pageX - (cursor.clientWidth / 2);
  var circle_top = event.pageY - (circle.clientHeight / 2);
  var circle_left = event.pageX - (circle.clientWidth / 2);
  cursor.style.top = cursor_top + 2 + 'px';
  cursor.style.left = cursor_left + 2 + 'px';
  circle.style.top = circle_top + 'px';
  circle.style.left = circle_left + 'px';
}

// Mouse enter event on link
function handleMouseEnter() {
  cursor.classList.add('hovered');
  circle.classList.add('hovered');
}

// Mouse leave event on link
function handleMouseLeave() {
  cursor.classList.remove('hovered');
  circle.classList.remove('hovered');
}
