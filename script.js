window.addEventListener('DOMContentLoaded', () => {
  VANTA.BIRDS({
    el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  wingSpan: 40.00,
  separation: 70.00,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundAlpha: 0.0,
  color1: 0xff00ff,
  color2: 0xff00d1,
  birdSize: 1.00,
  quantity: 4.00
   })
   setTimeout(() => {
   const main = document.querySelector('main')
   main.style.opacity = 1
   main.style.filter = 'blur(0px)'
       }, 1000)

})