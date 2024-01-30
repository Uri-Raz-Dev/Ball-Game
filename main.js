'use strict'

function onBallClick(ball) {
 var ballHeight = ball.offsetHeight
 var ballWidth = ball.offsetWidth
 var ballSize = ballHeight + ballWidth + 100

 if (ballSize <= 400) {

  ballHeight += 50
  ballWidth += 50
 } else if (ballSize > 400) {
  ballHeight = 100
  ballWidth = 100
  ballSize = 200
 }

 ball.style.height = ballHeight + 'px'
 ball.style.width = ballWidth + 'px'
 ball.innerText = ballSize
}
