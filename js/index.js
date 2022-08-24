// When we turn on our lightbulb
let checkbox = document.querySelector('#toggle');
let body = document.querySelector('body');
let banner = document.querySelector('.banner');
let circle2 = document.querySelector('.switch-circle');
let circle1 = document.querySelector('.circle');
let header = document.querySelector('.header-show');
let main = document.querySelector('main');
let title = document.querySelector('.title');
let opener = document.querySelector('.opener');
let works = document.querySelector('.works');
checkbox.onclick = function() {
    body.classList.toggle('on');
    banner.classList.toggle('on');
    circle2.classList.toggle('on');
    circle1.classList.toggle('on');
    header.classList.toggle('on');
    main.classList.toggle('on');
    title.classList.toggle('on');
    opener.classList.toggle('on');
    works.classList.toggle('on');
}

// Smooth Scrolling for anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    }); 
});

// Navigation Collapse
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);