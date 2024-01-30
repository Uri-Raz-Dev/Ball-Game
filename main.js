'use strict'

function onBallClick(ball) {
 var ballHeight = ball.offsetHeight
 var ballWidth = ball.offsetWidth
 var ballSize = ballHeight + ballWidth
 if (ballSize <= 400) {

  ballHeight += getRandomInt(20, 60)
  ballWidth += getRandomInt(20, 60)

 } else if (ballSize > 400) {
  ballHeight = 100
  ballWidth = 100
  ballSize = 200
 }
 ballSize = ballHeight + ballWidth

 ball.style.height = ballHeight + 'px'
 ball.style.width = ballWidth + 'px'
 ball.innerText = ballSize
 ball.style.backgroundColor = getRandomColor()
}