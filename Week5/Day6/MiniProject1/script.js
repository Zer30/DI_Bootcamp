document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('colorPicker');
    const grid = document.getElementById('grid');
    let selectedColor = 'black';
    let isDrawing = false;

    for (let i = 0; i < 400; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell);
    }

    colorPicker.addEventListener('click', function (event) {
        if (event.target !== colorPicker) {
            selectedColor = event.target.style.backgroundColor;
        }
    });

    grid.addEventListener('mousedown', function () {
        isDrawing = true;
    });

    grid.addEventListener('mouseup', function () {
        isDrawing = false;
    });

    grid.addEventListener('mouseover', function (event) {
        if (isDrawing && event.target !== grid) {
            event.target.style.backgroundColor = selectedColor;
        }
    });

    grid.addEventListener('dragstart', function (event) {
        event.preventDefault();
    });
});
