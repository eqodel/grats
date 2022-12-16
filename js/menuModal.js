const menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const menu = document.querySelector('.mobile-menu')
    const body = document.querySelector('body')
    body.classList.toggle('body--active')
    menu.classList.toggle('menu--active')
    
})