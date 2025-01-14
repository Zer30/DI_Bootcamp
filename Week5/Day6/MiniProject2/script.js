document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelectorAll('.key');

    function playSound(event) {
        const key = event.type === 'keydown' ? event.keyCode : event.target.getAttribute('data-key');
        const audio = document.querySelector(`audio[data-key="${key}"]`);
        const keyDiv = document.querySelector(`.key[data-key="${key}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();

        if (keyDiv) {
            keyDiv.classList.add('playing');
        }
    }

    function removeTransition(event) {
        if (event.propertyName !== 'transform') return;
        this.classList.remove('playing');
    }

    window.addEventListener('keydown', playSound);
    keys.forEach(key => key.addEventListener('click', playSound));
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});
