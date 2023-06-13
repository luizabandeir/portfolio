let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')
const menuNav = document.querySelector('.menu-section a')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)
  show = !show
})

menuNav.addEventListener('click', () => {
  
})

$('.menu-section a').on('click', function () {


  menuSection.classList.toggle('on', show)
  show = !show
})
