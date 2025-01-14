// Get references to the box and the target
const box = document.getElementById('box');
const target = document.getElementById('target');

// Add dragstart event to the box
box.addEventListener('dragstart', function(event) {
    // Store the id of the box being dragged
    event.dataTransfer.setData('text/plain', event.target.id);
});

// Add dragover event to the target to allow dropping
target.addEventListener('dragover', function(event) {
    event.preventDefault(); // Prevent default to allow drop
});

// Add drop event to the target
target.addEventListener('drop', function(event) {
    event.preventDefault(); // Prevent default behavior

    // Get the id of the dragged element
    const draggedElementId = event.dataTransfer.getData('text/plain');

    // Get the dragged element
    const draggedElement = document.getElementById(draggedElementId);

    // Move the box to the target by appending it
    target.appendChild(draggedElement);

    // Center the box inside the target
    draggedElement.style.position = 'absolute';
    draggedElement.style.left = (target.offsetWidth - draggedElement.offsetWidth) / 2 + 'px';
    draggedElement.style.top = (target.offsetHeight - draggedElement.offsetHeight) / 2 + 'px';
});


// // Explanation:
// HTML and CSS:

// The yellow box (#target) is the drop target.
// The red box (#box) is draggable and styled with cursor: grab.
// JavaScript:

// Drag and Drop Events:
// dragstart: Fires when the dragging starts. The dataTransfer object is used to store the ID of the element being dragged.
// dragover: Fires when the dragged element is over the target. The default behavior must be prevented to allow dropping.
// drop: Fires when the dragged element is dropped onto the target. The dropped element is appended to the target, and its position is adjusted to be centered.
// Centering the Box:
// // After appending the box to the target, its left and top styles are calculated to center it within the target.