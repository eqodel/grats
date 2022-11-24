const loginRegBtn = document.querySelector('#login-reg')
const modalReg = document.querySelector('.modal__registration')
const regBtn = document.querySelector('.modal__button--reg')

loginRegBtn.addEventListener('click', () => {
    modal.style.display = ''
    modalReg.style.display = 'block'
})

regBtn.addEventListener('click', () => {
    modalReg.style.display = ''
})