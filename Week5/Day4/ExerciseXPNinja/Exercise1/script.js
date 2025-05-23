document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to create a new box
    function createBox() {
        const box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = getRandomColor();
        body.appendChild(box);
    }

    setInterval(createBox, 500);
});
