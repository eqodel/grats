const linkMan = document.querySelector('.dropdown__wrapper--man');
const linkWoman = document.querySelector('.dropdown__wrapper--woman');
const dropDownMenuMan = document.querySelector('.dropdown--man')
const dropDownMenuWoman = document.querySelector('.dropdown--woman')

linkMan.addEventListener('mouseover', () => {
    dropDownMenuMan.style.display = 'flex'
})

linkMan.addEventListener('mouseleave', () => {
    dropDownMenuMan.style.display = ''
})

linkWoman.addEventListener('mouseover', () => {
    dropDownMenuWoman.style.display = 'flex'
})

linkWoman.addEventListener('mouseleave', () => {
    dropDownMenuWoman.style.display = ''
})


