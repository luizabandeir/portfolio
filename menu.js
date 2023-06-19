let show = true

const menuSection = document.querySelector('.menu-section')
const menuToggle = menuSection.querySelector('.menu-toggle')
const link = menuSection.querySelector('a')

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial'

  menuSection.classList.toggle('on', show)
  show = !show
})



/*
$('.menu-toggle').on('click', function() {
$('menu-section').addClass('open');
});

$('menu-section a').on("click", function() {
  $('menu-section').removeClass('open');
});*/
