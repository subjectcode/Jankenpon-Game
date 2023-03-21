const toggle = document.getElementById("toggleDark");
const back = document.querySelector(".container");
const font = document.querySelector("i");

toggle.addEventListener('click', function() {
    this.classList.toggle('bi-brightness-high-fill');
    if(this.classList.toggle('bi-moon-fill')) {
        back.style.background = '#fff';
        font.style.color = 'rgb(46,46,49)';
        font.style.transition = '1s';
        back.style.transition = '2s';
        
    } else {
        back.style.background = 'rgb(46,46,49)';
        font.style.color = 'white';
        font.style.transition = '1s';
        back.style.transition = '2s';
    }
});