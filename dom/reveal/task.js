const reveal = Array.from(document.querySelectorAll('.reveal'));
window.addEventListener('scroll', function() {
    for (let i = 0; i < reveal.length; i++) {
        let poz = reveal[i].getBoundingClientRect().top;
        if (poz > 0) {
            reveal[i].classList.add('reveal_active');
        }
    }
});