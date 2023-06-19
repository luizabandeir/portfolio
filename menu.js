let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')
const menuLinks = Array.from(document.getElementsByClassName('menu-links'))

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)
  show = !show
})

menuLinks.forEach((link) => {
  link.addEventListener('click', function (event) {
    event.preventDefault() // Impedir o comportamento padrão do link

    if (menuSection.classList.contains('on')) {
      menuSection.classList.remove('on')
      document.body.style.overflow = 'initial'

      const targetSectionId = this.getAttribute('href')

      const targetSection = document.querySelector(targetSectionId)
      const targetSectionPosition = targetSection.offsetTop

      window.scrollTo({
        top: targetSectionPosition,
        behavior: 'smooth'
      })
    }
  })
})
