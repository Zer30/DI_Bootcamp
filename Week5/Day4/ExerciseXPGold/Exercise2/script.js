document.addEventListener('DOMContentLoaded', function () {
    const paragraph = document.getElementById('draggable');

    let draggedElement = null;
    let offsetX = 0;
    let offsetY = 0;

    // When dragging starts
    paragraph.addEventListener('dragstart', function (event) {
        draggedElement = event.target;
        offsetX = event.offsetX; // Get offset inside the element
        offsetY = event.offsetY;
        draggedElement.style.opacity = '0.5'; // Change opacity
    });

    // When dragging ends
    paragraph.addEventListener('dragend', function (event) {
        draggedElement.style.opacity = '1'; // Restore opacity
        draggedElement = null;
    });

    // Allow dropping on the body
    document.body.addEventListener('dragover', function (event) {
        event.preventDefault(); // Prevent default behavior
    });

    // Handle the drop event
    document.body.addEventListener('drop', function (event) {
        event.preventDefault();
        if (draggedElement) {
            // Update position
            const x = event.pageX - offsetX;
            const y = event.pageY - offsetY;
            draggedElement.style.left = x + 'px';
            draggedElement.style.top = y + 'px';

            // Change font size based on coordinates
            const fontSize = Math.max(12, Math.min(50, x / 10 + y / 10)); // Limit font size
            draggedElement.style.fontSize = fontSize + 'px';
        }
    });
});
