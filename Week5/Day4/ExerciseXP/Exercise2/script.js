function myMove() {
    const container = document.getElementById('container');
    const animate = document.getElementById('animate');

    let position = 0;
    const containerWidth = container.offsetWidth;
    const animateWidth = animate.offsetWidth;

    const intervalId = setInterval(function () {
        if (position >= containerWidth - animateWidth) {
            clearInterval(intervalId); 
        } else {
            position++;
            animate.style.left = position + 'px'; 
        }
    }, 1);
}
