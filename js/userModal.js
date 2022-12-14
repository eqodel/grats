const userBtn = document.querySelector('#user')
const modal = document.querySelector('.modal')
const modalBtn = document.querySelector ('.modal__button')
const modalOverlay = document.querySelector('.modal-overlay')

userBtn.addEventListener('click', () => {
    modal.style.display = 'block'
    modalOverlay.classList.toggle = ('modal-overlay--visible')
})

modalBtn.addEventListener('click', () => {
    modal.style.display = ''
})



