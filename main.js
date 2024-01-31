'use strict'

function onBallClick(ball) {
 var ballHeight = ball.offsetHeight
 var ballWidth = ball.offsetWidth
 var ballSize = ballHeight + ballWidth
 const maxDiameter = 400
 const minDiameter = 100
 if (ballSize <= maxDiameter || ballSize >= minDiameter) {

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
}