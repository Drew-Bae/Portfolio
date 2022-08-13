let checkbox = document.querySelector('#toggle');
let body = document.querySelector('body');
let banner = document.querySelector('.banner');
let circle2 = document.querySelector('.switch-circle');
let circle1 = document.querySelector('.circle');
checkbox.onclick = function() {
    body.classList.toggle('on');
    banner.classList.toggle('on');
    circle2.classList.toggle('on');
    circle1.classList.toggle('on');
}