'use strict'

function onBallClick(ball) {
 let ballHeight = ball.offsetHeight
 let ballWidth = ball.offsetWidth
 ballHeight += 50;
 ballWidth += 50;

 ball.style.height = ballHeight + 'px'
 ball.style.width = ballWidth + 'px'
 ball.innerText = ballHeight + ballWidth
}
