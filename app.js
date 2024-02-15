const quoteSection = document.querySelector('.quote')

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset)
  // section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  if (window.pageYOffset < 240) {
    quoteSection.style.backgroundColor = 'rgb(132, 152, 171)';
  } else if (window.pageYOffset >= 240 && window.pageYOffset <= 320) {
    quoteSection.style.backgroundColor = 'rgb(154, 157, 149)';
  } else if (window.pageYOffset >= 320 && window.pageYOffset <= 400) {
    quoteSection.style.backgroundColor = 'rgb(192, 168, 111)';
  } else if (window.pageYOffset > 400) {
    quoteSection.style.backgroundColor = 'rgb(255, 186, 49)';
  }
})