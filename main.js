const button = document.querySelector('.navbar__hamburger')
const nav = document.querySelector('.navbar__items')

button.addEventListener('click',()=>{
    nav.classList.toggle('active')
})