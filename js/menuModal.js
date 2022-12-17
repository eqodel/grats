const menuBtn = document.querySelector('.menu')
const menu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')



menu.addEventListener("touchstart", touchStart, false);
menu.addEventListener("touchmove", touchMove, false);

let x1 = null;

function touchStart (event) {
    const touch = event.touches[0]
    x1 = touch.clientX
}

function touchMove (event) {
    let x2 = event.touches[0].clientX;

    let xDiff = x2 - x1;
    
    if (Math.abs(xDiff > 0)) menu.style.transform = 'translateX(0%)', menu.style.opacity = '1'
    else menu.style.transform = 'translateX(-95%)', menu.style.opacity = '0'
}