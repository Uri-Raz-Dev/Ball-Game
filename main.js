'use strict'
function onBallClick(ball) {
 var ballHeight = ball.offsetHeight
 var ballWidth = ball.offsetWidth
 var ballSize = ballHeight + ballWidth
 const maxDiameter = 400
 if (ballSize <= maxDiameter) {

  ballHeight += getRandomInt(20, 60)
  ballWidth += getRandomInt(20, 60)

 } else if (ballSize > maxDiameter) {
  ballHeight = 50
  ballWidth = 50
  ballSize = 100
 }
 ballSize = ballHeight + ballWidth

 ball.style.height = ballHeight + 'px'
 ball.style.width = ballWidth + 'px'
 ball.innerText = ballSize
 ball.style.backgroundColor = getRandomColor()
}

function swapOnClick() {
 const ball1 = document.querySelector('.ball1')
 const ball2 = document.querySelector('.ball2')
 const tempColor = ball1.style.backgroundColor
 const tempHeight = ball1.style.height
 const tempWidth = ball1.style.width
 ball1.style.backgroundColor = ball2.style.backgroundColor
 ball2.style.backgroundColor = tempColor
 ball1.style.height = ball2.style.height
 ball1.style.width = ball2.style.width
 ball2.style.height = tempHeight
 ball2.style.width = tempWidth
 ball1.innerText = parseInt(ball1.style.height, 10) + parseInt(ball1.style.width, 10)
 ball2.innerText = parseInt(ball2.style.height, 10) + parseInt(ball2.style.width, 10)
}

function reduceOnClick() {
 const ball1 = document.querySelector('.ball1')
 const ball2 = document.querySelector('.ball2')

 var ball1Height = ball1.offsetHeight
 var ball2Height = ball2.offsetHeight
 var ball1Width = ball1.offsetWidth
 var ball2Width = ball2.offsetWidth

 var ball1size = ball1Height + ball1Width
 var ball2size = ball2Height + ball2Width


 if (ball1size >= 100 && ball2size >= 100) {
  ball1Height -= getRandomInt(20, 60)
  ball2Height -= getRandomInt(20, 60)
  ball1Width -= getRandomInt(20, 60)
  ball2Width -= getRandomInt(20, 60)

 } else if (ball1size < 100 || ball2size < 100) {
  ball1Height = 50
  ball1Width = 50
  ball2Height = 50
  ball2Width = 50
  ball1size = 100
  ball2size = 100
 }
 ball1.style.height = ball1Height + 'px'
 ball1.style.width = ball1Width + 'px'
 ball2.style.height = ball2Height + 'px'
 ball2.style.width = ball2Width + 'px'
 ball1size = ball1Height + ball1Width
 ball2size = ball2Height + ball2Width
 ball1.innerText = ball1size
 ball2.innerText = ball2size
}