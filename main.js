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