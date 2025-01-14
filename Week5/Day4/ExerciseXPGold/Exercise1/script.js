document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Create 26 boxes for letters A to Z
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i); // Convert ASCII code to letter
        const box = document.createElement('div');
        box.className = 'letter-box';
        box.textContent = letter;
        box.draggable = true; // Make the box draggable

        // Randomly position the boxes on the screen
        box.style.left = Math.random() * (window.innerWidth - 50) + 'px';
        box.style.top = Math.random() * (window.innerHeight - 50) + 'px';

        // Append the box to the body
        body.appendChild(box);
    }

    // Dragging functionality
    let draggedElement = null;

    // When dragging starts
    document.addEventListener('dragstart', function (event) {
        draggedElement = event.target; // Store the element being dragged
        draggedElement.style.opacity = '0.5'; // Change appearance while dragging
    });

    // When dragging ends
    document.addEventListener('dragend', function (event) {
        draggedElement.style.opacity = '1'; // Restore appearance
        draggedElement = null;
    });

    // When the dragged element is over a valid drop target
    document.addEventListener('dragover', function (event) {
        event.preventDefault(); // Allow drop by preventing default behavior
    });

    // When the dragged element is dropped
    document.addEventListener('drop', function (event) {
        event.preventDefault(); // Prevent default behavior
        if (draggedElement) {
            // Update the position of the dragged element to the drop coordinates
            draggedElement.style.left = event.pageX - 25 + 'px'; // Center the box
            draggedElement.style.top = event.pageY - 25 + 'px'; // Center the box
        }
    });
});
