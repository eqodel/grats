const menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const menu = document.querySelector('.mobile-menu')
    menu.classList.toggle('menu--active')
})