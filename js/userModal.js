const userBtn = document.querySelector('#user')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector ('.modal__button')

userBtn.addEventListener('click', () => {
    modal.style.display = 'block'
})

modalBtn.addEventListener('click', () => {
    modal.style.display = ''
})

